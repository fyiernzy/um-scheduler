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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Timetable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Timetable */ \"(app-pages-browser)/./src/app/components/Timetable.tsx\");\n/* harmony import */ var _components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CourseDetails */ \"(app-pages-browser)/./src/app/components/CourseDetails.tsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"(app-pages-browser)/./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Utility Functions\nconst sortOccurrencesByNumber = (occurrences)=>lodash__WEBPACK_IMPORTED_MODULE_4___default().sortBy(occurrences, (occurrence)=>parseInt(occurrence.Occurrence));\nconst doesOccurrenceConflict = (selectedActivities, occurrence)=>occurrence.Activities.some((activity)=>selectedActivities.some((selectedActivity)=>activity.Day === selectedActivity.Day && (activity[\"Begin time\"] >= selectedActivity[\"Begin time\"] && activity[\"Begin time\"] < selectedActivity[\"End time\"] || activity[\"End time\"] > selectedActivity[\"Begin time\"] && activity[\"End time\"] <= selectedActivity[\"End time\"] || activity[\"Begin time\"] <= selectedActivity[\"Begin time\"] && activity[\"End time\"] >= selectedActivity[\"End time\"])));\n// Fetch Courses Data\nconst fetchCoursesData = async ()=>{\n    const response = await fetch(\"/course_data_final_fixed.json\");\n    const data = await response.json();\n    return data.map((course)=>({\n            ...course,\n            Occurrences: sortOccurrencesByNumber(course.Occurrences)\n        }));\n};\n// Main Home Component\nfunction Home() {\n    _s();\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedOccurrences, setSelectedOccurrences] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Map());\n    // Fetch courses when component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadCourses = async ()=>{\n            const data = await fetchCoursesData();\n            setCourses(data);\n        };\n        loadCourses();\n    }, []);\n    // Handle Occurrence Selection and Unselection\n    const handleOccurrenceSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((courseCode, occurrence)=>{\n        setSelectedOccurrences((prev)=>{\n            const currentSelection = prev.get(courseCode);\n            // If user clicks on the same occurrence, unselect it\n            if (currentSelection === occurrence) {\n                const updatedSelections = new Map(prev);\n                updatedSelections.delete(courseCode); // Unselect (remove from the map)\n                return updatedSelections;\n            }\n            // Otherwise, select the occurrence\n            return new Map(prev).set(courseCode, occurrence);\n        });\n    }, []);\n    // Check if Occurrence is Disabled\n    const isOccurrenceDisabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((course, occurrence)=>{\n        if (selectedOccurrences.size === 0) return false;\n        const selectedActivitiesByOtherCourses = [];\n        courses.forEach((c)=>{\n            if (c[\"Course Code\"] !== course[\"Course Code\"]) {\n                const selectedOccurrence = selectedOccurrences.get(c[\"Course Code\"]);\n                if (selectedOccurrence) {\n                    var _c_Occurrences_find;\n                    const selectedOccurrenceActivities = ((_c_Occurrences_find = c.Occurrences.find((o)=>o.Occurrence === selectedOccurrence)) === null || _c_Occurrences_find === void 0 ? void 0 : _c_Occurrences_find.Activities) || [];\n                    selectedActivitiesByOtherCourses.push(...selectedOccurrenceActivities);\n                }\n            }\n        });\n        return doesOccurrenceConflict(selectedActivitiesByOtherCourses, occurrence);\n    }, [\n        selectedOccurrences,\n        courses\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-6 space-y-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Timetable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                courses: courses,\n                selectedOccurrences: selectedOccurrences\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            courses.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__.CourseDetails, {\n                    course: course,\n                    selectedOccurrences: selectedOccurrences,\n                    onOccurrenceSelect: handleOccurrenceSelect,\n                    isOccurrenceDisabled: isOccurrenceDisabled\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lSIGqp02pU7dqETdI5qzjMeEcqM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO29CQUN0QjhCLGlDQUFpQ08sSUFBSSxJQUNoQ0g7Z0JBRVA7WUFDRjtRQUNGO1FBRUEsT0FBT3BDLHVCQUNMZ0Msa0NBQ0FuQztJQUVKLEdBQ0E7UUFBQ3FCO1FBQXFCRjtLQUFRO0lBR2hDLHFCQUNFLDhEQUFDd0I7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNsRCw2REFBU0E7Z0JBQUN5QixTQUFTQTtnQkFBU0UscUJBQXFCQTs7Ozs7O1lBQ2pERixRQUFRSixHQUFHLENBQUMsQ0FBQ0MsUUFBUTZCLHNCQUNwQiw4REFBQ2xELG9FQUFhQTtvQkFFWnFCLFFBQVFBO29CQUNSSyxxQkFBcUJBO29CQUNyQnlCLG9CQUFvQnJCO29CQUNwQlEsc0JBQXNCQTttQkFKakJZOzs7Ozs7Ozs7OztBQVNmO0dBL0V3QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGltZXRhYmxlIGZyb20gXCIuL2NvbXBvbmVudHMvVGltZXRhYmxlXCI7XG5pbXBvcnQgeyBDb3Vyc2VEZXRhaWxzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db3Vyc2VEZXRhaWxzXCI7XG5pbXBvcnQgeyBDb3Vyc2UsIEFjdGl2aXR5LCBPY2N1cnJlbmNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG5jb25zdCBzb3J0T2NjdXJyZW5jZXNCeU51bWJlciA9IChvY2N1cnJlbmNlczogT2NjdXJyZW5jZVtdKTogT2NjdXJyZW5jZVtdID0+XG4gIF8uc29ydEJ5KG9jY3VycmVuY2VzLCAob2NjdXJyZW5jZSkgPT4gcGFyc2VJbnQob2NjdXJyZW5jZS5PY2N1cnJlbmNlKSk7XG5cbmNvbnN0IGRvZXNPY2N1cnJlbmNlQ29uZmxpY3QgPSAoXG4gIHNlbGVjdGVkQWN0aXZpdGllczogQWN0aXZpdHlbXSxcbiAgb2NjdXJyZW5jZTogT2NjdXJyZW5jZVxuKTogYm9vbGVhbiA9PlxuICBvY2N1cnJlbmNlLkFjdGl2aXRpZXMuc29tZSgoYWN0aXZpdHkpID0+XG4gICAgc2VsZWN0ZWRBY3Rpdml0aWVzLnNvbWUoXG4gICAgICAoc2VsZWN0ZWRBY3Rpdml0eSkgPT5cbiAgICAgICAgYWN0aXZpdHkuRGF5ID09PSBzZWxlY3RlZEFjdGl2aXR5LkRheSAmJlxuICAgICAgICAoKGFjdGl2aXR5W1wiQmVnaW4gdGltZVwiXSA+PSBzZWxlY3RlZEFjdGl2aXR5W1wiQmVnaW4gdGltZVwiXSAmJlxuICAgICAgICAgIGFjdGl2aXR5W1wiQmVnaW4gdGltZVwiXSA8IHNlbGVjdGVkQWN0aXZpdHlbXCJFbmQgdGltZVwiXSkgfHxcbiAgICAgICAgICAoYWN0aXZpdHlbXCJFbmQgdGltZVwiXSA+IHNlbGVjdGVkQWN0aXZpdHlbXCJCZWdpbiB0aW1lXCJdICYmXG4gICAgICAgICAgICBhY3Rpdml0eVtcIkVuZCB0aW1lXCJdIDw9IHNlbGVjdGVkQWN0aXZpdHlbXCJFbmQgdGltZVwiXSkgfHxcbiAgICAgICAgICAoYWN0aXZpdHlbXCJCZWdpbiB0aW1lXCJdIDw9IHNlbGVjdGVkQWN0aXZpdHlbXCJCZWdpbiB0aW1lXCJdICYmXG4gICAgICAgICAgICBhY3Rpdml0eVtcIkVuZCB0aW1lXCJdID49IHNlbGVjdGVkQWN0aXZpdHlbXCJFbmQgdGltZVwiXSkpXG4gICAgKVxuICApO1xuXG4vLyBGZXRjaCBDb3Vyc2VzIERhdGFcbmNvbnN0IGZldGNoQ291cnNlc0RhdGEgPSBhc3luYyAoKTogUHJvbWlzZTxDb3Vyc2VbXT4gPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2NvdXJzZV9kYXRhX2ZpbmFsX2ZpeGVkLmpzb25cIik7XG4gIGNvbnN0IGRhdGE6IENvdXJzZVtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YS5tYXAoKGNvdXJzZSkgPT4gKHtcbiAgICAuLi5jb3Vyc2UsXG4gICAgT2NjdXJyZW5jZXM6IHNvcnRPY2N1cnJlbmNlc0J5TnVtYmVyKGNvdXJzZS5PY2N1cnJlbmNlcyksXG4gIH0pKTtcbn07XG5cbi8vIE1haW4gSG9tZSBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlPENvdXJzZVtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZE9jY3VycmVuY2VzLCBzZXRTZWxlY3RlZE9jY3VycmVuY2VzXSA9IHVzZVN0YXRlPFxuICAgIE1hcDxzdHJpbmcsIHN0cmluZz5cbiAgPihuZXcgTWFwKCkpO1xuXG4gIC8vIEZldGNoIGNvdXJzZXMgd2hlbiBjb21wb25lbnQgbW91bnRzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZENvdXJzZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hDb3Vyc2VzRGF0YSgpO1xuICAgICAgc2V0Q291cnNlcyhkYXRhKTtcbiAgICB9O1xuICAgIGxvYWRDb3Vyc2VzKCk7XG4gIH0sIFtdKTtcblxuICAvLyBIYW5kbGUgT2NjdXJyZW5jZSBTZWxlY3Rpb24gYW5kIFVuc2VsZWN0aW9uXG4gIGNvbnN0IGhhbmRsZU9jY3VycmVuY2VTZWxlY3QgPSB1c2VDYWxsYmFjayhcbiAgICAoY291cnNlQ29kZTogc3RyaW5nLCBvY2N1cnJlbmNlOiBzdHJpbmcpID0+IHtcbiAgICAgIHNldFNlbGVjdGVkT2NjdXJyZW5jZXMoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IHByZXYuZ2V0KGNvdXJzZUNvZGUpO1xuXG4gICAgICAgIC8vIElmIHVzZXIgY2xpY2tzIG9uIHRoZSBzYW1lIG9jY3VycmVuY2UsIHVuc2VsZWN0IGl0XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0aW9uID09PSBvY2N1cnJlbmNlKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdGlvbnMgPSBuZXcgTWFwKHByZXYpO1xuICAgICAgICAgIHVwZGF0ZWRTZWxlY3Rpb25zLmRlbGV0ZShjb3Vyc2VDb2RlKTsgLy8gVW5zZWxlY3QgKHJlbW92ZSBmcm9tIHRoZSBtYXApXG4gICAgICAgICAgcmV0dXJuIHVwZGF0ZWRTZWxlY3Rpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZWxlY3QgdGhlIG9jY3VycmVuY2VcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAocHJldikuc2V0KGNvdXJzZUNvZGUsIG9jY3VycmVuY2UpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIENoZWNrIGlmIE9jY3VycmVuY2UgaXMgRGlzYWJsZWRcbiAgY29uc3QgaXNPY2N1cnJlbmNlRGlzYWJsZWQgPSB1c2VDYWxsYmFjayhcbiAgICAoY291cnNlOiBDb3Vyc2UsIG9jY3VycmVuY2U6IE9jY3VycmVuY2UpOiBib29sZWFuID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZE9jY3VycmVuY2VzLnNpemUgPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRBY3Rpdml0aWVzQnlPdGhlckNvdXJzZXM6IEFjdGl2aXR5W10gPSBbXTtcblxuICAgICAgY291cnNlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGlmIChjW1wiQ291cnNlIENvZGVcIl0gIT09IGNvdXJzZVtcIkNvdXJzZSBDb2RlXCJdKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPY2N1cnJlbmNlID0gc2VsZWN0ZWRPY2N1cnJlbmNlcy5nZXQoY1tcIkNvdXJzZSBDb2RlXCJdKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRPY2N1cnJlbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9jY3VycmVuY2VBY3Rpdml0aWVzID1cbiAgICAgICAgICAgICAgYy5PY2N1cnJlbmNlcy5maW5kKChvKSA9PiBvLk9jY3VycmVuY2UgPT09IHNlbGVjdGVkT2NjdXJyZW5jZSlcbiAgICAgICAgICAgICAgICA/LkFjdGl2aXRpZXMgfHwgW107XG4gICAgICAgICAgICBzZWxlY3RlZEFjdGl2aXRpZXNCeU90aGVyQ291cnNlcy5wdXNoKFxuICAgICAgICAgICAgICAuLi5zZWxlY3RlZE9jY3VycmVuY2VBY3Rpdml0aWVzXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkb2VzT2NjdXJyZW5jZUNvbmZsaWN0KFxuICAgICAgICBzZWxlY3RlZEFjdGl2aXRpZXNCeU90aGVyQ291cnNlcyxcbiAgICAgICAgb2NjdXJyZW5jZVxuICAgICAgKTtcbiAgICB9LFxuICAgIFtzZWxlY3RlZE9jY3VycmVuY2VzLCBjb3Vyc2VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNiBzcGFjZS15LTZcIj5cbiAgICAgIHsvKiBQYXNzIHRoZSBzZWxlY3RlZCBvY2N1cnJlbmNlcyB0byB0aGUgVGltZXRhYmxlIGNvbXBvbmVudCAqL31cbiAgICAgIDxUaW1ldGFibGUgY291cnNlcz17Y291cnNlc30gc2VsZWN0ZWRPY2N1cnJlbmNlcz17c2VsZWN0ZWRPY2N1cnJlbmNlc30gLz5cbiAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q291cnNlRGV0YWlsc1xuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgY291cnNlPXtjb3Vyc2V9XG4gICAgICAgICAgc2VsZWN0ZWRPY2N1cnJlbmNlcz17c2VsZWN0ZWRPY2N1cnJlbmNlc31cbiAgICAgICAgICBvbk9jY3VycmVuY2VTZWxlY3Q9e2hhbmRsZU9jY3VycmVuY2VTZWxlY3R9XG4gICAgICAgICAgaXNPY2N1cnJlbmNlRGlzYWJsZWQ9e2lzT2NjdXJyZW5jZURpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIlRpbWV0YWJsZSIsIkNvdXJzZURldGFpbHMiLCJfIiwic29ydE9jY3VycmVuY2VzQnlOdW1iZXIiLCJvY2N1cnJlbmNlcyIsInNvcnRCeSIsIm9jY3VycmVuY2UiLCJwYXJzZUludCIsIk9jY3VycmVuY2UiLCJkb2VzT2NjdXJyZW5jZUNvbmZsaWN0Iiwic2VsZWN0ZWRBY3Rpdml0aWVzIiwiQWN0aXZpdGllcyIsInNvbWUiLCJhY3Rpdml0eSIsInNlbGVjdGVkQWN0aXZpdHkiLCJEYXkiLCJmZXRjaENvdXJzZXNEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWFwIiwiY291cnNlIiwiT2NjdXJyZW5jZXMiLCJIb21lIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJzZWxlY3RlZE9jY3VycmVuY2VzIiwic2V0U2VsZWN0ZWRPY2N1cnJlbmNlcyIsIk1hcCIsImxvYWRDb3Vyc2VzIiwiaGFuZGxlT2NjdXJyZW5jZVNlbGVjdCIsImNvdXJzZUNvZGUiLCJwcmV2IiwiY3VycmVudFNlbGVjdGlvbiIsImdldCIsInVwZGF0ZWRTZWxlY3Rpb25zIiwiZGVsZXRlIiwic2V0IiwiaXNPY2N1cnJlbmNlRGlzYWJsZWQiLCJzaXplIiwic2VsZWN0ZWRBY3Rpdml0aWVzQnlPdGhlckNvdXJzZXMiLCJmb3JFYWNoIiwiYyIsInNlbGVjdGVkT2NjdXJyZW5jZSIsInNlbGVjdGVkT2NjdXJyZW5jZUFjdGl2aXRpZXMiLCJmaW5kIiwibyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJpbmRleCIsIm9uT2NjdXJyZW5jZVNlbGVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});