"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/CourseDetails.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/CourseDetails.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _OccurrenceItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OccurrenceItem */ \"(app-pages-browser)/./src/app/components/OccurrenceItem.tsx\");\n\n\n\nconst CourseDetails = (param)=>{\n    let { course, selectedOccurrences, onOccurrenceSelect, isOccurrenceDisabled } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-start space-x-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold\",\n                        children: course[\"Course Name\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500\",\n                        children: course[\"Course Code\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-3/4 flex-wrap\",\n                children: course.Occurrences.map((occurrence, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OccurrenceItem__WEBPACK_IMPORTED_MODULE_2__.OccurrenceItem, {\n                        course: course,\n                        occurrence: occurrence,\n                        selectedOccurrence: selectedOccurrences[course[\"Course Code\"]],\n                        onOccurrenceSelect: onOccurrenceSelect,\n                        isDisabled: isOccurrenceDisabled(course, occurrence)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CourseDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseDetails);\nvar _c;\n$RefreshReg$(_c, \"CourseDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db3Vyc2VEZXRhaWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDd0I7QUFVbEQsTUFBTUUsZ0JBQThDO1FBQUMsRUFDbkRDLE1BQU0sRUFDTkMsbUJBQW1CLEVBQ25CQyxrQkFBa0IsRUFDbEJDLG9CQUFvQixFQUNyQjtJQUNDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBeUJMLE1BQU0sQ0FBQyxjQUFjOzs7Ozs7a0NBQzVELDhEQUFDTzt3QkFBRUYsV0FBVTtrQ0FBaUJMLE1BQU0sQ0FBQyxjQUFjOzs7Ozs7Ozs7Ozs7MEJBSXJELDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDWkwsT0FBT1EsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsWUFBWUMsb0JBQ25DLDhEQUFDYiwyREFBY0E7d0JBRWJFLFFBQVFBO3dCQUNSVSxZQUFZQTt3QkFDWkUsb0JBQW9CWCxtQkFBbUIsQ0FBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQzt3QkFDOURFLG9CQUFvQkE7d0JBQ3BCVyxZQUFZVixxQkFBcUJILFFBQVFVO3VCQUxwQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXakI7S0E3Qk1aO0FBK0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db3Vyc2VEZXRhaWxzLnRzeD83OGVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT2NjdXJyZW5jZUl0ZW0gfSBmcm9tIFwiLi9PY2N1cnJlbmNlSXRlbVwiO1xyXG5pbXBvcnQgeyBDb3Vyc2UsIE9jY3VycmVuY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5pbnRlcmZhY2UgQ291cnNlRGV0YWlsc1Byb3BzIHtcclxuICBjb3Vyc2U6IENvdXJzZTtcclxuICBzZWxlY3RlZE9jY3VycmVuY2VzOiB7IFtjb3Vyc2VDb2RlOiBzdHJpbmddOiBzdHJpbmcgfTsgLy8gVXBkYXRlIHR5cGUgaGVyZVxyXG4gIG9uT2NjdXJyZW5jZVNlbGVjdDogKGNvdXJzZUNvZGU6IHN0cmluZywgb2NjdXJyZW5jZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGlzT2NjdXJyZW5jZURpc2FibGVkOiAoY291cnNlOiBDb3Vyc2UsIG9jY3VycmVuY2U6IE9jY3VycmVuY2UpID0+IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IENvdXJzZURldGFpbHM6IFJlYWN0LkZDPENvdXJzZURldGFpbHNQcm9wcz4gPSAoe1xyXG4gIGNvdXJzZSxcclxuICBzZWxlY3RlZE9jY3VycmVuY2VzLFxyXG4gIG9uT2NjdXJyZW5jZVNlbGVjdCxcclxuICBpc09jY3VycmVuY2VEaXNhYmxlZCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC00XCI+XHJcbiAgICAgIHsvKiBDb3Vyc2UgTmFtZSBhbmQgQ29kZSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBwLTRcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e2NvdXJzZVtcIkNvdXJzZSBOYW1lXCJdfTwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPntjb3Vyc2VbXCJDb3Vyc2UgQ29kZVwiXX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIE9jY3VycmVuY2VzIExpc3QgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTMvNCBmbGV4LXdyYXBcIj5cclxuICAgICAgICB7Y291cnNlLk9jY3VycmVuY2VzLm1hcCgob2NjdXJyZW5jZSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8T2NjdXJyZW5jZUl0ZW1cclxuICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgIGNvdXJzZT17Y291cnNlfVxyXG4gICAgICAgICAgICBvY2N1cnJlbmNlPXtvY2N1cnJlbmNlfVxyXG4gICAgICAgICAgICBzZWxlY3RlZE9jY3VycmVuY2U9e3NlbGVjdGVkT2NjdXJyZW5jZXNbY291cnNlW1wiQ291cnNlIENvZGVcIl1dfSAvLyBBY2Nlc3NpbmcgZGlyZWN0bHkgZnJvbSBvYmplY3RcclxuICAgICAgICAgICAgb25PY2N1cnJlbmNlU2VsZWN0PXtvbk9jY3VycmVuY2VTZWxlY3R9XHJcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzT2NjdXJyZW5jZURpc2FibGVkKGNvdXJzZSwgb2NjdXJyZW5jZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJPY2N1cnJlbmNlSXRlbSIsIkNvdXJzZURldGFpbHMiLCJjb3Vyc2UiLCJzZWxlY3RlZE9jY3VycmVuY2VzIiwib25PY2N1cnJlbmNlU2VsZWN0IiwiaXNPY2N1cnJlbmNlRGlzYWJsZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJPY2N1cnJlbmNlcyIsIm1hcCIsIm9jY3VycmVuY2UiLCJpZHgiLCJzZWxlY3RlZE9jY3VycmVuY2UiLCJpc0Rpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CourseDetails.tsx\n"));

/***/ })

});