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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// //заглушки (имитация базы данных)\n// const image = 'https://placehold.it/200x150';\n// const cartImage = 'https://placehold.it/100x80';\n// const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];\n// const prices = [1000, 200, 20, 10, 25, 30, 18, 24];\n// const ids = [1, 2, 3, 4, 5, 6, 7, 8];\n\n\n// //глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)\n// var userCart = [];\n// var list = fetchData ();\n\n// //кнопка скрытия и показа корзины\n// document.querySelector('.btn-cart').addEventListener('click', () => {\n//     document.querySelector('.cart-block').classList.toggle('invisible');\n// });\n// //кнопки удаления товара (добавляется один раз)\n// document.querySelector('.cart-block').addEventListener ('click', (evt) => {\n//     if (evt.target.classList.contains ('del-btn')) {\n//         removeProduct (evt.target);\n//     }\n// })\n// //кнопки покупки товара (добавляется один раз)\n// document.querySelector('.products').addEventListener ('click', (evt) => {\n//     if (evt.target.classList.contains ('buy-btn')) {\n//         addProduct (evt.target);\n//     }\n// })\n\n// //создание массива объектов - имитация загрузки данных с сервера\n// function fetchData () {\n//     let arr = [];\n//     for (let i = 0; i < items.length; i++) {\n//         arr.push (createProduct (i));\n//     }\n//     return arr\n// };\n\n// //создание товара\n// function createProduct (i) {\n//     return {\n//         id: ids[i],\n//         name: items[i],\n//         price: prices[i],\n//         img: image,\n//         quantity: 0,\n//         createTemplate: function () {\n//             return `<div class=\"product-item\" data-id=\"${this.id}\">\n//                         <img src=\"${this.img}\" alt=\"Some img\">\n//                         <div class=\"desc\">\n//                             <h3>${this.name}</h3>\n//                             <p>${this.price} $</p>\n//                             <button class=\"buy-btn\" \n//                             data-id=\"${this.id}\"\n//                             data-name=\"${this.name}\"\n//                             data-image=\"${this.img}\"\n//                             data-price=\"${this.price}\">Купить</button>\n//                         </div>\n//                     </div>`\n//         },\n\n//         add: function() {\n//             this.quantity++\n//         }\n//     }\n// };\n\n// //рендер списка товаров (каталога)\n// function renderProducts () {\n//     //let arr = [];\n//     let str = ''\n//     for (item of list) {\n//         str += item.createTemplate()\n//     }\n//     document.querySelector('.products').innerHTML = str;\n// }\n\n// renderProducts ();\n\n// //CART\n\n// // Добавление продуктов в корзину\n// function addProduct (product) {\n//     let productId = +product.dataset['id']; //data-id=\"1\"\n//     let find = userCart.find (element => element.id === productId); //товар или false\n//     if (!find) {\n//         userCart.push ({\n//             name: product.dataset ['name'],\n//             id: productId,\n//             img: cartImage,\n//             price: +product.dataset['price'],\n//             quantity: 1\n//         })\n//     }  else {\n//         find.quantity++\n//     }\n//     renderCart ()\n// }\n\n// //удаление товаров\n// function removeProduct (product) {\n//     let productId = +product.dataset['id'];\n//     let find = userCart.find (element => element.id === productId);\n//     if (find.quantity > 1) {\n//         find.quantity--;\n//     } else {\n//         userCart.splice(userCart.indexOf(find), 1);\n//         document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\n//     }\n//     renderCart ();\n// }\n\n// //перерендер корзины\n// function renderCart () {\n//     let allProducts = '';\n//     for (el of userCart) {\n//         allProducts += `<div class=\"cart-item\" data-id=\"${el.id}\">\n//                             <div class=\"product-bio\">\n//                                 <img src=\"${el.img}\" alt=\"Some image\">\n//                                 <div class=\"product-desc\">\n//                                     <p class=\"product-title\">${el.name}</p>\n//                                     <p class=\"product-quantity\">Quantity: ${el.quantity}</p>\n//                                     <p class=\"product-single-price\">$${el.price} each</p>\n//                                 </div>\n//                             </div>\n//                             <div class=\"right-block\">\n//                                 <p class=\"product-price\">${el.quantity * el.price}</p>\n//                                 <button class=\"del-btn\" data-id=\"${el.id}\">&times;</button>\n//                             </div>\n//                         </div>`\n//     }\n\n//     document.querySelector(`.cart-block`).innerHTML = allProducts;\n// }\n\n// lesson 2\n\nconst goods = [\n    { title: 'Shirt', price: 150 },\n    { title: 'Socks', price: 50 },\n    { title: 'Jacket', price: 350 },\n    { title: 'Shoes', price: 250 },\n];\n\nlet buyBtn = document.querySelector('.buy-btn');\n\nclass Products {\n    constructor (array) {\n        this.products = array;\n        this.container = null;\n        this._init ();\n    }\n\n    _init () {\n        this.container = document.querySelector('.goods-list');\n        //render\n        this.render ();\n    }\n   \n    render () {\n        let str = '';\n        this.products.forEach(element => {\n          str += this.createProduct (element);\n        });\n        this.container.innerHTML = str; //произойдет рендер\n    }\n    \n    createProduct (prod) {\n        return `<div class=\"product-item\" data-id=\"${prod.id}>\n                    <img src=\"${prod.img}\" alt=\"Some img\">\n                    <div class=\"desc\">\n                    <h3>${prod.title}</h3>\n                       <p>${prod.price} $</p>\n                       <p>Quantity: 0</p>\n                       <button class=\"buy-btn\"\n                            data-id=\"${prod.id}\"\n                            data-name=\"${prod.title}\"\n                            data-image=\"${prod.img}\"\n                            data-price=\"${prod.price}\">Купить\n                        </button>\n                    </div>\n                </div>`;   \n    }\n    \n    // addToCart () {\n    //     buyBtn.addEventListener('click', функцияСлуш);\n    //     function функцияСлуш() {\n    //         /здесь будет что-то\n    //  }    \n    // }\n}\n\n\nclass Cart {\n    // здесь будет что-нибудь\n}\n\nclass InCart {\n\n}// здесь будет что-нибудь\n\nlet catalog = new Products (goods);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });