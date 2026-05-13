"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["forum/components/TagDiscussionModal"],{

/***/ "./src/common/components/TagSelectionModal.tsx"
/*!*****************************************************!*\
  !*** ./src/common/components/TagSelectionModal.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagSelectionModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/highlight */ "flarum/common/helpers/highlight");
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/KeyboardNavigatable */ "flarum/common/utils/KeyboardNavigatable");
/* harmony import */ var flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/FormModal */ "flarum/common/components/FormModal");
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_sortTags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/sortTags */ "./src/common/utils/sortTags.tsx");
/* harmony import */ var _helpers_tagLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _helpers_tagIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _forum_components_ToggleButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../forum/components/ToggleButton */ "./src/forum/components/ToggleButton.js");














class TagSelectionModal extends (flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_8___default()) {
  constructor() {
    super(...arguments);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", true);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tags", void 0);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selected", []);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bypassReqs", false);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filter", flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_9___default()(''));
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "focused", false);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navigator", new (flarum_common_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_6___default())());
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "indexTag", void 0);
  }
  static initAttrs(attrs) {
    var _attrs$allowResetting, _attrs$limits$min$tot, _attrs$limits, _attrs$limits$min$pri, _attrs$limits2, _attrs$limits$min$sec, _attrs$limits3, _attrs$limits$max$tot, _attrs$limits4, _attrs$limits$max$pri, _attrs$limits5, _attrs$limits$max$sec, _attrs$limits6;
    super.initAttrs(attrs);

    // Default values for optional attributes.
    attrs.title || (attrs.title = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.lib.tag_selection_modal.title')));
    attrs.canSelect || (attrs.canSelect = () => true);
    (_attrs$allowResetting = attrs.allowResetting) != null ? _attrs$allowResetting : attrs.allowResetting = true;
    attrs.limits = {
      min: {
        total: (_attrs$limits$min$tot = (_attrs$limits = attrs.limits) == null || (_attrs$limits = _attrs$limits.min) == null ? void 0 : _attrs$limits.total) != null ? _attrs$limits$min$tot : -Infinity,
        primary: (_attrs$limits$min$pri = (_attrs$limits2 = attrs.limits) == null || (_attrs$limits2 = _attrs$limits2.min) == null ? void 0 : _attrs$limits2.primary) != null ? _attrs$limits$min$pri : -Infinity,
        secondary: (_attrs$limits$min$sec = (_attrs$limits3 = attrs.limits) == null || (_attrs$limits3 = _attrs$limits3.min) == null ? void 0 : _attrs$limits3.secondary) != null ? _attrs$limits$min$sec : -Infinity
      },
      max: {
        total: (_attrs$limits$max$tot = (_attrs$limits4 = attrs.limits) == null || (_attrs$limits4 = _attrs$limits4.max) == null ? void 0 : _attrs$limits4.total) != null ? _attrs$limits$max$tot : Infinity,
        primary: (_attrs$limits$max$pri = (_attrs$limits5 = attrs.limits) == null || (_attrs$limits5 = _attrs$limits5.max) == null ? void 0 : _attrs$limits5.primary) != null ? _attrs$limits$max$pri : Infinity,
        secondary: (_attrs$limits$max$sec = (_attrs$limits6 = attrs.limits) == null || (_attrs$limits6 = _attrs$limits6.max) == null ? void 0 : _attrs$limits6.secondary) != null ? _attrs$limits$max$sec : Infinity
      }
    };

    // Prevent illogical limits from being provided.
    catchInvalidLimits(attrs.limits);
  }
  oninit(vnode) {
    super.oninit(vnode);
    this.navigator.onUp(() => this.setIndex(this.getCurrentNumericIndex() - 1, true)).onDown(() => this.setIndex(this.getCurrentNumericIndex() + 1, true)).onSelect(this.select.bind(this)).onRemove(() => this.selected.splice(this.selected.length - 1, 1));
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().tagList.load(['parent']).then(tags => {
      this.loading = false;
      if (this.attrs.selectableTags) {
        tags = this.attrs.selectableTags(tags);
      }
      this.tags = (0,_utils_sortTags__WEBPACK_IMPORTED_MODULE_10__["default"])(tags);
      if (this.attrs.selectedTags) {
        this.attrs.selectedTags.map(this.addTag.bind(this));
      }
      this.indexTag = tags[0];
      m.redraw();
    });
  }
  className() {
    return flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()('TagSelectionModal Modal--simple', this.attrs.className);
  }
  title() {
    return this.attrs.title;
  }
  lengthWithCJK(text) {
    let length = 0;
    for (const char of text) {
      length += /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/.test(char) ? 2 : 1;
    }
    return length;
  }
  content() {
    if (this.loading || !this.tags) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default()), null);
    }
    const filter = this.filter().toLowerCase();
    const primaryCount = this.primaryCount();
    const secondaryCount = this.secondaryCount();
    const tags = this.getFilteredTags();

    // 1 CJK character's width equals to 2ch,
    // so we count 1 CJK character as 2 characters.
    const inputWidth = Math.max(this.lengthWithCJK(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(this.getInstruction(primaryCount, secondaryCount))), this.lengthWithCJK(this.filter()));
    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "TagSelectionModal-form"
    }, m("div", {
      className: "TagSelectionModal-form-input"
    }, m("div", {
      className: 'TagsInput FormControl ' + (this.focused ? 'focus' : ''),
      onclick: () => this.$('.TagsInput input').focus()
    }, m("span", {
      className: "TagsInput-selected"
    }, this.selected.map(tag => m("span", {
      className: "TagsInput-tag",
      onclick: () => {
        this.removeTag(tag);
        this.onready();
      }
    }, (0,_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_11__["default"])(tag)))), m("input", {
      className: "FormControl",
      placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(this.getInstruction(primaryCount, secondaryCount)),
      bidi: this.filter,
      style: {
        width: inputWidth + 'ch'
      },
      onkeydown: this.navigator.navigate.bind(this.navigator),
      onfocus: () => this.focused = true,
      onblur: () => this.focused = false
    }))), m("div", {
      className: "TagSelectionModal-form-submit App-primaryControl"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "submit",
      className: "Button Button--primary",
      disabled: !this.meetsRequirements(primaryCount, secondaryCount),
      icon: "fas fa-check"
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.lib.tag_selection_modal.submit_button'))))), m("div", {
      className: "Modal-footer"
    }, m("ul", {
      className: "TagSelectionModal-list SelectTagList"
    }, tags.map(tag => m("li", {
      "data-index": tag.id(),
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()('SelectTagListItem', {
        pinned: tag.position() !== null,
        child: !!tag.parent(),
        colored: !!tag.color(),
        selected: this.selected.includes(tag),
        active: this.indexTag === tag
      }),
      style: {
        color: tag.color()
      },
      onmouseover: () => this.indexTag = tag,
      onclick: this.toggleTag.bind(this, tag)
    }, m("i", {
      className: "SelectTagListItem-icon"
    }, (0,_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_12__["default"])(tag, {
      className: 'SelectTagListItem-tagIcon'
    }), m("i", {
      className: "icon TagIcon fas fa-check SelectTagListItem-checkIcon"
    })), m("span", {
      className: "SelectTagListItem-name"
    }, flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_5___default()(tag.name(), filter)), tag.description() ? m("span", {
      className: "SelectTagListItem-description"
    }, tag.description()) : ''))), this.attrs.limits.allowBypassing && m("div", {
      className: "TagSelectionModal-controls"
    }, m(_forum_components_ToggleButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: "Button",
      onclick: () => this.bypassReqs = !this.bypassReqs,
      isToggled: this.bypassReqs
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.lib.tag_selection_modal.bypass_requirements'))))];
  }

  /**
   * Filters the available tags on every state change.
   */
  getFilteredTags() {
    const filter = this.filter().toLowerCase();
    const primaryCount = this.primaryCount();
    const secondaryCount = this.secondaryCount();
    let tags = this.tags;
    if (this.attrs.requireParentTag) {
      // Filter out all child tags whose parents have not been selected. This
      // makes it impossible to select a child if its parent hasn't been selected.
      tags = tags.filter(tag => {
        const parent = tag.parent();
        return parent !== null && (parent === false || this.selected.includes(parent));
      });
    }
    if (!this.bypassReqs) {
      // If we reached the total maximum number of tags, we can't select anymore.
      if (this.selected.length >= this.attrs.limits.max.total) {
        tags = tags.filter(tag => this.selected.includes(tag));
      }
      // If the number of selected primary/secondary tags is at the maximum, then
      // we'll filter out all other tags of that type.
      else {
        if (primaryCount >= this.attrs.limits.max.primary) {
          tags = tags.filter(tag => !tag.isPrimaryParent() || this.selected.includes(tag));
        }
        if (secondaryCount >= this.attrs.limits.max.secondary) {
          tags = tags.filter(tag => tag.isPrimaryParent() || this.selected.includes(tag));
        }
      }
    }

    // If the user has entered text in the filter input, then filter by tags
    // whose name matches what they've entered.
    if (filter) {
      tags = tags.filter(tag => tag.name().toLowerCase().includes(filter));
    }
    if (!this.indexTag || !tags.includes(this.indexTag)) this.indexTag = tags[0];
    return tags;
  }

  /**
   * Counts the number of selected primary tags.
   */
  primaryCount() {
    return this.selected.filter(tag => tag.isPrimaryParent()).length;
  }

  /**
   * Counts the number of selected secondary tags.
   */
  secondaryCount() {
    return this.selected.filter(tag => !tag.isPrimaryParent()).length;
  }

  /**
   * Validates the number of selected primary/secondary tags against the set min max limits.
   */
  meetsRequirements(primaryCount, secondaryCount) {
    if (this.bypassReqs || this.attrs.allowResetting && this.selected.length === 0) {
      return true;
    }
    if (this.selected.length < this.attrs.limits.min.total) {
      return false;
    }
    return primaryCount >= this.attrs.limits.min.primary && secondaryCount >= this.attrs.limits.min.secondary;
  }

  /**
   * Add the given tag to the list of selected tags.
   */
  addTag(tag) {
    if (!tag || !this.attrs.canSelect(tag)) return;
    if (this.attrs.onSelect) {
      this.attrs.onSelect(tag, this.selected);
    }

    // If this tag has a parent, we'll also need to add the parent tag to the
    // selected list if it's not already in there.
    if (this.attrs.requireParentTag) {
      const parent = tag.parent();
      if (parent && !this.selected.includes(parent)) {
        this.selected.push(parent);
      }
    }
    if (!this.selected.includes(tag)) {
      this.selected.push(tag);
    }
  }

  /**
   * Remove the given tag from the list of selected tags.
   */
  removeTag(tag) {
    const index = this.selected.indexOf(tag);
    if (index !== -1) {
      this.selected.splice(index, 1);

      // Look through the list of selected tags for any tags which have the tag
      // we just removed as their parent. We'll need to remove them too.
      if (this.attrs.requireParentTag) {
        this.selected.filter(t => t.parent() === tag).forEach(this.removeTag.bind(this));
      }
      if (this.attrs.onDeselect) {
        this.attrs.onDeselect(tag, this.selected);
      }
    }
  }
  toggleTag(tag) {
    // Won't happen, needed for type safety.
    if (!this.tags) return;
    if (this.selected.includes(tag)) {
      this.removeTag(tag);
    } else {
      this.addTag(tag);
    }
    if (this.filter()) {
      this.filter('');
      this.indexTag = this.tags[0];
    }
    this.onready();
  }

  /**
   * Gives human text instructions based on the current number of selected tags and set limits.
   */
  getInstruction(primaryCount, secondaryCount) {
    if (this.bypassReqs) {
      return '';
    }
    if (primaryCount < this.attrs.limits.min.primary) {
      const remaining = this.attrs.limits.min.primary - primaryCount;
      return flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.lib.tag_selection_modal.choose_primary_placeholder', {
        count: remaining
      }));
    } else if (secondaryCount < this.attrs.limits.min.secondary) {
      const remaining = this.attrs.limits.min.secondary - secondaryCount;
      return flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.lib.tag_selection_modal.choose_secondary_placeholder', {
        count: remaining
      }));
    } else if (this.selected.length < this.attrs.limits.min.total) {
      const remaining = this.attrs.limits.min.total - this.selected.length;
      return flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.lib.tag_selection_modal.choose_tags_placeholder', {
        count: remaining
      }));
    }
    return '';
  }

  /**
   * Submit tag selection.
   */
  onsubmit(e) {
    e.preventDefault();
    if (this.attrs.onsubmit) this.attrs.onsubmit(this.selected);
    this.hide();
  }
  select(e) {
    // Ctrl + Enter submits the selection, just Enter completes the current entry
    if (e.metaKey || e.ctrlKey || this.indexTag && this.selected.includes(this.indexTag)) {
      if (this.selected.length) {
        // The DOM submit method doesn't emit a `submit event, so we
        // simulate a manual submission so our `onsubmit` logic is run.
        this.$('button[type="submit"]').click();
      }
    } else if (this.indexTag) {
      this.getItem(this.indexTag)[0].dispatchEvent(new Event('click'));
    }
  }
  selectableItems() {
    return this.$('.TagSelectionModal-list > li');
  }
  getCurrentNumericIndex() {
    if (!this.indexTag) return -1;
    return this.selectableItems().index(this.getItem(this.indexTag));
  }
  getItem(selectedTag) {
    return this.selectableItems().filter("[data-index=\"".concat(selectedTag.id(), "\"]"));
  }
  setIndex(index, scrollToItem) {
    const $items = this.selectableItems();
    const $dropdown = $items.parent();
    if (index < 0) {
      index = $items.length - 1;
    } else if (index >= $items.length) {
      index = 0;
    }
    const $item = $items.eq(index);
    this.indexTag = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().store.getById('tags', $item.attr('data-index'));
    m.redraw();
    if (scrollToItem && this.indexTag) {
      const dropdownScroll = $dropdown.scrollTop();
      const dropdownTop = $dropdown.offset().top;
      const dropdownBottom = dropdownTop + $dropdown.outerHeight();
      const itemTop = $item.offset().top;
      const itemBottom = itemTop + $item.outerHeight();
      let scrollTop;
      if (itemTop < dropdownTop) {
        scrollTop = dropdownScroll - dropdownTop + itemTop - parseInt($dropdown.css('padding-top'), 10);
      } else if (itemBottom > dropdownBottom) {
        scrollTop = dropdownScroll - dropdownBottom + itemBottom + parseInt($dropdown.css('padding-bottom'), 10);
      }
      if (typeof scrollTop !== 'undefined') {
        $dropdown.stop(true).animate({
          scrollTop
        }, 100);
      }
    }
  }
}

/**
 * Catch invalid limits provided to the tag selection modal.
 */
function catchInvalidLimits(limits) {
  if (limits.min.primary > limits.max.primary) {
    throw new Error('The minimum number of primary tags allowed cannot be more than the maximum number of primary tags allowed.');
  }
  if (limits.min.secondary > limits.max.secondary) {
    throw new Error('The minimum number of secondary tags allowed cannot be more than the maximum number of secondary tags allowed.');
  }
  if (limits.min.total > limits.max.primary + limits.max.secondary) {
    throw new Error('The minimum number of tags allowed cannot be more than the maximum number of primary and secondary tags allowed together.');
  }
  if (limits.max.total < limits.min.primary + limits.min.secondary) {
    throw new Error('The maximum number of tags allowed cannot be less than the minimum number of primary and secondary tags allowed together.');
  }
  if (limits.min.total > limits.max.total) {
    throw new Error('The minimum number of tags allowed cannot be more than the maximum number of tags allowed.');
  }
}
flarum.reg.add('abdulrehman-tags', 'common/components/TagSelectionModal', TagSelectionModal);

/***/ },

/***/ "./src/forum/components/TagDiscussionModal.tsx"
/*!*****************************************************!*\
  !*** ./src/forum/components/TagDiscussionModal.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagDiscussionModal)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_getSelectableTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getSelectableTags */ "./src/forum/utils/getSelectableTags.ts");
/* harmony import */ var _common_components_TagSelectionModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/TagSelectionModal */ "./src/common/components/TagSelectionModal.tsx");






class TagDiscussionModal extends _common_components_TagSelectionModal__WEBPACK_IMPORTED_MODULE_5__["default"] {
  static initAttrs(attrs) {
    var _attrs$selectedTags, _attrs$discussion;
    super.initAttrs(attrs);
    const title = attrs.discussion ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-tags.forum.choose_tags.edit_title', {
      title: m("em", null, attrs.discussion.title())
    }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-tags.forum.choose_tags.title');
    attrs.className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()(attrs.className, 'TagDiscussionModal');
    attrs.title = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(title);
    attrs.allowResetting = !!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canBypassTagCounts');
    attrs.limits = {
      allowBypassing: attrs.allowResetting,
      max: {
        primary: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maxPrimaryTags'),
        secondary: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maxSecondaryTags')
      },
      min: {
        primary: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('minPrimaryTags'),
        secondary: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('minSecondaryTags')
      }
    };
    attrs.requireParentTag = true;
    attrs.selectableTags = () => (0,_utils_getSelectableTags__WEBPACK_IMPORTED_MODULE_4__["default"])(attrs.discussion);
    (_attrs$selectedTags = attrs.selectedTags) != null ? _attrs$selectedTags : attrs.selectedTags = ((_attrs$discussion = attrs.discussion) == null ? void 0 : _attrs$discussion.tags()) || [];
    attrs.canSelect = tag => tag.canStartDiscussion();
    const suppliedOnsubmit = attrs.onsubmit || null;

    // Save changes.
    attrs.onsubmit = function (tags) {
      const discussion = attrs.discussion;
      if (discussion) {
        discussion.save({
          relationships: {
            tags
          }
        }).then(() => {
          if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default()))) {
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.get('stream').update();
          }
          m.redraw();
        });
      }
      if (suppliedOnsubmit) suppliedOnsubmit(tags);
    };
  }
}
flarum.reg.add('abdulrehman-tags', 'forum/components/TagDiscussionModal', TagDiscussionModal);

/***/ },

/***/ "./src/forum/components/ToggleButton.js"
/*!**********************************************!*\
  !*** ./src/forum/components/ToggleButton.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__);

const _excluded = ["className", "isToggled"];




/**
 * @TODO move to core
 */
class ToggleButton extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view(vnode) {
    const _this$attrs = this.attrs,
      className = _this$attrs.className,
      isToggled = _this$attrs.isToggled,
      attrs = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$attrs, _excluded);
    const icon = isToggled ? 'far fa-check-circle' : 'far fa-circle';
    return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), Object.assign({}, attrs, {
      icon: icon,
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()([className, isToggled && 'Button--toggled'])
    }), vnode.children);
  }
}
flarum.reg.add('abdulrehman-tags', 'forum/components/ToggleButton', ToggleButton);

/***/ }

}]);
//# sourceMappingURL=TagDiscussionModal.js.map