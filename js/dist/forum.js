/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/common.ts"
/*!******************************!*\
  !*** ./src/common/common.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_sortTags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sortTags */ "./src/common/utils/sortTags.tsx");
/* harmony import */ var _models_Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Tag */ "./src/common/models/Tag.ts");
/* harmony import */ var _helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");
/* harmony import */ var _helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _helpers_tagLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _states_TagListState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/TagListState */ "./src/common/states/TagListState.ts");







/***/ },

/***/ "./src/common/extend.ts"
/*!******************************!*\
  !*** ./src/common/extend.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Tag */ "./src/common/models/Tag.ts");
/* harmony import */ var _query_discussions_TagGambit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query/discussions/TagGambit */ "./src/common/query/discussions/TagGambit.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)() //
.add('tags', _models_Tag__WEBPACK_IMPORTED_MODULE_1__["default"]), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Search)() //
.gambit('discussions', _query_discussions_TagGambit__WEBPACK_IMPORTED_MODULE_2__["default"])]);

/***/ },

/***/ "./src/common/helpers/tagIcon.js"
/*!***************************************!*\
  !*** ./src/common/helpers/tagIcon.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tagIcon)
/* harmony export */ });
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_0__);

function tagIcon(tag, attrs, settings) {
  if (attrs === void 0) {
    attrs = {};
  }
  if (settings === void 0) {
    settings = {};
  }
  const hasIcon = tag && tag.icon();
  const _settings = settings,
    _settings$useColor = _settings.useColor,
    useColor = _settings$useColor === void 0 ? true : _settings$useColor;
  attrs.className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_0___default()([attrs.className, 'icon text-colored', hasIcon ? tag.icon() : 'TagIcon']);
  if (tag && useColor) {
    attrs.style = attrs.style || {};
    attrs.style['--color'] = tag.color();
  } else if (!tag) {
    attrs.className += ' untagged';
  }
  return hasIcon ? m("i", attrs) : m("span", attrs);
}
flarum.reg.add('abdulrehman-tags', 'common/helpers/tagIcon', tagIcon);

/***/ },

/***/ "./src/common/helpers/tagLabel.js"
/*!****************************************!*\
  !*** ./src/common/helpers/tagLabel.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tagLabel),
/* harmony export */   tagDisplayText: () => (/* binding */ tagDisplayText)
/* harmony export */ });
/* harmony import */ var flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/utils/extract */ "flarum/common/utils/extract");
/* harmony import */ var flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/textContrastClass */ "flarum/common/helpers/textContrastClass");
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tagIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tagIcon */ "./src/common/helpers/tagIcon.js");






/** Visible tag title for the current forum locale (falls back to canonical `name`). */
function tagDisplayText(tag) {
  if (!tag) {
    return '';
  }
  return tag.displayName && tag.displayName() || tag.name();
}
function tagLabel(tag, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }
  attrs.style = attrs.style || {};
  attrs.className = 'TagLabel ' + (attrs.className || '');
  const link = flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_0___default()(attrs, 'link');
  const tagText = tag ? tagDisplayText(tag) : app.translator.trans('flarum-tags.lib.deleted_tag_text');
  if (tag) {
    const color = tag.color();
    if (color) {
      attrs.style['--tag-bg'] = color;
      attrs.className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()(attrs.className, 'colored', flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_3___default()(color));
    }
    if (link) {
      attrs.title = tag.description() || '';
      attrs.href = app.route('tag', {
        tags: tag.slug()
      });
    }
    if (tag.isChild()) {
      attrs.className += ' TagLabel--child';
    }
  } else {
    attrs.className += ' untagged';
  }
  return m(link ? (flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_1___default()) : 'span', attrs, m("span", {
    className: "TagLabel-text"
  }, tag && tag.icon() && (0,_tagIcon__WEBPACK_IMPORTED_MODULE_4__["default"])(tag, {
    className: 'TagLabel-icon'
  }, {
    useColor: false
  }), m("span", {
    className: "TagLabel-name"
  }, tagText)));
}
flarum.reg.add('abdulrehman-tags', 'common/helpers/tagLabel', tagLabel);

/***/ },

/***/ "./src/common/helpers/tagsLabel.js"
/*!*****************************************!*\
  !*** ./src/common/helpers/tagsLabel.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tagsLabel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/utils/extract */ "flarum/common/utils/extract");
/* harmony import */ var flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extract__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tagLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _utils_sortTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sortTags */ "./src/common/utils/sortTags.tsx");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__);

const _excluded = ["link"];




function tagsLabel(tags, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }
  const children = [];
  const _attrs = attrs,
    link = _attrs.link,
    otherAttrs = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_attrs, _excluded);
  otherAttrs.className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default()('TagsLabel', otherAttrs.className);
  if (tags) {
    (0,_utils_sortTags__WEBPACK_IMPORTED_MODULE_3__["default"])(tags).forEach(tag => {
      if (tag || tags.length === 1) {
        children.push((0,_tagLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(tag, {
          link
        }));
      }
    });
  } else {
    children.push((0,_tagLabel__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }
  return m("span", otherAttrs, children);
}
flarum.reg.add('abdulrehman-tags', 'common/helpers/tagsLabel', tagsLabel);

/***/ },

/***/ "./src/common/index.ts"
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
() {



/***/ },

/***/ "./src/common/models/Tag.ts"
/*!**********************************!*\
  !*** ./src/common/models/Tag.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/utils/computed */ "flarum/common/utils/computed");
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


class Tag extends (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()) {
  displayName() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('displayName').call(this);
  }
  nameTranslations() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('nameTranslations').call(this);
  }
  name() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('name').call(this);
  }
  slug() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('slug').call(this);
  }
  description() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('description').call(this);
  }
  color() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('color').call(this);
  }
  backgroundUrl() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('backgroundUrl').call(this);
  }
  backgroundMode() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('backgroundMode').call(this);
  }
  icon() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('icon').call(this);
  }
  position() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('position').call(this);
  }
  parent() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('parent').call(this);
  }
  children() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('children').call(this);
  }
  defaultSort() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('defaultSort').call(this);
  }
  isChild() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isChild').call(this);
  }
  isHidden() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isHidden').call(this);
  }
  isPrimary() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isPrimary').call(this);
  }
  discussionCount() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('discussionCount').call(this);
  }
  lastPostedAt() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('lastPostedAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate)).call(this);
  }
  lastPostedDiscussion() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('lastPostedDiscussion').call(this);
  }
  isRestricted() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isRestricted').call(this);
  }
  canStartDiscussion() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canStartDiscussion').call(this);
  }
  canAddToDiscussion() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canAddToDiscussion').call(this);
  }
  isPrimaryParent() {
    return flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_0___default()('position', 'parent', (position, parent) => position !== null && parent === false).call(this);
  }
}
flarum.reg.add('abdulrehman-tags', 'common/models/Tag', Tag);

/***/ },

/***/ "./src/common/query/discussions/TagGambit.ts"
/*!***************************************************!*\
  !*** ./src/common/query/discussions/TagGambit.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagGambit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_query_IGambit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/query/IGambit */ "flarum/common/query/IGambit");
/* harmony import */ var flarum_common_query_IGambit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_query_IGambit__WEBPACK_IMPORTED_MODULE_2__);



class TagGambit extends flarum_common_query_IGambit__WEBPACK_IMPORTED_MODULE_2__.KeyValueGambit {
  constructor() {
    super(...arguments);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "predicates", true);
  }
  key() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.lib.gambits.discussions.tag.key', {}, true);
  }
  hint() {
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.lib.gambits.discussions.tag.hint', {}, true);
  }
  filterKey() {
    return 'tag';
  }
  gambitValueToFilterValue(value) {
    return [value];
  }
  fromFilter(value, negate) {
    let gambits = [];
    if (Array.isArray(value)) {
      gambits = value.map(value => this.fromFilter(value.toString(), negate));
    } else {
      return "".concat(negate ? '-' : '').concat(this.key(), ":").concat(this.filterValueToGambitValue(value));
    }
    return gambits.join(' ');
  }
  filterValueToGambitValue(value) {
    return value;
  }
}
flarum.reg.add('abdulrehman-tags', 'common/query/discussions/TagGambit', TagGambit);

/***/ },

/***/ "./src/common/states/TagListState.ts"
/*!*******************************************!*\
  !*** ./src/common/states/TagListState.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagListState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);


class TagListState {
  constructor() {
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadedIncludes", void 0);
  }
  async load(includes) {
    if (includes === void 0) {
      includes = [];
    }
    if (!this.loadedIncludes) {
      return this.query(includes);
    }
    const unloadedIncludes = includes.filter(include => !this.loadedIncludes.has(include));
    if (unloadedIncludes.length === 0) {
      return Promise.resolve(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('tags'));
    }
    return this.query(unloadedIncludes);
  }
  async query(includes) {
    var _this$loadedIncludes;
    if (includes === void 0) {
      includes = [];
    }
    (_this$loadedIncludes = this.loadedIncludes) != null ? _this$loadedIncludes : this.loadedIncludes = new Set();
    return flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('tags', {
      include: includes.join(',')
    }).then(val => {
      const tags = Array.isArray(val) ? val : [val];
      includes.forEach(include => this.loadedIncludes.add(include));
      return tags;
    });
  }
}
flarum.reg.add('abdulrehman-tags', 'common/states/TagListState', TagListState);

/***/ },

/***/ "./src/common/utils/sortTags.tsx"
/*!***************************************!*\
  !*** ./src/common/utils/sortTags.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortTags)
/* harmony export */ });
function sortTags(tags) {
  return tags.slice(0).sort((a, b) => {
    const aPos = a.position();
    const bPos = b.position();

    // If they're both secondary tags, sort them by their discussions count,
    // descending.
    if (aPos === null && bPos === null) return b.discussionCount() - a.discussionCount();

    // If just one is a secondary tag, then the primary tag should
    // come first.
    if (bPos === null) return -1;
    if (aPos === null) return 1;

    // If we've made it this far, we know they're both primary tags. So we'll
    // need to see if they have parents.
    const aParent = a.parent();
    const bParent = b.parent();

    // If they both have the same parent, then their positions are local,
    // so we can compare them directly.
    if (aParent === bParent) return aPos - bPos;
    // If they are both child tags, then we will compare the positions of their
    // parents.
    else if (aParent && bParent) return aParent.position() - bParent.position();
    // If we are comparing a child tag with its parent, then we let the parent
    // come first. If we are comparing an unrelated parent/child, then we
    // compare both of the parents.
    else if (aParent) return aParent === b ? 1 : aParent.position() - bPos;else if (bParent) return bParent === a ? -1 : aPos - bParent.position();
    return 0;
  });
}
flarum.reg.add('abdulrehman-tags', 'common/utils/sortTags', sortTags);

/***/ },

/***/ "./src/forum/addTagComposer.js"
/*!*************************************!*\
  !*** ./src/forum/addTagComposer.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTagComposer)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexSidebar */ "flarum/forum/components/IndexSidebar");
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");
/* harmony import */ var _utils_getSelectableTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getSelectableTags */ "./src/forum/utils/getSelectableTags.ts");







function addTagComposer() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'newDiscussionAction', function (promise) {
    // From `addTagFilter
    const tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().currentTag();
    if (tag) {
      const parent = tag.parent();
      const tags = parent ? [parent, tag] : [tag];
      promise.then(composer => composer.fields.tags = tags);
    } else {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer).fields.tags = [];
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/forum/components/DiscussionComposer', 'oninit', function () {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().tagList.load(['parent']).then(() => m.redraw());

    // Add tag-selection abilities to the discussion composer.
    this.constructor.prototype.chooseTags = function () {
      const selectableTags = (0,_utils_getSelectableTags__WEBPACK_IMPORTED_MODULE_6__["default"])();
      if (!selectableTags.length) return;
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/TagDiscussionModal */ "forum/components/TagDiscussionModal").then(__webpack_require__.bind(__webpack_require__, /*! ./components/TagDiscussionModal */ "./src/forum/components/TagDiscussionModal.tsx")), {
        selectedTags: (this.composer.fields.tags || []).slice(0),
        onsubmit: tags => {
          this.composer.fields.tags = tags;
          this.$('textarea').focus();
        }
      });
    };
  });

  // Add a tag-selection menu to the discussion composer's header, after the
  // title.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/forum/components/DiscussionComposer', 'headerItems', function (items) {
    const tags = this.composer.fields.tags || [];
    const selectableTags = (0,_utils_getSelectableTags__WEBPACK_IMPORTED_MODULE_6__["default"])();
    items.add('tags', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()(['DiscussionComposer-changeTags', 'Button Button--ua-reset', !selectableTags.length && 'disabled']),
      onclick: this.chooseTags.bind(this)
    }, tags.length ? (0,_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_5__["default"])(tags) : m("span", {
      className: "TagLabel untagged"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-tags.forum.composer_discussion.choose_tags_link'))), 10);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.override)('flarum/forum/components/DiscussionComposer', 'onsubmit', function (original) {
    const chosenTags = this.composer.fields.tags || [];
    const chosenPrimaryTags = chosenTags.filter(tag => tag.position() !== null && !tag.isChild());
    const chosenSecondaryTags = chosenTags.filter(tag => tag.position() === null);
    const selectableTags = (0,_utils_getSelectableTags__WEBPACK_IMPORTED_MODULE_6__["default"])();
    const minPrimaryTags = parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('minPrimaryTags'));
    const minSecondaryTags = parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('minSecondaryTags'));
    const maxPrimaryTags = parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maxPrimaryTags'));
    const maxSecondaryTags = parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('maxSecondaryTags'));
    if ((!chosenTags.length && maxPrimaryTags !== 0 && maxSecondaryTags !== 0 || chosenPrimaryTags.length < minPrimaryTags || chosenSecondaryTags.length < minSecondaryTags) && selectableTags.length) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/TagDiscussionModal */ "forum/components/TagDiscussionModal").then(__webpack_require__.bind(__webpack_require__, /*! ./components/TagDiscussionModal */ "./src/forum/components/TagDiscussionModal.tsx")), {
        selectedTags: chosenTags,
        onsubmit: tags => {
          this.composer.fields.tags = tags;
          original();
        }
      });
    } else {
      original();
    }
  });

  // Add the selected tags as data to submit to the server.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)('flarum/forum/components/DiscussionComposer', 'data', function (data) {
    data.relationships = data.relationships || {};
    data.relationships.tags = this.composer.fields.tags;
  });
}

/***/ },

/***/ "./src/forum/addTagControl.js"
/*!************************************!*\
  !*** ./src/forum/addTagControl.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTagControl)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);



function addTagControl() {
  // Add a control allowing the discussion to be moved to another category.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default()), 'moderationControls', function (items, discussion) {
    if (discussion.canTag()) {
      items.add('tags', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        icon: "fas fa-tag",
        onclick: () => app.modal.show(() => __webpack_require__.e(/*! import() | forum/components/TagDiscussionModal */ "forum/components/TagDiscussionModal").then(__webpack_require__.bind(__webpack_require__, /*! ./components/TagDiscussionModal */ "./src/forum/components/TagDiscussionModal.tsx")), {
          discussion
        })
      }, app.translator.trans('flarum-tags.forum.discussion_controls.edit_tags_button')));
    }
  });
}flarum.reg.addChunkModule('forum/components/TagDiscussionModal', './src/forum/components/TagDiscussionModal.tsx', 'abdulrehman-tags', 'forum/components/TagDiscussionModal');
flarum.reg.addChunkModule('forum/components/TagDiscussionModal', './src/forum/components/TagDiscussionModal.tsx', 'abdulrehman-tags', 'common/components/TagSelectionModal');
flarum.reg.addChunkModule('forum/components/TagDiscussionModal', './src/forum/components/TagDiscussionModal.tsx', 'abdulrehman-tags', 'forum/components/ToggleButton');

/***/ },

/***/ "./src/forum/addTagFilter.tsx"
/*!************************************!*\
  !*** ./src/forum/addTagFilter.tsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTagFilter)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/IndexSidebar */ "flarum/forum/components/IndexSidebar");
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/states/DiscussionListState */ "flarum/forum/states/DiscussionListState");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/states/GlobalSearchState */ "flarum/forum/states/GlobalSearchState");
/* harmony import */ var flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/textContrastClass */ "flarum/common/helpers/textContrastClass");
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_TagHero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TagHero */ "./src/forum/components/TagHero.tsx");
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");










const findTag = slug => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.all('tags').find(tag => tag.slug().localeCompare(slug, undefined, {
  sensitivity: 'base'
}) === 0);
function addTagFilter() {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().currentTag) = function (reload) {
    if (this.currentActiveTag && !reload) {
      return this.currentActiveTag;
    }
    const slug = this.search.state.params().tags;
    let tag = null;
    if (slug) {
      tag = findTag(slug);
    }
    if (slug && !tag || tag && !tag.isChild() && !tag.children()) {
      if (this.currentTagLoading) {
        return;
      }
      this.currentTagLoading = true;

      // Unlike the backend, no need to fetch parent.children because if we're on
      // a child tag page, then either:
      //    - We loaded in that child tag (and its siblings) in the API document
      //    - We first navigated to the current tag's parent, which would have loaded in the current tag's siblings.
      this.store.find('tags', slug, {
        include: 'children,children.parent,parent'
      }).then(() => {
        this.currentActiveTag = findTag(slug);
        m.redraw();
      }).finally(() => {
        this.currentTagLoading = false;
      });
    }
    if (tag) {
      this.currentActiveTag = tag;
      return this.currentActiveTag;
    }
    this.currentActiveTag = undefined;
    return;
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (vdom) {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().currentTag(true);
  });

  // If currently viewing a tag, insert a tag hero at the top of the view.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.override)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'hero', function (original) {
    const tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().currentTag();
    if (tag) return m(_components_TagHero__WEBPACK_IMPORTED_MODULE_8__["default"], {
      model: tag
    });
    return original();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (vdom) {
    const tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().currentTag();
    if (tag) vdom.attrs.className += ' IndexPage--tag' + tag.id();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'setTitle', function () {
    const tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().currentTag();
    if (tag) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitle((0,_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_9__.tagDisplayText)(tag));
    }
  });

  // If currently viewing a tag, restyle the 'new discussion' button to use
  // the tag's color, and disable if the user isn't allowed to edit.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'items', function (items) {
    const tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().currentTag();
    if (tag) {
      const color = tag.color();
      const canStartDiscussion = tag.canStartDiscussion() || !(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user;
      const newDiscussion = items.get('newDiscussion');
      if (color) {
        newDiscussion.attrs.className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()([newDiscussion.attrs.className, 'Button--tagColored', flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_7___default()(color)]);
        newDiscussion.attrs.style = {
          '--color': color
        };
      }
      newDiscussion.attrs.disabled = !canStartDiscussion;
      newDiscussion.children = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(canStartDiscussion ? 'core.forum.index.start_discussion_button' : 'core.forum.index.cannot_start_discussion_button');
    }
  });

  // Add a parameter for the global search state to pass on to the
  // DiscussionListState that will let us filter discussions by tag.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'params', function (params) {
    params.tags = m.route.param('tags');
  });

  // Translate that parameter into a gambit appended to the search query.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'requestParams', function (params) {
    if (typeof params.include === 'string') {
      params.include = [params.include];
    } else {
      var _params$include;
      (_params$include = params.include) == null || _params$include.push('tags', 'tags.parent');
    }
    if (this.params.tags) {
      params.filter || (params.filter = {});
      params.filter.tag = this.params.tags;
    }
  });
}

/***/ },

/***/ "./src/forum/addTagLabels.js"
/*!***********************************!*\
  !*** ./src/forum/addTagLabels.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTagLabels)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionHero */ "flarum/forum/components/DiscussionHero");
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/textContrastClass */ "flarum/common/helpers/textContrastClass");
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/utils/sortTags */ "./src/common/utils/sortTags.tsx");







function addTagLabels() {
  // Add tag labels to each discussion in the discussion list.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'infoItems', function (items) {
    const tags = this.attrs.discussion.tags();
    if (tags && tags.length) {
      items.add('tags', (0,_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_5__["default"])(tags), 10);
    }
  });

  // Restyle a discussion's hero to use its first tag's color.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (view) {
    const tags = (0,_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__["default"])(this.attrs.discussion.tags());
    if (tags && tags.length) {
      const color = tags[0].color();
      if (color) {
        view.attrs.style = {
          '--hero-bg': color
        };
        view.attrs.className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default()(view.attrs.className, 'DiscussionHero--colored', flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_3___default()(color));
      }
    }
  });

  // Add a list of a discussion's tags to the discussion hero, displayed
  // before the title. Put the title on its own line.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'items', function (items) {
    const tags = this.attrs.discussion.tags();
    if (tags && tags.length) {
      items.add('tags', (0,_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_5__["default"])(tags, {
        link: true
      }), 5);
    }
  });
}

/***/ },

/***/ "./src/forum/addTagList.js"
/*!*********************************!*\
  !*** ./src/forum/addTagList.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTagList)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexSidebar */ "flarum/forum/components/IndexSidebar");
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Separator */ "flarum/common/components/Separator");
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_TagLinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TagLinkButton */ "./src/forum/components/TagLinkButton.js");
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TagsPage */ "./src/forum/components/TagsPage.tsx");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/utils/sortTags */ "./src/common/utils/sortTags.tsx");
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");









function addTagList() {
  // Add a link to the tags page, as well as a list of all the tags,
  // to the index page's sidebar.
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'navItems', function (items) {
    items.add('tags', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default()), {
      icon: "fas fa-th-large",
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('tags')
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-tags.forum.index.tags_link')), -10);
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.get('noTagsList')) return;
    items.add('separator', m((flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_3___default()), null), -12);
    const params = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().search.state.stickyParams();
    const tags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.all('tags');
    const currentTag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().currentTag();
    const addTag = tag => {
      let active = currentTag === tag;
      if (!active && currentTag) {
        active = currentTag.parent() === tag;
      }

      // tag.name() is passed here as children even though it isn't used directly
      // because when we need to get the active child in SelectDropdown, we need to
      // use its children to populate the dropdown. The problem here is that `view`
      // on TagLinkButton is only called AFTER SelectDropdown, so no children are available
      // for SelectDropdown to use at the time.
      items.add('tag' + tag.id(), m(_components_TagLinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        model: tag,
        params: params,
        active: active
      }, tag ? (0,_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_8__.tagDisplayText)(tag) : ''), -14);
    };
    (0,_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__["default"])(tags).filter(tag => tag.position() !== null && (!tag.isChild() || currentTag && (tag.parent() === currentTag || tag.parent() === currentTag.parent()))).forEach(addTag);
    const more = tags.filter(tag => tag.position() === null).sort((a, b) => b.discussionCount() - a.discussionCount());
    more.splice(0, 3).forEach(addTag);
    if (more.length) {
      items.add('moreTags', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('tags')
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-tags.forum.index.more_link')), -16);
    }
  });
}

/***/ },

/***/ "./src/forum/components/DiscussionTaggedPost.js"
/*!******************************************************!*\
  !*** ./src/forum/components/DiscussionTaggedPost.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionTaggedPost)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/EventPost */ "flarum/forum/components/EventPost");
/* harmony import */ var flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");


class DiscussionTaggedPost extends (flarum_forum_components_EventPost__WEBPACK_IMPORTED_MODULE_0___default()) {
  oninit(vnode) {
    super.oninit(vnode);
    const oldTags = this.attrs.post.content()[0];
    const newTags = this.attrs.post.content()[1];
    this.tagsAdded = [];
    this.tagsRemoved = [];
    this.fetchRequired = false;
    this.loading = true;
    const tagsMutation = [...this.diffTags(newTags, oldTags), ...this.diffTags(oldTags, newTags)];
    if (tagsMutation.includes(undefined)) {
      this.fetchRequired = true;
    }
    const afterFetch = () => {
      this.tagsAdded = this.diffTags(newTags, oldTags);
      this.tagsRemoved = this.diffTags(oldTags, newTags);
      this.loading = false;
      m.redraw();
    };
    if (this.fetchRequired) {
      app.store.find('tags').then(afterFetch).catch(() => {
        this.loading = false;
        m.redraw();
      });
    } else {
      afterFetch();
    }
  }
  diffTags(tags1, tags2) {
    return tags1.filter(tag => tags2.indexOf(tag) === -1).map(id => app.store.getById('tags', id));
    // .filter(Boolean);
  }
  icon() {
    return 'fas fa-tag';
  }
  descriptionKey() {
    if (this.tagsAdded.length) {
      if (this.tagsRemoved.length) {
        return 'flarum-tags.forum.post_stream.added_and_removed_tags_text';
      }
      return 'flarum-tags.forum.post_stream.added_tags_text';
    }
    return 'flarum-tags.forum.post_stream.removed_tags_text';
  }
  descriptionData() {
    const data = {};
    if (this.tagsAdded.length) {
      data.tagsAdded = app.translator.trans('flarum-tags.forum.post_stream.tags_text', {
        tags: (0,_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_1__["default"])(this.tagsAdded, {
          link: true
        }),
        count: this.tagsAdded.length
      });
    }
    if (this.tagsRemoved.length) {
      data.tagsRemoved = app.translator.trans('flarum-tags.forum.post_stream.tags_text', {
        tags: (0,_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_1__["default"])(this.tagsRemoved, {
          link: true
        }),
        count: this.tagsRemoved.length
      });
    }
    return data;
  }
}
flarum.reg.add('abdulrehman-tags', 'forum/components/DiscussionTaggedPost', DiscussionTaggedPost);

/***/ },

/***/ "./src/forum/components/TagHero.tsx"
/*!******************************************!*\
  !*** ./src/forum/components/TagHero.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagHero)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/Hero */ "flarum/forum/components/Hero");
/* harmony import */ var flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/helpers/textContrastClass */ "flarum/common/helpers/textContrastClass");
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);






class TagHero extends (flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_0___default()) {
  className() {
    const tag = this.attrs.model;
    const color = tag.color();
    return flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default()('TagHero', {
      'TagHero--colored': color,
      [flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_1___default()(color)]: color
    });
  }
  style() {
    const tag = this.attrs.model;
    const color = tag.color();
    return color ? {
      '--hero-bg': color
    } : undefined;
  }
  bodyItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('content', m("div", {
      className: "containerNarrow"
    }, this.contentItems().toArray()), 80);
    return items;
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    const tag = this.attrs.model;
    items.add('tag-title', m("h1", {
      className: "Hero-title"
    }, tag.icon() && (0,_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_2__["default"])(tag, {}, {
      useColor: false
    }), " ", (0,_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_3__.tagDisplayText)(tag)), 100);
    items.add('tag-subtitle', m("div", {
      className: "Hero-subtitle"
    }, tag.description()), 90);
    return items;
  }
}
flarum.reg.add('abdulrehman-tags', 'forum/components/TagHero', TagHero);

/***/ },

/***/ "./src/forum/components/TagLinkButton.js"
/*!***********************************************!*\
  !*** ./src/forum/components/TagLinkButton.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagLinkButton)
/* harmony export */ });
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");






class TagLinkButton extends (flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_1___default()) {
  view(vnode) {
    const tag = this.attrs.model;
    const description = tag && tag.description();
    const className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()('TagLinkButton hasIcon', {
      child: tag.isChild()
    }, this.attrs.className);
    return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0___default()), {
      className: className,
      href: this.attrs.route,
      style: tag ? {
        '--color': tag.color()
      } : undefined,
      title: description || undefined
    }, (0,_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_4__["default"])(tag, {
      className: 'Button-icon'
    }), m("span", {
      className: "Button-label"
    }, tag ? (0,_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_5__.tagDisplayText)(tag) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('flarum-tags.forum.index.untagged_link')));
  }
  static initAttrs(attrs) {
    super.initAttrs(attrs);
    const tag = attrs.model;
    attrs.params.tags = tag ? tag.slug() : 'untagged';
    attrs.route = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().route('tag', attrs.params);
  }
}
flarum.reg.add('abdulrehman-tags', 'forum/components/TagLinkButton', TagLinkButton);

/***/ },

/***/ "./src/forum/components/TagsPage.tsx"
/*!*******************************************!*\
  !*** ./src/forum/components/TagsPage.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/PageStructure */ "flarum/forum/components/PageStructure");
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/WelcomeHero */ "flarum/forum/components/WelcomeHero");
/* harmony import */ var flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/IndexSidebar */ "flarum/forum/components/IndexSidebar");
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/helpers/textContrastClass */ "flarum/common/helpers/textContrastClass");
/* harmony import */ var flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/utils/sortTags */ "./src/common/utils/sortTags.tsx");
















class TagsPage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default()) {
  constructor() {
    super(...arguments);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tags", void 0);
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", void 0);
  }
  oninit(vnode) {
    super.oninit(vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.push('tags', flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_12___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.forum.header.back_to_tags_tooltip')));
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current.set('noTagsList', true);
    this.tags = [];
    const preloaded = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().preloadedApiDocument();
    if (preloaded) {
      this.tags = (0,_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_15__["default"])(preloaded.filter(tag => !tag.isChild()));
      return;
    }
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().tagList.load(['children', 'lastPostedDiscussion', 'parent']).then(() => {
      this.tags = (0,_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_15__["default"])(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('tags').filter(tag => !tag.isChild()));
      this.loading = false;
      m.redraw();
    });
  }
  oncreate(vnode) {
    super.oncreate(vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitle(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_12___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('flarum-tags.forum.all_tags.meta_title_text')));
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitleCount(0);
  }
  view() {
    return m((flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "TagsPage Page--vertical",
      hero: this.hero.bind(this),
      sidebar: this.sidebar.bind(this)
    }, this.contentItems().toArray());
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default())();
    if (this.loading) {
      items.add('loading', m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default()), null));
    } else {
      const pinned = this.tags.filter(tag => tag.position() !== null);
      const cloud = this.tags.filter(tag => tag.position() === null);
      items.add('tagTiles', this.tagTileListView(pinned), 100);
      if (cloud.length) {
        items.add('cloud', this.cloudView(cloud), 10);
      }
    }
    return items;
  }
  hero() {
    return m((flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_4___default()), null);
  }
  sidebar() {
    return m((flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_5___default()), null);
  }
  tagTileListView(pinned) {
    return m("ul", {
      className: "TagTiles"
    }, pinned.map(this.tagTileView.bind(this)));
  }
  tagTileView(tag) {
    const lastPostedDiscussion = tag.lastPostedDiscussion();
    const children = (0,_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_15__["default"])(tag.children() || []);
    return m("li", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_11___default()('TagTile', {
        colored: tag.color()
      }, flarum_common_helpers_textContrastClass__WEBPACK_IMPORTED_MODULE_10___default()(tag.color())),
      style: {
        '--tag-bg': tag.color()
      }
    }, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: "TagTile-info",
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route.tag(tag)
    }, m("div", {
      className: "TagTile-heading"
    }, tag.icon() && (0,_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_13__["default"])(tag, {}, {
      useColor: false
    }), m("h3", {
      className: "TagTile-name"
    }, (0,_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_14__.tagDisplayText)(tag))), m("p", {
      className: "TagTile-description"
    }, tag.description()), !!children && m("div", {
      className: "TagTile-children"
    }, children.map(child => [m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route.tag(child)
    }, (0,_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_14__.tagDisplayText)(child)), ' ']))), lastPostedDiscussion ? m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: "TagTile-lastPostedDiscussion",
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route.discussion(lastPostedDiscussion, lastPostedDiscussion.lastPostNumber())
    }, m("span", {
      className: "TagTile-lastPostedDiscussion-title"
    }, lastPostedDiscussion.title()), flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_9___default()(lastPostedDiscussion.lastPostedAt())) : m("span", {
      className: "TagTile-lastPostedDiscussion"
    }));
  }
  cloudView(cloud) {
    return m("div", {
      className: "TagCloud"
    }, cloud.map(tag => [(0,_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_14__["default"])(tag, {
      link: true
    }), ' ']));
  }
}
flarum.reg.add('abdulrehman-tags', 'forum/components/TagsPage', TagsPage);

/***/ },

/***/ "./src/forum/extend.ts"
/*!*****************************!*\
  !*** ./src/forum/extend.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DiscussionTaggedPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DiscussionTaggedPost */ "./src/forum/components/DiscussionTaggedPost.js");
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TagsPage */ "./src/forum/components/TagsPage.tsx");
/* harmony import */ var _common_extend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/extend */ "./src/common/extend.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([..._common_extend__WEBPACK_IMPORTED_MODULE_6__["default"], new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1___default().Routes)() //
.add('tags', '/tags', _components_TagsPage__WEBPACK_IMPORTED_MODULE_5__["default"]) //
.add('tag', '/t/:tags', (flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default())) //
.helper('tag', tag => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('tag', {
  tags: tag.slug()
})), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1___default().PostTypes)() //
.add('discussionTagged', _components_DiscussionTaggedPost__WEBPACK_IMPORTED_MODULE_4__["default"]), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_1___default().Model)((flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default())) //
.hasMany('tags') //
.attribute('canTag')]);

/***/ },

/***/ "./src/forum/forum.ts"
/*!****************************!*\
  !*** ./src/forum/forum.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "./src/common/common.ts");
/* harmony import */ var _utils_getSelectableTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getSelectableTags */ "./src/forum/utils/getSelectableTags.ts");
/* harmony import */ var _components_TagHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TagHero */ "./src/forum/components/TagHero.tsx");
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TagsPage */ "./src/forum/components/TagsPage.tsx");
/* harmony import */ var _components_DiscussionTaggedPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DiscussionTaggedPost */ "./src/forum/components/DiscussionTaggedPost.js");
/* harmony import */ var _components_TagLinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TagLinkButton */ "./src/forum/components/TagLinkButton.js");
/* harmony import */ var _addTagFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addTagFilter */ "./src/forum/addTagFilter.tsx");
/* harmony import */ var _addTagControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addTagControl */ "./src/forum/addTagControl.js");
/* harmony import */ var _addTagList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addTagList */ "./src/forum/addTagList.js");
/* harmony import */ var _addTagLabels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addTagLabels */ "./src/forum/addTagLabels.js");
/* harmony import */ var _addTagComposer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addTagComposer */ "./src/forum/addTagComposer.js");












/***/ },

/***/ "./src/forum/index.ts"
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_states_TagListState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/states/TagListState */ "./src/common/states/TagListState.ts");
/* harmony import */ var _addTagList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTagList */ "./src/forum/addTagList.js");
/* harmony import */ var _addTagFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTagFilter */ "./src/forum/addTagFilter.tsx");
/* harmony import */ var _addTagLabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTagLabels */ "./src/forum/addTagLabels.js");
/* harmony import */ var _addTagControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTagControl */ "./src/forum/addTagControl.js");
/* harmony import */ var _addTagComposer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addTagComposer */ "./src/forum/addTagComposer.js");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.ts");
/* harmony import */ var _forum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum */ "./src/forum/forum.ts");








flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('flarum-tags', () => {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().tagList) = new _common_states_TagListState__WEBPACK_IMPORTED_MODULE_1__["default"]();
  (0,_addTagList__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_addTagFilter__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_addTagLabels__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_addTagControl__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_addTagComposer__WEBPACK_IMPORTED_MODULE_6__["default"])();
});


/***/ },

/***/ "./src/forum/utils/getSelectableTags.ts"
/*!**********************************************!*\
  !*** ./src/forum/utils/getSelectableTags.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSelectableTags)
/* harmony export */ });
function getSelectableTags(discussion) {
  let tags = app.store.all('tags');
  if (discussion) {
    const discussionTags = discussion.tags() || [];
    tags = tags.filter(tag => tag.canAddToDiscussion() || discussionTags.includes(tag));
  } else {
    tags = tags.filter(tag => tag.canStartDiscussion());
  }
  return tags;
}
flarum.reg.add('abdulrehman-tags', 'forum/utils/getSelectableTags', getSelectableTags);

/***/ },

/***/ "flarum/common/Component"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Component')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Component');

/***/ },

/***/ "flarum/common/Model"
/*!*********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Model')" ***!
  \*********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Model');

/***/ },

/***/ "flarum/common/app"
/*!*******************************************************!*\
  !*** external "flarum.reg.get('core', 'common/app')" ***!
  \*******************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/app');

/***/ },

/***/ "flarum/common/components/Button"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Button')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Button');

/***/ },

/***/ "flarum/common/components/FormModal"
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/FormModal')" ***!
  \************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/FormModal');

/***/ },

/***/ "flarum/common/components/Link"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Link')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Link');

/***/ },

/***/ "flarum/common/components/LinkButton"
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LinkButton')" ***!
  \*************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/LinkButton');

/***/ },

/***/ "flarum/common/components/LoadingIndicator"
/*!*******************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LoadingIndicator')" ***!
  \*******************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/LoadingIndicator');

/***/ },

/***/ "flarum/common/components/Page"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Page')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Page');

/***/ },

/***/ "flarum/common/components/Separator"
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Separator')" ***!
  \************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Separator');

/***/ },

/***/ "flarum/common/extend"
/*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extend');

/***/ },

/***/ "flarum/common/extenders"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extenders')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extenders');

/***/ },

/***/ "flarum/common/helpers/highlight"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/helpers/highlight')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/helpers/highlight');

/***/ },

/***/ "flarum/common/helpers/humanTime"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/helpers/humanTime')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/helpers/humanTime');

/***/ },

/***/ "flarum/common/helpers/textContrastClass"
/*!*****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/helpers/textContrastClass')" ***!
  \*****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/helpers/textContrastClass');

/***/ },

/***/ "flarum/common/models/Discussion"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/models/Discussion')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/models/Discussion');

/***/ },

/***/ "flarum/common/query/IGambit"
/*!*****************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/query/IGambit')" ***!
  \*****************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/query/IGambit');

/***/ },

/***/ "flarum/common/utils/ItemList"
/*!******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/ItemList')" ***!
  \******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/ItemList');

/***/ },

/***/ "flarum/common/utils/KeyboardNavigatable"
/*!*****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/KeyboardNavigatable')" ***!
  \*****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/KeyboardNavigatable');

/***/ },

/***/ "flarum/common/utils/Stream"
/*!****************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/Stream')" ***!
  \****************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/Stream');

/***/ },

/***/ "flarum/common/utils/classList"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/classList')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/classList');

/***/ },

/***/ "flarum/common/utils/computed"
/*!******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/computed')" ***!
  \******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/computed');

/***/ },

/***/ "flarum/common/utils/extract"
/*!*****************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/extract')" ***!
  \*****************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/extract');

/***/ },

/***/ "flarum/common/utils/extractText"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/extractText')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/extractText');

/***/ },

/***/ "flarum/forum/app"
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/app');

/***/ },

/***/ "flarum/forum/components/DiscussionHero"
/*!****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/DiscussionHero')" ***!
  \****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/DiscussionHero');

/***/ },

/***/ "flarum/forum/components/DiscussionListItem"
/*!********************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/DiscussionListItem')" ***!
  \********************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/DiscussionListItem');

/***/ },

/***/ "flarum/forum/components/DiscussionPage"
/*!****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/DiscussionPage')" ***!
  \****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/DiscussionPage');

/***/ },

/***/ "flarum/forum/components/EventPost"
/*!***********************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/EventPost')" ***!
  \***********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/EventPost');

/***/ },

/***/ "flarum/forum/components/Hero"
/*!******************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/Hero')" ***!
  \******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/Hero');

/***/ },

/***/ "flarum/forum/components/IndexPage"
/*!***********************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/IndexPage')" ***!
  \***********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/IndexPage');

/***/ },

/***/ "flarum/forum/components/IndexSidebar"
/*!**************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/IndexSidebar')" ***!
  \**************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/IndexSidebar');

/***/ },

/***/ "flarum/forum/components/PageStructure"
/*!***************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/PageStructure')" ***!
  \***************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/PageStructure');

/***/ },

/***/ "flarum/forum/components/WelcomeHero"
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/WelcomeHero')" ***!
  \*************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/WelcomeHero');

/***/ },

/***/ "flarum/forum/states/DiscussionListState"
/*!*****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/states/DiscussionListState')" ***!
  \*****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/states/DiscussionListState');

/***/ },

/***/ "flarum/forum/states/GlobalSearchState"
/*!***************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/states/GlobalSearchState')" ***!
  \***************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/states/GlobalSearchState');

/***/ },

/***/ "flarum/forum/utils/DiscussionControls"
/*!***************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/utils/DiscussionControls')" ***!
  \***************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/utils/DiscussionControls');

/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js"
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ },

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js"
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		flarum.reg._webpack_runtimes["abdulrehman-tags"] ||= __webpack_require__;// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "module.exports:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	__webpack_require__.f.compat = (chunkId, promises) => {
/******/ 	
/******/ 		const originalLoadChunk = __webpack_require__.l;
/******/ 		__webpack_require__.l = flarum.reg.loadChunk.bind(flarum.reg, originalLoadChunk);
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"forum": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_1__.extend)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _src_common__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _src_common__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map