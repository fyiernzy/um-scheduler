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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CourseDetails: function() { return /* binding */ CourseDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _OccurrenceItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OccurrenceItem */ \"(app-pages-browser)/./src/app/components/OccurrenceItem.tsx\");\n\n\nconst CourseDetails = (param)=>{\n    let { course, selectedOccurrences, onOccurrenceSelect, isOccurrenceDisabled } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-start space-x-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold\",\n                        children: course[\"Course Name\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500\",\n                        children: course[\"Course Code\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-3/4 flex-wrap\",\n                children: course.Occurrences.map((occurrence, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OccurrenceItem__WEBPACK_IMPORTED_MODULE_1__.OccurrenceItem, {\n                        course: course,\n                        occurrence: occurrence,\n                        selectedOccurrence: selectedOccurrences.get(course[\"Course Code\"]),\n                        onOccurrenceSelect: onOccurrenceSelect,\n                        isDisabled: isOccurrenceDisabled(course, occurrence)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\CourseDetails.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CourseDetails;\nvar _c;\n$RefreshReg$(_c, \"CourseDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db3Vyc2VEZXRhaWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2tEO0FBRTNDLE1BQU1DLGdCQUFnQjtRQUFDLEVBQzVCQyxNQUFNLEVBQ05DLG1CQUFtQixFQUNuQkMsa0JBQWtCLEVBQ2xCQyxvQkFBb0IsRUFNckI7SUFDQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXlCTCxNQUFNLENBQUMsY0FBYzs7Ozs7O2tDQUM1RCw4REFBQ087d0JBQUVGLFdBQVU7a0NBQWlCTCxNQUFNLENBQUMsY0FBYzs7Ozs7Ozs7Ozs7OzBCQUlyRCw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ1pMLE9BQU9RLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFlBQVlDLG9CQUNuQyw4REFBQ2IsMkRBQWNBO3dCQUViRSxRQUFRQTt3QkFDUlUsWUFBWUE7d0JBQ1pFLG9CQUFvQlgsb0JBQW9CWSxHQUFHLENBQUNiLE1BQU0sQ0FBQyxjQUFjO3dCQUNqRUUsb0JBQW9CQTt3QkFDcEJZLFlBQVlYLHFCQUFxQkgsUUFBUVU7dUJBTHBDQzs7Ozs7Ozs7Ozs7Ozs7OztBQVdqQixFQUFFO0tBbENXWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ291cnNlRGV0YWlscy50c3g/NzhlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Vyc2UsIE9jY3VycmVuY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IE9jY3VycmVuY2VJdGVtIH0gZnJvbSBcIi4vT2NjdXJyZW5jZUl0ZW1cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3Vyc2VEZXRhaWxzID0gKHtcclxuICBjb3Vyc2UsXHJcbiAgc2VsZWN0ZWRPY2N1cnJlbmNlcyxcclxuICBvbk9jY3VycmVuY2VTZWxlY3QsXHJcbiAgaXNPY2N1cnJlbmNlRGlzYWJsZWQsXHJcbn06IHtcclxuICBjb3Vyc2U6IENvdXJzZTtcclxuICBzZWxlY3RlZE9jY3VycmVuY2VzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xyXG4gIG9uT2NjdXJyZW5jZVNlbGVjdDogKGNvdXJzZUNvZGU6IHN0cmluZywgb2NjdXJyZW5jZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGlzT2NjdXJyZW5jZURpc2FibGVkOiAoY291cnNlOiBDb3Vyc2UsIG9jY3VycmVuY2U6IE9jY3VycmVuY2UpID0+IGJvb2xlYW47XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtNFwiPlxyXG4gICAgICB7LyogQ291cnNlIE5hbWUgYW5kIENvZGUgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgcC00XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPntjb3Vyc2VbXCJDb3Vyc2UgTmFtZVwiXX08L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57Y291cnNlW1wiQ291cnNlIENvZGVcIl19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBPY2N1cnJlbmNlcyBMaXN0ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0zLzQgZmxleC13cmFwXCI+XHJcbiAgICAgICAge2NvdXJzZS5PY2N1cnJlbmNlcy5tYXAoKG9jY3VycmVuY2UsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPE9jY3VycmVuY2VJdGVtXHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBjb3Vyc2U9e2NvdXJzZX1cclxuICAgICAgICAgICAgb2NjdXJyZW5jZT17b2NjdXJyZW5jZX1cclxuICAgICAgICAgICAgc2VsZWN0ZWRPY2N1cnJlbmNlPXtzZWxlY3RlZE9jY3VycmVuY2VzLmdldChjb3Vyc2VbXCJDb3Vyc2UgQ29kZVwiXSl9XHJcbiAgICAgICAgICAgIG9uT2NjdXJyZW5jZVNlbGVjdD17b25PY2N1cnJlbmNlU2VsZWN0fVxyXG4gICAgICAgICAgICBpc0Rpc2FibGVkPXtpc09jY3VycmVuY2VEaXNhYmxlZChjb3Vyc2UsIG9jY3VycmVuY2UpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiT2NjdXJyZW5jZUl0ZW0iLCJDb3Vyc2VEZXRhaWxzIiwiY291cnNlIiwic2VsZWN0ZWRPY2N1cnJlbmNlcyIsIm9uT2NjdXJyZW5jZVNlbGVjdCIsImlzT2NjdXJyZW5jZURpc2FibGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiT2NjdXJyZW5jZXMiLCJtYXAiLCJvY2N1cnJlbmNlIiwiaWR4Iiwic2VsZWN0ZWRPY2N1cnJlbmNlIiwiZ2V0IiwiaXNEaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CourseDetails.tsx\n"));

/***/ })

});