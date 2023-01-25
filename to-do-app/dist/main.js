/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --base-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; \r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: var(--base-font);\r\n    display: flex;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.8rem;\r\n    font-style: italic;\r\n}\r\n\r\nbutton {\r\n    font-family: var(--base-font);\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-icon {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-icon img {\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nform {\r\n    width: 300px;\r\n    background-color: #fff;\r\n    padding: 0 20px 15px 20px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    inset: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    box-shadow: 3px 3px 5px grey;\r\n    visibility: hidden;\r\n    z-index: 2;\r\n    height: fit-content;\r\n}\r\n\r\nform input, select, textarea {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 30px;\r\n    border: none;\r\n    background-color: #ddd;\r\n    margin-top: 4px;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    padding: 3px 5px;\r\n}\r\n\r\nform input:focus,\r\nform select:focus,\r\nform textarea:focus {\r\n    outline: none;\r\n    border: 1px solid #555;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\n.form-btns {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    gap: 8px;\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:not(.cancel) {\r\n    background-color: #ccc;\r\n}\r\n\r\nform button:not(.cancel):hover {\r\n    background-color: #999;\r\n}\r\n\r\n.cancel {\r\n    background-color: #f22;\r\n}\r\n\r\n.backdrop {\r\n    position: fixed;\r\n    inset: 0;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    pointer-events: none;\r\n    opacity: 0;\r\n}\r\n\r\n.backdrop.show {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n/* ASIDE */\r\naside {\r\n    background-color: #eee;\r\n    min-height: 100vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    width: 30%;\r\n    z-index: 1;\r\n    transition: .2s ease-in;\r\n    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);\r\n    padding: 20px;\r\n}\r\n\r\n.aside-head {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.close-aside {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-project {\r\n    display: block;\r\n    margin: 15px auto;\r\n    padding: 7px 25px;\r\n    border: none;\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n.add-project:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\naside h2 {\r\n    margin-top: 20px;\r\n    font-size: 1.2rem;\r\n    padding-left: 25px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.tablink {\r\n    display: block;\r\n    padding: 7px 8px;\r\n    margin-bottom: 3px;\r\n    width: 100%;\r\n    text-align: start;\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tablink:hover {\r\n    background-color: #ccc;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.tablink.first {\r\n    border-left: 7px solid #2f2;\r\n}\r\n\r\n.tablink.second {\r\n    border-left: 7px solid #ff0;\r\n}\r\n\r\n.tablink.third {\r\n    border-left: 7px solid #f22;\r\n}\r\n\r\n.show {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n/* MAIN */\r\nmain {\r\n    position: relative;\r\n    width: 70%;\r\n}\r\n\r\n.hamburger {\r\n    position: fixed;\r\n    right: 13px;\r\n    top: 5px;\r\n    visibility: hidden;\r\n}\r\n\r\n.tab-content {\r\n    min-height: 100vh;\r\n    padding: 50px 25px;\r\n    width: 100%;\r\n}\r\n\r\n.tab-content:not(#today){\r\n    display: none;\r\n}\r\n\r\n.tab-content#today {\r\n    display: block;\r\n}\r\n\r\n.special-contents .task-btns,\r\n.special-contents input[type=checkbox] { \r\n    display: none;\r\n}\r\n\r\n/* SPECIAL SECTION */\r\n.special-contents h3 {\r\n    font-size: 1.55rem;\r\n    text-shadow: 1px 1px 5px #bbb;\r\n}\r\n\r\n#today h3 {\r\n    color: #0c0;  \r\n}\r\n\r\n#upcoming h3 {\r\n    color: #cc0;\r\n}\r\n\r\n#important h3 {\r\n    color: #f22;\r\n}\r\n\r\n.today-para,\r\n.upcoming-para,\r\n.important-para {\r\n    padding: 30px;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* PROJECT TABS */\r\n.project-head {\r\n    border-bottom : 1px solid #ccc;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.title-addtask-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.project-head h3 {\r\n    font-size: 1.55rem;\r\n    margin-left: 0;\r\n    margin-right: auto;\r\n}\r\n\r\n#myproject .btn-icon:not(.plus-task) {\r\n    display: none;\r\n}\r\n\r\n.task {\r\n    padding-top: 25px;\r\n}\r\n\r\n.task-head {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    padding-bottom: 3px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.task-titled {\r\n    font-size: 1.1rem;\r\n    margin-top: -2px;\r\n}\r\n\r\n.task-titled.unchecked {\r\n    color: #22f;\r\n}\r\n\r\n.task-titled.checked {\r\n    color: #777;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.expand-icon {\r\n    margin-right: 0;\r\n    margin-left: auto;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.expand-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.expand-icon img {\r\n    width: 15px;\r\n}\r\n\r\n.task p, .task-btns {\r\n    padding-top: 5px;\r\n}\r\n\r\n.priority {\r\n    padding: 0px 5px;\r\n    background-color: transparent;\r\n    font-size: 0.85rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority.Low {\r\n    border: 3px solid #22f;\r\n}\r\n\r\n.priority.Medium {\r\n    border: 3px solid #ffcc00\r\n}\r\n\r\n.priority.High {\r\n    border: 3px solid #f22;\r\n}\r\n\r\n.task-btns {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 8px;\r\n}\r\n\r\n.btn-in-main {\r\n    padding: 3px 7px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-in-main:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.edit {\r\n    background-color: #ddd;\r\n}\r\n\r\n.edit:hover {\r\n    background-color: #999;\r\n}\r\n\r\n.delete {\r\n    background-color: #f33222;\r\n}\r\n\r\n\r\n/* JS styles */\r\n.not-specified {\r\n    font-style: italic;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.rotate {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n\r\n@media screen and (max-width: 580px) {\r\n\r\n    .backdrop {\r\n        z-index: 2;\r\n    }\r\n\r\n    aside {\r\n        position: absolute;\r\n        width: 80%;\r\n        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);\r\n        transform: translateX(-100%);\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: transform .3s ease;\r\n    }\r\n\r\n    .close-aside {\r\n        visibility: visible;\r\n    }\r\n\r\n    main {\r\n        width: 100vw;\r\n    }\r\n\r\n    .hamburger {\r\n        visibility: visible;\r\n    }\r\n\r\n    .display {\r\n        opacity: 1;\r\n        transform: translateX(0%);\r\n        visibility: visible;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --base-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; \r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: var(--base-font);\r\n    display: flex;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.8rem;\r\n    font-style: italic;\r\n}\r\n\r\nbutton {\r\n    font-family: var(--base-font);\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-icon {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-icon img {\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nform {\r\n    width: 300px;\r\n    background-color: #fff;\r\n    padding: 0 20px 15px 20px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    inset: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    box-shadow: 3px 3px 5px grey;\r\n    visibility: hidden;\r\n    z-index: 2;\r\n    height: fit-content;\r\n}\r\n\r\nform input, select, textarea {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 30px;\r\n    border: none;\r\n    background-color: #ddd;\r\n    margin-top: 4px;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    padding: 3px 5px;\r\n}\r\n\r\nform input:focus,\r\nform select:focus,\r\nform textarea:focus {\r\n    outline: none;\r\n    border: 1px solid #555;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\n.form-btns {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    gap: 8px;\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:not(.cancel) {\r\n    background-color: #ccc;\r\n}\r\n\r\nform button:not(.cancel):hover {\r\n    background-color: #999;\r\n}\r\n\r\n.cancel {\r\n    background-color: #f22;\r\n}\r\n\r\n.backdrop {\r\n    position: fixed;\r\n    inset: 0;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    pointer-events: none;\r\n    opacity: 0;\r\n}\r\n\r\n.backdrop.show {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n/* ASIDE */\r\naside {\r\n    background-color: #eee;\r\n    min-height: 100vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    width: 30%;\r\n    z-index: 1;\r\n    transition: .2s ease-in;\r\n    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);\r\n    padding: 20px;\r\n}\r\n\r\n.aside-head {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.close-aside {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-project {\r\n    display: block;\r\n    margin: 15px auto;\r\n    padding: 7px 25px;\r\n    border: none;\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n.add-project:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\naside h2 {\r\n    margin-top: 20px;\r\n    font-size: 1.2rem;\r\n    padding-left: 25px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.tablink {\r\n    display: block;\r\n    padding: 7px 8px;\r\n    margin-bottom: 3px;\r\n    width: 100%;\r\n    text-align: start;\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tablink:hover {\r\n    background-color: #ccc;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.tablink.first {\r\n    border-left: 7px solid #2f2;\r\n}\r\n\r\n.tablink.second {\r\n    border-left: 7px solid #ff0;\r\n}\r\n\r\n.tablink.third {\r\n    border-left: 7px solid #f22;\r\n}\r\n\r\n.show {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n/* MAIN */\r\nmain {\r\n    position: relative;\r\n    width: 70%;\r\n}\r\n\r\n.hamburger {\r\n    position: fixed;\r\n    right: 13px;\r\n    top: 5px;\r\n    visibility: hidden;\r\n}\r\n\r\n.tab-content {\r\n    min-height: 100vh;\r\n    padding: 50px 25px;\r\n    width: 100%;\r\n}\r\n\r\n.tab-content:not(#today){\r\n    display: none;\r\n}\r\n\r\n.tab-content#today {\r\n    display: block;\r\n}\r\n\r\n.special-contents .task-btns,\r\n.special-contents input[type=checkbox] { \r\n    display: none;\r\n}\r\n\r\n/* SPECIAL SECTION */\r\n.special-contents h3 {\r\n    font-size: 1.55rem;\r\n    text-shadow: 1px 1px 5px #bbb;\r\n}\r\n\r\n#today h3 {\r\n    color: #0c0;  \r\n}\r\n\r\n#upcoming h3 {\r\n    color: #cc0;\r\n}\r\n\r\n#important h3 {\r\n    color: #f22;\r\n}\r\n\r\n.today-para,\r\n.upcoming-para,\r\n.important-para {\r\n    padding: 30px;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* PROJECT TABS */\r\n.project-head {\r\n    border-bottom : 1px solid #ccc;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.title-addtask-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.project-head h3 {\r\n    font-size: 1.55rem;\r\n    margin-left: 0;\r\n    margin-right: auto;\r\n}\r\n\r\n#myproject .btn-icon:not(.plus-task) {\r\n    display: none;\r\n}\r\n\r\n.task {\r\n    padding-top: 25px;\r\n}\r\n\r\n.task-head {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    padding-bottom: 3px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.task-titled {\r\n    font-size: 1.1rem;\r\n    margin-top: -2px;\r\n}\r\n\r\n.task-titled.unchecked {\r\n    color: #22f;\r\n}\r\n\r\n.task-titled.checked {\r\n    color: #777;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.expand-icon {\r\n    margin-right: 0;\r\n    margin-left: auto;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.expand-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.expand-icon img {\r\n    width: 15px;\r\n}\r\n\r\n.task p, .task-btns {\r\n    padding-top: 5px;\r\n}\r\n\r\n.priority {\r\n    padding: 0px 5px;\r\n    background-color: transparent;\r\n    font-size: 0.85rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority.Low {\r\n    border: 3px solid #22f;\r\n}\r\n\r\n.priority.Medium {\r\n    border: 3px solid #ffcc00\r\n}\r\n\r\n.priority.High {\r\n    border: 3px solid #f22;\r\n}\r\n\r\n.task-btns {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 8px;\r\n}\r\n\r\n.btn-in-main {\r\n    padding: 3px 7px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-in-main:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.edit {\r\n    background-color: #ddd;\r\n}\r\n\r\n.edit:hover {\r\n    background-color: #999;\r\n}\r\n\r\n.delete {\r\n    background-color: #f33222;\r\n}\r\n\r\n\r\n/* JS styles */\r\n.not-specified {\r\n    font-style: italic;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.rotate {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n\r\n@media screen and (max-width: 580px) {\r\n\r\n    .backdrop {\r\n        z-index: 2;\r\n    }\r\n\r\n    aside {\r\n        position: absolute;\r\n        width: 80%;\r\n        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);\r\n        transform: translateX(-100%);\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: transform .3s ease;\r\n    }\r\n\r\n    .close-aside {\r\n        visibility: visible;\r\n    }\r\n\r\n    main {\r\n        width: 100vw;\r\n    }\r\n\r\n    .hamburger {\r\n        visibility: visible;\r\n    }\r\n\r\n    .display {\r\n        opacity: 1;\r\n        transform: translateX(0%);\r\n        visibility: visible;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addInputsToProjectForm": () => (/* binding */ addInputsToProjectForm),
/* harmony export */   "addInputsToTaskForm": () => (/* binding */ addInputsToTaskForm),
/* harmony export */   "clearInputs": () => (/* binding */ clearInputs),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "showForm": () => (/* binding */ showForm),
/* harmony export */   "takeProjectInputs": () => (/* binding */ takeProjectInputs),
/* harmony export */   "takeTaskInputs": () => (/* binding */ takeTaskInputs)
/* harmony export */ });

const backDrop  = document.querySelector('.backdrop');
const aside = document.querySelector('aside');

const projectTitleEdit = document.querySelector('#project-title-edit');
const projectDescriptionEdit = document.querySelector('#project-description-edit');

const taskTitleEdit = document.querySelector('#task-title-edit');
const taskDescriptionEdit = document.querySelector('#task-description-edit');
const taskPriorityEdit = document.querySelector('#priority-edit');
const taskDueDateEdit = document.querySelector('#due-date-edit');

function showForm(formType) {
    backDrop.classList.add('show');
    formType.style.visibility = 'visible';
    // aside.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    aside.style.pointerEvents = 'none';
}

function removeForm(formType) {
    backDrop.classList.remove('show');
    formType.style.visibility = 'hidden';
    // aside.style.backgroundColor = '#eee';
    aside.style.pointerEvents = 'all';
}

function clearInputs(formType) {
    const labels = formType.children;
    for (const label of labels) {
        if (label.tagName === 'LABEL' && (label.lastElementChild.tagName === 'INPUT' || label.lastElementChild.tagName === 'TEXTAREA')) {
            label.lastElementChild.value = '';
        }
    }
}

function takeProjectInputs(titleInput, descriptionInput) {

    let projectInputs = [];
    projectInputs.push(titleInput.value, descriptionInput.value);

    return projectInputs;
}

function takeTaskInputs(titleInput, descriptionInput, priorityInput, dueDateInput) {

    let taskInputs = [];
    taskInputs.push(titleInput.value, descriptionInput.value, priorityInput.value, dueDateInput.value);

    return taskInputs;
}

function addInputsToProjectForm(title, description) {
    projectTitleEdit.value = title;
    projectDescriptionEdit.value = description;

}

function addInputsToTaskForm(title, description, priority, dueDate) {
    taskTitleEdit.value = title;
    taskDescriptionEdit.value = description;
    taskPriorityEdit.value = priority;
    taskDueDateEdit.value = dueDate;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myProjects": () => (/* binding */ myProjects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tabdisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabdisplay */ "./src/tabdisplay.js");
/* harmony import */ var _projectDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDom */ "./src/projectDom.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _taskDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskDom */ "./src/taskDom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");








const projectForm = document.querySelector('.project-form');
const projectFormEdit = document.querySelector('.project-form-edit');
const addProjectBtn = document.querySelector('.add-project');
const taskForm = document.querySelector('.task-form');
const taskFormEdit = document.querySelector('.task-form-edit');
const allProjectsContainer = document.querySelector('.project-contents');
const cancelBtns = document.querySelectorAll('.cancel');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-aside');
let projectId;
let needed = [];
let taskNeeds = [];




let myProjects = JSON.parse(localStorage.getItem("projects")) || [];

//adds the default project to storage if this is the browser's first visit
if (myProjects.length === 0) {
    const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_5__.Project('My Project', 'This is the default project');
    defaultProject.addProjectToStorage();
}

//displays each project in local storage and its tasks to the DOM
myProjects.forEach((proj) => {
    (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.AddFromStorage)(proj);

    if (proj.projectTasks.length !== 0) {
        proj.projectTasks.forEach((task) => {
            (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.addTaskFromStorage)(task, myProjects.indexOf(proj) + 3)
        })
    }
})



;(0,_tabdisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();

hamburger.addEventListener('click', _tabdisplay__WEBPACK_IMPORTED_MODULE_1__.displaySidebar);
closeBtn.addEventListener('click', _tabdisplay__WEBPACK_IMPORTED_MODULE_1__.removeSidebar);

//to remove a form when cancel button is clicked
cancelBtns.forEach((cancelBtn) => {
    cancelBtn.addEventListener('click', (e) => {
        if (e.target.parentElement.parentElement.style.visibility === 'visible') {
            (0,_forms__WEBPACK_IMPORTED_MODULE_3__.removeForm)(e.target.parentElement.parentElement);
        };
    });   
});


//add a new Project from a form
addProjectBtn.addEventListener('click', () => {
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.showForm)(projectForm);
});

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.addAProject)();
});



allProjectsContainer.addEventListener('click', (e) => {
    //to add a new task -  in continuity with taskForm event listener below
    if (e.target.parentElement.classList.contains('plus-task')) {
        (0,_forms__WEBPACK_IMPORTED_MODULE_3__.showForm)(taskForm);
        projectId = (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.getProjectOfTask)(e);
    }

    if (e.target.classList.contains('edit-icon')) {
        //get the target's dataId, the title element and description element
        //these will be used to edit the project title and description when the form is submitted
        needed = (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.showEditFormAndGetEditBtnDataId)(e);
    }
    
    //delete a project
    if (e.target.classList.contains('delete-icon')) {
        (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(e);
    }

    //delete a task
    if (e.target.classList.contains('delete')) {
        (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.deleteTask)(e);
    }

    //get the target's dataId, it's projectbody data id, title, description, priority and duedate elements
    //these will be used to edit the task details when the form is submitted
    if (e.target.classList.contains('edit')) {
        taskNeeds = (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.getTaskElements)(e);
    }

    //check a task
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.checkTask)(e);
    }
});


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.addATask)(projectId);
})


projectFormEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    
    (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.editProject)(needed);
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.removeForm)(projectFormEdit);
})


taskFormEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    
    (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.editTask)(taskNeeds);
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.removeForm)(taskFormEdit);
})





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addAProjectToStorage": () => (/* binding */ addAProjectToStorage),
/* harmony export */   "deleteProjectFromStorage": () => (/* binding */ deleteProjectFromStorage),
/* harmony export */   "editProjectInStorage": () => (/* binding */ editProjectInStorage),
/* harmony export */   "getTheProjectDomId": () => (/* binding */ getTheProjectDomId)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




const projectTitle = document.querySelector('#project-title');
const projectDescription = document.querySelector('#project-description');

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    addProjectToStorage() {
        ___WEBPACK_IMPORTED_MODULE_1__.myProjects.push(this);
    }

    // getProjectId() {
    //     return myProjects.indexOf(this);
    // }
    
    projectTasks = [];

    // addTask(task) {
    //     this.projectTasks.push(task);
    // }

}


//takes the inputs from the form, creates a project object, stores it in memory
function addAProjectToStorage() {
    //take the user's inputs from the form
    let projectInputs = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.takeProjectInputs)(projectTitle, projectDescription);
        
    //instantiate a new project object with the inputs taken and store it
    const newProject = new Project(projectInputs[0], projectInputs[1]);
    newProject.addProjectToStorage();
    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));

    return newProject;
}

//gets the data-id of the project
function getTheProjectDomId(newProject) {
    let projectId = ___WEBPACK_IMPORTED_MODULE_1__.myProjects.indexOf(newProject);
    projectId = projectId + 3;

    return projectId;
}


//finds the project in array of all projects in storage and deletes it
function deleteProjectFromStorage(btnDataId, parent) {
    if (btnDataId === parent.getAttribute('data-id')) {
        ___WEBPACK_IMPORTED_MODULE_1__.myProjects.splice(parseInt(btnDataId) - 3, 1);
        localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));
    }
}


//changes projects details in storage
function editProjectInStorage(btnDataId, newTitle, newDescription) {
    
    let projectIndex = parseInt(btnDataId) - 3;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].title = newTitle;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].description = newDescription;
    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));

}


/***/ }),

/***/ "./src/projectDom.js":
/*!***************************!*\
  !*** ./src/projectDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFromStorage": () => (/* binding */ AddFromStorage),
/* harmony export */   "addAProject": () => (/* binding */ addAProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "projectBodies": () => (/* binding */ projectBodies),
/* harmony export */   "showEditFormAndGetEditBtnDataId": () => (/* binding */ showEditFormAndGetEditBtnDataId)
/* harmony export */ });
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/file-edit-outline.svg */ "./src/images/file-edit-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _tabdisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabdisplay */ "./src/tabdisplay.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");








const projectForm = document.querySelector('.project-form');
const today = document.querySelector('#today');
const todayLink = document.querySelector('.first');
const allProjectsContainer = document.querySelector('.project-contents');
const projectFormEdit = document.querySelector('.project-form-edit');
const projectTitleEdit = document.querySelector('#project-title-edit');
const projectDescriptionEdit = document.querySelector('#project-description-edit');


let projectBodies = [];
const allTaskContainers = document.querySelectorAll('.project-body');
for (const container of allTaskContainers) {
    if (container.getAttribute('data-id') === '3') {
        projectBodies.push(container);
    }
}



function addAProject() {
    let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_5__.addAProjectToStorage)();
    let projectId = (0,_project__WEBPACK_IMPORTED_MODULE_5__.getTheProjectDomId)(newProject);
    appendProjectToDom(newProject, projectId);
    appendTabLink(newProject, projectId);
    
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.removeForm)(projectForm);
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.clearInputs)(projectForm);
    
    //this is so new tablink and tabcontent are added to the flow
    (0,_tabdisplay__WEBPACK_IMPORTED_MODULE_4__["default"])();
}

function AddFromStorage(project) {
    let projectId = (0,_project__WEBPACK_IMPORTED_MODULE_5__.getTheProjectDomId)(project);
    appendProjectToDom(project, projectId);
    tablink(project.title, projectId);
    (0,_tabdisplay__WEBPACK_IMPORTED_MODULE_4__["default"])();
}


function deleteProject(e) {

    let parent = e.target.parentElement.parentElement.parentElement.parentElement;
    let btnDataId = e.target.parentElement.getAttribute('data-id');

    (0,_project__WEBPACK_IMPORTED_MODULE_5__.deleteProjectFromStorage)(btnDataId, parent);
    deleteProjectFromDom(btnDataId, parent);
}


function editProject(needed) {
    let editInputs = (0,_forms__WEBPACK_IMPORTED_MODULE_3__.takeProjectInputs)(projectTitleEdit, projectDescriptionEdit);

    (0,_project__WEBPACK_IMPORTED_MODULE_5__.editProjectInStorage)(needed[0], editInputs[0], editInputs[1]);
    editProjectInDom(needed[0], editInputs, needed[1], needed[2]);
}


//creates the project and adds it to DOM
function appendProjectToDom(newProject, projectId) {
    const allProjectsContainer = document.querySelector('.project-contents');

    let myNewproject = project(newProject.title, newProject.description, projectId);
    
    allProjectsContainer.appendChild(myNewproject);
}


//creates the tablink and ensures that its contents are displayed immediately the form is submitted
function appendTabLink(newProject, projectId) {
    let newTabLink = tablink(newProject.title, projectId);
    (0,_tabdisplay__WEBPACK_IMPORTED_MODULE_4__.openPage)(newProject.title.toLowerCase().replace(/ /g, ''), newTabLink);
}


//creates tablink for project
function tablink(projectTitle, projectId) {
    const projectBtns = document.querySelector('.project-btns');

    const listItem = document.createElement('li');
    const tabLink = document.createElement('button');
    tabLink.className = 'tablink project-btn';
    tabLink.setAttribute('data-id', projectId);
    tabLink.textContent = projectTitle;
    listItem.appendChild(tabLink);

    projectBtns.appendChild(listItem);

    //we will use this to open the tablink's page content right after it is created
    return tabLink;
}


//creates project elements to be added to DOM
function project(title, description, dataId) {
    

    const newProject = document.createElement('div');
    newProject.setAttribute('data-id', dataId);
    newProject.id = title.toLowerCase().replace(/ /g, '');
    newProject.className = 'tab-content';

    const projectHead = document.createElement('div');
    projectHead.className = 'project-head';
    const titleAddTaskDelete = document.createElement('div');
    titleAddTaskDelete.className = 'title-addtask-delete';
    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project-titled';
    projectTitle.textContent = title;
    titleAddTaskDelete.appendChild(projectTitle);

    let btnIcons = [];
    for (let i = 0; i < 3; i++) {
        let btnIcon = document.createElement('button');
        btnIcon.className = 'btn-icon';
        btnIcons.push(btnIcon);
        titleAddTaskDelete.appendChild(btnIcon);
    }
    
    const plusImage = new Image();
    plusImage.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__;
    const editImage = new Image();
    editImage.src = _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    editImage.className = 'edit-icon';
    const trashImage = new Image();
    trashImage.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    trashImage.className = 'delete-icon';

    btnIcons[0].appendChild(plusImage);
    btnIcons[0].classList.add('plus-task');
    btnIcons[1].appendChild(editImage);
    btnIcons[1].setAttribute('data-id', dataId);
    btnIcons[2].appendChild(trashImage);
    btnIcons[2].setAttribute('data-id', dataId)

    projectHead.appendChild(titleAddTaskDelete);

    const projectDescription = document.createElement('p');
    projectDescription.className = 'project-described';
    projectDescription.textContent = description;
    projectHead.appendChild(projectDescription);

    const projectBody = document.createElement('div');
    projectBody.setAttribute('data-id', dataId);
    projectBody.className = 'project-body';
    projectBodies.push(projectBody);

    newProject.append(projectHead, projectBody);

    return newProject;
}



function deleteProjectFromDom(btnDataId, parent) {

    //we remove the content page of that project
    if (btnDataId === parent.getAttribute('data-id')) {
        allProjectsContainer.removeChild(parent);
        today.style.display = 'block';
        todayLink.style.backgroundColor = '#ccc';
    }

    //we remove the link in the sidebar corresponding to that project
    const tabLinks = document.querySelectorAll('.project-btn');
    const projectBtns = document.querySelector('.project-btns');
    for (const link of tabLinks) {
        if (btnDataId === link.getAttribute('data-id')) {
            projectBtns.removeChild(link.parentElement);
            break;
        }
    }
}

function editProjectInDom(btnDataId, editInputs, titleElement, descriptionElement) {
    
    titleElement.textContent = editInputs[0];
    descriptionElement.textContent = editInputs[1];

    const tabLinks = document.querySelectorAll('.tablink');
    for (const link of tabLinks) {
        if (link.getAttribute('data-id') === btnDataId) {
            link.textContent = editInputs[0];
        }
    }
}


//the edit button data id wiil be used to edit that project in storage
function showEditFormAndGetEditBtnDataId(e) {
    let needs = [];
    let titleElement = e.target.parentElement.previousElementSibling.previousElementSibling;
    let title = titleElement.textContent;
    let descriptionElement = e.target.parentElement.parentElement.nextElementSibling
    let description = descriptionElement.textContent;
    let btnDataId = e.target.parentElement.getAttribute('data-id');
    needs.push(btnDataId, titleElement, descriptionElement);

    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.showForm)(projectFormEdit);
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.addInputsToProjectForm)(title, description);

    return needs;
}



/***/ }),

/***/ "./src/tabdisplay.js":
/*!***************************!*\
  !*** ./src/tabdisplay.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayPage),
/* harmony export */   "displaySidebar": () => (/* binding */ displaySidebar),
/* harmony export */   "openPage": () => (/* binding */ openPage),
/* harmony export */   "removeSidebar": () => (/* binding */ removeSidebar)
/* harmony export */ });
const aside = document.querySelector('aside');
const specials = document.querySelector('.special-contents');
const projectsContainer = document.querySelector('.project-contents');

function openPage(page, element) {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabLinks = document.querySelectorAll('.tablink');
    
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = '';
    }

    tabLinks[0].classList.remove('show');
    
    document.getElementById(page).style.display = 'block';
    element.style.backgroundColor = '#ccc';
}


function displayPage() {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabLinks = document.querySelectorAll('.tablink');
    for (const link of tabLinks) {
        for (const content of tabContents) {
             if (link.getAttribute('data-id') === content.getAttribute('data-id')) {
                link.addEventListener('click', (e) => {
                    openPage(content.getAttribute('id'), e.target);
                    removeSidebar();
                })
             }
         }
     }
}

function displaySidebar() {
    aside.classList.add('display');
    specials.style.pointerEvents = 'none';
    projectsContainer.style.pointerEvents = 'none';
}

function removeSidebar() {
    aside.classList.remove('display');
    specials.style.pointerEvents = 'all';
    projectsContainer.style.pointerEvents = 'all';
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTaskToStorage": () => (/* binding */ addTaskToStorage),
/* harmony export */   "deleteTaskFromStorage": () => (/* binding */ deleteTaskFromStorage),
/* harmony export */   "editTaskInStorage": () => (/* binding */ editTaskInStorage),
/* harmony export */   "getIndexOfTask": () => (/* binding */ getIndexOfTask)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/forms.js");




const taskTitle = document.querySelector('#task-title');
const taskDescription = document.querySelector('#task-description');
const taskPriority = document.querySelector('#priority');
const taskDueDate = document.querySelector('#due-date');


class Task extends _project__WEBPACK_IMPORTED_MODULE_0__.Project {
    constructor(title, description, priority, dueDate) {
        super(title, description);
        this.priority = priority;
        this.dueDate = dueDate;
    }   
}


//takes the inputs from the task form, creates a task with those input and adds the task to its calling project
function addTaskToStorage(projectId) {
    let taskInputs = (0,_forms__WEBPACK_IMPORTED_MODULE_2__.takeTaskInputs)(taskTitle, taskDescription, taskPriority, taskDueDate);
    let newTask = new Task(taskInputs[0], taskInputs[1], taskInputs[2], taskInputs[3]);
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectId - 3].projectTasks.push(newTask);

    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));

    return newTask;
}


//gets the index of the newTask added in its parent project's projectTasks array
//this will be used to give a dataId to each task created in that particular project
function getIndexOfTask(projectId, newTask) {

    return ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectId - 3].projectTasks.indexOf(newTask);

}


function deleteTaskFromStorage(e, grandParent) {
    let projectId = grandParent.getAttribute('data-id');
    projectId = parseInt(projectId) - 3;

    let taskId = e.target.getAttribute('data-id');

    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectId].projectTasks.splice(taskId, 1);

    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));
}


function editTaskInStorage(btnDataId, projectBodyDataId, newTitle, newDescription, newPriority, newDueDate) {
    
    let projectIndex = parseInt(projectBodyDataId) - 3;
    let taskIndex = parseInt(btnDataId);

    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].projectTasks[taskIndex].title = newTitle;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].projectTasks[taskIndex].description = newDescription;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].projectTasks[taskIndex].priority = newPriority;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].projectTasks[taskIndex].dueDate = newDueDate;
    
    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));

}


/***/ }),

/***/ "./src/taskDom.js":
/*!************************!*\
  !*** ./src/taskDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addATask": () => (/* binding */ addATask),
/* harmony export */   "addTaskFromStorage": () => (/* binding */ addTaskFromStorage),
/* harmony export */   "checkTask": () => (/* binding */ checkTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "getProjectOfTask": () => (/* binding */ getProjectOfTask),
/* harmony export */   "getTaskElements": () => (/* binding */ getTaskElements)
/* harmony export */ });
/* harmony import */ var _images_icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon-arrow-down.svg */ "./src/images/icon-arrow-down.svg");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _projectDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDom */ "./src/projectDom.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");







const taskForm = document.querySelector('.task-form');
const taskFormEdit = document.querySelector('.task-form-edit');

const taskTitleEdit = document.querySelector('#task-title-edit');
const taskDescriptionEdit = document.querySelector('#task-description-edit');
const taskPriorityEdit = document.querySelector('#priority-edit');
const taskDueDateEdit = document.querySelector('#due-date-edit');

const important = document.querySelector('.important-special');
const todays = document.querySelector('.today-special');
const thisWeeks = document.querySelector('.upcoming-special');

const importantPara = document.querySelector('.important-para');
const todayPara = document.querySelector('.today-para');
const upcomingPara = document.querySelector('.upcoming-para');
let importantTasks = [];
let allTasks = [];
let todaysTasks = [];
let thisWeeksTasks = [];


function addATask(projectId) {
    let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_3__.addTaskToStorage)(projectId);
    let taskId = (0,_task__WEBPACK_IMPORTED_MODULE_3__.getIndexOfTask)(projectId, newTask);
    appendTaskToDom(projectId, newTask, taskId);

    (0,_forms__WEBPACK_IMPORTED_MODULE_1__.clearInputs)(taskForm);
    (0,_forms__WEBPACK_IMPORTED_MODULE_1__.removeForm)(taskForm);
}

function addTaskFromStorage(task, projectId) {
    let taskId = (0,_task__WEBPACK_IMPORTED_MODULE_3__.getIndexOfTask)(projectId, task);
    appendTaskToDom(projectId, task, taskId);
}


function deleteTask(e) {
    let parent = e.target.parentElement.parentElement.parentElement;
    let grandParent = e.target.parentElement.parentElement.parentElement.parentElement;
    
    (0,_task__WEBPACK_IMPORTED_MODULE_3__.deleteTaskFromStorage)(e, grandParent);
    deleteTaskFromDom(grandParent, parent);   
}

//taskNeeds - [editBtndataid, projectId, titleelement, descriptionelement, etc.]
function editTask(taskNeeds) {
    let editTaskInputs = (0,_forms__WEBPACK_IMPORTED_MODULE_1__.takeTaskInputs)(taskTitleEdit, taskDescriptionEdit, taskPriorityEdit, taskDueDateEdit);
    
    (0,_task__WEBPACK_IMPORTED_MODULE_3__.editTaskInStorage)(taskNeeds[0], taskNeeds[1], editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3]);
    editTaskInDom(editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3], taskNeeds[2], taskNeeds[3], taskNeeds[4], taskNeeds[5], taskNeeds[0], taskNeeds[1]);
    editSpecialTask(taskNeeds[0], taskNeeds[1], editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3]);
    
}


function checkTask(e) {
    let taskTitle = e.target.nextElementSibling;
    check(e, taskTitle);

    let dataId = e.target.getAttribute('data-id');
    let projectDataId = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    let taskPriority = e.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild;
    let taskDueDate = taskPriority.parentElement.nextElementSibling.lastElementChild.textContent;

    //looks through the 'important' section to check selected tasks as well
    if (taskPriority.classList.contains('High')) {
        verifyIdAndCheck(e, importantTasks, dataId, projectDataId);
    }

    //looks through todays tasks to see if the item is there and check it there as well
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(taskDueDate))) {
        verifyIdAndCheck(e, todaysTasks, dataId, projectDataId);
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(taskDueDate))) {
        verifyIdAndCheck(e, thisWeeksTasks, dataId, projectDataId);
    }
}

//looks through an array containing specific tasks to check them as well if they are there 
function verifyIdAndCheck(e, tasks, dataId, projectDataId) {
    for (const task of tasks) {
        let taskTitleElement = task.firstElementChild.firstElementChild.nextElementSibling;
        if (taskTitleElement.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
                
            check(e, taskTitleElement);
        } 
    }
}

function check(e, taskTitle) {
    
    if (e.target.checked) {
        taskTitle.classList.remove('unchecked');
        taskTitle.classList.add('checked');
    } else {
        taskTitle.classList.add('unchecked');
        taskTitle.classList.remove('checked');
    }
}


//gets the data Id of the project 'whose add task' button was clicked. This will be used to add that task to its project
function getProjectOfTask(e) {
    let parentProject = e.target.parentElement.parentElement.parentElement.parentElement;
    let parentProjectId = parentProject.getAttribute('data-id');

    return parseInt(parentProjectId);
}


//adds the task created to the DOM
function appendTaskToDom(projectId, newTask, taskId) {
    let myTask = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask2 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask3 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask4 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);

    
    //to specify which project to add the task to
    _projectDom__WEBPACK_IMPORTED_MODULE_2__.projectBodies[projectId - 3].appendChild(myTask);
    //all tasks created are put in this array. We will loop througth this to find today's tasks
    allTasks.push(myTask);

    //appends the task to the 'important' section if its priority is high
    if (newTask.priority === 'High') {
        importantPara.style.display = 'none';
        important.appendChild(myTask2);
        importantTasks.push(myTask2);
    }

    let dueDate = new Date(newTask.dueDate);
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(dueDate)) {
        todayPara.style.display = 'none';
        todays.appendChild(myTask3);
        todaysTasks.push(myTask3);
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(dueDate)) {
        upcomingPara.style.display = 'none';
        thisWeeks.appendChild(myTask4);
        thisWeeksTasks.push(myTask4);
    }
}


//creates task elements to be added to DOM
function task(title, description, priority, dueDate, taskId, projectId) {
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.setAttribute('data-id', taskId);
    newTask.setAttribute('project-data-id', projectId);

    const taskHead = document.createElement('div');
    taskHead.className = 'task-head';

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('data-id', taskId);
    const taskTitle = document.createElement('h4');
    taskTitle.className = 'task-titled unchecked';
    taskTitle.setAttribute('data-id', taskId);
    taskTitle.textContent = title;

    const expandBtn = document.createElement('button');
    expandBtn.className = 'expand-icon';
    const expandImage = new Image();
    expandImage.src = _images_icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__;
    expandBtn.appendChild(expandImage);

    taskHead.append(check, taskTitle, expandBtn);

    const taskDetails = document.createElement('div');
    document.className = 'task-details';
    
    const taskDescription = document.createElement('p');
    taskDescription.className = 'task-described';
    if (!description || !(description.trim())) {
        taskDescription.classList.add('not-specified');
        taskDescription.textContent = 'No description provided';
    } else {
        taskDescription.textContent = description;
    }
    
    const taskPriority = document.createElement('p');
    taskPriority.textContent = 'Priority: ';
    const priorityBtn = document.createElement('button');
    priorityBtn.className = 'priority';
    priorityBtn.classList.add(priority);
    priorityBtn.textContent = priority;
    
    taskPriority.appendChild(priorityBtn);

    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = 'Due date: ';
    const dueDateSpan = document.createElement('span');
    if (dueDate !== '') {
        dueDateSpan.textContent = dueDate;
    } else {
        dueDateSpan.classList.add('not-specified');
        dueDateSpan.textContent = 'Not specified';
    }
    
    taskDueDate.appendChild(dueDateSpan);

    const taskBtnsContainer = document.createElement('div');
    taskBtnsContainer.className = 'task-btns';
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-in-main edit';
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('data-id', taskId)
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-in-main delete';
    deleteBtn.setAttribute('data-id', taskId);
    deleteBtn.textContent = 'Delete';
    taskBtnsContainer.append(editBtn, deleteBtn);

    taskDetails.append(taskDescription, taskPriority, taskDueDate, taskBtnsContainer);

    expandImage.addEventListener('click', (e) => {
        e.target.classList.toggle('rotate');
        taskDetails.classList.toggle('invisible');
    })

    newTask.append(taskHead, taskDetails);

    return newTask;
}

function deleteTaskFromDom(grandParent, parent) {

    grandParent.removeChild(parent);

    let taskId = parent.getAttribute('data-id');
    let projectDataId = grandParent.getAttribute('data-id');
    let taskPriorityElement = parent.lastElementChild.firstElementChild.nextElementSibling.lastElementChild
    let taskDueDate = taskPriorityElement.parentElement.nextElementSibling.lastElementChild.textContent;
    
    //deletes the task from the 'important' section as well if it is there
    if (taskPriorityElement.classList.contains('High')) {
        verifyAndDelete(importantTasks, important, taskId, projectDataId, importantPara);
    }

    //deletes the task if it is in the 'today' section as well
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(taskDueDate))) {
        verifyAndDelete(todaysTasks, todays, taskId, projectDataId, todayPara);
    }

    //delete if in this week section
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(taskDueDate))) {
        verifyAndDelete(thisWeeksTasks, thisWeeks, taskId, projectDataId, upcomingPara);
    }

}

//delete task from a section
function verifyAndDelete(tasks, section, taskId, projectDataId, sectionPara) {
    for (const task of tasks) {
        if (task.getAttribute('data-id') === taskId && task.getAttribute('project-data-id') === projectDataId) {
            section.removeChild(task);
            tasks.splice(tasks.indexOf(task), 1);

            if (tasks.length === 0) {
                sectionPara.style.display = 'block';
            }
            break;
        }
    }
}

//these will be used to edit the element contents
function getTaskElements(e) {
    let taskNeeds = [];
    let titleElement = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling;
    let title = titleElement.textContent;
    let descriptionElement = e.target.parentElement.parentElement.firstElementChild;
    let description;
    if (descriptionElement.textContent === 'No description provided') {
        description = '';
    } else {
        description = descriptionElement.textContent;
    }
    let priorityElement = e.target.parentElement.previousElementSibling.previousElementSibling.lastElementChild;
    let priority = priorityElement.textContent;
    let dueDateElement = e.target.parentElement.previousElementSibling.lastElementChild;
    let dueDate = dueDateElement.textContent;

    let taskProjectBodyDataId = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
    let editBtnDataId = e.target.getAttribute('data-id');
    
    taskNeeds.push(editBtnDataId, taskProjectBodyDataId, titleElement, descriptionElement, priorityElement, dueDateElement);

    (0,_forms__WEBPACK_IMPORTED_MODULE_1__.showForm)(taskFormEdit);
    (0,_forms__WEBPACK_IMPORTED_MODULE_1__.addInputsToTaskForm)(title, description, priority, dueDate);

    return taskNeeds;   
}


//fill in the task details with the new inputs taken
function editTaskInDom(title, description, priority, dueDate, titleElement, descriptionElement, priorityElement, dueDateElement) {
    titleElement.textContent = title;
    
    
    if (!description || !(description.trim())) {
        descriptionElement.textContent = 'No description provided';
        if (!descriptionElement.classList.contains('not-specified')) {
            descriptionElement.classList.add('not-specified');
            
        }
    } else {
        descriptionElement.textContent = description;
        if (descriptionElement.classList.contains('not-specified')) {
            descriptionElement.classList.remove('not-specified');
        }
    }
    
    priorityElement.textContent = priority;
    priorityElement.className = `priority ${priority}`;
    
    if (dueDate !== '') {
        dueDateElement.textContent = dueDate;
        if (dueDateElement.classList.contains('not-specified')) {
            dueDateElement.classList.remove('not-specified');
        }
    } else {
        dueDateElement.textContent = 'Not specified';
        if (dueDateElement.classList.contains('not-specified')) {
            return;
        } else {
            dueDateElement.classList.add('not-specified');
        }
    }
}

function editSpecialTask(editBtnDataId, projectDataId, title, description, priority, dueDate) {   

    //if the priority input is high, first check if its already in the 'important' section
    if (priority === 'High') {
        verifyAndEditOrAdd(importantTasks, important, editBtnDataId, projectDataId, title, description, priority, dueDate, importantPara);
    } else {
        //if priority has been changed from High and its in the important section, we remove it
        verifyAndRemove(importantTasks, important, editBtnDataId, projectDataId, importantPara);
    }
    
    //edit for the 'today' section
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(dueDate))) {
        verifyAndEditOrAdd(todaysTasks, todays, editBtnDataId, projectDataId, title, description, priority, dueDate, todayPara)
    } else {
        verifyAndRemove(todaysTasks, todays, editBtnDataId, projectDataId, todayPara);
    }

    //edit for 'this week' section
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(dueDate))) {
        verifyAndEditOrAdd(thisWeeksTasks, thisWeeks, editBtnDataId, projectDataId, title, description, priority, dueDate, upcomingPara)
    } else {
        verifyAndRemove(thisWeeksTasks, thisWeeks, editBtnDataId, projectDataId, upcomingPara);
    }
}


//edits the info in a special section if its there and adds it if the edited data fits criteria for that task to be in that special section
function verifyAndEditOrAdd(tasks, section, dataId, projectDataId, title, description, priority, dueDate, sectionPara) {
    //checks if its there first
    for (const task of tasks) {
        if (task.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
            let titleElement = task.firstElementChild.firstElementChild.nextElementSibling;
            let descriptionElement = task.lastElementChild.firstElementChild;
            let priorityElement = descriptionElement.nextElementSibling.lastElementChild;
            let dueDateElement = descriptionElement.nextElementSibling.nextElementSibling.lastElementChild;

            editTaskInDom(title, description, priority, dueDate, titleElement, descriptionElement, priorityElement, dueDateElement);

            return;
        }       
    }

    //if it's not there, create task elements for it and add it to the special section
    let editedTask = task(title, description, priority, dueDate, dataId, projectDataId);
    section.appendChild(editedTask);
    tasks.push(editedTask);

    sectionPara.style.display = 'none';
}


//removes the info from the special section if edited data makes it unfit to be there
function verifyAndRemove(tasks, section, dataId, projectDataId, sectionPara) {
    for (const task of tasks) {
        if (task.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
            tasks.splice(tasks.indexOf(task), 1);
            section.removeChild(task);
        }
    }

    if (tasks.length === 0) {
        sectionPara.style.display = 'block';
    }
}


/***/ }),

/***/ "./src/images/file-edit-outline.svg":
/*!******************************************!*\
  !*** ./src/images/file-edit-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cfaf989963567a367cc.svg";

/***/ }),

/***/ "./src/images/icon-arrow-down.svg":
/*!****************************************!*\
  !*** ./src/images/icon-arrow-down.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "852fa301a0e795e07c59.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e85b9fcbcc681264c887.svg";

/***/ }),

/***/ "./src/images/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63cd4382fa778ceabd5e.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9wcm9qZWN0RG9tLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YWJkaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tYmFzZS1mb250OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjsgXFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1mb250KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1mb250KTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWljb24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWljb246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4taWNvbiBpbWcge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweCAxNXB4IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaW5zZXQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGdyZXk7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQ6Zm9jdXMsXFxyXFxuZm9ybSBzZWxlY3Q6Zm9jdXMsXFxyXFxuZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOm5vdCguY2FuY2VsKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOm5vdCguY2FuY2VsKTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjIyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGluc2V0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2Ryb3Auc2hvdyB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEFTSURFICovXFxyXFxuYXNpZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXNpZGUtaGVhZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWFzaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDdweCAyNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogN3B4IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbms6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGluay5maXJzdCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgIzJmMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsuc2Vjb25kIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZmYwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGluay50aGlyZCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2YyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNQUlOICovXFxyXFxubWFpbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgcmlnaHQ6IDEzcHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGVudCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRlbnQ6bm90KCN0b2RheSl7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGVudCN0b2RheSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BlY2lhbC1jb250ZW50cyAudGFzay1idG5zLFxcclxcbi5zcGVjaWFsLWNvbnRlbnRzIGlucHV0W3R5cGU9Y2hlY2tib3hdIHsgXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFNQRUNJQUwgU0VDVElPTiAqL1xcclxcbi5zcGVjaWFsLWNvbnRlbnRzIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjU1cmVtO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggI2JiYjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZGF5IGgzIHtcXHJcXG4gICAgY29sb3I6ICMwYzA7ICBcXHJcXG59XFxyXFxuXFxyXFxuI3VwY29taW5nIGgzIHtcXHJcXG4gICAgY29sb3I6ICNjYzA7XFxyXFxufVxcclxcblxcclxcbiNpbXBvcnRhbnQgaDMge1xcclxcbiAgICBjb2xvcjogI2YyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LXBhcmEsXFxyXFxuLnVwY29taW5nLXBhcmEsXFxyXFxuLmltcG9ydGFudC1wYXJhIHtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KRUNUIFRBQlMgKi9cXHJcXG4ucHJvamVjdC1oZWFkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtYWRkdGFzay1kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjU1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlwcm9qZWN0IC5idG4taWNvbjpub3QoLnBsdXMtdGFzaykge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1oZWFkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZWQge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGVkLnVuY2hlY2tlZCB7XFxyXFxuICAgIGNvbG9yOiAjMjJmO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZWQuY2hlY2tlZCB7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1pY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1pY29uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWljb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHAsIC50YXNrLWJ0bnMge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS5Mb3cge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMjJmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkuTWVkaXVtIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmY2MwMFxcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkuSGlnaCB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMjI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pbi1tYWluIHtcXHJcXG4gICAgcGFkZGluZzogM3B4IDdweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4taW4tbWFpbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjMzMjIyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBKUyBzdHlsZXMgKi9cXHJcXG4ubm90LXNwZWNpZmllZCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xcclxcblxcclxcbiAgICAuYmFja2Ryb3Age1xcclxcbiAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhc2lkZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2xvc2UtYXNpZGUge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRpc3BsYXkge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pC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OztJQUVJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDViw0Q0FBNEM7UUFDNUMsNEJBQTRCO1FBQzVCLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJhc2UtZm9udDogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7IFxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtZm9udCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtZm9udCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWljb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHggMTVweCAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBncmV5O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0OmZvY3VzLFxcclxcbmZvcm0gc2VsZWN0OmZvY3VzLFxcclxcbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpub3QoLmNhbmNlbCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpub3QoLmNhbmNlbCk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wLnNob3cge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBU0lERSAqL1xcclxcbmFzaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLWhlYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1hc2lkZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA3cHggMjVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIGgyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDdweCA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsuZmlyc3Qge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMyZjI7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rLnNlY29uZCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsudGhpcmQge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmMjI7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcbm1haW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAxM3B4O1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRlbnQge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcGFkZGluZzogNTBweCAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1jb250ZW50Om5vdCgjdG9kYXkpe1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRlbnQjdG9kYXkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNwZWNpYWwtY29udGVudHMgLnRhc2stYnRucyxcXHJcXG4uc3BlY2lhbC1jb250ZW50cyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7IFxcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTUEVDSUFMIFNFQ1RJT04gKi9cXHJcXG4uc3BlY2lhbC1jb250ZW50cyBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41NXJlbTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4ICNiYmI7XFxyXFxufVxcclxcblxcclxcbiN0b2RheSBoMyB7XFxyXFxuICAgIGNvbG9yOiAjMGMwOyAgXFxyXFxufVxcclxcblxcclxcbiN1cGNvbWluZyBoMyB7XFxyXFxuICAgIGNvbG9yOiAjY2MwO1xcclxcbn1cXHJcXG5cXHJcXG4jaW1wb3J0YW50IGgzIHtcXHJcXG4gICAgY29sb3I6ICNmMjI7XFxyXFxufVxcclxcblxcclxcbi50b2RheS1wYXJhLFxcclxcbi51cGNvbWluZy1wYXJhLFxcclxcbi5pbXBvcnRhbnQtcGFyYSB7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJPSkVDVCBUQUJTICovXFxyXFxuLnByb2plY3QtaGVhZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWFkZHRhc2stZGVsZXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZCBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41NXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI215cHJvamVjdCAuYnRuLWljb246bm90KC5wbHVzLXRhc2spIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGVkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlZC51bmNoZWNrZWQge1xcclxcbiAgICBjb2xvcjogIzIyZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGVkLmNoZWNrZWQge1xcclxcbiAgICBjb2xvcjogIzc3NztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtaWNvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1pY29uIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBwLCAudGFzay1idG5zIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkuTG93IHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzIyZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5Lk1lZGl1bSB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmNjMDBcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LkhpZ2gge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjIyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4taW4tbWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDNweCA3cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWluLW1haW46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzMzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSlMgc3R5bGVzICovXFxyXFxuLm5vdC1zcGVjaWZpZWQge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5pbnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcXHJcXG5cXHJcXG4gICAgLmJhY2tkcm9wIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYXNpZGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNsb3NlLWFzaWRlIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbWFpbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlciB7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kaXNwbGF5IHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5jb25zdCBiYWNrRHJvcCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG5cclxuY29uc3QgcHJvamVjdFRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWVkaXQnKTtcclxuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2NyaXB0aW9uLWVkaXQnKTtcclxuXHJcbmNvbnN0IHRhc2tUaXRsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZS1lZGl0Jyk7XHJcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1lZGl0Jyk7XHJcbmNvbnN0IHRhc2tQcmlvcml0eUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktZWRpdCcpO1xyXG5jb25zdCB0YXNrRHVlRGF0ZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUtZWRpdCcpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGb3JtKGZvcm1UeXBlKSB7XHJcbiAgICBiYWNrRHJvcC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICBmb3JtVHlwZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgLy8gYXNpZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC4xKSc7XHJcbiAgICBhc2lkZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9ybShmb3JtVHlwZSkge1xyXG4gICAgYmFja0Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgZm9ybVR5cGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgLy8gYXNpZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZWUnO1xyXG4gICAgYXNpZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJJbnB1dHMoZm9ybVR5cGUpIHtcclxuICAgIGNvbnN0IGxhYmVscyA9IGZvcm1UeXBlLmNoaWxkcmVuO1xyXG4gICAgZm9yIChjb25zdCBsYWJlbCBvZiBsYWJlbHMpIHtcclxuICAgICAgICBpZiAobGFiZWwudGFnTmFtZSA9PT0gJ0xBQkVMJyAmJiAobGFiZWwubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lID09PSAnSU5QVVQnIHx8IGxhYmVsLmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykpIHtcclxuICAgICAgICAgICAgbGFiZWwubGFzdEVsZW1lbnRDaGlsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRha2VQcm9qZWN0SW5wdXRzKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQpIHtcclxuXHJcbiAgICBsZXQgcHJvamVjdElucHV0cyA9IFtdO1xyXG4gICAgcHJvamVjdElucHV0cy5wdXNoKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SW5wdXRzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFrZVRhc2tJbnB1dHModGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgcHJpb3JpdHlJbnB1dCwgZHVlRGF0ZUlucHV0KSB7XHJcblxyXG4gICAgbGV0IHRhc2tJbnB1dHMgPSBbXTtcclxuICAgIHRhc2tJbnB1dHMucHVzaCh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIHJldHVybiB0YXNrSW5wdXRzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSW5wdXRzVG9Qcm9qZWN0Rm9ybSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIHByb2plY3RUaXRsZUVkaXQudmFsdWUgPSB0aXRsZTtcclxuICAgIHByb2plY3REZXNjcmlwdGlvbkVkaXQudmFsdWUgPSBkZXNjcmlwdGlvbjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbnB1dHNUb1Rhc2tGb3JtKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICAgIHRhc2tUaXRsZUVkaXQudmFsdWUgPSB0aXRsZTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbkVkaXQudmFsdWUgPSBkZXNjcmlwdGlvbjtcclxuICAgIHRhc2tQcmlvcml0eUVkaXQudmFsdWUgPSBwcmlvcml0eTtcclxuICAgIHRhc2tEdWVEYXRlRWRpdC52YWx1ZSA9IGR1ZURhdGU7XHJcbn1cclxuXHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZGlzcGxheVBhZ2UsIHsgZGlzcGxheVNpZGViYXIsIHJlbW92ZVNpZGViYXIgfSBmcm9tICcuL3RhYmRpc3BsYXknO1xyXG5pbXBvcnQge2FkZEFQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBzaG93RWRpdEZvcm1BbmRHZXRFZGl0QnRuRGF0YUlkLCBlZGl0UHJvamVjdCwgQWRkRnJvbVN0b3JhZ2V9IGZyb20gJy4vcHJvamVjdERvbSc7XHJcbmltcG9ydCB7IHNob3dGb3JtLCByZW1vdmVGb3JtIH0gZnJvbSAnLi9mb3Jtcyc7XHJcbmltcG9ydCB7IGFkZEFUYXNrLCBjaGVja1Rhc2ssIGRlbGV0ZVRhc2ssIGdldFRhc2tFbGVtZW50cywgZWRpdFRhc2ssIGFkZFRhc2tGcm9tU3RvcmFnZSB9IGZyb20gJy4vdGFza0RvbSc7XHJcbmltcG9ydCB7IGdldFByb2plY3RPZlRhc2sgfSBmcm9tICcuL3Rhc2tEb20nO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcclxuXHJcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xyXG5jb25zdCBwcm9qZWN0Rm9ybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWVkaXQnKTtcclxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xyXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcclxuY29uc3QgdGFza0Zvcm1FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1lZGl0Jyk7XHJcbmNvbnN0IGFsbFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudHMnKTtcclxuY29uc3QgY2FuY2VsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYW5jZWwnKTtcclxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1hc2lkZScpO1xyXG5sZXQgcHJvamVjdElkO1xyXG5sZXQgbmVlZGVkID0gW107XHJcbmxldCB0YXNrTmVlZHMgPSBbXTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBsZXQgbXlQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcblxyXG4vL2FkZHMgdGhlIGRlZmF1bHQgcHJvamVjdCB0byBzdG9yYWdlIGlmIHRoaXMgaXMgdGhlIGJyb3dzZXIncyBmaXJzdCB2aXNpdFxyXG5pZiAobXlQcm9qZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ015IFByb2plY3QnLCAnVGhpcyBpcyB0aGUgZGVmYXVsdCBwcm9qZWN0Jyk7XHJcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRQcm9qZWN0VG9TdG9yYWdlKCk7XHJcbn1cclxuXHJcbi8vZGlzcGxheXMgZWFjaCBwcm9qZWN0IGluIGxvY2FsIHN0b3JhZ2UgYW5kIGl0cyB0YXNrcyB0byB0aGUgRE9NXHJcbm15UHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4ge1xyXG4gICAgQWRkRnJvbVN0b3JhZ2UocHJvaik7XHJcblxyXG4gICAgaWYgKHByb2oucHJvamVjdFRhc2tzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHByb2oucHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgYWRkVGFza0Zyb21TdG9yYWdlKHRhc2ssIG15UHJvamVjdHMuaW5kZXhPZihwcm9qKSArIDMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxuZGlzcGxheVBhZ2UoKTtcclxuXHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlTaWRlYmFyKTtcclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVTaWRlYmFyKTtcclxuXHJcbi8vdG8gcmVtb3ZlIGEgZm9ybSB3aGVuIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZFxyXG5jYW5jZWxCdG5zLmZvckVhY2goKGNhbmNlbEJ0bikgPT4ge1xyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPT09ICd2aXNpYmxlJykge1xyXG4gICAgICAgICAgICByZW1vdmVGb3JtKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pOyAgIFxyXG59KTtcclxuXHJcblxyXG4vL2FkZCBhIG5ldyBQcm9qZWN0IGZyb20gYSBmb3JtXHJcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaG93Rm9ybShwcm9qZWN0Rm9ybSk7XHJcbn0pO1xyXG5cclxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZEFQcm9qZWN0KCk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5hbGxQcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAvL3RvIGFkZCBhIG5ldyB0YXNrIC0gIGluIGNvbnRpbnVpdHkgd2l0aCB0YXNrRm9ybSBldmVudCBsaXN0ZW5lciBiZWxvd1xyXG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbHVzLXRhc2snKSkge1xyXG4gICAgICAgIHNob3dGb3JtKHRhc2tGb3JtKTtcclxuICAgICAgICBwcm9qZWN0SWQgPSBnZXRQcm9qZWN0T2ZUYXNrKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtaWNvbicpKSB7XHJcbiAgICAgICAgLy9nZXQgdGhlIHRhcmdldCdzIGRhdGFJZCwgdGhlIHRpdGxlIGVsZW1lbnQgYW5kIGRlc2NyaXB0aW9uIGVsZW1lbnRcclxuICAgICAgICAvL3RoZXNlIHdpbGwgYmUgdXNlZCB0byBlZGl0IHRoZSBwcm9qZWN0IHRpdGxlIGFuZCBkZXNjcmlwdGlvbiB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZFxyXG4gICAgICAgIG5lZWRlZCA9IHNob3dFZGl0Rm9ybUFuZEdldEVkaXRCdG5EYXRhSWQoZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vZGVsZXRlIGEgcHJvamVjdFxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWljb24nKSkge1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3QoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGUgYSB0YXNrXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSkge1xyXG4gICAgICAgIGRlbGV0ZVRhc2soZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgdGhlIHRhcmdldCdzIGRhdGFJZCwgaXQncyBwcm9qZWN0Ym9keSBkYXRhIGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5IGFuZCBkdWVkYXRlIGVsZW1lbnRzXHJcbiAgICAvL3RoZXNlIHdpbGwgYmUgdXNlZCB0byBlZGl0IHRoZSB0YXNrIGRldGFpbHMgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWRcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQnKSkge1xyXG4gICAgICAgIHRhc2tOZWVkcyA9IGdldFRhc2tFbGVtZW50cyhlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NoZWNrIGEgdGFza1xyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgIGNoZWNrVGFzayhlKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBhZGRBVGFzayhwcm9qZWN0SWQpO1xyXG59KVxyXG5cclxuXHJcbnByb2plY3RGb3JtRWRpdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBlZGl0UHJvamVjdChuZWVkZWQpO1xyXG4gICAgcmVtb3ZlRm9ybShwcm9qZWN0Rm9ybUVkaXQpO1xyXG59KVxyXG5cclxuXHJcbnRhc2tGb3JtRWRpdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBlZGl0VGFzayh0YXNrTmVlZHMpO1xyXG4gICAgcmVtb3ZlRm9ybSh0YXNrRm9ybUVkaXQpO1xyXG59KVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyB0YWtlUHJvamVjdElucHV0cyB9IGZyb20gXCIuL2Zvcm1zXCI7XHJcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLlwiO1xyXG5cclxuXHJcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XHJcbmNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3RUb1N0b3JhZ2UoKSB7XHJcbiAgICAgICAgbXlQcm9qZWN0cy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldFByb2plY3RJZCgpIHtcclxuICAgIC8vICAgICByZXR1cm4gbXlQcm9qZWN0cy5pbmRleE9mKHRoaXMpO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICBwcm9qZWN0VGFza3MgPSBbXTtcclxuXHJcbiAgICAvLyBhZGRUYXNrKHRhc2spIHtcclxuICAgIC8vICAgICB0aGlzLnByb2plY3RUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuXHJcbi8vdGFrZXMgdGhlIGlucHV0cyBmcm9tIHRoZSBmb3JtLCBjcmVhdGVzIGEgcHJvamVjdCBvYmplY3QsIHN0b3JlcyBpdCBpbiBtZW1vcnlcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFQcm9qZWN0VG9TdG9yYWdlKCkge1xyXG4gICAgLy90YWtlIHRoZSB1c2VyJ3MgaW5wdXRzIGZyb20gdGhlIGZvcm1cclxuICAgIGxldCBwcm9qZWN0SW5wdXRzID0gdGFrZVByb2plY3RJbnB1dHMocHJvamVjdFRpdGxlLCBwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgLy9pbnN0YW50aWF0ZSBhIG5ldyBwcm9qZWN0IG9iamVjdCB3aXRoIHRoZSBpbnB1dHMgdGFrZW4gYW5kIHN0b3JlIGl0XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0c1swXSwgcHJvamVjdElucHV0c1sxXSk7XHJcbiAgICBuZXdQcm9qZWN0LmFkZFByb2plY3RUb1N0b3JhZ2UoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xyXG5cclxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG59XHJcblxyXG4vL2dldHMgdGhlIGRhdGEtaWQgb2YgdGhlIHByb2plY3RcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZVByb2plY3REb21JZChuZXdQcm9qZWN0KSB7XHJcbiAgICBsZXQgcHJvamVjdElkID0gbXlQcm9qZWN0cy5pbmRleE9mKG5ld1Byb2plY3QpO1xyXG4gICAgcHJvamVjdElkID0gcHJvamVjdElkICsgMztcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdElkO1xyXG59XHJcblxyXG5cclxuLy9maW5kcyB0aGUgcHJvamVjdCBpbiBhcnJheSBvZiBhbGwgcHJvamVjdHMgaW4gc3RvcmFnZSBhbmQgZGVsZXRlcyBpdFxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21TdG9yYWdlKGJ0bkRhdGFJZCwgcGFyZW50KSB7XHJcbiAgICBpZiAoYnRuRGF0YUlkID09PSBwYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHtcclxuICAgICAgICBteVByb2plY3RzLnNwbGljZShwYXJzZUludChidG5EYXRhSWQpIC0gMywgMSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL2NoYW5nZXMgcHJvamVjdHMgZGV0YWlscyBpbiBzdG9yYWdlXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvamVjdEluU3RvcmFnZShidG5EYXRhSWQsIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gcGFyc2VJbnQoYnRuRGF0YUlkKSAtIDM7XHJcbiAgICBteVByb2plY3RzW3Byb2plY3RJbmRleF0udGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIG15UHJvamVjdHNbcHJvamVjdEluZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XHJcblxyXG59XHJcbiIsImltcG9ydCBwbHVzSWNvbiBmcm9tICcuL2ltYWdlcy9wbHVzLnN2Zyc7XHJcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2ltYWdlcy9maWxlLWVkaXQtb3V0bGluZS5zdmcnO1xyXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Zyc7XHJcbmltcG9ydCB7IHNob3dGb3JtLCByZW1vdmVGb3JtLCBjbGVhcklucHV0cywgYWRkSW5wdXRzVG9Qcm9qZWN0Rm9ybSwgdGFrZVByb2plY3RJbnB1dHMgfSBmcm9tICcuL2Zvcm1zJztcclxuaW1wb3J0IGRpc3BsYXlQYWdlLCB7IG9wZW5QYWdlIH0gZnJvbSAnLi90YWJkaXNwbGF5JztcclxuaW1wb3J0IHsgYWRkQVByb2plY3RUb1N0b3JhZ2UsIGdldFRoZVByb2plY3REb21JZCwgZGVsZXRlUHJvamVjdEZyb21TdG9yYWdlLCBlZGl0UHJvamVjdEluU3RvcmFnZSB9IGZyb20gJy4vcHJvamVjdCc7XHJcblxyXG5cclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XHJcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XHJcbmNvbnN0IHRvZGF5TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXJzdCcpO1xyXG5jb25zdCBhbGxQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnRzJyk7XHJcbmNvbnN0IHByb2plY3RGb3JtRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tZWRpdCcpO1xyXG5jb25zdCBwcm9qZWN0VGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtZWRpdCcpO1xyXG5jb25zdCBwcm9qZWN0RGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzY3JpcHRpb24tZWRpdCcpO1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgcHJvamVjdEJvZGllcyA9IFtdO1xyXG5jb25zdCBhbGxUYXNrQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJvZHknKTtcclxuZm9yIChjb25zdCBjb250YWluZXIgb2YgYWxsVGFza0NvbnRhaW5lcnMpIHtcclxuICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09ICczJykge1xyXG4gICAgICAgIHByb2plY3RCb2RpZXMucHVzaChjb250YWluZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRBUHJvamVjdCgpIHtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gYWRkQVByb2plY3RUb1N0b3JhZ2UoKTtcclxuICAgIGxldCBwcm9qZWN0SWQgPSBnZXRUaGVQcm9qZWN0RG9tSWQobmV3UHJvamVjdCk7XHJcbiAgICBhcHBlbmRQcm9qZWN0VG9Eb20obmV3UHJvamVjdCwgcHJvamVjdElkKTtcclxuICAgIGFwcGVuZFRhYkxpbmsobmV3UHJvamVjdCwgcHJvamVjdElkKTtcclxuICAgIFxyXG4gICAgcmVtb3ZlRm9ybShwcm9qZWN0Rm9ybSk7XHJcbiAgICBjbGVhcklucHV0cyhwcm9qZWN0Rm9ybSk7XHJcbiAgICBcclxuICAgIC8vdGhpcyBpcyBzbyBuZXcgdGFibGluayBhbmQgdGFiY29udGVudCBhcmUgYWRkZWQgdG8gdGhlIGZsb3dcclxuICAgIGRpc3BsYXlQYWdlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRGcm9tU3RvcmFnZShwcm9qZWN0KSB7XHJcbiAgICBsZXQgcHJvamVjdElkID0gZ2V0VGhlUHJvamVjdERvbUlkKHByb2plY3QpO1xyXG4gICAgYXBwZW5kUHJvamVjdFRvRG9tKHByb2plY3QsIHByb2plY3RJZCk7XHJcbiAgICB0YWJsaW5rKHByb2plY3QudGl0bGUsIHByb2plY3RJZCk7XHJcbiAgICBkaXNwbGF5UGFnZSgpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xyXG5cclxuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgbGV0IGJ0bkRhdGFJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgZGVsZXRlUHJvamVjdEZyb21TdG9yYWdlKGJ0bkRhdGFJZCwgcGFyZW50KTtcclxuICAgIGRlbGV0ZVByb2plY3RGcm9tRG9tKGJ0bkRhdGFJZCwgcGFyZW50KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0UHJvamVjdChuZWVkZWQpIHtcclxuICAgIGxldCBlZGl0SW5wdXRzID0gdGFrZVByb2plY3RJbnB1dHMocHJvamVjdFRpdGxlRWRpdCwgcHJvamVjdERlc2NyaXB0aW9uRWRpdCk7XHJcblxyXG4gICAgZWRpdFByb2plY3RJblN0b3JhZ2UobmVlZGVkWzBdLCBlZGl0SW5wdXRzWzBdLCBlZGl0SW5wdXRzWzFdKTtcclxuICAgIGVkaXRQcm9qZWN0SW5Eb20obmVlZGVkWzBdLCBlZGl0SW5wdXRzLCBuZWVkZWRbMV0sIG5lZWRlZFsyXSk7XHJcbn1cclxuXHJcblxyXG4vL2NyZWF0ZXMgdGhlIHByb2plY3QgYW5kIGFkZHMgaXQgdG8gRE9NXHJcbmZ1bmN0aW9uIGFwcGVuZFByb2plY3RUb0RvbShuZXdQcm9qZWN0LCBwcm9qZWN0SWQpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudHMnKTtcclxuXHJcbiAgICBsZXQgbXlOZXdwcm9qZWN0ID0gcHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCBuZXdQcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0SWQpO1xyXG4gICAgXHJcbiAgICBhbGxQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChteU5ld3Byb2plY3QpO1xyXG59XHJcblxyXG5cclxuLy9jcmVhdGVzIHRoZSB0YWJsaW5rIGFuZCBlbnN1cmVzIHRoYXQgaXRzIGNvbnRlbnRzIGFyZSBkaXNwbGF5ZWQgaW1tZWRpYXRlbHkgdGhlIGZvcm0gaXMgc3VibWl0dGVkXHJcbmZ1bmN0aW9uIGFwcGVuZFRhYkxpbmsobmV3UHJvamVjdCwgcHJvamVjdElkKSB7XHJcbiAgICBsZXQgbmV3VGFiTGluayA9IHRhYmxpbmsobmV3UHJvamVjdC50aXRsZSwgcHJvamVjdElkKTtcclxuICAgIG9wZW5QYWdlKG5ld1Byb2plY3QudGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKSwgbmV3VGFiTGluayk7XHJcbn1cclxuXHJcblxyXG4vL2NyZWF0ZXMgdGFibGluayBmb3IgcHJvamVjdFxyXG5mdW5jdGlvbiB0YWJsaW5rKHByb2plY3RUaXRsZSwgcHJvamVjdElkKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWJ0bnMnKTtcclxuXHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCB0YWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0YWJMaW5rLmNsYXNzTmFtZSA9ICd0YWJsaW5rIHByb2plY3QtYnRuJztcclxuICAgIHRhYkxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdElkKTtcclxuICAgIHRhYkxpbmsudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0YWJMaW5rKTtcclxuXHJcbiAgICBwcm9qZWN0QnRucy5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcblxyXG4gICAgLy93ZSB3aWxsIHVzZSB0aGlzIHRvIG9wZW4gdGhlIHRhYmxpbmsncyBwYWdlIGNvbnRlbnQgcmlnaHQgYWZ0ZXIgaXQgaXMgY3JlYXRlZFxyXG4gICAgcmV0dXJuIHRhYkxpbms7XHJcbn1cclxuXHJcblxyXG4vL2NyZWF0ZXMgcHJvamVjdCBlbGVtZW50cyB0byBiZSBhZGRlZCB0byBET01cclxuZnVuY3Rpb24gcHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGFJZCkge1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBkYXRhSWQpO1xyXG4gICAgbmV3UHJvamVjdC5pZCA9IHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnJyk7XHJcbiAgICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9ICd0YWItY29udGVudCc7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RIZWFkLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWhlYWQnO1xyXG4gICAgY29uc3QgdGl0bGVBZGRUYXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZUFkZFRhc2tEZWxldGUuY2xhc3NOYW1lID0gJ3RpdGxlLWFkZHRhc2stZGVsZXRlJztcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGVkJztcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgdGl0bGVBZGRUYXNrRGVsZXRlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcblxyXG4gICAgbGV0IGJ0bkljb25zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGxldCBidG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuSWNvbi5jbGFzc05hbWUgPSAnYnRuLWljb24nO1xyXG4gICAgICAgIGJ0bkljb25zLnB1c2goYnRuSWNvbik7XHJcbiAgICAgICAgdGl0bGVBZGRUYXNrRGVsZXRlLmFwcGVuZENoaWxkKGJ0bkljb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwbHVzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHBsdXNJbWFnZS5zcmMgPSBwbHVzSWNvbjtcclxuICAgIGNvbnN0IGVkaXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZWRpdEltYWdlLnNyYyA9IGVkaXRJY29uO1xyXG4gICAgZWRpdEltYWdlLmNsYXNzTmFtZSA9ICdlZGl0LWljb24nO1xyXG4gICAgY29uc3QgdHJhc2hJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdHJhc2hJbWFnZS5zcmMgPSB0cmFzaEljb247XHJcbiAgICB0cmFzaEltYWdlLmNsYXNzTmFtZSA9ICdkZWxldGUtaWNvbic7XHJcblxyXG4gICAgYnRuSWNvbnNbMF0uYXBwZW5kQ2hpbGQocGx1c0ltYWdlKTtcclxuICAgIGJ0bkljb25zWzBdLmNsYXNzTGlzdC5hZGQoJ3BsdXMtdGFzaycpO1xyXG4gICAgYnRuSWNvbnNbMV0uYXBwZW5kQ2hpbGQoZWRpdEltYWdlKTtcclxuICAgIGJ0bkljb25zWzFdLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGRhdGFJZCk7XHJcbiAgICBidG5JY29uc1syXS5hcHBlbmRDaGlsZCh0cmFzaEltYWdlKTtcclxuICAgIGJ0bkljb25zWzJdLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGRhdGFJZClcclxuXHJcbiAgICBwcm9qZWN0SGVhZC5hcHBlbmRDaGlsZCh0aXRsZUFkZFRhc2tEZWxldGUpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAncHJvamVjdC1kZXNjcmliZWQnO1xyXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICBwcm9qZWN0SGVhZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0Qm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBkYXRhSWQpO1xyXG4gICAgcHJvamVjdEJvZHkuY2xhc3NOYW1lID0gJ3Byb2plY3QtYm9keSc7XHJcbiAgICBwcm9qZWN0Qm9kaWVzLnB1c2gocHJvamVjdEJvZHkpO1xyXG5cclxuICAgIG5ld1Byb2plY3QuYXBwZW5kKHByb2plY3RIZWFkLCBwcm9qZWN0Qm9keSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21Eb20oYnRuRGF0YUlkLCBwYXJlbnQpIHtcclxuXHJcbiAgICAvL3dlIHJlbW92ZSB0aGUgY29udGVudCBwYWdlIG9mIHRoYXQgcHJvamVjdFxyXG4gICAgaWYgKGJ0bkRhdGFJZCA9PT0gcGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XHJcbiAgICAgICAgYWxsUHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQocGFyZW50KTtcclxuICAgICAgICB0b2RheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0b2RheUxpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vd2UgcmVtb3ZlIHRoZSBsaW5rIGluIHRoZSBzaWRlYmFyIGNvcnJlc3BvbmRpbmcgdG8gdGhhdCBwcm9qZWN0XHJcbiAgICBjb25zdCB0YWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ0bicpO1xyXG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1idG5zJyk7XHJcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgdGFiTGlua3MpIHtcclxuICAgICAgICBpZiAoYnRuRGF0YUlkID09PSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RCdG5zLnJlbW92ZUNoaWxkKGxpbmsucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFByb2plY3RJbkRvbShidG5EYXRhSWQsIGVkaXRJbnB1dHMsIHRpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50KSB7XHJcbiAgICBcclxuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGVkaXRJbnB1dHNbMF07XHJcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0SW5wdXRzWzFdO1xyXG5cclxuICAgIGNvbnN0IHRhYkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxpbmsnKTtcclxuICAgIGZvciAoY29uc3QgbGluayBvZiB0YWJMaW5rcykge1xyXG4gICAgICAgIGlmIChsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBidG5EYXRhSWQpIHtcclxuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGVkaXRJbnB1dHNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy90aGUgZWRpdCBidXR0b24gZGF0YSBpZCB3aWlsIGJlIHVzZWQgdG8gZWRpdCB0aGF0IHByb2plY3QgaW4gc3RvcmFnZVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VkaXRGb3JtQW5kR2V0RWRpdEJ0bkRhdGFJZChlKSB7XHJcbiAgICBsZXQgbmVlZHMgPSBbXTtcclxuICAgIGxldCB0aXRsZUVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIGxldCB0aXRsZSA9IHRpdGxlRWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgYnRuRGF0YUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIG5lZWRzLnB1c2goYnRuRGF0YUlkLCB0aXRsZUVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudCk7XHJcblxyXG4gICAgc2hvd0Zvcm0ocHJvamVjdEZvcm1FZGl0KTtcclxuICAgIGFkZElucHV0c1RvUHJvamVjdEZvcm0odGl0bGUsIGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gbmVlZHM7XHJcbn1cclxuXHJcbiIsImNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcclxuY29uc3Qgc3BlY2lhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlY2lhbC1jb250ZW50cycpO1xyXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnRzJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlblBhZ2UocGFnZSwgZWxlbWVudCkge1xyXG4gICAgbGV0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1jb250ZW50Jyk7XHJcbiAgICBsZXQgdGFiTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGluaycpO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFiQ29udGVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFiTGlua3NbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGFiTGlua3NbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVBhZ2UoKSB7XHJcbiAgICBsZXQgdGFiQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWNvbnRlbnQnKTtcclxuICAgIGxldCB0YWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsaW5rJyk7XHJcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgdGFiTGlua3MpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRlbnQgb2YgdGFiQ29udGVudHMpIHtcclxuICAgICAgICAgICAgIGlmIChsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBjb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuUGFnZShjb250ZW50LmdldEF0dHJpYnV0ZSgnaWQnKSwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNpZGViYXIoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5U2lkZWJhcigpIHtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcclxuICAgIHNwZWNpYWxzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2lkZWJhcigpIHtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcclxuICAgIHNwZWNpYWxzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxuICAgIHByb2plY3RzQ29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyB0YWtlVGFza0lucHV0cyB9IGZyb20gXCIuL2Zvcm1zXCI7XHJcblxyXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpO1xyXG5jb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayBleHRlbmRzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgICAgIHN1cGVyKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcblxyXG4vL3Rha2VzIHRoZSBpbnB1dHMgZnJvbSB0aGUgdGFzayBmb3JtLCBjcmVhdGVzIGEgdGFzayB3aXRoIHRob3NlIGlucHV0IGFuZCBhZGRzIHRoZSB0YXNrIHRvIGl0cyBjYWxsaW5nIHByb2plY3RcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tUb1N0b3JhZ2UocHJvamVjdElkKSB7XHJcbiAgICBsZXQgdGFza0lucHV0cyA9IHRha2VUYXNrSW5wdXRzKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJpb3JpdHksIHRhc2tEdWVEYXRlKTtcclxuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza0lucHV0c1swXSwgdGFza0lucHV0c1sxXSwgdGFza0lucHV0c1syXSwgdGFza0lucHV0c1szXSk7XHJcbiAgICBteVByb2plY3RzW3Byb2plY3RJZCAtIDNdLnByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xyXG5cclxuICAgIHJldHVybiBuZXdUYXNrO1xyXG59XHJcblxyXG5cclxuLy9nZXRzIHRoZSBpbmRleCBvZiB0aGUgbmV3VGFzayBhZGRlZCBpbiBpdHMgcGFyZW50IHByb2plY3QncyBwcm9qZWN0VGFza3MgYXJyYXlcclxuLy90aGlzIHdpbGwgYmUgdXNlZCB0byBnaXZlIGEgZGF0YUlkIHRvIGVhY2ggdGFzayBjcmVhdGVkIGluIHRoYXQgcGFydGljdWxhciBwcm9qZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRleE9mVGFzayhwcm9qZWN0SWQsIG5ld1Rhc2spIHtcclxuXHJcbiAgICByZXR1cm4gbXlQcm9qZWN0c1twcm9qZWN0SWQgLSAzXS5wcm9qZWN0VGFza3MuaW5kZXhPZihuZXdUYXNrKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21TdG9yYWdlKGUsIGdyYW5kUGFyZW50KSB7XHJcbiAgICBsZXQgcHJvamVjdElkID0gZ3JhbmRQYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBwcm9qZWN0SWQgPSBwYXJzZUludChwcm9qZWN0SWQpIC0gMztcclxuXHJcbiAgICBsZXQgdGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLnByb2plY3RUYXNrcy5zcGxpY2UodGFza0lkLCAxKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFza0luU3RvcmFnZShidG5EYXRhSWQsIHByb2plY3RCb2R5RGF0YUlkLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld1ByaW9yaXR5LCBuZXdEdWVEYXRlKSB7XHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0SW5kZXggPSBwYXJzZUludChwcm9qZWN0Qm9keURhdGFJZCkgLSAzO1xyXG4gICAgbGV0IHRhc2tJbmRleCA9IHBhcnNlSW50KGJ0bkRhdGFJZCk7XHJcblxyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICBteVByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIG15UHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IGV4cGFuZEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi1hcnJvdy1kb3duLnN2Zyc7XHJcbmltcG9ydCB7IHRha2VUYXNrSW5wdXRzLCBjbGVhcklucHV0cywgcmVtb3ZlRm9ybSwgc2hvd0Zvcm0sIGFkZElucHV0c1RvVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0Qm9kaWVzIH0gZnJvbSBcIi4vcHJvamVjdERvbVwiO1xyXG5pbXBvcnQgeyBhZGRUYXNrVG9TdG9yYWdlLCBnZXRJbmRleE9mVGFzaywgZGVsZXRlVGFza0Zyb21TdG9yYWdlLCBlZGl0VGFza0luU3RvcmFnZSB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgaXNUaGlzV2VlaywgaXNUb2RheSB9IGZyb20gJ2RhdGUtZm5zJztcclxuXHJcblxyXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcclxuY29uc3QgdGFza0Zvcm1FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1lZGl0Jyk7XHJcblxyXG5jb25zdCB0YXNrVGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtZWRpdCcpO1xyXG5jb25zdCB0YXNrRGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24tZWRpdCcpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWVkaXQnKTtcclxuY29uc3QgdGFza0R1ZURhdGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLWVkaXQnKTtcclxuXHJcbmNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQtc3BlY2lhbCcpO1xyXG5jb25zdCB0b2RheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktc3BlY2lhbCcpO1xyXG5jb25zdCB0aGlzV2Vla3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmctc3BlY2lhbCcpO1xyXG5cclxuY29uc3QgaW1wb3J0YW50UGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQtcGFyYScpO1xyXG5jb25zdCB0b2RheVBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktcGFyYScpO1xyXG5jb25zdCB1cGNvbWluZ1BhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmctcGFyYScpO1xyXG5sZXQgaW1wb3J0YW50VGFza3MgPSBbXTtcclxubGV0IGFsbFRhc2tzID0gW107XHJcbmxldCB0b2RheXNUYXNrcyA9IFtdO1xyXG5sZXQgdGhpc1dlZWtzVGFza3MgPSBbXTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQVRhc2socHJvamVjdElkKSB7XHJcbiAgICBsZXQgbmV3VGFzayA9IGFkZFRhc2tUb1N0b3JhZ2UocHJvamVjdElkKTtcclxuICAgIGxldCB0YXNrSWQgPSBnZXRJbmRleE9mVGFzayhwcm9qZWN0SWQsIG5ld1Rhc2spO1xyXG4gICAgYXBwZW5kVGFza1RvRG9tKHByb2plY3RJZCwgbmV3VGFzaywgdGFza0lkKTtcclxuXHJcbiAgICBjbGVhcklucHV0cyh0YXNrRm9ybSk7XHJcbiAgICByZW1vdmVGb3JtKHRhc2tGb3JtKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tGcm9tU3RvcmFnZSh0YXNrLCBwcm9qZWN0SWQpIHtcclxuICAgIGxldCB0YXNrSWQgPSBnZXRJbmRleE9mVGFzayhwcm9qZWN0SWQsIHRhc2spO1xyXG4gICAgYXBwZW5kVGFza1RvRG9tKHByb2plY3RJZCwgdGFzaywgdGFza0lkKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcclxuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGxldCBncmFuZFBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGRlbGV0ZVRhc2tGcm9tU3RvcmFnZShlLCBncmFuZFBhcmVudCk7XHJcbiAgICBkZWxldGVUYXNrRnJvbURvbShncmFuZFBhcmVudCwgcGFyZW50KTsgICBcclxufVxyXG5cclxuLy90YXNrTmVlZHMgLSBbZWRpdEJ0bmRhdGFpZCwgcHJvamVjdElkLCB0aXRsZWVsZW1lbnQsIGRlc2NyaXB0aW9uZWxlbWVudCwgZXRjLl1cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKHRhc2tOZWVkcykge1xyXG4gICAgbGV0IGVkaXRUYXNrSW5wdXRzID0gdGFrZVRhc2tJbnB1dHModGFza1RpdGxlRWRpdCwgdGFza0Rlc2NyaXB0aW9uRWRpdCwgdGFza1ByaW9yaXR5RWRpdCwgdGFza0R1ZURhdGVFZGl0KTtcclxuICAgIFxyXG4gICAgZWRpdFRhc2tJblN0b3JhZ2UodGFza05lZWRzWzBdLCB0YXNrTmVlZHNbMV0sIGVkaXRUYXNrSW5wdXRzWzBdLCBlZGl0VGFza0lucHV0c1sxXSwgZWRpdFRhc2tJbnB1dHNbMl0sIGVkaXRUYXNrSW5wdXRzWzNdKTtcclxuICAgIGVkaXRUYXNrSW5Eb20oZWRpdFRhc2tJbnB1dHNbMF0sIGVkaXRUYXNrSW5wdXRzWzFdLCBlZGl0VGFza0lucHV0c1syXSwgZWRpdFRhc2tJbnB1dHNbM10sIHRhc2tOZWVkc1syXSwgdGFza05lZWRzWzNdLCB0YXNrTmVlZHNbNF0sIHRhc2tOZWVkc1s1XSwgdGFza05lZWRzWzBdLCB0YXNrTmVlZHNbMV0pO1xyXG4gICAgZWRpdFNwZWNpYWxUYXNrKHRhc2tOZWVkc1swXSwgdGFza05lZWRzWzFdLCBlZGl0VGFza0lucHV0c1swXSwgZWRpdFRhc2tJbnB1dHNbMV0sIGVkaXRUYXNrSW5wdXRzWzJdLCBlZGl0VGFza0lucHV0c1szXSk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Rhc2soZSkge1xyXG4gICAgbGV0IHRhc2tUaXRsZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIGNoZWNrKGUsIHRhc2tUaXRsZSk7XHJcblxyXG4gICAgbGV0IGRhdGFJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgbGV0IHByb2plY3REYXRhSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCB0YXNrRHVlRGF0ZSA9IHRhc2tQcmlvcml0eS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG5cclxuICAgIC8vbG9va3MgdGhyb3VnaCB0aGUgJ2ltcG9ydGFudCcgc2VjdGlvbiB0byBjaGVjayBzZWxlY3RlZCB0YXNrcyBhcyB3ZWxsXHJcbiAgICBpZiAodGFza1ByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnSGlnaCcpKSB7XHJcbiAgICAgICAgdmVyaWZ5SWRBbmRDaGVjayhlLCBpbXBvcnRhbnRUYXNrcywgZGF0YUlkLCBwcm9qZWN0RGF0YUlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xvb2tzIHRocm91Z2ggdG9kYXlzIHRhc2tzIHRvIHNlZSBpZiB0aGUgaXRlbSBpcyB0aGVyZSBhbmQgY2hlY2sgaXQgdGhlcmUgYXMgd2VsbFxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodGFza0R1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUlkQW5kQ2hlY2soZSwgdG9kYXlzVGFza3MsIGRhdGFJZCwgcHJvamVjdERhdGFJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUodGFza0R1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUlkQW5kQ2hlY2soZSwgdGhpc1dlZWtzVGFza3MsIGRhdGFJZCwgcHJvamVjdERhdGFJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbG9va3MgdGhyb3VnaCBhbiBhcnJheSBjb250YWluaW5nIHNwZWNpZmljIHRhc2tzIHRvIGNoZWNrIHRoZW0gYXMgd2VsbCBpZiB0aGV5IGFyZSB0aGVyZSBcclxuZnVuY3Rpb24gdmVyaWZ5SWRBbmRDaGVjayhlLCB0YXNrcywgZGF0YUlkLCBwcm9qZWN0RGF0YUlkKSB7XHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICBsZXQgdGFza1RpdGxlRWxlbWVudCA9IHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmICh0YXNrVGl0bGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBkYXRhSWQgJiYgdGFzay5nZXRBdHRyaWJ1dGUoJ3Byb2plY3QtZGF0YS1pZCcpID09PSBwcm9qZWN0RGF0YUlkKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hlY2soZSwgdGFza1RpdGxlRWxlbWVudCk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2soZSwgdGFza1RpdGxlKSB7XHJcbiAgICBcclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3VuY2hlY2tlZCcpO1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd1bmNoZWNrZWQnKTtcclxuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9nZXRzIHRoZSBkYXRhIElkIG9mIHRoZSBwcm9qZWN0ICd3aG9zZSBhZGQgdGFzaycgYnV0dG9uIHdhcyBjbGlja2VkLiBUaGlzIHdpbGwgYmUgdXNlZCB0byBhZGQgdGhhdCB0YXNrIHRvIGl0cyBwcm9qZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0T2ZUYXNrKGUpIHtcclxuICAgIGxldCBwYXJlbnRQcm9qZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGxldCBwYXJlbnRQcm9qZWN0SWQgPSBwYXJlbnRQcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgIHJldHVybiBwYXJzZUludChwYXJlbnRQcm9qZWN0SWQpO1xyXG59XHJcblxyXG5cclxuLy9hZGRzIHRoZSB0YXNrIGNyZWF0ZWQgdG8gdGhlIERPTVxyXG5mdW5jdGlvbiBhcHBlbmRUYXNrVG9Eb20ocHJvamVjdElkLCBuZXdUYXNrLCB0YXNrSWQpIHtcclxuICAgIGxldCBteVRhc2sgPSB0YXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2sucHJpb3JpdHksIG5ld1Rhc2suZHVlRGF0ZSwgdGFza0lkLCBwcm9qZWN0SWQpO1xyXG4gICAgbGV0IG15VGFzazIgPSB0YXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2sucHJpb3JpdHksIG5ld1Rhc2suZHVlRGF0ZSwgdGFza0lkLCBwcm9qZWN0SWQpO1xyXG4gICAgbGV0IG15VGFzazMgPSB0YXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2sucHJpb3JpdHksIG5ld1Rhc2suZHVlRGF0ZSwgdGFza0lkLCBwcm9qZWN0SWQpO1xyXG4gICAgbGV0IG15VGFzazQgPSB0YXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2sucHJpb3JpdHksIG5ld1Rhc2suZHVlRGF0ZSwgdGFza0lkLCBwcm9qZWN0SWQpO1xyXG5cclxuICAgIFxyXG4gICAgLy90byBzcGVjaWZ5IHdoaWNoIHByb2plY3QgdG8gYWRkIHRoZSB0YXNrIHRvXHJcbiAgICBwcm9qZWN0Qm9kaWVzW3Byb2plY3RJZCAtIDNdLmFwcGVuZENoaWxkKG15VGFzayk7XHJcbiAgICAvL2FsbCB0YXNrcyBjcmVhdGVkIGFyZSBwdXQgaW4gdGhpcyBhcnJheS4gV2Ugd2lsbCBsb29wIHRocm91Z3RoIHRoaXMgdG8gZmluZCB0b2RheSdzIHRhc2tzXHJcbiAgICBhbGxUYXNrcy5wdXNoKG15VGFzayk7XHJcblxyXG4gICAgLy9hcHBlbmRzIHRoZSB0YXNrIHRvIHRoZSAnaW1wb3J0YW50JyBzZWN0aW9uIGlmIGl0cyBwcmlvcml0eSBpcyBoaWdoXHJcbiAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgICAgaW1wb3J0YW50UGFyYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGltcG9ydGFudC5hcHBlbmRDaGlsZChteVRhc2syKTtcclxuICAgICAgICBpbXBvcnRhbnRUYXNrcy5wdXNoKG15VGFzazIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUobmV3VGFzay5kdWVEYXRlKTtcclxuICAgIGlmIChpc1RvZGF5KGR1ZURhdGUpKSB7XHJcbiAgICAgICAgdG9kYXlQYXJhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdG9kYXlzLmFwcGVuZENoaWxkKG15VGFzazMpO1xyXG4gICAgICAgIHRvZGF5c1Rhc2tzLnB1c2gobXlUYXNrMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVGhpc1dlZWsoZHVlRGF0ZSkpIHtcclxuICAgICAgICB1cGNvbWluZ1BhcmEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzV2Vla3MuYXBwZW5kQ2hpbGQobXlUYXNrNCk7XHJcbiAgICAgICAgdGhpc1dlZWtzVGFza3MucHVzaChteVRhc2s0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vY3JlYXRlcyB0YXNrIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvIERPTVxyXG5mdW5jdGlvbiB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHRhc2tJZCwgcHJvamVjdElkKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdUYXNrLmNsYXNzTmFtZSA9ICd0YXNrJztcclxuICAgIG5ld1Rhc2suc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFza0lkKTtcclxuICAgIG5ld1Rhc2suc2V0QXR0cmlidXRlKCdwcm9qZWN0LWRhdGEtaWQnLCBwcm9qZWN0SWQpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrSGVhZC5jbGFzc05hbWUgPSAndGFzay1oZWFkJztcclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2tJZCk7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgdGFza1RpdGxlLmNsYXNzTmFtZSA9ICd0YXNrLXRpdGxlZCB1bmNoZWNrZWQnO1xyXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2tJZCk7XHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBjb25zdCBleHBhbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGV4cGFuZEJ0bi5jbGFzc05hbWUgPSAnZXhwYW5kLWljb24nO1xyXG4gICAgY29uc3QgZXhwYW5kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGV4cGFuZEltYWdlLnNyYyA9IGV4cGFuZEljb247XHJcbiAgICBleHBhbmRCdG4uYXBwZW5kQ2hpbGQoZXhwYW5kSW1hZ2UpO1xyXG5cclxuICAgIHRhc2tIZWFkLmFwcGVuZChjaGVjaywgdGFza1RpdGxlLCBleHBhbmRCdG4pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkb2N1bWVudC5jbGFzc05hbWUgPSAndGFzay1kZXRhaWxzJztcclxuICAgIFxyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0YXNrLWRlc2NyaWJlZCc7XHJcbiAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICEoZGVzY3JpcHRpb24udHJpbSgpKSkge1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdub3Qtc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ05vIGRlc2NyaXB0aW9uIHByb3ZpZGVkJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcclxuICAgIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcmlvcml0eUJ0bi5jbGFzc05hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XHJcbiAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gICAgXHJcbiAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdG4pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6ICc7XHJcbiAgICBjb25zdCBkdWVEYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGlmIChkdWVEYXRlICE9PSAnJykge1xyXG4gICAgICAgIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZHVlRGF0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnbm90LXNwZWNpZmllZCcpO1xyXG4gICAgICAgIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gJ05vdCBzcGVjaWZpZWQnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0YXNrRHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XHJcblxyXG4gICAgY29uc3QgdGFza0J0bnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tCdG5zQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrLWJ0bnMnO1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZWRpdEJ0bi5jbGFzc05hbWUgPSAnYnRuLWluLW1haW4gZWRpdCc7XHJcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrSWQpXHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAnYnRuLWluLW1haW4gZGVsZXRlJztcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrSWQpO1xyXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgICB0YXNrQnRuc0NvbnRhaW5lci5hcHBlbmQoZWRpdEJ0biwgZGVsZXRlQnRuKTtcclxuXHJcbiAgICB0YXNrRGV0YWlscy5hcHBlbmQodGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJpb3JpdHksIHRhc2tEdWVEYXRlLCB0YXNrQnRuc0NvbnRhaW5lcik7XHJcblxyXG4gICAgZXhwYW5kSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xyXG4gICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoJ2ludmlzaWJsZScpO1xyXG4gICAgfSlcclxuXHJcbiAgICBuZXdUYXNrLmFwcGVuZCh0YXNrSGVhZCwgdGFza0RldGFpbHMpO1xyXG5cclxuICAgIHJldHVybiBuZXdUYXNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbURvbShncmFuZFBhcmVudCwgcGFyZW50KSB7XHJcblxyXG4gICAgZ3JhbmRQYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50KTtcclxuXHJcbiAgICBsZXQgdGFza0lkID0gcGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgbGV0IHByb2plY3REYXRhSWQgPSBncmFuZFBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGxldCB0YXNrUHJpb3JpdHlFbGVtZW50ID0gcGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGRcclxuICAgIGxldCB0YXNrRHVlRGF0ZSA9IHRhc2tQcmlvcml0eUVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgLy9kZWxldGVzIHRoZSB0YXNrIGZyb20gdGhlICdpbXBvcnRhbnQnIHNlY3Rpb24gYXMgd2VsbCBpZiBpdCBpcyB0aGVyZVxyXG4gICAgaWYgKHRhc2tQcmlvcml0eUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdIaWdoJykpIHtcclxuICAgICAgICB2ZXJpZnlBbmREZWxldGUoaW1wb3J0YW50VGFza3MsIGltcG9ydGFudCwgdGFza0lkLCBwcm9qZWN0RGF0YUlkLCBpbXBvcnRhbnRQYXJhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZXMgdGhlIHRhc2sgaWYgaXQgaXMgaW4gdGhlICd0b2RheScgc2VjdGlvbiBhcyB3ZWxsXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0YXNrRHVlRGF0ZSkpKSB7XHJcbiAgICAgICAgdmVyaWZ5QW5kRGVsZXRlKHRvZGF5c1Rhc2tzLCB0b2RheXMsIHRhc2tJZCwgcHJvamVjdERhdGFJZCwgdG9kYXlQYXJhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZSBpZiBpbiB0aGlzIHdlZWsgc2VjdGlvblxyXG4gICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUodGFza0R1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUFuZERlbGV0ZSh0aGlzV2Vla3NUYXNrcywgdGhpc1dlZWtzLCB0YXNrSWQsIHByb2plY3REYXRhSWQsIHVwY29taW5nUGFyYSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2RlbGV0ZSB0YXNrIGZyb20gYSBzZWN0aW9uXHJcbmZ1bmN0aW9uIHZlcmlmeUFuZERlbGV0ZSh0YXNrcywgc2VjdGlvbiwgdGFza0lkLCBwcm9qZWN0RGF0YUlkLCBzZWN0aW9uUGFyYSkge1xyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgICAgaWYgKHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IHRhc2tJZCAmJiB0YXNrLmdldEF0dHJpYnV0ZSgncHJvamVjdC1kYXRhLWlkJykgPT09IHByb2plY3REYXRhSWQpIHtcclxuICAgICAgICAgICAgc2VjdGlvbi5yZW1vdmVDaGlsZCh0YXNrKTtcclxuICAgICAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tzLmluZGV4T2YodGFzayksIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvblBhcmEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL3RoZXNlIHdpbGwgYmUgdXNlZCB0byBlZGl0IHRoZSBlbGVtZW50IGNvbnRlbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRWxlbWVudHMoZSkge1xyXG4gICAgbGV0IHRhc2tOZWVkcyA9IFtdO1xyXG4gICAgbGV0IHRpdGxlRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGxldCB0aXRsZSA9IHRpdGxlRWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgZGVzY3JpcHRpb247XHJcbiAgICBpZiAoZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID09PSAnTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQnKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBsZXQgcHJpb3JpdHlFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCBwcmlvcml0eSA9IHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIGxldCBkdWVEYXRlRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IGR1ZURhdGUgPSBkdWVEYXRlRWxlbWVudC50ZXh0Q29udGVudDtcclxuXHJcbiAgICBsZXQgdGFza1Byb2plY3RCb2R5RGF0YUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGxldCBlZGl0QnRuRGF0YUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBcclxuICAgIHRhc2tOZWVkcy5wdXNoKGVkaXRCdG5EYXRhSWQsIHRhc2tQcm9qZWN0Qm9keURhdGFJZCwgdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnQsIHByaW9yaXR5RWxlbWVudCwgZHVlRGF0ZUVsZW1lbnQpO1xyXG5cclxuICAgIHNob3dGb3JtKHRhc2tGb3JtRWRpdCk7XHJcbiAgICBhZGRJbnB1dHNUb1Rhc2tGb3JtKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xyXG5cclxuICAgIHJldHVybiB0YXNrTmVlZHM7ICAgXHJcbn1cclxuXHJcblxyXG4vL2ZpbGwgaW4gdGhlIHRhc2sgZGV0YWlscyB3aXRoIHRoZSBuZXcgaW5wdXRzIHRha2VuXHJcbmZ1bmN0aW9uIGVkaXRUYXNrSW5Eb20odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnQsIHByaW9yaXR5RWxlbWVudCwgZHVlRGF0ZUVsZW1lbnQpIHtcclxuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGlmICghZGVzY3JpcHRpb24gfHwgIShkZXNjcmlwdGlvbi50cmltKCkpKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gJ05vIGRlc2NyaXB0aW9uIHByb3ZpZGVkJztcclxuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC1zcGVjaWZpZWQnKSkge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LXNwZWNpZmllZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3Qtc3BlY2lmaWVkJykpIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1zcGVjaWZpZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gICAgcHJpb3JpdHlFbGVtZW50LmNsYXNzTmFtZSA9IGBwcmlvcml0eSAke3ByaW9yaXR5fWA7XHJcbiAgICBcclxuICAgIGlmIChkdWVEYXRlICE9PSAnJykge1xyXG4gICAgICAgIGR1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZHVlRGF0ZTtcclxuICAgICAgICBpZiAoZHVlRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3Qtc3BlY2lmaWVkJykpIHtcclxuICAgICAgICAgICAgZHVlRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXNwZWNpZmllZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnTm90IHNwZWNpZmllZCc7XHJcbiAgICAgICAgaWYgKGR1ZURhdGVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbm90LXNwZWNpZmllZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkdWVEYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3Qtc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0U3BlY2lhbFRhc2soZWRpdEJ0bkRhdGFJZCwgcHJvamVjdERhdGFJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkgeyAgIFxyXG5cclxuICAgIC8vaWYgdGhlIHByaW9yaXR5IGlucHV0IGlzIGhpZ2gsIGZpcnN0IGNoZWNrIGlmIGl0cyBhbHJlYWR5IGluIHRoZSAnaW1wb3J0YW50JyBzZWN0aW9uXHJcbiAgICBpZiAocHJpb3JpdHkgPT09ICdIaWdoJykge1xyXG4gICAgICAgIHZlcmlmeUFuZEVkaXRPckFkZChpbXBvcnRhbnRUYXNrcywgaW1wb3J0YW50LCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpbXBvcnRhbnRQYXJhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9pZiBwcmlvcml0eSBoYXMgYmVlbiBjaGFuZ2VkIGZyb20gSGlnaCBhbmQgaXRzIGluIHRoZSBpbXBvcnRhbnQgc2VjdGlvbiwgd2UgcmVtb3ZlIGl0XHJcbiAgICAgICAgdmVyaWZ5QW5kUmVtb3ZlKGltcG9ydGFudFRhc2tzLCBpbXBvcnRhbnQsIGVkaXRCdG5EYXRhSWQsIHByb2plY3REYXRhSWQsIGltcG9ydGFudFBhcmEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2VkaXQgZm9yIHRoZSAndG9kYXknIHNlY3Rpb25cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKGR1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUFuZEVkaXRPckFkZCh0b2RheXNUYXNrcywgdG9kYXlzLCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCB0b2RheVBhcmEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZlcmlmeUFuZFJlbW92ZSh0b2RheXNUYXNrcywgdG9kYXlzLCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0b2RheVBhcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZWRpdCBmb3IgJ3RoaXMgd2Vlaycgc2VjdGlvblxyXG4gICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUoZHVlRGF0ZSkpKSB7XHJcbiAgICAgICAgdmVyaWZ5QW5kRWRpdE9yQWRkKHRoaXNXZWVrc1Rhc2tzLCB0aGlzV2Vla3MsIGVkaXRCdG5EYXRhSWQsIHByb2plY3REYXRhSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHVwY29taW5nUGFyYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmVyaWZ5QW5kUmVtb3ZlKHRoaXNXZWVrc1Rhc2tzLCB0aGlzV2Vla3MsIGVkaXRCdG5EYXRhSWQsIHByb2plY3REYXRhSWQsIHVwY29taW5nUGFyYSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL2VkaXRzIHRoZSBpbmZvIGluIGEgc3BlY2lhbCBzZWN0aW9uIGlmIGl0cyB0aGVyZSBhbmQgYWRkcyBpdCBpZiB0aGUgZWRpdGVkIGRhdGEgZml0cyBjcml0ZXJpYSBmb3IgdGhhdCB0YXNrIHRvIGJlIGluIHRoYXQgc3BlY2lhbCBzZWN0aW9uXHJcbmZ1bmN0aW9uIHZlcmlmeUFuZEVkaXRPckFkZCh0YXNrcywgc2VjdGlvbiwgZGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBzZWN0aW9uUGFyYSkge1xyXG4gICAgLy9jaGVja3MgaWYgaXRzIHRoZXJlIGZpcnN0XHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICBpZiAodGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gZGF0YUlkICYmIHRhc2suZ2V0QXR0cmlidXRlKCdwcm9qZWN0LWRhdGEtaWQnKSA9PT0gcHJvamVjdERhdGFJZCkge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVFbGVtZW50ID0gdGFzay5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGxldCBwcmlvcml0eUVsZW1lbnQgPSBkZXNjcmlwdGlvbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGxldCBkdWVEYXRlRWxlbWVudCA9IGRlc2NyaXB0aW9uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgICAgICBlZGl0VGFza0luRG9tKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHRpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50LCBwcmlvcml0eUVsZW1lbnQsIGR1ZURhdGVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vaWYgaXQncyBub3QgdGhlcmUsIGNyZWF0ZSB0YXNrIGVsZW1lbnRzIGZvciBpdCBhbmQgYWRkIGl0IHRvIHRoZSBzcGVjaWFsIHNlY3Rpb25cclxuICAgIGxldCBlZGl0ZWRUYXNrID0gdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBkYXRhSWQsIHByb2plY3REYXRhSWQpO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChlZGl0ZWRUYXNrKTtcclxuICAgIHRhc2tzLnB1c2goZWRpdGVkVGFzayk7XHJcblxyXG4gICAgc2VjdGlvblBhcmEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuXHJcbi8vcmVtb3ZlcyB0aGUgaW5mbyBmcm9tIHRoZSBzcGVjaWFsIHNlY3Rpb24gaWYgZWRpdGVkIGRhdGEgbWFrZXMgaXQgdW5maXQgdG8gYmUgdGhlcmVcclxuZnVuY3Rpb24gdmVyaWZ5QW5kUmVtb3ZlKHRhc2tzLCBzZWN0aW9uLCBkYXRhSWQsIHByb2plY3REYXRhSWQsIHNlY3Rpb25QYXJhKSB7XHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICBpZiAodGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gZGF0YUlkICYmIHRhc2suZ2V0QXR0cmlidXRlKCdwcm9qZWN0LWRhdGEtaWQnKSA9PT0gcHJvamVjdERhdGFJZCkge1xyXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQodGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzZWN0aW9uUGFyYS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=