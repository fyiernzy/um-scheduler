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

/***/ "(app-pages-browser)/./src/app/components/Timetable.tsx":
/*!******************************************!*\
  !*** ./src/app/components/Timetable.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst DAYS = [\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\"\n];\nconst HOURS = Array.from({\n    length: 12\n}, (_, i)=>i + 8);\n// Mapping short days (Mon, Tue, etc.) to full day names\nconst dayMap = {\n    Mon: \"Monday\",\n    Tue: \"Tuesday\",\n    Wed: \"Wednesday\",\n    Thu: \"Thursday\",\n    Fri: \"Friday\"\n};\nconst Timetable = (param)=>{\n    let { courses, selectedOccurrences } = param;\n    _s();\n    console.log(selectedOccurrences);\n    const [occupiedSlots, setOccupiedSlots] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newOccupiedSlots = {};\n        courses.forEach((course)=>{\n            const selectedOccurrenceId = selectedOccurrences.get(course[\"Course Code\"]);\n            if (selectedOccurrenceId) {\n                const selectedOccurrence = course.Occurrences.find((occurrence)=>occurrence.Occurrence === selectedOccurrenceId);\n                console.log(selectedOccurrence);\n                if (selectedOccurrence) {\n                    selectedOccurrence.Activities.forEach((activity)=>{\n                        const day = dayMap[activity.Day]; // Map the day abbreviation to the full day name\n                        console.log(day);\n                        const startHour = parseInt(activity[\"Begin time\"].split(\":\")[0]);\n                        const endHour = parseInt(activity[\"End time\"].split(\":\")[0]);\n                        for(let hour = startHour; hour < endHour; hour++){\n                            const key = \"\".concat(day, \"-\").concat(hour);\n                            if (!newOccupiedSlots[key]) {\n                                newOccupiedSlots[key] = [];\n                            }\n                            newOccupiedSlots[key].push(activity);\n                        }\n                    });\n                }\n            }\n        });\n        setOccupiedSlots(newOccupiedSlots);\n    }, [\n        courses,\n        selectedOccurrences\n    ]);\n    const isSlotOccupied = (day, hour)=>{\n        return occupiedSlots[\"\".concat(day, \"-\").concat(hour)];\n    };\n    const renderCell = (day, hour)=>{\n        const activities = isSlotOccupied(day, hour);\n        if (activities) {\n            return activities.map((activity, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-blue-200 p-1 text-xs\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: activity.Activity\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                activity[\"Begin time\"],\n                                \" - \",\n                                activity[\"End time\"]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: activity.Room\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, idx, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined));\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full border-collapse\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"border p-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined),\n                            HOURS.map((hour)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border p-2\",\n                                    children: \"\".concat(hour, \":00\")\n                                }, hour, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: DAYS.map((day)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border p-2 font-bold\",\n                                    children: day\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, undefined),\n                                HOURS.map((hour)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border p-2 h-16\",\n                                        children: renderCell(day, hour)\n                                    }, \"\".concat(day, \"-\").concat(hour), false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, day, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Timetable, \"+7WIEqJW3SwYm5Kj6LdSdk3d7Yc=\");\n_c = Timetable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timetable);\nvar _c;\n$RefreshReg$(_c, \"Timetable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UaW1ldGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUduRCxNQUFNRyxPQUFPO0lBQUM7SUFBVTtJQUFXO0lBQWE7SUFBWTtDQUFTO0FBQ3JFLE1BQU1DLFFBQVFDLE1BQU1DLElBQUksQ0FBQztJQUFFQyxRQUFRO0FBQUcsR0FBRyxDQUFDQyxHQUFHQyxJQUFNQSxJQUFJO0FBT3ZELHdEQUF3RDtBQUN4RCxNQUFNQyxTQUFpQztJQUNyQ0MsS0FBSztJQUNMQyxLQUFLO0lBQ0xDLEtBQUs7SUFDTEMsS0FBSztJQUNMQyxLQUFLO0FBQ1A7QUFFQSxNQUFNQyxZQUFzQztRQUFDLEVBQzNDQyxPQUFPLEVBQ1BDLG1CQUFtQixFQUNwQjs7SUFDQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU0sQ0FBQ0csZUFBZUMsaUJBQWlCLEdBQUdyQiwrQ0FBUUEsQ0FFaEQsQ0FBQztJQUVIQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1xQixtQkFBK0MsQ0FBQztRQUV0RE4sUUFBUU8sT0FBTyxDQUFDLENBQUNDO1lBQ2YsTUFBTUMsdUJBQXVCUixvQkFBb0JTLEdBQUcsQ0FDbERGLE1BQU0sQ0FBQyxjQUFjO1lBRXZCLElBQUlDLHNCQUFzQjtnQkFDeEIsTUFBTUUscUJBQXFCSCxPQUFPSSxXQUFXLENBQUNDLElBQUksQ0FDaEQsQ0FBQ0MsYUFBZUEsV0FBV0MsVUFBVSxLQUFLTjtnQkFFNUNQLFFBQVFDLEdBQUcsQ0FBQ1E7Z0JBQ1osSUFBSUEsb0JBQW9CO29CQUN0QkEsbUJBQW1CSyxVQUFVLENBQUNULE9BQU8sQ0FBQyxDQUFDVTt3QkFDckMsTUFBTUMsTUFBTXpCLE1BQU0sQ0FBQ3dCLFNBQVNFLEdBQUcsQ0FBQyxFQUFFLGdEQUFnRDt3QkFDbEZqQixRQUFRQyxHQUFHLENBQUNlO3dCQUNaLE1BQU1FLFlBQVlDLFNBQVNKLFFBQVEsQ0FBQyxhQUFhLENBQUNLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDL0QsTUFBTUMsVUFBVUYsU0FBU0osUUFBUSxDQUFDLFdBQVcsQ0FBQ0ssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUUzRCxJQUFLLElBQUlFLE9BQU9KLFdBQVdJLE9BQU9ELFNBQVNDLE9BQVE7NEJBQ2pELE1BQU1DLE1BQU0sR0FBVUQsT0FBUE4sS0FBSSxLQUFRLE9BQUxNOzRCQUN0QixJQUFJLENBQUNsQixnQkFBZ0IsQ0FBQ21CLElBQUksRUFBRTtnQ0FDMUJuQixnQkFBZ0IsQ0FBQ21CLElBQUksR0FBRyxFQUFFOzRCQUM1Qjs0QkFDQW5CLGdCQUFnQixDQUFDbUIsSUFBSSxDQUFDQyxJQUFJLENBQUNUO3dCQUM3QjtvQkFDRjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQVosaUJBQWlCQztJQUNuQixHQUFHO1FBQUNOO1FBQVNDO0tBQW9CO0lBRWpDLE1BQU0wQixpQkFBaUIsQ0FBQ1QsS0FBYU07UUFDbkMsT0FBT3BCLGFBQWEsQ0FBQyxHQUFVb0IsT0FBUE4sS0FBSSxLQUFRLE9BQUxNLE1BQU87SUFDeEM7SUFFQSxNQUFNSSxhQUFhLENBQUNWLEtBQWFNO1FBQy9CLE1BQU1LLGFBQWFGLGVBQWVULEtBQUtNO1FBQ3ZDLElBQUlLLFlBQVk7WUFDZCxPQUFPQSxXQUFXQyxHQUFHLENBQUMsQ0FBQ2IsVUFBVWMsb0JBQy9CLDhEQUFDQztvQkFBY0MsV0FBVTs7c0NBQ3ZCLDhEQUFDRDtzQ0FBS2YsU0FBU2lCLFFBQVE7Ozs7OztzQ0FDdkIsOERBQUNGOztnQ0FDRWYsUUFBUSxDQUFDLGFBQWE7Z0NBQUM7Z0NBQUlBLFFBQVEsQ0FBQyxXQUFXOzs7Ozs7O3NDQUVsRCw4REFBQ2U7c0NBQUtmLFNBQVNrQixJQUFJOzs7Ozs7O21CQUxYSjs7Ozs7UUFRZDtRQUNBLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRztZQUFNSCxXQUFVOzs4QkFDZiw4REFBQ0k7OEJBQ0MsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQUdOLFdBQVU7Ozs7Ozs0QkFDYjlDLE1BQU0yQyxHQUFHLENBQUMsQ0FBQ04scUJBQ1YsOERBQUNlO29DQUFjTixXQUFVOzhDQUN0QixHQUFRLE9BQUxULE1BQUs7bUNBREZBOzs7Ozs7Ozs7Ozs7Ozs7OzhCQU1mLDhEQUFDZ0I7OEJBQ0V0RCxLQUFLNEMsR0FBRyxDQUFDLENBQUNaLG9CQUNULDhEQUFDb0I7OzhDQUNDLDhEQUFDRztvQ0FBR1IsV0FBVTs4Q0FBd0JmOzs7Ozs7Z0NBQ3JDL0IsTUFBTTJDLEdBQUcsQ0FBQyxDQUFDTixxQkFDViw4REFBQ2lCO3dDQUEwQlIsV0FBVTtrREFDbENMLFdBQVdWLEtBQUtNO3VDQURWLEdBQVVBLE9BQVBOLEtBQUksS0FBUSxPQUFMTTs7Ozs7OzJCQUhkTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXJCO0dBM0ZNbkI7S0FBQUE7QUE2Rk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1RpbWV0YWJsZS50c3g/ZTE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb3Vyc2UsIEFjdGl2aXR5IH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgREFZUyA9IFtcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiXTtcclxuY29uc3QgSE9VUlMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9LCAoXywgaSkgPT4gaSArIDgpO1xyXG5cclxuaW50ZXJmYWNlIFRpbWV0YWJsZVByb3BzIHtcclxuICBjb3Vyc2VzOiBDb3Vyc2VbXTtcclxuICBzZWxlY3RlZE9jY3VycmVuY2VzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xyXG59XHJcblxyXG4vLyBNYXBwaW5nIHNob3J0IGRheXMgKE1vbiwgVHVlLCBldGMuKSB0byBmdWxsIGRheSBuYW1lc1xyXG5jb25zdCBkYXlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgTW9uOiBcIk1vbmRheVwiLFxyXG4gIFR1ZTogXCJUdWVzZGF5XCIsXHJcbiAgV2VkOiBcIldlZG5lc2RheVwiLFxyXG4gIFRodTogXCJUaHVyc2RheVwiLFxyXG4gIEZyaTogXCJGcmlkYXlcIixcclxufTtcclxuXHJcbmNvbnN0IFRpbWV0YWJsZTogUmVhY3QuRkM8VGltZXRhYmxlUHJvcHM+ID0gKHtcclxuICBjb3Vyc2VzLFxyXG4gIHNlbGVjdGVkT2NjdXJyZW5jZXMsXHJcbn0pID0+IHtcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZE9jY3VycmVuY2VzKTtcclxuICBjb25zdCBbb2NjdXBpZWRTbG90cywgc2V0T2NjdXBpZWRTbG90c10gPSB1c2VTdGF0ZTxcclxuICAgIFJlY29yZDxzdHJpbmcsIEFjdGl2aXR5W10+XHJcbiAgPih7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdPY2N1cGllZFNsb3RzOiBSZWNvcmQ8c3RyaW5nLCBBY3Rpdml0eVtdPiA9IHt9O1xyXG5cclxuICAgIGNvdXJzZXMuZm9yRWFjaCgoY291cnNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT2NjdXJyZW5jZUlkID0gc2VsZWN0ZWRPY2N1cnJlbmNlcy5nZXQoXHJcbiAgICAgICAgY291cnNlW1wiQ291cnNlIENvZGVcIl1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHNlbGVjdGVkT2NjdXJyZW5jZUlkKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPY2N1cnJlbmNlID0gY291cnNlLk9jY3VycmVuY2VzLmZpbmQoXHJcbiAgICAgICAgICAob2NjdXJyZW5jZSkgPT4gb2NjdXJyZW5jZS5PY2N1cnJlbmNlID09PSBzZWxlY3RlZE9jY3VycmVuY2VJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRPY2N1cnJlbmNlKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRPY2N1cnJlbmNlKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZE9jY3VycmVuY2UuQWN0aXZpdGllcy5mb3JFYWNoKChhY3Rpdml0eSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBkYXlNYXBbYWN0aXZpdHkuRGF5XTsgLy8gTWFwIHRoZSBkYXkgYWJicmV2aWF0aW9uIHRvIHRoZSBmdWxsIGRheSBuYW1lXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRheSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SG91ciA9IHBhcnNlSW50KGFjdGl2aXR5W1wiQmVnaW4gdGltZVwiXS5zcGxpdChcIjpcIilbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRIb3VyID0gcGFyc2VJbnQoYWN0aXZpdHlbXCJFbmQgdGltZVwiXS5zcGxpdChcIjpcIilbMF0pO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaG91ciA9IHN0YXJ0SG91cjsgaG91ciA8IGVuZEhvdXI7IGhvdXIrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke2RheX0tJHtob3VyfWA7XHJcbiAgICAgICAgICAgICAgaWYgKCFuZXdPY2N1cGllZFNsb3RzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIG5ld09jY3VwaWVkU2xvdHNba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuZXdPY2N1cGllZFNsb3RzW2tleV0ucHVzaChhY3Rpdml0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0T2NjdXBpZWRTbG90cyhuZXdPY2N1cGllZFNsb3RzKTtcclxuICB9LCBbY291cnNlcywgc2VsZWN0ZWRPY2N1cnJlbmNlc10pO1xyXG5cclxuICBjb25zdCBpc1Nsb3RPY2N1cGllZCA9IChkYXk6IHN0cmluZywgaG91cjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gb2NjdXBpZWRTbG90c1tgJHtkYXl9LSR7aG91cn1gXTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDZWxsID0gKGRheTogc3RyaW5nLCBob3VyOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBpc1Nsb3RPY2N1cGllZChkYXksIGhvdXIpO1xyXG4gICAgaWYgKGFjdGl2aXRpZXMpIHtcclxuICAgICAgcmV0dXJuIGFjdGl2aXRpZXMubWFwKChhY3Rpdml0eSwgaWR4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiYmctYmx1ZS0yMDAgcC0xIHRleHQteHNcIj5cclxuICAgICAgICAgIDxkaXY+e2FjdGl2aXR5LkFjdGl2aXR5fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2FjdGl2aXR5W1wiQmVnaW4gdGltZVwiXX0gLSB7YWN0aXZpdHlbXCJFbmQgdGltZVwiXX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj57YWN0aXZpdHkuUm9vbX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyIHAtMlwiPjwvdGg+XHJcbiAgICAgICAgICAgIHtIT1VSUy5tYXAoKGhvdXIpID0+IChcclxuICAgICAgICAgICAgICA8dGgga2V5PXtob3VyfSBjbGFzc05hbWU9XCJib3JkZXIgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICB7YCR7aG91cn06MDBgfVxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtEQVlTLm1hcCgoZGF5KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2RheX0+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgZm9udC1ib2xkXCI+e2RheX08L3RkPlxyXG4gICAgICAgICAgICAgIHtIT1VSUy5tYXAoKGhvdXIpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2RheX0tJHtob3VyfWB9IGNsYXNzTmFtZT1cImJvcmRlciBwLTIgaC0xNlwiPlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVyQ2VsbChkYXksIGhvdXIpfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZXRhYmxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRBWVMiLCJIT1VSUyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwiZGF5TWFwIiwiTW9uIiwiVHVlIiwiV2VkIiwiVGh1IiwiRnJpIiwiVGltZXRhYmxlIiwiY291cnNlcyIsInNlbGVjdGVkT2NjdXJyZW5jZXMiLCJjb25zb2xlIiwibG9nIiwib2NjdXBpZWRTbG90cyIsInNldE9jY3VwaWVkU2xvdHMiLCJuZXdPY2N1cGllZFNsb3RzIiwiZm9yRWFjaCIsImNvdXJzZSIsInNlbGVjdGVkT2NjdXJyZW5jZUlkIiwiZ2V0Iiwic2VsZWN0ZWRPY2N1cnJlbmNlIiwiT2NjdXJyZW5jZXMiLCJmaW5kIiwib2NjdXJyZW5jZSIsIk9jY3VycmVuY2UiLCJBY3Rpdml0aWVzIiwiYWN0aXZpdHkiLCJkYXkiLCJEYXkiLCJzdGFydEhvdXIiLCJwYXJzZUludCIsInNwbGl0IiwiZW5kSG91ciIsImhvdXIiLCJrZXkiLCJwdXNoIiwiaXNTbG90T2NjdXBpZWQiLCJyZW5kZXJDZWxsIiwiYWN0aXZpdGllcyIsIm1hcCIsImlkeCIsImRpdiIsImNsYXNzTmFtZSIsIkFjdGl2aXR5IiwiUm9vbSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Timetable.tsx\n"));

/***/ })

});