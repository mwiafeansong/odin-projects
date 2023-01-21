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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --base-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; \r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: var(--base-font);\r\n    display: flex;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.8rem;\r\n    font-style: italic;\r\n}\r\n\r\nbutton {\r\n    font-family: var(--base-font);\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-icon {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-icon img {\r\n    width: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nform {\r\n    width: 300px;\r\n    background-color: #fff;\r\n    padding: 0 20px 15px 20px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    inset: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    box-shadow: 3px 3px 5px grey;\r\n    visibility: hidden;\r\n    z-index: 2;\r\n    height: fit-content;\r\n}\r\n\r\nform input, select, textarea {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 30px;\r\n    border: none;\r\n    background-color: #ddd;\r\n    margin-top: 4px;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    padding: 3px 5px;\r\n}\r\n\r\nform input:focus,\r\nform select:focus,\r\nform textarea:focus {\r\n    outline: none;\r\n    border: 1px solid #555;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\n.form-btns {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    gap: 8px;\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:not(.cancel) {\r\n    background-color: #ccc;\r\n}\r\n\r\nform button:not(.cancel):hover {\r\n    background-color: #999;\r\n}\r\n\r\n.cancel {\r\n    background-color: #f22;\r\n}\r\n\r\n.backdrop {\r\n    position: fixed;\r\n    inset: 0;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    pointer-events: none;\r\n    opacity: 0;\r\n}\r\n\r\n.backdrop.show {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n/* ASIDE */\r\naside {\r\n    background-color: #eee;\r\n    min-height: 100vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    width: 30%;\r\n    z-index: 1;\r\n    transition: .2s ease-in;\r\n    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);\r\n    padding: 20px;\r\n}\r\n\r\n.aside-head {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.close-aside {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-project {\r\n    display: block;\r\n    margin: 15px auto;\r\n    padding: 7px 25px;\r\n    border: none;\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n.add-project:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\naside h2 {\r\n    margin-top: 20px;\r\n    font-size: 1.2rem;\r\n    padding-left: 25px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.tablink {\r\n    display: block;\r\n    padding: 7px 8px;\r\n    margin-bottom: 3px;\r\n    width: 100%;\r\n    text-align: start;\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tablink:hover {\r\n    background-color: #ccc;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.tablink.first {\r\n    border-left: 7px solid #2f2;\r\n}\r\n\r\n.tablink.second {\r\n    border-left: 7px solid #ff0;\r\n}\r\n\r\n.tablink.third {\r\n    border-left: 7px solid #f22;\r\n}\r\n\r\n.show {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n/* MAIN */\r\nmain {\r\n    position: relative;\r\n    width: 70%;\r\n}\r\n\r\n.hamburger {\r\n    position: fixed;\r\n    right: 5px;\r\n    top: 5px;\r\n    visibility: hidden;\r\n}\r\n\r\n.tab-content {\r\n    min-height: 100vh;\r\n    padding: 50px 25px;\r\n    width: 100%;\r\n}\r\n\r\n.tab-content:not(#today){\r\n    display: none;\r\n}\r\n\r\n.tab-content#today {\r\n    display: block;\r\n}\r\n\r\n.special-contents .task-btns,\r\n.special-contents input[type=checkbox] { \r\n    display: none;\r\n}\r\n\r\n/* SPECIAL SECTION */\r\n.special-contents h3 {\r\n    font-size: 1.5rem;\r\n    color: #444;\r\n}\r\n\r\n.today-para,\r\n.upcoming-para,\r\n.important-para {\r\n    padding: 30px;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* PROJECT TABS */\r\n.project-head {\r\n    border-bottom : 1px solid #ccc;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.title-addtask-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.project-head h3 {\r\n    font-size: 1.55rem;\r\n    margin-left: 0;\r\n    margin-right: auto;\r\n}\r\n\r\n#myproject .btn-icon:not(.plus-task) {\r\n    display: none;\r\n}\r\n\r\n.task {\r\n    padding-top: 25px;\r\n}\r\n\r\n.task-head {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    padding-bottom: 3px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.task-titled {\r\n    font-size: 1.1rem;\r\n    margin-top: -2px;\r\n}\r\n\r\n.task-titled.unchecked {\r\n    color: #22f;\r\n}\r\n\r\n.task-titled.checked {\r\n    color: #777;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.expand-icon {\r\n    margin-right: 0;\r\n    margin-left: auto;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.expand-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.expand-icon img {\r\n    width: 15px;\r\n}\r\n\r\n.task p, .task-btns {\r\n    padding-top: 5px;\r\n}\r\n\r\n.priority {\r\n    padding: 0px 5px;\r\n    background-color: transparent;\r\n    font-size: 0.85rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority.Low {\r\n    border: 3px solid #22f;\r\n}\r\n\r\n.priority.Medium {\r\n    border: 3px solid #ffcc00\r\n}\r\n\r\n.priority.High {\r\n    border: 3px solid #f22;\r\n}\r\n\r\n.task-btns {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 8px;\r\n}\r\n\r\n.btn-in-main {\r\n    padding: 3px 7px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-in-main:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.edit {\r\n    background-color: #ddd;\r\n}\r\n\r\n.edit:hover {\r\n    background-color: #999;\r\n}\r\n\r\n.delete {\r\n    background-color: #f33222;\r\n}\r\n\r\n\r\n/* JS styles */\r\n.not-specified {\r\n    font-style: italic;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.rotate {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n\r\n@media screen and (max-width: 580px) {\r\n    aside {\r\n        position: absolute;\r\n        width: 80%;\r\n        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    .close-aside {\r\n        visibility: visible;\r\n    }\r\n\r\n    main {\r\n        width: 100vw;\r\n    }\r\n\r\n    .hamburger {\r\n        visibility: visible;\r\n    }\r\n\r\n    .hide {\r\n        padding: 0;\r\n        width: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --base-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; \r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: var(--base-font);\r\n    display: flex;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.8rem;\r\n    font-style: italic;\r\n}\r\n\r\nbutton {\r\n    font-family: var(--base-font);\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-icon {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-icon img {\r\n    width: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nform {\r\n    width: 300px;\r\n    background-color: #fff;\r\n    padding: 0 20px 15px 20px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    inset: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    box-shadow: 3px 3px 5px grey;\r\n    visibility: hidden;\r\n    z-index: 2;\r\n    height: fit-content;\r\n}\r\n\r\nform input, select, textarea {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 30px;\r\n    border: none;\r\n    background-color: #ddd;\r\n    margin-top: 4px;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    padding: 3px 5px;\r\n}\r\n\r\nform input:focus,\r\nform select:focus,\r\nform textarea:focus {\r\n    outline: none;\r\n    border: 1px solid #555;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\n.form-btns {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    gap: 8px;\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:not(.cancel) {\r\n    background-color: #ccc;\r\n}\r\n\r\nform button:not(.cancel):hover {\r\n    background-color: #999;\r\n}\r\n\r\n.cancel {\r\n    background-color: #f22;\r\n}\r\n\r\n.backdrop {\r\n    position: fixed;\r\n    inset: 0;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    pointer-events: none;\r\n    opacity: 0;\r\n}\r\n\r\n.backdrop.show {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n/* ASIDE */\r\naside {\r\n    background-color: #eee;\r\n    min-height: 100vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    width: 30%;\r\n    z-index: 1;\r\n    transition: .2s ease-in;\r\n    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);\r\n    padding: 20px;\r\n}\r\n\r\n.aside-head {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.close-aside {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-project {\r\n    display: block;\r\n    margin: 15px auto;\r\n    padding: 7px 25px;\r\n    border: none;\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n.add-project:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\naside h2 {\r\n    margin-top: 20px;\r\n    font-size: 1.2rem;\r\n    padding-left: 25px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.tablink {\r\n    display: block;\r\n    padding: 7px 8px;\r\n    margin-bottom: 3px;\r\n    width: 100%;\r\n    text-align: start;\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tablink:hover {\r\n    background-color: #ccc;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.tablink.first {\r\n    border-left: 7px solid #2f2;\r\n}\r\n\r\n.tablink.second {\r\n    border-left: 7px solid #ff0;\r\n}\r\n\r\n.tablink.third {\r\n    border-left: 7px solid #f22;\r\n}\r\n\r\n.show {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n/* MAIN */\r\nmain {\r\n    position: relative;\r\n    width: 70%;\r\n}\r\n\r\n.hamburger {\r\n    position: fixed;\r\n    right: 5px;\r\n    top: 5px;\r\n    visibility: hidden;\r\n}\r\n\r\n.tab-content {\r\n    min-height: 100vh;\r\n    padding: 50px 25px;\r\n    width: 100%;\r\n}\r\n\r\n.tab-content:not(#today){\r\n    display: none;\r\n}\r\n\r\n.tab-content#today {\r\n    display: block;\r\n}\r\n\r\n.special-contents .task-btns,\r\n.special-contents input[type=checkbox] { \r\n    display: none;\r\n}\r\n\r\n/* SPECIAL SECTION */\r\n.special-contents h3 {\r\n    font-size: 1.5rem;\r\n    color: #444;\r\n}\r\n\r\n.today-para,\r\n.upcoming-para,\r\n.important-para {\r\n    padding: 30px;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* PROJECT TABS */\r\n.project-head {\r\n    border-bottom : 1px solid #ccc;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.title-addtask-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.project-head h3 {\r\n    font-size: 1.55rem;\r\n    margin-left: 0;\r\n    margin-right: auto;\r\n}\r\n\r\n#myproject .btn-icon:not(.plus-task) {\r\n    display: none;\r\n}\r\n\r\n.task {\r\n    padding-top: 25px;\r\n}\r\n\r\n.task-head {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    padding-bottom: 3px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.task-titled {\r\n    font-size: 1.1rem;\r\n    margin-top: -2px;\r\n}\r\n\r\n.task-titled.unchecked {\r\n    color: #22f;\r\n}\r\n\r\n.task-titled.checked {\r\n    color: #777;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.expand-icon {\r\n    margin-right: 0;\r\n    margin-left: auto;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.expand-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.expand-icon img {\r\n    width: 15px;\r\n}\r\n\r\n.task p, .task-btns {\r\n    padding-top: 5px;\r\n}\r\n\r\n.priority {\r\n    padding: 0px 5px;\r\n    background-color: transparent;\r\n    font-size: 0.85rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority.Low {\r\n    border: 3px solid #22f;\r\n}\r\n\r\n.priority.Medium {\r\n    border: 3px solid #ffcc00\r\n}\r\n\r\n.priority.High {\r\n    border: 3px solid #f22;\r\n}\r\n\r\n.task-btns {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 8px;\r\n}\r\n\r\n.btn-in-main {\r\n    padding: 3px 7px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-in-main:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.edit {\r\n    background-color: #ddd;\r\n}\r\n\r\n.edit:hover {\r\n    background-color: #999;\r\n}\r\n\r\n.delete {\r\n    background-color: #f33222;\r\n}\r\n\r\n\r\n/* JS styles */\r\n.not-specified {\r\n    font-style: italic;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.rotate {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n\r\n@media screen and (max-width: 580px) {\r\n    aside {\r\n        position: absolute;\r\n        width: 80%;\r\n        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    .close-aside {\r\n        visibility: visible;\r\n    }\r\n\r\n    main {\r\n        width: 100vw;\r\n    }\r\n\r\n    .hamburger {\r\n        visibility: visible;\r\n    }\r\n\r\n    .hide {\r\n        padding: 0;\r\n        width: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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
    aside.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    aside.style.pointerEvents = 'none';
}

function removeForm(formType) {
    backDrop.classList.remove('show');
    formType.style.visibility = 'hidden';
    aside.style.backgroundColor = '#eee';
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
    aside.classList.remove('hide');
}

function removeSidebar() {
    aside.classList.add('hide')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsVUFBVSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9B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O0FBQ0EsUUFBUSxvREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVE7QUFDWixJQUFJLDJEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQU87QUFDZjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVU7QUFDbEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDclpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFiZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFza0RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWJhc2UtZm9udDogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7IFxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtZm9udCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtZm9udCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWljb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHggMTVweCAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBncmV5O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0OmZvY3VzLFxcclxcbmZvcm0gc2VsZWN0OmZvY3VzLFxcclxcbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpub3QoLmNhbmNlbCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpub3QoLmNhbmNlbCk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wLnNob3cge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBU0lERSAqL1xcclxcbmFzaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLWhlYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1hc2lkZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA3cHggMjVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIGgyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDdweCA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsuZmlyc3Qge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMyZjI7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rLnNlY29uZCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsudGhpcmQge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmMjI7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcbm1haW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGVudCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRlbnQ6bm90KCN0b2RheSl7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGVudCN0b2RheSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BlY2lhbC1jb250ZW50cyAudGFzay1idG5zLFxcclxcbi5zcGVjaWFsLWNvbnRlbnRzIGlucHV0W3R5cGU9Y2hlY2tib3hdIHsgXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFNQRUNJQUwgU0VDVElPTiAqL1xcclxcbi5zcGVjaWFsLWNvbnRlbnRzIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktcGFyYSxcXHJcXG4udXBjb21pbmctcGFyYSxcXHJcXG4uaW1wb3J0YW50LXBhcmEge1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFBST0pFQ1QgVEFCUyAqL1xcclxcbi5wcm9qZWN0LWhlYWQge1xcclxcbiAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1hZGR0YXNrLWRlbGV0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWQgaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuNTVyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNteXByb2plY3QgLmJ0bi1pY29uOm5vdCgucGx1cy10YXNrKSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZWQudW5jaGVja2VkIHtcXHJcXG4gICAgY29sb3I6ICMyMmY7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlZC5jaGVja2VkIHtcXHJcXG4gICAgY29sb3I6ICM3Nzc7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWljb24ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWljb246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtaWNvbiBpbWcge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgcCwgLnRhc2stYnRucyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LkxvdyB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyMmY7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS5NZWRpdW0ge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZjYzAwXFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS5IaWdoIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWluLW1haW4ge1xcclxcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pbi1tYWluOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5lZGl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzMyMjI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEpTIHN0eWxlcyAqL1xcclxcbi5ub3Qtc3BlY2lmaWVkIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdGF0ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxyXFxuICAgIGFzaWRlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2xvc2UtYXNpZGUge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhpZGUge1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0REFBNEQ7QUFD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QWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLDRDQUE0QztJQUNoRDs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsUUFBUTtJQUNaO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJhc2UtZm9udDogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7IFxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtZm9udCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtZm9udCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWljb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHggMTVweCAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBncmV5O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0OmZvY3VzLFxcclxcbmZvcm0gc2VsZWN0OmZvY3VzLFxcclxcbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpub3QoLmNhbmNlbCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpub3QoLmNhbmNlbCk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wLnNob3cge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBU0lERSAqL1xcclxcbmFzaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLWhlYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1hc2lkZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA3cHggMjVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIGgyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDdweCA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsuZmlyc3Qge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMyZjI7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rLnNlY29uZCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsudGhpcmQge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmMjI7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcbm1haW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGVudCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRlbnQ6bm90KCN0b2RheSl7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGVudCN0b2RheSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BlY2lhbC1jb250ZW50cyAudGFzay1idG5zLFxcclxcbi5zcGVjaWFsLWNvbnRlbnRzIGlucHV0W3R5cGU9Y2hlY2tib3hdIHsgXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFNQRUNJQUwgU0VDVElPTiAqL1xcclxcbi5zcGVjaWFsLWNvbnRlbnRzIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktcGFyYSxcXHJcXG4udXBjb21pbmctcGFyYSxcXHJcXG4uaW1wb3J0YW50LXBhcmEge1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFBST0pFQ1QgVEFCUyAqL1xcclxcbi5wcm9qZWN0LWhlYWQge1xcclxcbiAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1hZGR0YXNrLWRlbGV0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWQgaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuNTVyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNteXByb2plY3QgLmJ0bi1pY29uOm5vdCgucGx1cy10YXNrKSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZWQudW5jaGVja2VkIHtcXHJcXG4gICAgY29sb3I6ICMyMmY7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlZC5jaGVja2VkIHtcXHJcXG4gICAgY29sb3I6ICM3Nzc7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWljb24ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWljb246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtaWNvbiBpbWcge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgcCwgLnRhc2stYnRucyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LkxvdyB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyMmY7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS5NZWRpdW0ge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZjYzAwXFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS5IaWdoIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWluLW1haW4ge1xcclxcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pbi1tYWluOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5lZGl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzMyMjI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEpTIHN0eWxlcyAqL1xcclxcbi5ub3Qtc3BlY2lmaWVkIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdGF0ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxyXFxuICAgIGFzaWRlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2xvc2UtYXNpZGUge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhpZGUge1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcbmNvbnN0IGJhY2tEcm9wICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG5jb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcblxyXG5jb25zdCBwcm9qZWN0VGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtZWRpdCcpO1xyXG5jb25zdCBwcm9qZWN0RGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzY3JpcHRpb24tZWRpdCcpO1xyXG5cclxuY29uc3QgdGFza1RpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlLWVkaXQnKTtcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWVkaXQnKTtcclxuY29uc3QgdGFza1ByaW9yaXR5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1lZGl0Jyk7XHJcbmNvbnN0IHRhc2tEdWVEYXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1lZGl0Jyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Zvcm0oZm9ybVR5cGUpIHtcclxuICAgIGJhY2tEcm9wLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIGZvcm1UeXBlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICBhc2lkZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAwLjEpJztcclxuICAgIGFzaWRlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb3JtKGZvcm1UeXBlKSB7XHJcbiAgICBiYWNrRHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICBmb3JtVHlwZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICBhc2lkZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlZSc7XHJcbiAgICBhc2lkZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2FsbCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhcklucHV0cyhmb3JtVHlwZSkge1xyXG4gICAgY29uc3QgbGFiZWxzID0gZm9ybVR5cGUuY2hpbGRyZW47XHJcbiAgICBmb3IgKGNvbnN0IGxhYmVsIG9mIGxhYmVscykge1xyXG4gICAgICAgIGlmIChsYWJlbC50YWdOYW1lID09PSAnTEFCRUwnICYmIChsYWJlbC5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgbGFiZWwubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSkge1xyXG4gICAgICAgICAgICBsYWJlbC5sYXN0RWxlbWVudENoaWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFrZVByb2plY3RJbnB1dHModGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCkge1xyXG5cclxuICAgIGxldCBwcm9qZWN0SW5wdXRzID0gW107XHJcbiAgICBwcm9qZWN0SW5wdXRzLnB1c2godGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJbnB1dHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YWtlVGFza0lucHV0cyh0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBwcmlvcml0eUlucHV0LCBkdWVEYXRlSW5wdXQpIHtcclxuXHJcbiAgICBsZXQgdGFza0lucHV0cyA9IFtdO1xyXG4gICAgdGFza0lucHV0cy5wdXNoKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHRhc2tJbnB1dHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbnB1dHNUb1Byb2plY3RGb3JtKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgcHJvamVjdFRpdGxlRWRpdC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgcHJvamVjdERlc2NyaXB0aW9uRWRpdC52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZElucHV0c1RvVGFza0Zvcm0odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgdGFza1RpdGxlRWRpdC52YWx1ZSA9IHRpdGxlO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uRWRpdC52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFza1ByaW9yaXR5RWRpdC52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgdGFza0R1ZURhdGVFZGl0LnZhbHVlID0gZHVlRGF0ZTtcclxufVxyXG5cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBkaXNwbGF5UGFnZSwgeyBkaXNwbGF5U2lkZWJhciwgcmVtb3ZlU2lkZWJhciB9IGZyb20gJy4vdGFiZGlzcGxheSc7XHJcbmltcG9ydCB7YWRkQVByb2plY3QsIGRlbGV0ZVByb2plY3QsIHNob3dFZGl0Rm9ybUFuZEdldEVkaXRCdG5EYXRhSWQsIGVkaXRQcm9qZWN0LCBBZGRGcm9tU3RvcmFnZX0gZnJvbSAnLi9wcm9qZWN0RG9tJztcclxuaW1wb3J0IHsgc2hvd0Zvcm0sIHJlbW92ZUZvcm0gfSBmcm9tICcuL2Zvcm1zJztcclxuaW1wb3J0IHsgYWRkQVRhc2ssIGNoZWNrVGFzaywgZGVsZXRlVGFzaywgZ2V0VGFza0VsZW1lbnRzLCBlZGl0VGFzaywgYWRkVGFza0Zyb21TdG9yYWdlIH0gZnJvbSAnLi90YXNrRG9tJztcclxuaW1wb3J0IHsgZ2V0UHJvamVjdE9mVGFzayB9IGZyb20gJy4vdGFza0RvbSc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xyXG5cclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XHJcbmNvbnN0IHByb2plY3RGb3JtRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tZWRpdCcpO1xyXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XHJcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xyXG5jb25zdCB0YXNrRm9ybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWVkaXQnKTtcclxuY29uc3QgYWxsUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50cycpO1xyXG5jb25zdCBjYW5jZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbmNlbCcpO1xyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWFzaWRlJyk7XHJcbmxldCBwcm9qZWN0SWQ7XHJcbmxldCBuZWVkZWQgPSBbXTtcclxubGV0IHRhc2tOZWVkcyA9IFtdO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGxldCBteVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcclxuXHJcbi8vYWRkcyB0aGUgZGVmYXVsdCBwcm9qZWN0IHRvIHN0b3JhZ2UgaWYgdGhpcyBpcyB0aGUgYnJvd3NlcidzIGZpcnN0IHZpc2l0XHJcbmlmIChteVByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnTXkgUHJvamVjdCcsICdUaGlzIGlzIHRoZSBkZWZhdWx0IHByb2plY3QnKTtcclxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZFByb2plY3RUb1N0b3JhZ2UoKTtcclxufVxyXG5cclxuLy9kaXNwbGF5cyBlYWNoIHByb2plY3QgaW4gbG9jYWwgc3RvcmFnZSBhbmQgaXRzIHRhc2tzIHRvIHRoZSBET01cclxubXlQcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XHJcbiAgICBBZGRGcm9tU3RvcmFnZShwcm9qKTtcclxuXHJcbiAgICBpZiAocHJvai5wcm9qZWN0VGFza3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgcHJvai5wcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBhZGRUYXNrRnJvbVN0b3JhZ2UodGFzaywgbXlQcm9qZWN0cy5pbmRleE9mKHByb2opICsgMylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5kaXNwbGF5UGFnZSgpO1xyXG5cclxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVNpZGViYXIpO1xyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVNpZGViYXIpO1xyXG5cclxuLy90byByZW1vdmUgYSBmb3JtIHdoZW4gY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkXHJcbmNhbmNlbEJ0bnMuZm9yRWFjaCgoY2FuY2VsQnRuKSA9PiB7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZvcm0oZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7ICAgXHJcbn0pO1xyXG5cclxuXHJcbi8vYWRkIGEgbmV3IFByb2plY3QgZnJvbSBhIGZvcm1cclxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNob3dGb3JtKHByb2plY3RGb3JtKTtcclxufSk7XHJcblxyXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkQVByb2plY3QoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbmFsbFByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIC8vdG8gYWRkIGEgbmV3IHRhc2sgLSAgaW4gY29udGludWl0eSB3aXRoIHRhc2tGb3JtIGV2ZW50IGxpc3RlbmVyIGJlbG93XHJcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsdXMtdGFzaycpKSB7XHJcbiAgICAgICAgc2hvd0Zvcm0odGFza0Zvcm0pO1xyXG4gICAgICAgIHByb2plY3RJZCA9IGdldFByb2plY3RPZlRhc2soZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1pY29uJykpIHtcclxuICAgICAgICAvL2dldCB0aGUgdGFyZ2V0J3MgZGF0YUlkLCB0aGUgdGl0bGUgZWxlbWVudCBhbmQgZGVzY3JpcHRpb24gZWxlbWVudFxyXG4gICAgICAgIC8vdGhlc2Ugd2lsbCBiZSB1c2VkIHRvIGVkaXQgdGhlIHByb2plY3QgdGl0bGUgYW5kIGRlc2NyaXB0aW9uIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkXHJcbiAgICAgICAgbmVlZGVkID0gc2hvd0VkaXRGb3JtQW5kR2V0RWRpdEJ0bkRhdGFJZChlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9kZWxldGUgYSBwcm9qZWN0XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtaWNvbicpKSB7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdChlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZSBhIHRhc2tcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XHJcbiAgICAgICAgZGVsZXRlVGFzayhlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCB0aGUgdGFyZ2V0J3MgZGF0YUlkLCBpdCdzIHByb2plY3Rib2R5IGRhdGEgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkgYW5kIGR1ZWRhdGUgZWxlbWVudHNcclxuICAgIC8vdGhlc2Ugd2lsbCBiZSB1c2VkIHRvIGVkaXQgdGhlIHRhc2sgZGV0YWlscyB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZFxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKSB7XHJcbiAgICAgICAgdGFza05lZWRzID0gZ2V0VGFza0VsZW1lbnRzKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hlY2sgYSB0YXNrXHJcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgY2hlY2tUYXNrKGUpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGFkZEFUYXNrKHByb2plY3RJZCk7XHJcbn0pXHJcblxyXG5cclxucHJvamVjdEZvcm1FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGVkaXRQcm9qZWN0KG5lZWRlZCk7XHJcbiAgICByZW1vdmVGb3JtKHByb2plY3RGb3JtRWRpdCk7XHJcbn0pXHJcblxyXG5cclxudGFza0Zvcm1FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGVkaXRUYXNrKHRhc2tOZWVkcyk7XHJcbiAgICByZW1vdmVGb3JtKHRhc2tGb3JtRWRpdCk7XHJcbn0pXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IHRha2VQcm9qZWN0SW5wdXRzIH0gZnJvbSBcIi4vZm9ybXNcIjtcclxuaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuXCI7XHJcblxyXG5cclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcclxuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzY3JpcHRpb24nKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdFRvU3RvcmFnZSgpIHtcclxuICAgICAgICBteVByb2plY3RzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0UHJvamVjdElkKCkge1xyXG4gICAgLy8gICAgIHJldHVybiBteVByb2plY3RzLmluZGV4T2YodGhpcyk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIHByb2plY3RUYXNrcyA9IFtdO1xyXG5cclxuICAgIC8vIGFkZFRhc2sodGFzaykge1xyXG4gICAgLy8gICAgIHRoaXMucHJvamVjdFRhc2tzLnB1c2godGFzayk7XHJcbiAgICAvLyB9XHJcblxyXG59XHJcblxyXG5cclxuLy90YWtlcyB0aGUgaW5wdXRzIGZyb20gdGhlIGZvcm0sIGNyZWF0ZXMgYSBwcm9qZWN0IG9iamVjdCwgc3RvcmVzIGl0IGluIG1lbW9yeVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQVByb2plY3RUb1N0b3JhZ2UoKSB7XHJcbiAgICAvL3Rha2UgdGhlIHVzZXIncyBpbnB1dHMgZnJvbSB0aGUgZm9ybVxyXG4gICAgbGV0IHByb2plY3RJbnB1dHMgPSB0YWtlUHJvamVjdElucHV0cyhwcm9qZWN0VGl0bGUsIHByb2plY3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAvL2luc3RhbnRpYXRlIGEgbmV3IHByb2plY3Qgb2JqZWN0IHdpdGggdGhlIGlucHV0cyB0YWtlbiBhbmQgc3RvcmUgaXRcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXRzWzBdLCBwcm9qZWN0SW5wdXRzWzFdKTtcclxuICAgIG5ld1Byb2plY3QuYWRkUHJvamVjdFRvU3RvcmFnZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbn1cclxuXHJcbi8vZ2V0cyB0aGUgZGF0YS1pZCBvZiB0aGUgcHJvamVjdFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhlUHJvamVjdERvbUlkKG5ld1Byb2plY3QpIHtcclxuICAgIGxldCBwcm9qZWN0SWQgPSBteVByb2plY3RzLmluZGV4T2YobmV3UHJvamVjdCk7XHJcbiAgICBwcm9qZWN0SWQgPSBwcm9qZWN0SWQgKyAzO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0SWQ7XHJcbn1cclxuXHJcblxyXG4vL2ZpbmRzIHRoZSBwcm9qZWN0IGluIGFycmF5IG9mIGFsbCBwcm9qZWN0cyBpbiBzdG9yYWdlIGFuZCBkZWxldGVzIGl0XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbVN0b3JhZ2UoYnRuRGF0YUlkLCBwYXJlbnQpIHtcclxuICAgIGlmIChidG5EYXRhSWQgPT09IHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xyXG4gICAgICAgIG15UHJvamVjdHMuc3BsaWNlKHBhcnNlSW50KGJ0bkRhdGFJZCkgLSAzLCAxKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vY2hhbmdlcyBwcm9qZWN0cyBkZXRhaWxzIGluIHN0b3JhZ2VcclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0SW5TdG9yYWdlKGJ0bkRhdGFJZCwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0SW5kZXggPSBwYXJzZUludChidG5EYXRhSWQpIC0gMztcclxuICAgIG15UHJvamVjdHNbcHJvamVjdEluZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHBsdXNJY29uIGZyb20gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vaW1hZ2VzL2ZpbGUtZWRpdC1vdXRsaW5lLnN2Zyc7XHJcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnJztcclxuaW1wb3J0IHsgc2hvd0Zvcm0sIHJlbW92ZUZvcm0sIGNsZWFySW5wdXRzLCBhZGRJbnB1dHNUb1Byb2plY3RGb3JtLCB0YWtlUHJvamVjdElucHV0cyB9IGZyb20gJy4vZm9ybXMnO1xyXG5pbXBvcnQgZGlzcGxheVBhZ2UsIHsgb3BlblBhZ2UgfSBmcm9tICcuL3RhYmRpc3BsYXknO1xyXG5pbXBvcnQgeyBhZGRBUHJvamVjdFRvU3RvcmFnZSwgZ2V0VGhlUHJvamVjdERvbUlkLCBkZWxldGVQcm9qZWN0RnJvbVN0b3JhZ2UsIGVkaXRQcm9qZWN0SW5TdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0JztcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcclxuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcclxuY29uc3QgdG9kYXlMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0Jyk7XHJcbmNvbnN0IGFsbFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGVudHMnKTtcclxuY29uc3QgcHJvamVjdEZvcm1FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1lZGl0Jyk7XHJcbmNvbnN0IHByb2plY3RUaXRsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1lZGl0Jyk7XHJcbmNvbnN0IHByb2plY3REZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjcmlwdGlvbi1lZGl0Jyk7XHJcblxyXG5cclxuZXhwb3J0IGxldCBwcm9qZWN0Qm9kaWVzID0gW107XHJcbmNvbnN0IGFsbFRhc2tDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYm9keScpO1xyXG5mb3IgKGNvbnN0IGNvbnRhaW5lciBvZiBhbGxUYXNrQ29udGFpbmVycykge1xyXG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gJzMnKSB7XHJcbiAgICAgICAgcHJvamVjdEJvZGllcy5wdXNoKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFQcm9qZWN0KCkge1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBhZGRBUHJvamVjdFRvU3RvcmFnZSgpO1xyXG4gICAgbGV0IHByb2plY3RJZCA9IGdldFRoZVByb2plY3REb21JZChuZXdQcm9qZWN0KTtcclxuICAgIGFwcGVuZFByb2plY3RUb0RvbShuZXdQcm9qZWN0LCBwcm9qZWN0SWQpO1xyXG4gICAgYXBwZW5kVGFiTGluayhuZXdQcm9qZWN0LCBwcm9qZWN0SWQpO1xyXG4gICAgXHJcbiAgICByZW1vdmVGb3JtKHByb2plY3RGb3JtKTtcclxuICAgIGNsZWFySW5wdXRzKHByb2plY3RGb3JtKTtcclxuICAgIFxyXG4gICAgLy90aGlzIGlzIHNvIG5ldyB0YWJsaW5rIGFuZCB0YWJjb250ZW50IGFyZSBhZGRlZCB0byB0aGUgZmxvd1xyXG4gICAgZGlzcGxheVBhZ2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZEZyb21TdG9yYWdlKHByb2plY3QpIHtcclxuICAgIGxldCBwcm9qZWN0SWQgPSBnZXRUaGVQcm9qZWN0RG9tSWQocHJvamVjdCk7XHJcbiAgICBhcHBlbmRQcm9qZWN0VG9Eb20ocHJvamVjdCwgcHJvamVjdElkKTtcclxuICAgIHRhYmxpbmsocHJvamVjdC50aXRsZSwgcHJvamVjdElkKTtcclxuICAgIGRpc3BsYXlQYWdlKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XHJcblxyXG4gICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBsZXQgYnRuRGF0YUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICBkZWxldGVQcm9qZWN0RnJvbVN0b3JhZ2UoYnRuRGF0YUlkLCBwYXJlbnQpO1xyXG4gICAgZGVsZXRlUHJvamVjdEZyb21Eb20oYnRuRGF0YUlkLCBwYXJlbnQpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0KG5lZWRlZCkge1xyXG4gICAgbGV0IGVkaXRJbnB1dHMgPSB0YWtlUHJvamVjdElucHV0cyhwcm9qZWN0VGl0bGVFZGl0LCBwcm9qZWN0RGVzY3JpcHRpb25FZGl0KTtcclxuXHJcbiAgICBlZGl0UHJvamVjdEluU3RvcmFnZShuZWVkZWRbMF0sIGVkaXRJbnB1dHNbMF0sIGVkaXRJbnB1dHNbMV0pO1xyXG4gICAgZWRpdFByb2plY3RJbkRvbShuZWVkZWRbMF0sIGVkaXRJbnB1dHMsIG5lZWRlZFsxXSwgbmVlZGVkWzJdKTtcclxufVxyXG5cclxuXHJcbi8vY3JlYXRlcyB0aGUgcHJvamVjdCBhbmQgYWRkcyBpdCB0byBET01cclxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdFRvRG9tKG5ld1Byb2plY3QsIHByb2plY3RJZCkge1xyXG4gICAgY29uc3QgYWxsUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50cycpO1xyXG5cclxuICAgIGxldCBteU5ld3Byb2plY3QgPSBwcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsIG5ld1Byb2plY3QuZGVzY3JpcHRpb24sIHByb2plY3RJZCk7XHJcbiAgICBcclxuICAgIGFsbFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG15TmV3cHJvamVjdCk7XHJcbn1cclxuXHJcblxyXG4vL2NyZWF0ZXMgdGhlIHRhYmxpbmsgYW5kIGVuc3VyZXMgdGhhdCBpdHMgY29udGVudHMgYXJlIGRpc3BsYXllZCBpbW1lZGlhdGVseSB0aGUgZm9ybSBpcyBzdWJtaXR0ZWRcclxuZnVuY3Rpb24gYXBwZW5kVGFiTGluayhuZXdQcm9qZWN0LCBwcm9qZWN0SWQpIHtcclxuICAgIGxldCBuZXdUYWJMaW5rID0gdGFibGluayhuZXdQcm9qZWN0LnRpdGxlLCBwcm9qZWN0SWQpO1xyXG4gICAgb3BlblBhZ2UobmV3UHJvamVjdC50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpLCBuZXdUYWJMaW5rKTtcclxufVxyXG5cclxuXHJcbi8vY3JlYXRlcyB0YWJsaW5rIGZvciBwcm9qZWN0XHJcbmZ1bmN0aW9uIHRhYmxpbmsocHJvamVjdFRpdGxlLCBwcm9qZWN0SWQpIHtcclxuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnRucycpO1xyXG5cclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHRhYkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRhYkxpbmsuY2xhc3NOYW1lID0gJ3RhYmxpbmsgcHJvamVjdC1idG4nO1xyXG4gICAgdGFiTGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0SWQpO1xyXG4gICAgdGFiTGluay50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcclxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhYkxpbmspO1xyXG5cclxuICAgIHByb2plY3RCdG5zLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHJcbiAgICAvL3dlIHdpbGwgdXNlIHRoaXMgdG8gb3BlbiB0aGUgdGFibGluaydzIHBhZ2UgY29udGVudCByaWdodCBhZnRlciBpdCBpcyBjcmVhdGVkXHJcbiAgICByZXR1cm4gdGFiTGluaztcclxufVxyXG5cclxuXHJcbi8vY3JlYXRlcyBwcm9qZWN0IGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvIERPTVxyXG5mdW5jdGlvbiBwcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0YUlkKSB7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGRhdGFJZCk7XHJcbiAgICBuZXdQcm9qZWN0LmlkID0gdGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKTtcclxuICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gJ3RhYi1jb250ZW50JztcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdEhlYWQuY2xhc3NOYW1lID0gJ3Byb2plY3QtaGVhZCc7XHJcbiAgICBjb25zdCB0aXRsZUFkZFRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlQWRkVGFza0RlbGV0ZS5jbGFzc05hbWUgPSAndGl0bGUtYWRkdGFzay1kZWxldGUnO1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZWQnO1xyXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB0aXRsZUFkZFRhc2tEZWxldGUuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuXHJcbiAgICBsZXQgYnRuSWNvbnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5JY29uLmNsYXNzTmFtZSA9ICdidG4taWNvbic7XHJcbiAgICAgICAgYnRuSWNvbnMucHVzaChidG5JY29uKTtcclxuICAgICAgICB0aXRsZUFkZFRhc2tEZWxldGUuYXBwZW5kQ2hpbGQoYnRuSWNvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHBsdXNJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcGx1c0ltYWdlLnNyYyA9IHBsdXNJY29uO1xyXG4gICAgY29uc3QgZWRpdEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBlZGl0SW1hZ2Uuc3JjID0gZWRpdEljb247XHJcbiAgICBlZGl0SW1hZ2UuY2xhc3NOYW1lID0gJ2VkaXQtaWNvbic7XHJcbiAgICBjb25zdCB0cmFzaEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB0cmFzaEltYWdlLnNyYyA9IHRyYXNoSWNvbjtcclxuICAgIHRyYXNoSW1hZ2UuY2xhc3NOYW1lID0gJ2RlbGV0ZS1pY29uJztcclxuXHJcbiAgICBidG5JY29uc1swXS5hcHBlbmRDaGlsZChwbHVzSW1hZ2UpO1xyXG4gICAgYnRuSWNvbnNbMF0uY2xhc3NMaXN0LmFkZCgncGx1cy10YXNrJyk7XHJcbiAgICBidG5JY29uc1sxXS5hcHBlbmRDaGlsZChlZGl0SW1hZ2UpO1xyXG4gICAgYnRuSWNvbnNbMV0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZGF0YUlkKTtcclxuICAgIGJ0bkljb25zWzJdLmFwcGVuZENoaWxkKHRyYXNoSW1hZ2UpO1xyXG4gICAgYnRuSWNvbnNbMl0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZGF0YUlkKVxyXG5cclxuICAgIHByb2plY3RIZWFkLmFwcGVuZENoaWxkKHRpdGxlQWRkVGFza0RlbGV0ZSk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWRlc2NyaWJlZCc7XHJcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIHByb2plY3RIZWFkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RCb2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGRhdGFJZCk7XHJcbiAgICBwcm9qZWN0Qm9keS5jbGFzc05hbWUgPSAncHJvamVjdC1ib2R5JztcclxuICAgIHByb2plY3RCb2RpZXMucHVzaChwcm9qZWN0Qm9keSk7XHJcblxyXG4gICAgbmV3UHJvamVjdC5hcHBlbmQocHJvamVjdEhlYWQsIHByb2plY3RCb2R5KTtcclxuXHJcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbURvbShidG5EYXRhSWQsIHBhcmVudCkge1xyXG5cclxuICAgIC8vd2UgcmVtb3ZlIHRoZSBjb250ZW50IHBhZ2Ugb2YgdGhhdCBwcm9qZWN0XHJcbiAgICBpZiAoYnRuRGF0YUlkID09PSBwYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHtcclxuICAgICAgICBhbGxQcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwYXJlbnQpO1xyXG4gICAgICAgIHRvZGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHRvZGF5TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NjYyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy93ZSByZW1vdmUgdGhlIGxpbmsgaW4gdGhlIHNpZGViYXIgY29ycmVzcG9uZGluZyB0byB0aGF0IHByb2plY3RcclxuICAgIGNvbnN0IHRhYkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnRuJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWJ0bnMnKTtcclxuICAgIGZvciAoY29uc3QgbGluayBvZiB0YWJMaW5rcykge1xyXG4gICAgICAgIGlmIChidG5EYXRhSWQgPT09IGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHtcclxuICAgICAgICAgICAgcHJvamVjdEJ0bnMucmVtb3ZlQ2hpbGQobGluay5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdEluRG9tKGJ0bkRhdGFJZCwgZWRpdElucHV0cywgdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnQpIHtcclxuICAgIFxyXG4gICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gZWRpdElucHV0c1swXTtcclxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGVkaXRJbnB1dHNbMV07XHJcblxyXG4gICAgY29uc3QgdGFiTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGluaycpO1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIHRhYkxpbmtzKSB7XHJcbiAgICAgICAgaWYgKGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGJ0bkRhdGFJZCkge1xyXG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gZWRpdElucHV0c1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3RoZSBlZGl0IGJ1dHRvbiBkYXRhIGlkIHdpaWwgYmUgdXNlZCB0byBlZGl0IHRoYXQgcHJvamVjdCBpbiBzdG9yYWdlXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RWRpdEZvcm1BbmRHZXRFZGl0QnRuRGF0YUlkKGUpIHtcclxuICAgIGxldCBuZWVkcyA9IFtdO1xyXG4gICAgbGV0IHRpdGxlRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgbGV0IHRpdGxlID0gdGl0bGVFbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIGxldCBidG5EYXRhSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgbmVlZHMucHVzaChidG5EYXRhSWQsIHRpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50KTtcclxuXHJcbiAgICBzaG93Rm9ybShwcm9qZWN0Rm9ybUVkaXQpO1xyXG4gICAgYWRkSW5wdXRzVG9Qcm9qZWN0Rm9ybSh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBuZWVkcztcclxufVxyXG5cclxuIiwiY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5QYWdlKHBhZ2UsIGVsZW1lbnQpIHtcclxuICAgIGxldCB0YWJDb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItY29udGVudCcpO1xyXG4gICAgbGV0IHRhYkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxpbmsnKTtcclxuICAgIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJDb250ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhYkNvbnRlbnRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhYkxpbmtzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYkxpbmtzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZSkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjJztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQYWdlKCkge1xyXG4gICAgbGV0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1jb250ZW50Jyk7XHJcbiAgICBsZXQgdGFiTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGluaycpO1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIHRhYkxpbmtzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250ZW50IG9mIHRhYkNvbnRlbnRzKSB7XHJcbiAgICAgICAgICAgICBpZiAobGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlblBhZ2UoY29udGVudC5nZXRBdHRyaWJ1dGUoJ2lkJyksIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTaWRlYmFyKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNpZGViYXIoKSB7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTaWRlYmFyKCkge1xyXG4gICAgYXNpZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgdGFrZVRhc2tJbnB1dHMgfSBmcm9tIFwiLi9mb3Jtc1wiO1xyXG5cclxuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKTtcclxuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XHJcbmNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJyk7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sgZXh0ZW5kcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICAgICAgICBzdXBlcih0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG5cclxuLy90YWtlcyB0aGUgaW5wdXRzIGZyb20gdGhlIHRhc2sgZm9ybSwgY3JlYXRlcyBhIHRhc2sgd2l0aCB0aG9zZSBpbnB1dCBhbmQgYWRkcyB0aGUgdGFzayB0byBpdHMgY2FsbGluZyBwcm9qZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9TdG9yYWdlKHByb2plY3RJZCkge1xyXG4gICAgbGV0IHRhc2tJbnB1dHMgPSB0YWtlVGFza0lucHV0cyh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5LCB0YXNrRHVlRGF0ZSk7XHJcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tJbnB1dHNbMF0sIHRhc2tJbnB1dHNbMV0sIHRhc2tJbnB1dHNbMl0sIHRhc2tJbnB1dHNbM10pO1xyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWQgLSAzXS5wcm9qZWN0VGFza3MucHVzaChuZXdUYXNrKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcclxuXHJcbiAgICByZXR1cm4gbmV3VGFzaztcclxufVxyXG5cclxuXHJcbi8vZ2V0cyB0aGUgaW5kZXggb2YgdGhlIG5ld1Rhc2sgYWRkZWQgaW4gaXRzIHBhcmVudCBwcm9qZWN0J3MgcHJvamVjdFRhc2tzIGFycmF5XHJcbi8vdGhpcyB3aWxsIGJlIHVzZWQgdG8gZ2l2ZSBhIGRhdGFJZCB0byBlYWNoIHRhc2sgY3JlYXRlZCBpbiB0aGF0IHBhcnRpY3VsYXIgcHJvamVjdFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXhPZlRhc2socHJvamVjdElkLCBuZXdUYXNrKSB7XHJcblxyXG4gICAgcmV0dXJuIG15UHJvamVjdHNbcHJvamVjdElkIC0gM10ucHJvamVjdFRhc2tzLmluZGV4T2YobmV3VGFzayk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tU3RvcmFnZShlLCBncmFuZFBhcmVudCkge1xyXG4gICAgbGV0IHByb2plY3RJZCA9IGdyYW5kUGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgcHJvamVjdElkID0gcGFyc2VJbnQocHJvamVjdElkKSAtIDM7XHJcblxyXG4gICAgbGV0IHRhc2tJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgIG15UHJvamVjdHNbcHJvamVjdElkXS5wcm9qZWN0VGFza3Muc3BsaWNlKHRhc2tJZCwgMSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2tJblN0b3JhZ2UoYnRuRGF0YUlkLCBwcm9qZWN0Qm9keURhdGFJZCwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdQcmlvcml0eSwgbmV3RHVlRGF0ZSkge1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gcGFyc2VJbnQocHJvamVjdEJvZHlEYXRhSWQpIC0gMztcclxuICAgIGxldCB0YXNrSW5kZXggPSBwYXJzZUludChidG5EYXRhSWQpO1xyXG5cclxuICAgIG15UHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICBteVByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIG15UHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XHJcblxyXG59XHJcbiIsImltcG9ydCBleHBhbmRJY29uIGZyb20gJy4vaW1hZ2VzL2ljb24tYXJyb3ctZG93bi5zdmcnO1xyXG5pbXBvcnQgeyB0YWtlVGFza0lucHV0cywgY2xlYXJJbnB1dHMsIHJlbW92ZUZvcm0sIHNob3dGb3JtLCBhZGRJbnB1dHNUb1Rhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybXNcIjtcclxuaW1wb3J0IHsgcHJvamVjdEJvZGllcyB9IGZyb20gXCIuL3Byb2plY3REb21cIjtcclxuaW1wb3J0IHsgYWRkVGFza1RvU3RvcmFnZSwgZ2V0SW5kZXhPZlRhc2ssIGRlbGV0ZVRhc2tGcm9tU3RvcmFnZSwgZWRpdFRhc2tJblN0b3JhZ2UgfSBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7IGlzVGhpc1dlZWssIGlzVG9kYXkgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5cclxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XHJcbmNvbnN0IHRhc2tGb3JtRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tZWRpdCcpO1xyXG5cclxuY29uc3QgdGFza1RpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlLWVkaXQnKTtcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWVkaXQnKTtcclxuY29uc3QgdGFza1ByaW9yaXR5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1lZGl0Jyk7XHJcbmNvbnN0IHRhc2tEdWVEYXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1lZGl0Jyk7XHJcblxyXG5jb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50LXNwZWNpYWwnKTtcclxuY29uc3QgdG9kYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LXNwZWNpYWwnKTtcclxuY29uc3QgdGhpc1dlZWtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwY29taW5nLXNwZWNpYWwnKTtcclxuXHJcbmNvbnN0IGltcG9ydGFudFBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50LXBhcmEnKTtcclxuY29uc3QgdG9kYXlQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LXBhcmEnKTtcclxuY29uc3QgdXBjb21pbmdQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwY29taW5nLXBhcmEnKTtcclxubGV0IGltcG9ydGFudFRhc2tzID0gW107XHJcbmxldCBhbGxUYXNrcyA9IFtdO1xyXG5sZXQgdG9kYXlzVGFza3MgPSBbXTtcclxubGV0IHRoaXNXZWVrc1Rhc2tzID0gW107XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFUYXNrKHByb2plY3RJZCkge1xyXG4gICAgbGV0IG5ld1Rhc2sgPSBhZGRUYXNrVG9TdG9yYWdlKHByb2plY3RJZCk7XHJcbiAgICBsZXQgdGFza0lkID0gZ2V0SW5kZXhPZlRhc2socHJvamVjdElkLCBuZXdUYXNrKTtcclxuICAgIGFwcGVuZFRhc2tUb0RvbShwcm9qZWN0SWQsIG5ld1Rhc2ssIHRhc2tJZCk7XHJcblxyXG4gICAgY2xlYXJJbnB1dHModGFza0Zvcm0pO1xyXG4gICAgcmVtb3ZlRm9ybSh0YXNrRm9ybSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrRnJvbVN0b3JhZ2UodGFzaywgcHJvamVjdElkKSB7XHJcbiAgICBsZXQgdGFza0lkID0gZ2V0SW5kZXhPZlRhc2socHJvamVjdElkLCB0YXNrKTtcclxuICAgIGFwcGVuZFRhc2tUb0RvbShwcm9qZWN0SWQsIHRhc2ssIHRhc2tJZCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBsZXQgZ3JhbmRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgXHJcbiAgICBkZWxldGVUYXNrRnJvbVN0b3JhZ2UoZSwgZ3JhbmRQYXJlbnQpO1xyXG4gICAgZGVsZXRlVGFza0Zyb21Eb20oZ3JhbmRQYXJlbnQsIHBhcmVudCk7ICAgXHJcbn1cclxuXHJcbi8vdGFza05lZWRzIC0gW2VkaXRCdG5kYXRhaWQsIHByb2plY3RJZCwgdGl0bGVlbGVtZW50LCBkZXNjcmlwdGlvbmVsZW1lbnQsIGV0Yy5dXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayh0YXNrTmVlZHMpIHtcclxuICAgIGxldCBlZGl0VGFza0lucHV0cyA9IHRha2VUYXNrSW5wdXRzKHRhc2tUaXRsZUVkaXQsIHRhc2tEZXNjcmlwdGlvbkVkaXQsIHRhc2tQcmlvcml0eUVkaXQsIHRhc2tEdWVEYXRlRWRpdCk7XHJcbiAgICBcclxuICAgIGVkaXRUYXNrSW5TdG9yYWdlKHRhc2tOZWVkc1swXSwgdGFza05lZWRzWzFdLCBlZGl0VGFza0lucHV0c1swXSwgZWRpdFRhc2tJbnB1dHNbMV0sIGVkaXRUYXNrSW5wdXRzWzJdLCBlZGl0VGFza0lucHV0c1szXSk7XHJcbiAgICBlZGl0VGFza0luRG9tKGVkaXRUYXNrSW5wdXRzWzBdLCBlZGl0VGFza0lucHV0c1sxXSwgZWRpdFRhc2tJbnB1dHNbMl0sIGVkaXRUYXNrSW5wdXRzWzNdLCB0YXNrTmVlZHNbMl0sIHRhc2tOZWVkc1szXSwgdGFza05lZWRzWzRdLCB0YXNrTmVlZHNbNV0sIHRhc2tOZWVkc1swXSwgdGFza05lZWRzWzFdKTtcclxuICAgIGVkaXRTcGVjaWFsVGFzayh0YXNrTmVlZHNbMF0sIHRhc2tOZWVkc1sxXSwgZWRpdFRhc2tJbnB1dHNbMF0sIGVkaXRUYXNrSW5wdXRzWzFdLCBlZGl0VGFza0lucHV0c1syXSwgZWRpdFRhc2tJbnB1dHNbM10pO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUYXNrKGUpIHtcclxuICAgIGxldCB0YXNrVGl0bGUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBjaGVjayhlLCB0YXNrVGl0bGUpO1xyXG5cclxuICAgIGxldCBkYXRhSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGxldCBwcm9qZWN0RGF0YUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgdGFza0R1ZURhdGUgPSB0YXNrUHJpb3JpdHkucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAvL2xvb2tzIHRocm91Z2ggdGhlICdpbXBvcnRhbnQnIHNlY3Rpb24gdG8gY2hlY2sgc2VsZWN0ZWQgdGFza3MgYXMgd2VsbFxyXG4gICAgaWYgKHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuY29udGFpbnMoJ0hpZ2gnKSkge1xyXG4gICAgICAgIHZlcmlmeUlkQW5kQ2hlY2soZSwgaW1wb3J0YW50VGFza3MsIGRhdGFJZCwgcHJvamVjdERhdGFJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb29rcyB0aHJvdWdoIHRvZGF5cyB0YXNrcyB0byBzZWUgaWYgdGhlIGl0ZW0gaXMgdGhlcmUgYW5kIGNoZWNrIGl0IHRoZXJlIGFzIHdlbGxcclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRhc2tEdWVEYXRlKSkpIHtcclxuICAgICAgICB2ZXJpZnlJZEFuZENoZWNrKGUsIHRvZGF5c1Rhc2tzLCBkYXRhSWQsIHByb2plY3REYXRhSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RoaXNXZWVrKG5ldyBEYXRlKHRhc2tEdWVEYXRlKSkpIHtcclxuICAgICAgICB2ZXJpZnlJZEFuZENoZWNrKGUsIHRoaXNXZWVrc1Rhc2tzLCBkYXRhSWQsIHByb2plY3REYXRhSWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL2xvb2tzIHRocm91Z2ggYW4gYXJyYXkgY29udGFpbmluZyBzcGVjaWZpYyB0YXNrcyB0byBjaGVjayB0aGVtIGFzIHdlbGwgaWYgdGhleSBhcmUgdGhlcmUgXHJcbmZ1bmN0aW9uIHZlcmlmeUlkQW5kQ2hlY2soZSwgdGFza3MsIGRhdGFJZCwgcHJvamVjdERhdGFJZCkge1xyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgICAgbGV0IHRhc2tUaXRsZUVsZW1lbnQgPSB0YXNrLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAodGFza1RpdGxlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gZGF0YUlkICYmIHRhc2suZ2V0QXR0cmlidXRlKCdwcm9qZWN0LWRhdGEtaWQnKSA9PT0gcHJvamVjdERhdGFJZCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNoZWNrKGUsIHRhc2tUaXRsZUVsZW1lbnQpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrKGUsIHRhc2tUaXRsZSkge1xyXG4gICAgXHJcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCd1bmNoZWNrZWQnKTtcclxuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkJyk7XHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vZ2V0cyB0aGUgZGF0YSBJZCBvZiB0aGUgcHJvamVjdCAnd2hvc2UgYWRkIHRhc2snIGJ1dHRvbiB3YXMgY2xpY2tlZC4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gYWRkIHRoYXQgdGFzayB0byBpdHMgcHJvamVjdFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdE9mVGFzayhlKSB7XHJcbiAgICBsZXQgcGFyZW50UHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBsZXQgcGFyZW50UHJvamVjdElkID0gcGFyZW50UHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICByZXR1cm4gcGFyc2VJbnQocGFyZW50UHJvamVjdElkKTtcclxufVxyXG5cclxuXHJcbi8vYWRkcyB0aGUgdGFzayBjcmVhdGVkIHRvIHRoZSBET01cclxuZnVuY3Rpb24gYXBwZW5kVGFza1RvRG9tKHByb2plY3RJZCwgbmV3VGFzaywgdGFza0lkKSB7XHJcbiAgICBsZXQgbXlUYXNrID0gdGFzayhuZXdUYXNrLnRpdGxlLCBuZXdUYXNrLmRlc2NyaXB0aW9uLCBuZXdUYXNrLnByaW9yaXR5LCBuZXdUYXNrLmR1ZURhdGUsIHRhc2tJZCwgcHJvamVjdElkKTtcclxuICAgIGxldCBteVRhc2syID0gdGFzayhuZXdUYXNrLnRpdGxlLCBuZXdUYXNrLmRlc2NyaXB0aW9uLCBuZXdUYXNrLnByaW9yaXR5LCBuZXdUYXNrLmR1ZURhdGUsIHRhc2tJZCwgcHJvamVjdElkKTtcclxuICAgIGxldCBteVRhc2szID0gdGFzayhuZXdUYXNrLnRpdGxlLCBuZXdUYXNrLmRlc2NyaXB0aW9uLCBuZXdUYXNrLnByaW9yaXR5LCBuZXdUYXNrLmR1ZURhdGUsIHRhc2tJZCwgcHJvamVjdElkKTtcclxuICAgIGxldCBteVRhc2s0ID0gdGFzayhuZXdUYXNrLnRpdGxlLCBuZXdUYXNrLmRlc2NyaXB0aW9uLCBuZXdUYXNrLnByaW9yaXR5LCBuZXdUYXNrLmR1ZURhdGUsIHRhc2tJZCwgcHJvamVjdElkKTtcclxuXHJcbiAgICBcclxuICAgIC8vdG8gc3BlY2lmeSB3aGljaCBwcm9qZWN0IHRvIGFkZCB0aGUgdGFzayB0b1xyXG4gICAgcHJvamVjdEJvZGllc1twcm9qZWN0SWQgLSAzXS5hcHBlbmRDaGlsZChteVRhc2spO1xyXG4gICAgLy9hbGwgdGFza3MgY3JlYXRlZCBhcmUgcHV0IGluIHRoaXMgYXJyYXkuIFdlIHdpbGwgbG9vcCB0aHJvdWd0aCB0aGlzIHRvIGZpbmQgdG9kYXkncyB0YXNrc1xyXG4gICAgYWxsVGFza3MucHVzaChteVRhc2spO1xyXG5cclxuICAgIC8vYXBwZW5kcyB0aGUgdGFzayB0byB0aGUgJ2ltcG9ydGFudCcgc2VjdGlvbiBpZiBpdHMgcHJpb3JpdHkgaXMgaGlnaFxyXG4gICAgaWYgKG5ld1Rhc2sucHJpb3JpdHkgPT09ICdIaWdoJykge1xyXG4gICAgICAgIGltcG9ydGFudFBhcmEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBpbXBvcnRhbnQuYXBwZW5kQ2hpbGQobXlUYXNrMik7XHJcbiAgICAgICAgaW1wb3J0YW50VGFza3MucHVzaChteVRhc2syKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKG5ld1Rhc2suZHVlRGF0ZSk7XHJcbiAgICBpZiAoaXNUb2RheShkdWVEYXRlKSkge1xyXG4gICAgICAgIHRvZGF5UGFyYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRvZGF5cy5hcHBlbmRDaGlsZChteVRhc2szKTtcclxuICAgICAgICB0b2RheXNUYXNrcy5wdXNoKG15VGFzazMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RoaXNXZWVrKGR1ZURhdGUpKSB7XHJcbiAgICAgICAgdXBjb21pbmdQYXJhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpc1dlZWtzLmFwcGVuZENoaWxkKG15VGFzazQpO1xyXG4gICAgICAgIHRoaXNXZWVrc1Rhc2tzLnB1c2gobXlUYXNrNCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL2NyZWF0ZXMgdGFzayBlbGVtZW50cyB0byBiZSBhZGRlZCB0byBET01cclxuZnVuY3Rpb24gdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCB0YXNrSWQsIHByb2plY3RJZCkge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3VGFzay5jbGFzc05hbWUgPSAndGFzayc7XHJcbiAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2tJZCk7XHJcbiAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZSgncHJvamVjdC1kYXRhLWlkJywgcHJvamVjdElkKTtcclxuXHJcbiAgICBjb25zdCB0YXNrSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0hlYWQuY2xhc3NOYW1lID0gJ3Rhc2staGVhZCc7XHJcblxyXG4gICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrSWQpO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIHRhc2tUaXRsZS5jbGFzc05hbWUgPSAndGFzay10aXRsZWQgdW5jaGVja2VkJztcclxuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrSWQpO1xyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBleHBhbmRCdG4uY2xhc3NOYW1lID0gJ2V4cGFuZC1pY29uJztcclxuICAgIGNvbnN0IGV4cGFuZEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBleHBhbmRJbWFnZS5zcmMgPSBleHBhbmRJY29uO1xyXG4gICAgZXhwYW5kQnRuLmFwcGVuZENoaWxkKGV4cGFuZEltYWdlKTtcclxuXHJcbiAgICB0YXNrSGVhZC5hcHBlbmQoY2hlY2ssIHRhc2tUaXRsZSwgZXhwYW5kQnRuKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuY2xhc3NOYW1lID0gJ3Rhc2stZGV0YWlscyc7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAndGFzay1kZXNjcmliZWQnO1xyXG4gICAgaWYgKCFkZXNjcmlwdGlvbiB8fCAhKGRlc2NyaXB0aW9uLnRyaW0oKSkpIHtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbm90LXNwZWNpZmllZCcpO1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdObyBkZXNjcmlwdGlvbiBwcm92aWRlZCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XHJcbiAgICBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJpb3JpdHlCdG4uY2xhc3NOYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xyXG4gICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcclxuICAgIFxyXG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5QnRuKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOiAnO1xyXG4gICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBpZiAoZHVlRGF0ZSAhPT0gJycpIHtcclxuICAgICAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGR1ZURhdGVTcGFuLmNsYXNzTGlzdC5hZGQoJ25vdC1zcGVjaWZpZWQnKTtcclxuICAgICAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9ICdOb3Qgc3BlY2lmaWVkJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFza0R1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNwYW4pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tCdG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrQnRuc0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFzay1idG5zJztcclxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGVkaXRCdG4uY2xhc3NOYW1lID0gJ2J0bi1pbi1tYWluIGVkaXQnO1xyXG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcclxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFza0lkKVxyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ2J0bi1pbi1tYWluIGRlbGV0ZSc7XHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFza0lkKTtcclxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gICAgdGFza0J0bnNDb250YWluZXIuYXBwZW5kKGVkaXRCdG4sIGRlbGV0ZUJ0bik7XHJcblxyXG4gICAgdGFza0RldGFpbHMuYXBwZW5kKHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5LCB0YXNrRHVlRGF0ZSwgdGFza0J0bnNDb250YWluZXIpO1xyXG5cclxuICAgIGV4cGFuZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcclxuICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdpbnZpc2libGUnKTtcclxuICAgIH0pXHJcblxyXG4gICAgbmV3VGFzay5hcHBlbmQodGFza0hlYWQsIHRhc2tEZXRhaWxzKTtcclxuXHJcbiAgICByZXR1cm4gbmV3VGFzaztcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21Eb20oZ3JhbmRQYXJlbnQsIHBhcmVudCkge1xyXG5cclxuICAgIGdyYW5kUGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudCk7XHJcblxyXG4gICAgbGV0IHRhc2tJZCA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGxldCBwcm9qZWN0RGF0YUlkID0gZ3JhbmRQYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBsZXQgdGFza1ByaW9yaXR5RWxlbWVudCA9IHBhcmVudC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkXHJcbiAgICBsZXQgdGFza0R1ZURhdGUgPSB0YXNrUHJpb3JpdHlFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICBcclxuICAgIC8vZGVsZXRlcyB0aGUgdGFzayBmcm9tIHRoZSAnaW1wb3J0YW50JyBzZWN0aW9uIGFzIHdlbGwgaWYgaXQgaXMgdGhlcmVcclxuICAgIGlmICh0YXNrUHJpb3JpdHlFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnSGlnaCcpKSB7XHJcbiAgICAgICAgdmVyaWZ5QW5kRGVsZXRlKGltcG9ydGFudFRhc2tzLCBpbXBvcnRhbnQsIHRhc2tJZCwgcHJvamVjdERhdGFJZCwgaW1wb3J0YW50UGFyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGVzIHRoZSB0YXNrIGlmIGl0IGlzIGluIHRoZSAndG9kYXknIHNlY3Rpb24gYXMgd2VsbFxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodGFza0R1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUFuZERlbGV0ZSh0b2RheXNUYXNrcywgdG9kYXlzLCB0YXNrSWQsIHByb2plY3REYXRhSWQsIHRvZGF5UGFyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGUgaWYgaW4gdGhpcyB3ZWVrIHNlY3Rpb25cclxuICAgIGlmIChpc1RoaXNXZWVrKG5ldyBEYXRlKHRhc2tEdWVEYXRlKSkpIHtcclxuICAgICAgICB2ZXJpZnlBbmREZWxldGUodGhpc1dlZWtzVGFza3MsIHRoaXNXZWVrcywgdGFza0lkLCBwcm9qZWN0RGF0YUlkLCB1cGNvbWluZ1BhcmEpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy9kZWxldGUgdGFzayBmcm9tIGEgc2VjdGlvblxyXG5mdW5jdGlvbiB2ZXJpZnlBbmREZWxldGUodGFza3MsIHNlY3Rpb24sIHRhc2tJZCwgcHJvamVjdERhdGFJZCwgc2VjdGlvblBhcmEpIHtcclxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xyXG4gICAgICAgIGlmICh0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSB0YXNrSWQgJiYgdGFzay5nZXRBdHRyaWJ1dGUoJ3Byb2plY3QtZGF0YS1pZCcpID09PSBwcm9qZWN0RGF0YUlkKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQodGFzayk7XHJcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25QYXJhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy90aGVzZSB3aWxsIGJlIHVzZWQgdG8gZWRpdCB0aGUgZWxlbWVudCBjb250ZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0VsZW1lbnRzKGUpIHtcclxuICAgIGxldCB0YXNrTmVlZHMgPSBbXTtcclxuICAgIGxldCB0aXRsZUVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBsZXQgdGl0bGUgPSB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9PT0gJ05vIGRlc2NyaXB0aW9uIHByb3ZpZGVkJykge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgfVxyXG4gICAgbGV0IHByaW9yaXR5RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgcHJpb3JpdHkgPSBwcmlvcml0eUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgZHVlRGF0ZUVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCBkdWVEYXRlID0gZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgbGV0IHRhc2tQcm9qZWN0Qm9keURhdGFJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBsZXQgZWRpdEJ0bkRhdGFJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgXHJcbiAgICB0YXNrTmVlZHMucHVzaChlZGl0QnRuRGF0YUlkLCB0YXNrUHJvamVjdEJvZHlEYXRhSWQsIHRpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50LCBwcmlvcml0eUVsZW1lbnQsIGR1ZURhdGVFbGVtZW50KTtcclxuXHJcbiAgICBzaG93Rm9ybSh0YXNrRm9ybUVkaXQpO1xyXG4gICAgYWRkSW5wdXRzVG9UYXNrRm9ybSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcclxuXHJcbiAgICByZXR1cm4gdGFza05lZWRzOyAgIFxyXG59XHJcblxyXG5cclxuLy9maWxsIGluIHRoZSB0YXNrIGRldGFpbHMgd2l0aCB0aGUgbmV3IGlucHV0cyB0YWtlblxyXG5mdW5jdGlvbiBlZGl0VGFza0luRG9tKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHRpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50LCBwcmlvcml0eUVsZW1lbnQsIGR1ZURhdGVFbGVtZW50KSB7XHJcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICEoZGVzY3JpcHRpb24udHJpbSgpKSkge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9ICdObyBkZXNjcmlwdGlvbiBwcm92aWRlZCc7XHJcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3Qtc3BlY2lmaWVkJykpIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1zcGVjaWZpZWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICBpZiAoZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbm90LXNwZWNpZmllZCcpKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdub3Qtc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcmlvcml0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcclxuICAgIHByaW9yaXR5RWxlbWVudC5jbGFzc05hbWUgPSBgcHJpb3JpdHkgJHtwcmlvcml0eX1gO1xyXG4gICAgXHJcbiAgICBpZiAoZHVlRGF0ZSAhPT0gJycpIHtcclxuICAgICAgICBkdWVEYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcbiAgICAgICAgaWYgKGR1ZURhdGVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbm90LXNwZWNpZmllZCcpKSB7XHJcbiAgICAgICAgICAgIGR1ZURhdGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1zcGVjaWZpZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGR1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gJ05vdCBzcGVjaWZpZWQnO1xyXG4gICAgICAgIGlmIChkdWVEYXRlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC1zcGVjaWZpZWQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZHVlRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LXNwZWNpZmllZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFNwZWNpYWxUYXNrKGVkaXRCdG5EYXRhSWQsIHByb2plY3REYXRhSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHsgICBcclxuXHJcbiAgICAvL2lmIHRoZSBwcmlvcml0eSBpbnB1dCBpcyBoaWdoLCBmaXJzdCBjaGVjayBpZiBpdHMgYWxyZWFkeSBpbiB0aGUgJ2ltcG9ydGFudCcgc2VjdGlvblxyXG4gICAgaWYgKHByaW9yaXR5ID09PSAnSGlnaCcpIHtcclxuICAgICAgICB2ZXJpZnlBbmRFZGl0T3JBZGQoaW1wb3J0YW50VGFza3MsIGltcG9ydGFudCwgZWRpdEJ0bkRhdGFJZCwgcHJvamVjdERhdGFJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgaW1wb3J0YW50UGFyYSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vaWYgcHJpb3JpdHkgaGFzIGJlZW4gY2hhbmdlZCBmcm9tIEhpZ2ggYW5kIGl0cyBpbiB0aGUgaW1wb3J0YW50IHNlY3Rpb24sIHdlIHJlbW92ZSBpdFxyXG4gICAgICAgIHZlcmlmeUFuZFJlbW92ZShpbXBvcnRhbnRUYXNrcywgaW1wb3J0YW50LCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCBpbXBvcnRhbnRQYXJhKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9lZGl0IGZvciB0aGUgJ3RvZGF5JyBzZWN0aW9uXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZShkdWVEYXRlKSkpIHtcclxuICAgICAgICB2ZXJpZnlBbmRFZGl0T3JBZGQodG9kYXlzVGFza3MsIHRvZGF5cywgZWRpdEJ0bkRhdGFJZCwgcHJvamVjdERhdGFJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgdG9kYXlQYXJhKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2ZXJpZnlBbmRSZW1vdmUodG9kYXlzVGFza3MsIHRvZGF5cywgZWRpdEJ0bkRhdGFJZCwgcHJvamVjdERhdGFJZCwgdG9kYXlQYXJhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2VkaXQgZm9yICd0aGlzIHdlZWsnIHNlY3Rpb25cclxuICAgIGlmIChpc1RoaXNXZWVrKG5ldyBEYXRlKGR1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUFuZEVkaXRPckFkZCh0aGlzV2Vla3NUYXNrcywgdGhpc1dlZWtzLCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCB1cGNvbWluZ1BhcmEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZlcmlmeUFuZFJlbW92ZSh0aGlzV2Vla3NUYXNrcywgdGhpc1dlZWtzLCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB1cGNvbWluZ1BhcmEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9lZGl0cyB0aGUgaW5mbyBpbiBhIHNwZWNpYWwgc2VjdGlvbiBpZiBpdHMgdGhlcmUgYW5kIGFkZHMgaXQgaWYgdGhlIGVkaXRlZCBkYXRhIGZpdHMgY3JpdGVyaWEgZm9yIHRoYXQgdGFzayB0byBiZSBpbiB0aGF0IHNwZWNpYWwgc2VjdGlvblxyXG5mdW5jdGlvbiB2ZXJpZnlBbmRFZGl0T3JBZGQodGFza3MsIHNlY3Rpb24sIGRhdGFJZCwgcHJvamVjdERhdGFJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgc2VjdGlvblBhcmEpIHtcclxuICAgIC8vY2hlY2tzIGlmIGl0cyB0aGVyZSBmaXJzdFxyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgICAgaWYgKHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGRhdGFJZCAmJiB0YXNrLmdldEF0dHJpYnV0ZSgncHJvamVjdC1kYXRhLWlkJykgPT09IHByb2plY3REYXRhSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlRWxlbWVudCA9IHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50ID0gdGFzay5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlFbGVtZW50ID0gZGVzY3JpcHRpb25FbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZUVsZW1lbnQgPSBkZXNjcmlwdGlvbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICAgICAgZWRpdFRhc2tJbkRvbSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCB0aXRsZUVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudCwgcHJpb3JpdHlFbGVtZW50LCBkdWVEYXRlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL2lmIGl0J3Mgbm90IHRoZXJlLCBjcmVhdGUgdGFzayBlbGVtZW50cyBmb3IgaXQgYW5kIGFkZCBpdCB0byB0aGUgc3BlY2lhbCBzZWN0aW9uXHJcbiAgICBsZXQgZWRpdGVkVGFzayA9IHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGF0YUlkLCBwcm9qZWN0RGF0YUlkKTtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZWRpdGVkVGFzayk7XHJcbiAgICB0YXNrcy5wdXNoKGVkaXRlZFRhc2spO1xyXG5cclxuICAgIHNlY3Rpb25QYXJhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcblxyXG4vL3JlbW92ZXMgdGhlIGluZm8gZnJvbSB0aGUgc3BlY2lhbCBzZWN0aW9uIGlmIGVkaXRlZCBkYXRhIG1ha2VzIGl0IHVuZml0IHRvIGJlIHRoZXJlXHJcbmZ1bmN0aW9uIHZlcmlmeUFuZFJlbW92ZSh0YXNrcywgc2VjdGlvbiwgZGF0YUlkLCBwcm9qZWN0RGF0YUlkLCBzZWN0aW9uUGFyYSkge1xyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgICAgaWYgKHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGRhdGFJZCAmJiB0YXNrLmdldEF0dHJpYnV0ZSgncHJvamVjdC1kYXRhLWlkJykgPT09IHByb2plY3REYXRhSWQpIHtcclxuICAgICAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tzLmluZGV4T2YodGFzayksIDEpO1xyXG4gICAgICAgICAgICBzZWN0aW9uLnJlbW92ZUNoaWxkKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFza3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgc2VjdGlvblBhcmEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9