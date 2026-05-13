<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Abdulrehman\Tags\Tests\integration\api\tags;

use Flarum\Tags\Tag;
use Flarum\Testing\integration\RetrievesAuthorizedUsers;
use Flarum\Testing\integration\TestCase;
use Flarum\User\User;
use Illuminate\Support\Arr;
use PHPUnit\Framework\Attributes\Test;

class CreateTest extends TestCase
{
    use RetrievesAuthorizedUsers;

    /**
     * @inheritDoc
     */
    protected function setUp(): void
    {
        parent::setUp();

        $this->extension('abdulrehman-tags');

        $this->prepareDatabase([
            User::class => [
                $this->normalUser(),
            ],
        ]);
    }

    #[Test]
    public function normal_user_cant_create_tag()
    {
        $response = $this->send(
            $this->request(
                'POST',
                '/api/tags',
                ['authenticatedAs' => 2]
            )
        );

        $this->assertEquals(403, $response->getStatusCode());
    }

    #[Test]
    public function admin_cannot_create_tag_without_data()
    {
        $response = $this->send(
            $this->request('POST', '/api/tags', [
                'authenticatedAs' => 1,
                'json' => [
                    'data' => []
                ],
            ])
        );

        $this->assertEquals(422, $response->getStatusCode(), (string) $response->getBody());
    }

    #[Test]
    public function admin_can_create_tag()
    {
        $response = $this->send(
            $this->request('POST', '/api/tags', [
                'authenticatedAs' => 1,
                'json' => [
                    'data' => [
                        'type' => 'tags',
                        'attributes' => [
                            'name' => 'Dev Blog',
                            'slug' => 'dev-blog',
                            'description' => 'Follow Flarum development!',
                            'color' => '#123456'
                        ],
                    ],
                ],
            ])
        );

        $this->assertEquals(201, $response->getStatusCode(), $body = (string) $response->getBody());

        // Verify API response body
        $data = json_decode($body, true);
        $this->assertEquals('Dev Blog', Arr::get($data, 'data.attributes.name'));
        $this->assertEquals('dev-blog', Arr::get($data, 'data.attributes.slug'));
        $this->assertEquals('Follow Flarum development!', Arr::get($data, 'data.attributes.description'));
        $this->assertEquals('#123456', Arr::get($data, 'data.attributes.color'));
        $this->assertNull(Arr::get($data, 'data.attributes.icon'));

        // Verify database entry
        $tag = Tag::all()->last();
        $this->assertEquals('Dev Blog', $tag->name);
        $this->assertEquals('dev-blog', $tag->slug);
        $this->assertEquals('Follow Flarum development!', $tag->description);
        $this->assertEquals('#123456', $tag->color);
        $this->assertNull($tag->icon);
    }

    #[Test]
    public function admin_can_set_and_read_tag_name_translations()
    {
        $response = $this->send(
            $this->request('POST', '/api/tags', [
                'authenticatedAs' => 1,
                'json' => [
                    'data' => [
                        'type' => 'tags',
                        'attributes' => [
                            'name' => 'Gaming',
                            'slug' => 'gaming',
                            'nameTranslations' => [
                                'zh-Hans' => '游戏',
                            ],
                        ],
                    ],
                ],
            ])
        );

        $this->assertEquals(201, $response->getStatusCode(), (string) $response->getBody());

        $data = json_decode((string) $response->getBody(), true);
        $this->assertEquals('Gaming', Arr::get($data, 'data.attributes.name'));
        $this->assertArrayHasKey('displayName', Arr::get($data, 'data.attributes', []));
        $this->assertEquals(['zh-Hans' => '游戏'], Arr::get($data, 'data.attributes.nameTranslations'));

        $tag = Tag::query()->where('slug', 'gaming')->first();
        $this->assertNotNull($tag);
        $this->assertEquals(['zh-Hans' => '游戏'], $tag->name_translations);
        $this->assertEquals('游戏', $tag->getLocalizedDisplayName('zh-Hans', ['en']));
        $this->assertEquals('Gaming', $tag->getLocalizedDisplayName('en', []));
    }
}
