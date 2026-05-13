<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags;

/**
 * Compatibility alias for core extensions (e.g. flarum/mentions) that still
 * type-hint the original flarum/tags repository class.
 */
class TagRepository extends \Abdulrehman\Tags\TagRepository
{
}
