webpackHotUpdate_N_E("pages/setting",{

/***/ "./pages/setting.js":
/*!**************************!*\
  !*** ./pages/setting.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Setting; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _compo_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compo/layout */ "./compo/layout/index.js");
/* harmony import */ var _styles_Setting_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Setting.module.css */ "./styles/Setting.module.css");
/* harmony import */ var _styles_Setting_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Setting_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_miao_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/miao.gif */ "./assets/images/miao.gif");
/* harmony import */ var _assets_images_miao_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_miao_gif__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Projects\\dorajs-sakura-anime-staic\\pages\\setting.js",
    _this = undefined;





var SettingItem = function SettingItem(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Setting_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Setting_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Setting_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.slot,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = SettingItem;
function Setting() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_compo_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Setting_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrap,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: _styles_Setting_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.anna,
        src: anna
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SettingItem, {
        label: "\u6DF1\u8272\u6A21\u5F0F",
        children: "O"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SettingItem, {
        label: "\u4F7F\u7528 Dora.js \u81EA\u5E26\u7684\u64AD\u653E\u5668",
        children: "O"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
_c2 = Setting;

var _c, _c2;

$RefreshReg$(_c, "SettingItem");
$RefreshReg$(_c2, "Setting");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZy5qcyJdLCJuYW1lcyI6WyJTZXR0aW5nSXRlbSIsImxhYmVsIiwiY2hpbGRyZW4iLCJzdHlsZSIsIml0ZW0iLCJzbG90IiwiU2V0dGluZyIsIndyYXAiLCJhbm5hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUI7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzNDLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxpRUFBSyxDQUFDQyxJQUF0QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCxpRUFBSyxDQUFDRixLQUF0QjtBQUFBLGdCQUE4QkE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVFLGlFQUFLLENBQUNFLElBQXRCO0FBQUEsZ0JBQTZCSDtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQVBEOztLQUFNRixXO0FBU1MsU0FBU00sT0FBVCxHQUFtQjtBQUNoQyxzQkFDRSxxRUFBQyxxREFBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFSCxpRUFBSyxDQUFDSSxJQUF0QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUosaUVBQUssQ0FBQ0ssSUFBdEI7QUFBNEIsV0FBRyxFQUFFQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxXQUFEO0FBQWEsYUFBSyxFQUFDLDBCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0UscUVBQUMsV0FBRDtBQUFhLGFBQUssRUFBQywyREFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDtNQWR1QkYsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5nLjBiY2Y3MTBkOTE1NThiYTdlYWQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvL2xheW91dCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9TZXR0aW5nLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBtaWFvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWlhby5naWYnXHJcblxyXG5jb25zdCBTZXR0aW5nSXRlbSA9ICh7IGxhYmVsLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxhYmVsfT57bGFiZWx9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zbG90fT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwfT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUuYW5uYX0gc3JjPXthbm5hfSAvPlxyXG4gICAgICAgIDxTZXR0aW5nSXRlbSBsYWJlbD0n5rex6Imy5qih5byPJz5cclxuICAgICAgICAgIE9cclxuICAgICAgICA8L1NldHRpbmdJdGVtPlxyXG4gICAgICAgIDxTZXR0aW5nSXRlbSBsYWJlbD0n5L2/55SoIERvcmEuanMg6Ieq5bim55qE5pKt5pS+5ZmoJz5cclxuICAgICAgICAgIE9cclxuICAgICAgICA8L1NldHRpbmdJdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9