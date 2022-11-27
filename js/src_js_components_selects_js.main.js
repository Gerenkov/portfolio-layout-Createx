(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_selects_js"],{

/***/ "./src/js/components/selects.js":
/*!**************************************!*\
  !*** ./src/js/components/selects.js ***!
  \**************************************/
/***/ (() => {

const selects = document.querySelectorAll('.form-field__select');
selects.forEach(el => {
  new Choices(el, {
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false
  });
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_selects_js.main.js.map