<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Abdulrehman\Tags\Listener;

use Abdulrehman\Tags\Event\DiscussionWasTagged;
use Abdulrehman\Tags\Post\DiscussionTaggedPost;
use Illuminate\Support\Arr;

class CreatePostWhenTagsAreChanged
{
    public function handle(DiscussionWasTagged $event): void
    {
        $post = DiscussionTaggedPost::reply(
            $event->discussion->id,
            $event->actor->id,
            Arr::pluck($event->oldTags, 'id'),
            $event->discussion->tags()->pluck('id')->all()
        );

        $event->discussion->mergePost($post);
    }
}
