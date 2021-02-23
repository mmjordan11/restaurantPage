/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMTools.js":
/*!*************************!*\
  !*** ./src/DOMTools.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createParagraphs\": () => (/* binding */ createParagraphs),\n/* harmony export */   \"createArticle\": () => (/* binding */ createArticle),\n/* harmony export */   \"createArticleHeading\": () => (/* binding */ createArticleHeading),\n/* harmony export */   \"createMenuDisplay\": () => (/* binding */ createMenuDisplay),\n/* harmony export */   \"createFormField\": () => (/* binding */ createFormField)\n/* harmony export */ });\nconst createParagraphs = (obj) => {\n  const paragraphs = []\n  const flattenObj = (object) => {\n    for (let item in object) {\n      if (!Array.isArray(object[item])) {\n        const p = document.createElement('p');\n        p.innerHTML = object[item];\n        paragraphs.push(p);\n      }\n      else {\n        flattenObj(object[item]);\n      }\n    }\n  }\n  flattenObj(obj);\n  return paragraphs;\n};\n\nconst createArticle = (type) => {\n  const article = document.createElement('article');\n  article.id = type;\n  return article\n};\n\nconst createArticleHeading = (text) => {\n  const h2 = document.createElement('h2');\n  h2.textContent = text;\n  return h2;\n};\n\nconst createMenuItem = (item) => {\n  const container = document.createElement('div');\n  container.classList.add('menu--category--info--item');\n  for (let detail in item.state) {\n    const p = document.createElement('p');\n    p.classList.add(`menu--category--info--item--${detail}`);\n    p.textContent = item.state[detail];\n    container.appendChild(p);\n  }\n\n  return container;\n}\n\nconst createCategoryInfo = (category) => {\n  const info = document.createElement('div');\n  info.classList.add('menu--category--info')\n\n  const h2 = document.createElement('h2');\n  h2.classList.add('menu--category--info--name');\n  h2.textContent = category.getName();\n\n  const h3 = document.createElement('h3');\n  h3.textContent = category.getModifiers();\n\n  const extras = category.getExtras();\n  const pExtras = document.createElement('p');\n  for (let extra in extras) {\n    (pExtras.textContent == '') ?\n      pExtras.textContent += `Add ${extra} : ${extras[extra]}` :\n      pExtras.textContent += ` | ${extra} : ${extras[extra]}`;\n  }\n\n  info.appendChild(h2);\n  info.appendChild(h3);\n  info.appendChild(pExtras);\n\n  const categoryItems = category.getCategoryItems();\n\n  categoryItems.forEach((item) => {\n    info.appendChild(createMenuItem(item));\n  });\n\n\n    return info;\n}\n\nconst createCategory = (category) => {\n  const name = category.getName().toLowerCase();\n\n  const container = document.createElement('div');\n  container.id = name;\n  container.classList.add('menu--category');\n\n  const graphic = document.createElement('div');\n  graphic.classList.add('menu--category--graphic')\n  switch (name) {\n    case 'burritos':\n      graphic.textContent = '🌯';\n      break;\n    case 'tacos':\n      graphic.textContent = '🌮';\n      break;\n    default:\n      break;\n  };\n\n  container.appendChild(createCategoryInfo(category));\n  container.appendChild(graphic);\n\n  return container;\n}\n\nconst createMenuDisplay = (menu) => {\n  const container = document.createElement('div')\n  container.id = 'menu-items';\n  for (let category in menu) {\n    container.appendChild(createCategory(menu[category]));\n  }\n\n  return container;\n};\n\nconst createFormField = (element,type,label,required=true) => {\n  const container = document.createElement('div');\n  container.classList.add('form-field');\n  if (element == 'button') {\n    const field = document.createElement(element);\n    field.setAttribute('type',type);\n    field.id = label.toLowerCase();\n    field.textContent = label;\n    container.appendChild(field);\n  }\n  else {\n    const labelElem = document.createElement('label');\n    labelElem.setAttribute('for',label);\n    labelElem.textContent = label;\n    container.appendChild(labelElem);\n\n    const field = document.createElement(element);\n    field.setAttribute('type',type);\n    field.id = label;\n    field.setAttribute('required', required);\n    container.appendChild(field);\n  }\n\n\n  return container;\n}\n\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/DOMTools.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContact\": () => (/* binding */ renderContact)\n/* harmony export */ });\n/* harmony import */ var _DOMTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMTools */ \"./src/DOMTools.js\");\n\n\nconst renderContact = () => {\n  const article = (0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createArticle)('contact')\n\n  article.appendChild((0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createArticleHeading)('We\\'d love to hear from you!'));\n\n  const articleBody = document.createElement('div');\n  articleBody.id = 'article-body';\n\n  const form = document.createElement('form');\n\n  form.appendChild((0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createFormField)('input', 'text', 'Name'));\n  form.appendChild((0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createFormField)('input', 'email', 'Email'));\n  form.appendChild((0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createFormField)('textarea', 'text', 'Comments'));\n  form.appendChild((0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createFormField)('button', 'submit', 'Submit'));\n\n  articleBody.appendChild(form);\n\n  const map = document.createElement('div');\n  map.id = 'map';\n  map.innerHTML = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.0763582743016!2d-122.28889148472413!3d38.30089858948762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80850667402e0ce3%3A0x3c2b7ff48360eae5!2sTaqueria%20Rosita!5e0!3m2!1sen!2sus!4v1613893274242!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>`;\n\n  articleBody.appendChild(map);\n\n  article.appendChild(articleBody);\n\n  return article;\n};\n\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderFooter\": () => (/* binding */ renderFooter)\n/* harmony export */ });\n/* harmony import */ var _DOMTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMTools */ \"./src/DOMTools.js\");\n\n\nconst createLocation = () => {\n  const location = document.createElement('div');\n  location.id = 'location';\n\n  const _h3 = document.createElement('h3');\n  _h3.textContent = 'Location';\n\n  const _contactInfo = {\n    address: ['1214 Main Street', 'Napa, CA 94559'],\n    phone: '(707) 253-9208',\n  };\n\n  location.appendChild(_h3);\n  (0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createParagraphs)(_contactInfo).forEach(elem => location.appendChild(elem));\n\n  return location;\n}\n\nconst createHours = () => {\n  const hours = document.createElement('div');\n  hours.id = 'hours';\n\n  const _h3 = document.createElement('h3');\n  _h3.textContent = 'Hours';\n\n  const _hours = {\n    hours: '10:30AM-9:00PM',\n    days: 'Monday-Saturday',\n    closed: 'Closed Sunday',\n  }\n\n  hours.appendChild(_h3);\n  (0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createParagraphs)(_hours).forEach(elem => hours.appendChild(elem));\n\n  return hours;\n}\n\nconst createConnect = () => {\n  const connect = document.createElement('div');\n  connect.id = 'connect';\n\n  const _h3 = document.createElement('h3');\n  _h3.textContent = 'Connect';\n\n  const socialBlock = document.createElement('div');\n  socialBlock.id = 'social-block';\n\n  const _social = {\n    facebook: {\n      link: 'https://www.facebook.com/Taqueria-Rosita-304411464302/',\n      classes: ['fab', 'fa-facebook'],\n    },\n    twitter: {\n      link: 'https://twitter.com/taqrositanapa',\n      classes: ['fab', 'fa-twitter']\n    },\n    instagram: {\n      link: 'https://www.instagram.com/taqrositanapa/',\n      classes: ['fab', 'fa-instagram'],\n    },\n    yelp: {\n      link: 'https://www.yelp.com/biz/taqueria-rosita-napa',\n      classes: ['fab', 'fa-yelp'],\n    },\n    email: {\n      link: 'mailto:info@taqueriarosita.com',\n      classes: ['far', 'fa-envelope'],\n    },\n  }\n\n  const createSocialLinks = (obj) => {\n    const links = []\n    for (let account in obj) {\n      const a = document.createElement('a');\n      a.href = obj[account].link;\n      const i = document.createElement('i');\n      obj[account].classes.forEach(faClass => {\n        i.classList.add(faClass);\n      })\n\n      a.appendChild(i);\n      links.push(a);\n    }\n    return links;\n  }\n\n  connect.appendChild(_h3);\n  createSocialLinks(_social).forEach(link => socialBlock.appendChild(link));\n  connect.appendChild(socialBlock);\n\n  return connect\n}\n\nconst createContactBar = () => {\n  const contactBar = document.createElement('div');\n  contactBar.id = 'contact-bar';\n\n  contactBar.appendChild(createLocation());\n  contactBar.appendChild(createHours());\n  contactBar.appendChild(createConnect());\n\n  return contactBar;\n}\n\nconst createSignature = () => {\n  const signature = document.createElement('div');\n  signature.id = 'signature';\n\n  const paragraphs = [\n    `Hand-typed by <a href=\"https://github.com/mmjordan11\">Matt Jordan</a>.`,\n    `Fashioned after the real <a href=\"https://taqueriarosita.com/\">Taqueria Rosita</a>. Check them out!`,\n  ]\n\n  ;(0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createParagraphs)(paragraphs).forEach(elem => signature.appendChild(elem));\n\n  return signature;\n}\n\nconst renderFooter = () => {\n  const footer = document.createElement('footer');\n\n  footer.appendChild(createContactBar());\n  footer.appendChild(createSignature());\n\n  return footer;\n}\n\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHeader\": () => (/* binding */ renderHeader)\n/* harmony export */ });\nconst createLogo = () => {\n  const logo = document.createElement('logo');\n  const logoImg = document.createElement('img');\n  const logoName = document.createElement('h1');\n\n  logo.id = 'logo';\n  logoImg.src = 'tr-logo_home.png';\n  logoName.textContent = 'Taqueria Rosita';\n\n  logo.appendChild(logoImg);\n  logo.appendChild(logoName);\n\n  return logo;\n}\n\nconst createSlogan = () => {\n  const slogan = document.createElement('div');\n  slogan.id = 'slogan';\n  slogan.textContent = 'Killer Mexican Food';\n\n  return slogan;\n}\n\nconst createNav = () => {\n  const nav = document.createElement('nav');\n  const _navItems = ['Home','Menu','Contact'];\n\n  _navItems.forEach(navItem => {\n    const container = document.createElement('div');\n    const btn = document.createElement('button');\n\n    container.classList.add('nav-item');\n    btn.id = `nav--${navItem.toLowerCase()}-btn`;\n    btn.textContent = navItem;\n\n    container.appendChild(btn);\n    nav.appendChild(container);\n  });\n\n  return nav;\n}\n\nconst renderHeader = () => {\n  const header = document.createElement('header');\n\n  header.appendChild(createLogo());\n  header.appendChild(createSlogan());\n  header.appendChild(createNav());\n\n  return header;\n}\n\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _DOMTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMTools */ \"./src/DOMTools.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\nconst createText = () => {\n  const paragraphText = [\n    'Taqueria Rosita is a family-owned and operated Mexican restaurant located in the heart of the Napa Valley.',\n    'Never been to our restaurant? Check out the menu!'\n  ];\n  return (0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createParagraphs)(paragraphText);\n}\n\nconst createMenuBtn = () => {\n  const menuBtn = document.createElement('button');\n  menuBtn.id = 'article--menu-btn';\n  menuBtn.textContent = 'MENU';\n  menuBtn.addEventListener('click', () => {\n    document.querySelector('article').remove();\n    document.querySelector('header').after((0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenu)());\n    (0,_index__WEBPACK_IMPORTED_MODULE_2__.assignTriangle)(document.querySelector('#nav--menu-btn').parentNode);\n  });\n  return menuBtn;\n}\n\nconst renderHome = () => {\n  const article = (0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createArticle)('home')\n\n  article.appendChild((0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createArticleHeading)('Bienvenidos'));\n  createText().forEach(p => article.appendChild(p));\n  article.appendChild(createMenuBtn());\n\n  return article;\n}\n\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assignTriangle\": () => (/* binding */ assignTriangle)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\n\nconst contentLoad = (tab) => {\n  switch (tab) {\n    case 'Menu':\n      return (0,_menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();\n    case 'Contact':\n      return (0,_contact__WEBPACK_IMPORTED_MODULE_3__.renderContact)();\n    default:\n      return (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n    }\n};\n\nconst assignTriangle = (parentElement) => {\n  const triangles = document.querySelectorAll('.triangle-down');\n  for (let key=0; key<triangles.length; key++) {\n    triangles[key].remove()\n  };\n  const triangle = document.createElement('div');\n  triangle.classList.add('triangle-down');\n  parentElement.appendChild(triangle);\n\n}\n\nconst tabSwitch = (e) => {\n  assignTriangle(e.target.parentNode);\n\n  const newTab = e.target.textContent;\n\n  const article = document.querySelector('article');\n  (article) ? article.remove() : undefined;\n\n  document.querySelector('header').after(contentLoad(newTab));\n};\n\nconst addTabListeners = () => {\n  const tabBtns = document.querySelectorAll('nav button');\n\n  tabBtns.forEach(btn => btn.addEventListener('click', tabSwitch));\n};\n\n\nconst init = (() => {\n  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)());\n  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)());\n  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__.renderFooter)());\n\n  assignTriangle(document.querySelector('#nav--home-btn').parentNode);\n\n  addTabListeners();\n})();\n\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _DOMTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMTools */ \"./src/DOMTools.js\");\n\n\nconst MenuCategory = (name, modifiers, extras) => {\n  const getName = () => name;\n  const getModifiers = () => modifiers;\n  const getExtras = () => extras;\n\n  const _categoryItems = [];\n\n  const addCategoryItem = (menuItem) => {\n    _categoryItems.push(menuItem);\n  }\n\n  const getCategoryItems = () => _categoryItems;\n\n  return { getName, getModifiers, getExtras, addCategoryItem, getCategoryItems }\n}\n\nconst MenuItem = (name, desc, price) => {\n  const state = {\n    name,\n    price,\n    desc,\n  }\n\n  return { state }\n}\n\nconst createBurritos = () => {\n  const burritos = MenuCategory(\n    'Burritos',\n    ['chicken', 'beef', 'pork', 'carne asada', 'carnitas'],\n    {\n      'rice and beans': '$3.75',\n      'chile relleno': '$3.75',\n    }\n  );\n\n  const burritosItems = [\n    {\n      name: 'Deluxe',\n      desc: 'rice, beans, meat, & cheese topped with mild sauce',\n      price: '$8.95',\n    },\n    {\n      name: 'Super',\n      desc: 'rice, beans, meat, guacamole, cheese, & peppers',\n      price: '$8.95',\n    },\n    {\n      name: 'Regular',\n      desc: 'rice, beans, & meat',\n      price: '$8.25',\n    },\n    {\n      name: 'Vegetarian',\n      desc: 'rice, whole beans, lettuce, tomatoes, & cheese',\n      price: '$8.25',\n    },\n  ];\n\n  burritosItems.forEach(item => burritos.addCategoryItem(MenuItem(\n    item.name,\n    item.desc,\n    item.price\n  )));\n\n  return burritos;\n}\n\nconst createTacos = () => {\n  const tacos = MenuCategory(\n    'Tacos',\n    ['chicken', 'beef', 'pork'],\n    {'rice & beans': '$4.00',}\n  );\n\n  const tacosItems = [\n    {\n      name: 'Soft Shell',\n      desc: 'soft corn tortilla, meat, lettuce, tomatoes & cheese',\n      price: '$3.75'\n    },\n    {\n      name: 'Hard Shell',\n      desc: 'crispy corn tortilla, meat, lettuce, tomatoes & cheese',\n      price: '$3.75'\n    },\n  ];\n\n  tacosItems.forEach(item => tacos.addCategoryItem(MenuItem(\n    item.name,\n    item.desc,\n    item.price\n  )));\n\n  return tacos;\n}\n\nconst menu = {\n  burritos: createBurritos(),\n  tacos: createTacos(),\n};\n\nconst renderMenu = () => {\n  const article = (0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createArticle)('menu')\n\n    article.appendChild((0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createArticleHeading)('Menu available for dine-in and pick-up'));\n    article.appendChild((0,_DOMTools__WEBPACK_IMPORTED_MODULE_0__.createMenuDisplay)(menu));\n\n    return article;\n}\n\n\n\n\n//# sourceURL=webpack://restaurantPage/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;