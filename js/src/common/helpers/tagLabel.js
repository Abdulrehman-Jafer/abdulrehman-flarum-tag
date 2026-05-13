import extract from 'flarum/common/utils/extract';
import Link from 'flarum/common/components/Link';
import classList from 'flarum/common/utils/classList';
import textContrastClass from 'flarum/common/helpers/textContrastClass';
import tagIcon from './tagIcon';

/** Visible tag title for the current forum locale (falls back to canonical `name`). */
export function tagDisplayText(tag) {
  if (!tag) {
    return '';
  }

  return (tag.displayName && tag.displayName()) || tag.name();
}

export default function tagLabel(tag, attrs = {}) {
  attrs.style = attrs.style || {};
  attrs.className = 'TagLabel ' + (attrs.className || '');

  const link = extract(attrs, 'link');
  const tagText = tag ? tagDisplayText(tag) : app.translator.trans('flarum-tags.lib.deleted_tag_text');

  if (tag) {
    const color = tag.color();
    if (color) {
      attrs.style['--tag-bg'] = color;
      attrs.className = classList(attrs.className, 'colored', textContrastClass(color));
    }

    if (link) {
      attrs.title = tag.description() || '';
      attrs.href = app.route('tag', { tags: tag.slug() });
    }

    if (tag.isChild()) {
      attrs.className += ' TagLabel--child';
    }
  } else {
    attrs.className += ' untagged';
  }

  return m(
    link ? Link : 'span',
    attrs,
    <span className="TagLabel-text">
      {tag && tag.icon() && tagIcon(tag, { className: 'TagLabel-icon' }, { useColor: false })}
      <span className="TagLabel-name">{tagText}</span>
    </span>
  );
}
