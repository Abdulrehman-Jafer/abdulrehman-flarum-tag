<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags;

/**
 * Compatibility subclass so first-party extensions (mentions, approval, sticky,
 * messages) that reference {@see \Flarum\Tags\Tag} receive the correct model type
 * from relationships and policies.
 */
class Tag extends \Abdulrehman\Tags\Tag
{
}
