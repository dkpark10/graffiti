"use strict";
exports.id = 109;
exports.ids = [109];
exports.modules = {

/***/ 518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Ranking)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(734);
// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(259);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page/Ranking.vue?vue&type=template&id=bd73e74c&scoped=true&ts=true


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b;

  const _component_HeaderTop = (0,external_vue_.resolveComponent)("HeaderTop");

  const _component_ImageContainer = (0,external_vue_.resolveComponent)("ImageContainer");

  const _component_PostInfo = (0,external_vue_.resolveComponent)("PostInfo");

  const _component_Footer = (0,external_vue_.resolveComponent)("Footer");

  _push(`<!--[-->`);

  _push((0,server_renderer_.ssrRenderComponent)(_component_HeaderTop, null, null, _parent));

  _push(`<main data-v-bd73e74c><div class="tag_content_wrapper" data-v-bd73e74c><div class="page_title_wrapper" data-v-bd73e74c><div class="page_title" data-v-bd73e74c>인기 허브글</div><span class="date" data-v-bd73e74c>${(0,server_renderer_.ssrInterpolate)((_a = _ctx.rankItems) === null || _a === void 0 ? void 0 : _a.date)} 기준</span></div><!--[-->`);

  (0,server_renderer_.ssrRenderList)((_b = _ctx.rankItems) === null || _b === void 0 ? void 0 : _b.rankedPosts, (item, idx) => {
    _push(`<ul data-v-bd73e74c><li data-v-bd73e74c>`);

    _push((0,server_renderer_.ssrRenderComponent)(_component_ImageContainer, {
      width: "100%",
      height: "160px",
      src: item.imgUrl,
      alt: item.title
    }, null, _parent));

    _push((0,server_renderer_.ssrRenderComponent)(_component_PostInfo, {
      "show-rank": true,
      title: item.title,
      author: item.author
    }, {
      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<span data-v-bd73e74c${_scopeId}>${(0,server_renderer_.ssrInterpolate)(idx + 1)}</span>`);
        } else {
          return [(0,external_vue_.createVNode)("span", null, (0,external_vue_.toDisplayString)(idx + 1), 1)];
        }
      }),
      _: 2
    }, _parent));

    _push(`</li></ul>`);
  });

  _push(`<!--]--></div></main>`);

  _push((0,server_renderer_.ssrRenderComponent)(_component_Footer, null, null, _parent));

  _push(`<!--]-->`);
}
;// CONCATENATED MODULE: ./src/components/page/Ranking.vue?vue&type=template&id=bd73e74c&scoped=true&ts=true

// EXTERNAL MODULE: external "core-js/modules/es.array.iterator.js"
var es_array_iterator_js_ = __webpack_require__(624);
// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator.js"
var web_dom_collections_iterator_js_ = __webpack_require__(534);
// EXTERNAL MODULE: ./src/components/molecules/HeaderTop.vue + 32 modules
var HeaderTop = __webpack_require__(283);
// EXTERNAL MODULE: ./src/components/atoms/ImageContainer.vue + 6 modules
var ImageContainer = __webpack_require__(806);
// EXTERNAL MODULE: ./src/components/organisms/Footer.vue + 27 modules
var Footer = __webpack_require__(548);
// EXTERNAL MODULE: ./src/components/molecules/PostInfo.vue + 6 modules
var PostInfo = __webpack_require__(758);
// EXTERNAL MODULE: ./src/hooks/index.ts + 3 modules
var hooks = __webpack_require__(292);
// EXTERNAL MODULE: ./src/utils/index.ts + 2 modules
var utils = __webpack_require__(545);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page/Ranking.vue?vue&type=script&lang=ts









/* harmony default export */ const Rankingvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
  name: "ranking-page",
  components: {
    Footer: Footer/* default */.Z,
    HeaderTop: HeaderTop/* default */.Z,
    ImageContainer: ImageContainer/* default */.Z,
    PostInfo: PostInfo/* default */.Z
  },

  setup() {
    const [rankItems, loading, error] = (0,hooks/* useFetch */.ib)(`${utils/* BASE_URL */._n}/post/ranking`);
    return {
      rankItems,
      loading,
      error
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/page/Ranking.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page/Ranking.vue?vue&type=style&index=0&id=bd73e74c&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/page/Ranking.vue?vue&type=style&index=0&id=bd73e74c&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/components/page/Ranking.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Rankingvue_type_script_lang_ts, [['ssrRender',ssrRender],['__scopeId',"data-v-bd73e74c"]])

/* harmony default export */ const Ranking = (__exports__);

/***/ })

};
;
//# sourceMappingURL=ranking.ee95ec2d.js.map