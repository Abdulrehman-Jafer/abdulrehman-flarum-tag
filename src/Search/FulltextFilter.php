<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Abdulrehman\Tags\Search;

use Flarum\Search\AbstractFulltextFilter;
use Flarum\Search\Database\DatabaseSearchState;
use Flarum\Search\SearchState;
use Abdulrehman\Tags\TagRepository;
use Illuminate\Database\Eloquent\Builder;

/**
 * @extends AbstractFulltextFilter<DatabaseSearchState>
 */
class FulltextFilter extends AbstractFulltextFilter
{
    public function __construct(
        protected TagRepository $tags
    ) {
    }

    private function getTagSearchSubQuery(string $searchValue): Builder
    {
        return $this->tags
            ->query()
            ->select('id')
            ->where(function ($q) use ($searchValue) {
                $like = $searchValue.'%';
                $jsonLike = '%'.$searchValue.'%';
                $q->where('name', 'like', $like)
                    ->orWhere('slug', 'like', $like)
                    ->orWhere('name_translations', 'like', $jsonLike);
            });
    }

    public function search(SearchState $state, string $value): void
    {
        $state->getQuery()
            ->whereIn(
                'id',
                $this->getTagSearchSubQuery($value)
            );
    }
}
