/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Normalize.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\\r\\n\\r\\n/**\\r\\n * 1. Set default font family to sans-serif.\\r\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\r\\n *    user zoom.\\r\\n */\\r\\n\\r\\n *, *:before, *:after {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n html {\\r\\n    font-family: sans-serif; /* 1 */\\r\\n    -ms-text-size-adjust: 100%; /* 2 */\\r\\n    -webkit-text-size-adjust: 100%; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove default margin.\\r\\n   */\\r\\n  \\r\\n  body {\\r\\n    margin: 0;\\r\\n  }\\r\\n  \\r\\n  /* HTML5 display definitions\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\\r\\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\\r\\n   * and Firefox.\\r\\n   * Correct `block` display not defined for `main` in IE 11.\\r\\n   */\\r\\n  \\r\\n  article,\\r\\n  aside,\\r\\n  details,\\r\\n  figcaption,\\r\\n  figure,\\r\\n  footer,\\r\\n  header,\\r\\n  hgroup,\\r\\n  main,\\r\\n  menu,\\r\\n  nav,\\r\\n  section,\\r\\n  summary {\\r\\n    display: block;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct `inline-block` display not defined in IE 8/9.\\r\\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\\r\\n   */\\r\\n  \\r\\n  audio,\\r\\n  canvas,\\r\\n  progress,\\r\\n  video {\\r\\n    display: inline-block; /* 1 */\\r\\n    vertical-align: baseline; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Prevent modern browsers from displaying `audio` without controls.\\r\\n   * Remove excess height in iOS 5 devices.\\r\\n   */\\r\\n  \\r\\n  audio:not([controls]) {\\r\\n    display: none;\\r\\n    height: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address `[hidden]` styling not present in IE 8/9/10.\\r\\n   * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\\r\\n   */\\r\\n  \\r\\n  [hidden],\\r\\n  template {\\r\\n    display: none;\\r\\n  }\\r\\n  \\r\\n  /* Links\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove the gray background color from active links in IE 10.\\r\\n   */\\r\\n  \\r\\n  a {\\r\\n    background-color: transparent;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Improve readability when focused and also mouse hovered in all browsers.\\r\\n   */\\r\\n  \\r\\n  a:active,\\r\\n  a:hover {\\r\\n    outline: 0;\\r\\n  }\\r\\n  \\r\\n  /* Text-level semantics\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\\r\\n   */\\r\\n  \\r\\n  abbr[title] {\\r\\n    border-bottom: 1px dotted;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\\r\\n   */\\r\\n  \\r\\n  b,\\r\\n  strong {\\r\\n    font-weight: bold;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address styling not present in Safari and Chrome.\\r\\n   */\\r\\n  \\r\\n  dfn {\\r\\n    font-style: italic;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address variable `h1` font-size and margin within `section` and `article`\\r\\n   * contexts in Firefox 4+, Safari, and Chrome.\\r\\n   */\\r\\n  \\r\\n  h1 {\\r\\n    font-size: 2em;\\r\\n    margin: 0.67em 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address styling not present in IE 8/9.\\r\\n   */\\r\\n  \\r\\n  mark {\\r\\n    background: #ff0;\\r\\n    color: #000;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address inconsistent and variable font size in all browsers.\\r\\n   */\\r\\n  \\r\\n  small {\\r\\n    font-size: 80%;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\\r\\n   */\\r\\n  \\r\\n  sub,\\r\\n  sup {\\r\\n    font-size: 75%;\\r\\n    line-height: 0;\\r\\n    position: relative;\\r\\n    vertical-align: baseline;\\r\\n  }\\r\\n  \\r\\n  sup {\\r\\n    top: -0.5em;\\r\\n  }\\r\\n  \\r\\n  sub {\\r\\n    bottom: -0.25em;\\r\\n  }\\r\\n  \\r\\n  /* Embedded content\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove border when inside `a` element in IE 8/9/10.\\r\\n   */\\r\\n  \\r\\n  img {\\r\\n    border: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct overflow not hidden in IE 9/10/11.\\r\\n   */\\r\\n  \\r\\n  svg:not(:root) {\\r\\n    overflow: hidden;\\r\\n  }\\r\\n  \\r\\n  /* Grouping content\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Address margin not present in IE 8/9 and Safari.\\r\\n   */\\r\\n  \\r\\n  figure {\\r\\n    margin: 1em 40px;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address differences between Firefox and other browsers.\\r\\n   */\\r\\n  \\r\\n  hr {\\r\\n    -moz-box-sizing: content-box;\\r\\n    box-sizing: content-box;\\r\\n    height: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Contain overflow in all browsers.\\r\\n   */\\r\\n  \\r\\n  pre {\\r\\n    overflow: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address odd `em`-unit font size rendering in all browsers.\\r\\n   */\\r\\n  \\r\\n  code,\\r\\n  kbd,\\r\\n  pre,\\r\\n  samp {\\r\\n    font-family: monospace, monospace;\\r\\n    font-size: 1em;\\r\\n  }\\r\\n  \\r\\n  /* Forms\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\\r\\n   * styling of `select`, unless a `border` property is set.\\r\\n   */\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct color not being inherited.\\r\\n   *    Known issue: affects color of disabled elements.\\r\\n   * 2. Correct font properties not being inherited.\\r\\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  input,\\r\\n  optgroup,\\r\\n  select,\\r\\n  textarea {\\r\\n    color: inherit; /* 1 */\\r\\n    font: inherit; /* 2 */\\r\\n    margin: 0; /* 3 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\\r\\n   */\\r\\n  \\r\\n  button {\\r\\n    overflow: visible;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\\r\\n   * All other form control elements do not inherit `text-transform` values.\\r\\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\\r\\n   * Correct `select` style inheritance in Firefox.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  select {\\r\\n    text-transform: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\r\\n   *    and `video` controls.\\r\\n   * 2. Correct inability to style clickable `input` types in iOS.\\r\\n   * 3. Improve usability and consistency of cursor style between image-type\\r\\n   *    `input` and others.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  html input[type=\\\"button\\\"], /* 1 */\\r\\n  input[type=\\\"reset\\\"],\\r\\n  input[type=\\\"submit\\\"] {\\r\\n    -webkit-appearance: button; /* 2 */\\r\\n    cursor: pointer; /* 3 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Re-set default cursor for disabled elements.\\r\\n   */\\r\\n  \\r\\n  button[disabled],\\r\\n  html input[disabled] {\\r\\n    cursor: default;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove inner padding and border in Firefox 4+.\\r\\n   */\\r\\n  \\r\\n  button::-moz-focus-inner,\\r\\n  input::-moz-focus-inner {\\r\\n    border: 0;\\r\\n    padding: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\r\\n   * the UA stylesheet.\\r\\n   */\\r\\n  \\r\\n  input {\\r\\n    line-height: normal;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * It's recommended that you don't attempt to style these elements.\\r\\n   * Firefox's implementation doesn't respect box-sizing, padding, or width.\\r\\n   *\\r\\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\\r\\n   * 2. Remove excess padding in IE 8/9/10.\\r\\n   */\\r\\n  \\r\\n  input[type=\\\"checkbox\\\"],\\r\\n  input[type=\\\"radio\\\"] {\\r\\n    box-sizing: border-box; /* 1 */\\r\\n    padding: 0; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Fix the cursor style for Chrome's increment/decrement buttons. For certain\\r\\n   * `font-size` values of the `input`, it causes the cursor style of the\\r\\n   * decrement button to change from `default` to `text`.\\r\\n   */\\r\\n  \\r\\n  input[type=\\\"number\\\"]::-webkit-inner-spin-button,\\r\\n  input[type=\\\"number\\\"]::-webkit-outer-spin-button {\\r\\n    height: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\\r\\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\\r\\n   *    (include `-moz` to future-proof).\\r\\n   */\\r\\n  \\r\\n  input[type=\\\"search\\\"] {\\r\\n    -webkit-appearance: textfield; /* 1 */\\r\\n    -moz-box-sizing: content-box;\\r\\n    -webkit-box-sizing: content-box; /* 2 */\\r\\n    box-sizing: content-box;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\\r\\n   * Safari (but not Chrome) clips the cancel button when the search input has\\r\\n   * padding (and `textfield` appearance).\\r\\n   */\\r\\n  \\r\\n  input[type=\\\"search\\\"]::-webkit-search-cancel-button,\\r\\n  input[type=\\\"search\\\"]::-webkit-search-decoration {\\r\\n    -webkit-appearance: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Define consistent border, margin, and padding.\\r\\n   */\\r\\n  \\r\\n  fieldset {\\r\\n    border: 1px solid #c0c0c0;\\r\\n    margin: 0 2px;\\r\\n    padding: 0.35em 0.625em 0.75em;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\\r\\n   * 2. Remove padding so people aren't caught out if they zero out fieldsets.\\r\\n   */\\r\\n  \\r\\n  legend {\\r\\n    border: 0; /* 1 */\\r\\n    padding: 0; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove default vertical scrollbar in IE 8/9/10/11.\\r\\n   */\\r\\n  \\r\\n  textarea {\\r\\n    overflow: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Don't inherit the `font-weight` (applied by a rule above).\\r\\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\\r\\n   */\\r\\n  \\r\\n  optgroup {\\r\\n    font-weight: bold;\\r\\n  }\\r\\n  \\r\\n  /* Tables\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove most spacing between table cells.\\r\\n   */\\r\\n  \\r\\n  table {\\r\\n    border-collapse: collapse;\\r\\n    border-spacing: 0;\\r\\n  }\\r\\n  \\r\\n  td,\\r\\n  th {\\r\\n    padding: 0;\\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".hook {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.topDiv {\\r\\n  height: 250px;\\r\\n  background: no-repeat center/100%;\\r\\n}\\r\\n\\r\\n.bottomDiv {\\r\\n  position: relative;\\r\\n  height: 1200px;\\r\\n}\\r\\n\\r\\n.intro {\\r\\n  font-size: 3em;\\r\\n  top: 12%;\\r\\n  color: rgb(24, 3, 53);\\r\\n  left: 25%;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  border-radius: 10px;\\r\\n  width: 80%;\\r\\n  height: 200px;\\r\\n  top: -7%;\\r\\n  left: 9%;\\r\\n  background-color: blueviolet;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.header>h1 {\\r\\n  font-size: 4em;\\r\\n}\\r\\n\\r\\n.header>h1 {\\r\\n  color: antiquewhite;\\r\\n}\\r\\n\\r\\n.header>img {\\r\\n  max-height: 200px;\\r\\n  width: auto;\\r\\n}\\r\\n\\r\\n.tabsWrap {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  height: 480px;\\r\\n  margin-top: 20%;\\r\\n  margin-bottom: 10%;\\r\\n  padding: 20px;\\r\\n  perspective: 700px;\\r\\n}\\r\\n\\r\\n.menu, .contact {\\r\\n  width: 48%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  padding: 50px;\\r\\n  border-radius: 15px;\\r\\n  z-index: -3;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  border: 1px solid red;\\r\\n}\\r\\n\\r\\n.contact {\\r\\n  background-color: #8F1965;\\r\\n}\\r\\n\\r\\n.menuDes, .contactDes, .header>h1,.intro, .itemInfo {\\r\\n  font-family: cursive;\\r\\n}\\r\\n\\r\\n.menuDes, .contactDes {\\r\\n  font-size: 3em;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.menuDes {\\r\\n  color: rgb(6, 20, 0);\\r\\n}\\r\\n\\r\\n.contactDes {\\r\\n  color: ghostwhite;\\r\\n}\\r\\n\\r\\n.menuBut, .contactBut {\\r\\n  position: absolute;\\r\\n  top: 18%;\\r\\n  font-size: 2.3em;\\r\\n  padding: 10px 15px;\\r\\n  border-radius: 15px;\\r\\n  margin-top: 15px;\\r\\n  box-shadow: 1px 2px 2px gray;\\r\\n}\\r\\n\\r\\n.menuBut {\\r\\n  background-color: crimson;\\r\\n  color: #fff;\\r\\n  left: 30%;\\r\\n}\\r\\n\\r\\n.contactBut {\\r\\n  background-color: rgb(43, 226, 156);\\r\\n  left: 50%;\\r\\n}\\r\\n\\r\\n.menuBut:focus, .contactBut:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.contact {\\r\\n  width: 48%;\\r\\n  transition: width 3s;\\r\\n  border: 1px solid #000;\\r\\n}\\r\\n\\r\\n.slide-out-left, .slide-out-right, .intro, .table, .header {\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.slide-out-left {\\r\\n  transform: rotate3d(1, 1, 0, 180deg);\\r\\n  opacity: 0;\\r\\n  transition: transform 2.5s, opacity 3s;\\r\\n}\\r\\n\\r\\n.slide-out-right {\\r\\n  transform: rotate3d(1, 0, 1, 180deg);\\r\\n  opacity: 0;\\r\\n  transition: transform 2.5s, opacity 3s;\\r\\n}\\r\\n\\r\\n.slide-in-left {\\r\\n  transform: rotate3d(1, 1, 0, 0deg);\\r\\n  opacity: 1;\\r\\n  transition: transform 2.5s, opacity 3s;\\r\\n}\\r\\n\\r\\n.slide-in-right {\\r\\n  transform: rotate3d(1, 0, 1, 0deg);\\r\\n  opacity: 1;\\r\\n  transition: transform 2.5s, opacity 3s;\\r\\n}\\r\\n\\r\\n.table {\\r\\n  display: grid;\\r\\n  background-color: #fff;\\r\\n  position: absolute;\\r\\n  transform: translateX(-1800px);\\r\\n  transition: all 2.6s ease-in;\\r\\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\\r\\n  gap: 10px;\\r\\n  top: 32%;\\r\\n  left: 5%;\\r\\n  width: 90%;\\r\\n  z-index: 10;\\r\\n  height: 720px;\\r\\n}\\r\\n\\r\\n.itemWrap {\\r\\n  position: relative;\\r\\n  text-align: center;\\r\\n  overflow: hidden;\\r\\n  background-color: rgba(192, 192, 192, 0.1);\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.itemImg {\\r\\n  max-width: 170px;\\r\\n  height: auto;\\r\\n  margin-top: 15%;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.itemDes {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 3%;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.itemInfo {\\r\\n  margin-top: 10px;\\r\\n  background-color: rgb(204, 85, 6);\\r\\n  color: #fff;\\r\\n  width: 50%;\\r\\n  padding: 5px 0 5px 15px;\\r\\n  border-radius: 20px;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n.itemDescript {\\r\\n  margin-top: 48%;\\r\\n  margin-left: 18%;\\r\\n  font-size: 0.8em;\\r\\n  width: 60%;\\r\\n  padding: 5px;\\r\\n  border: 2px solid silver;\\r\\n  background-color: #fff;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.itemPrice {\\r\\n  display: block;\\r\\n  position: absolute;\\r\\n  top: 40%;\\r\\n  left: 79%;\\r\\n  color: #fff;\\r\\n  border-radius: 15px;\\r\\n  padding: 10px;\\r\\n  text-align: left;\\r\\n  width: 90px;\\r\\n  font-size: 1.3em;\\r\\n  background-color: rgb(204, 85, 6);\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 1030px) {\\r\\n  .header {\\r\\n    height: 250px;\\r\\n  }\\r\\n  .header>h1, .intro {\\r\\n    font-size: 4.5em;\\r\\n  }\\r\\n  .header>img {\\r\\n    max-height: 200px;\\r\\n  }\\r\\n  .menuDes, .contactDes {\\r\\n    font-size: 2.5em;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 800px) {\\r\\n  .header {\\r\\n    height: 200px;\\r\\n  }\\r\\n  .header>h1, .intro {\\r\\n    font-size: 3.5em;\\r\\n  }\\r\\n  .header>img {\\r\\n    max-height: 150px;\\r\\n  }\\r\\n  .tabsWrap {\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n  .menu, .contact {\\r\\n    width: 90%;\\r\\n  }\\r\\n  .contact {\\r\\n    margin-top: 30px;\\r\\n  }\\r\\n  .menuDes, .contactDes {\\r\\n    font-size: 2em;\\r\\n  }\\r\\n  .contactBut, .menuBut {\\r\\n    font-size: 1.5em;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 430px) {\\r\\n  .header>h1, .intro {\\r\\n    font-size: 1.5em;\\r\\n  }\\r\\n  .header>img {\\r\\n    max-height: 120px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 330px) {\\r\\n  .header {\\r\\n    top: -15%;\\r\\n    left: 8%;\\r\\n    height: 150px;\\r\\n    width: 85%;\\r\\n  }\\r\\n  .header>h1, .intro {\\r\\n    font-size: 1.2em;\\r\\n  }\\r\\n  .header>img {\\r\\n    max-height: 100px;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Normalize.css":
/*!***************************!*\
  !*** ./src/Normalize.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./Normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Normalize.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/Normalize.css?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contact = () => {\n  const createElem = elem => document.createElement(elem);\n  const contact = document.querySelector('.contact');\n  const contactDes = createElem('p');\n  const contactBut = createElem('button');\n  contact.append(contactDes);\n  document.querySelector('.bottomDiv').appendChild(contactBut);\n  contactDes.classList.add('contactDes');\n  contactBut.classList.add('contactBut');\n  contactDes.textContent = 'Have complaints or suggestions? Kindly reach out to us.';\n  contactBut.textContent = 'Contact us';\n\n  contactBut.addEventListener('click', () => {\n    document.querySelector('.table').style.transform = 'translateX(-1800px)';\n    const menu = document.querySelector('.menu');\n    const contact = document.querySelector('.contact');\n\n    const switchIn = () => {\n      contact.style.visibility = 'visible';\n      contact.style.width = '48%';\n      menu.style.visibility = 'visible';\n      menu.classList.replace('slide-out-left', 'slide-in-left');\n      contact.classList.replace('slide-out-right', 'slide-in-right');\n    };\n    const switchOut = () => {\n      menu.style.visibility = 'hidden';\n      contact.style.width = '90%';\n    };\n    if (menu.classList.value.indexOf('slide-out-left') !== -1) {\n      switchIn();\n    } else {\n      switchOut();\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/food-blue.jpg":
/*!***************************!*\
  !*** ./src/food-blue.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b744fd80453bc10e38302a11f1bc1a3d.jpg\");\n\n//# sourceURL=webpack:///./src/food-blue.jpg?");

/***/ }),

/***/ "./src/food-tray.svg":
/*!***************************!*\
  !*** ./src/food-tray.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cafacf86bb3cc6df256357e395950236.svg\");\n\n//# sourceURL=webpack:///./src/food-tray.svg?");

/***/ }),

/***/ "./src/food.jpg":
/*!**********************!*\
  !*** ./src/food.jpg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b82e226f1d87a66c50c4cc48d17edde1.jpg\");\n\n//# sourceURL=webpack:///./src/food.jpg?");

/***/ }),

/***/ "./src/food1.jpg":
/*!***********************!*\
  !*** ./src/food1.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b3270cd20a2736e5c1cc5096c164216c.jpg\");\n\n//# sourceURL=webpack:///./src/food1.jpg?");

/***/ }),

/***/ "./src/food2.jpg":
/*!***********************!*\
  !*** ./src/food2.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5c4e95806aa7125cde9bb4388f0a73b1.jpg\");\n\n//# sourceURL=webpack:///./src/food2.jpg?");

/***/ }),

/***/ "./src/food3.jpg":
/*!***********************!*\
  !*** ./src/food3.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"99f719fd632e8d26d36da7305fe763ff.jpg\");\n\n//# sourceURL=webpack:///./src/food3.jpg?");

/***/ }),

/***/ "./src/food4.jpg":
/*!***********************!*\
  !*** ./src/food4.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6684e8fdb464dfa348eec7d2aa2400eb.jpg\");\n\n//# sourceURL=webpack:///./src/food4.jpg?");

/***/ }),

/***/ "./src/food5.jpg":
/*!***********************!*\
  !*** ./src/food5.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ebd77fa6a386d66e9e5b117ef5c2d376.jpg\");\n\n//# sourceURL=webpack:///./src/food5.jpg?");

/***/ }),

/***/ "./src/food6.jpg":
/*!***********************!*\
  !*** ./src/food6.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1356061b1aff65b487f6535285759b04.jpg\");\n\n//# sourceURL=webpack:///./src/food6.jpg?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _food_tray_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-tray.svg */ \"./src/food-tray.svg\");\n\n\nconst headerComps = () => {\n  const head = document.querySelector('.header');\n  const createElem = elem => document.createElement(elem);\n\n  const headText = createElem('h1');\n  const headIcon = createElem('img');\n  headIcon.setAttribute('src', _food_tray_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  headIcon.setAttribute('alt', 'icon');\n  head.append(headText, headIcon);\n  headText.textContent = 'The Clinkers';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerComps);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoader */ \"./src/pageLoader.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nObject(_pageLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_menu__WEBPACK_IMPORTED_MODULE_2__[\"menu\"])();\nObject(_menu__WEBPACK_IMPORTED_MODULE_2__[\"tableMenu\"])();\nObject(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menu, tableMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tableMenu\", function() { return tableMenu; });\n/* harmony import */ var _food1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food1.jpg */ \"./src/food1.jpg\");\n/* harmony import */ var _food2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food2.jpg */ \"./src/food2.jpg\");\n/* harmony import */ var _food3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food3.jpg */ \"./src/food3.jpg\");\n/* harmony import */ var _food4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food4.jpg */ \"./src/food4.jpg\");\n/* harmony import */ var _food5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food5.jpg */ \"./src/food5.jpg\");\n/* harmony import */ var _food6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food6.jpg */ \"./src/food6.jpg\");\n\n\n\n\n\n\n\nconst createElem = elem => document.createElement(elem);\nconst tableMenu = () => {\n  const table = document.querySelector('.table');\n  const menuObjects = [\n    {\n      src: _food1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      imgDes: 'Roasted Crispy Potato',\n      descript:\n        'Golden crispy skins topped with the great A.J. Hornings Haggis & served with our whisky, peppercorn, wholegrain mustard & cream sauce. Topped with mild cheddar cheese.',\n      price: '£7.00',\n    },\n    {\n      src: _food2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      imgDes: 'Neeps & Tatties Taster',\n      descript:\n        'A perfect beginners option for those new to Haggis. Small plate of our haggis, potato, turnip with a peppercorn sauce.',\n      price: '£5.00',\n    },\n    {\n      src: _food3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      imgDes: 'Cheese & Egg Rosti',\n      descript:\n        'Our home-made prime steak burger stacked on top of a potato rosti fritter, sprinkled with mild Scottish cheddar, crowned with a tomato & fried egg. Served with a salad garnish & our homemade coleslaw.',\n      price: '£9.00',\n    },\n    {\n      src: _food4_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      imgDes: 'Smoked Gammon',\n      descript:\n        'Gluten Trace. Spiced, cured & smoked using traditional techniques. Outdoor reared pigs make for an intensley flavoured & tender meat that we slice & char-grilled.',\n      price: '£11.00',\n    },\n    {\n      src: _food5_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      imgDes: 'Braised Ox Cheek',\n      descript:\n        'We highly recommend that you try this dish. Slow cooked until tender, prime beef cheek breaks apart effortlessly. The button mushrooms & rich dark gravy finish it perfectly.',\n      price: '£15.00',\n    },\n    {\n      src: _food6_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      imgDes: 'Crust Rosti Stack',\n      descript:\n        'A giant marinated portobello mushroom is baked & stuffed with a wild garlic, fresh herbs and cheese crumble. Meaty but with no meat.',\n      price: '£9.00',\n    },\n  ];\n\n  menuObjects.forEach(e => {\n    const itemWrap = createElem('div');\n    const itemImg = createElem('img');\n    const itemDes = createElem('div');\n    const itemInfo = createElem('p');\n    itemWrap.classList.add('itemWrap');\n    itemImg.classList.add('itemImg');\n    itemDes.classList.add('itemDes');\n    itemInfo.classList.add('itemInfo');\n    table.appendChild(itemWrap);\n    itemWrap.append(itemImg, itemDes);\n    itemImg.setAttribute('src', e.src);\n    itemImg.setAttribute('alt', 'food-image');\n    itemInfo.textContent = e.imgDes;\n    const itemDescript = createElem('p');\n    itemDescript.classList.add('itemDescript');\n    const itemPrice = createElem('span');\n    itemPrice.classList.add('itemPrice');\n    itemDes.append(itemInfo, itemDescript, itemPrice);\n    itemDescript.textContent = e.descript;\n    itemPrice.textContent = e.price;\n  });\n};\n\nconst menu = () => {\n  const menu = document.querySelector('.menu');\n  const contact = document.querySelector('.contact');\n  const menuDes = createElem('p');\n  const menuBut = createElem('button');\n  menu.appendChild(menuDes);\n  document.querySelector('.bottomDiv').appendChild(menuBut);\n  menuDes.classList.add('menuDes');\n  menuBut.classList.add('menuBut');\n  menuDes.textContent = 'Explore our diverse international cuisines crafted just for you.';\n  menuBut.textContent = 'Open Menu';\n\n  const switchIn = () => {\n    menu.classList.replace('slide-in-left', 'slide-out-left');\n    contact.classList.replace('slide-in-right', 'slide-out-right');\n  };\n\n  const switchOut = () => {\n    menu.classList.add('slide-out-left');\n    contact.classList.add('slide-out-right');\n  };\n\n  menuBut.addEventListener('click', () => {\n    if (contact.style.width === '90%') {\n      contact.style.visibility = 'hidden';\n    }\n    if (menu.classList.value.indexOf('slide-in-left') !== -1) {\n      switchIn();\n    } else {\n      switchOut();\n    }\n    document.querySelector('.table').style.transform = 'translateX(0px)';\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpg */ \"./src/food.jpg\");\n/* harmony import */ var _food_blue_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-blue.jpg */ \"./src/food-blue.jpg\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Normalize.css */ \"./src/Normalize.css\");\n/* harmony import */ var _Normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Normalize_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst createElem = elem => document.createElement(elem);\nconst tabs = (parent) => {\n  const tabsWrap = createElem('div');\n  const menu = createElem('div');\n  const contact = createElem('div');\n  parent.appendChild(tabsWrap);\n  tabsWrap.append(menu, contact);\n  tabsWrap.classList.add('tabsWrap');\n  menu.classList.add('menu');\n  menu.style.backgroundImage = `url(${_food_blue_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]})`;\n  contact.classList.add('contact');\n};\n\nconst pageLoad = () => {\n  const hook = document.querySelector('#content');\n\n  const topDiv = createElem('div');\n  const bottomDiv = createElem('div');\n  const header = createElem('div');\n  const table = createElem('div');\n  const intro = createElem('p');\n  hook.append(topDiv, bottomDiv);\n  bottomDiv.append(header, table, intro);\n  header.classList.add('header');\n  hook.classList.add('hook');\n  topDiv.classList.add('topDiv');\n  bottomDiv.classList.add('bottomDiv');\n  table.classList.add('table');\n  intro.classList.add('intro');\n  intro.textContent = 'A thousand favors in one place!';\n  topDiv.style.backgroundImage = `url(${_food_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]})`;\n\n  tabs(bottomDiv);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageLoad);\n\n\n//# sourceURL=webpack:///./src/pageLoader.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });