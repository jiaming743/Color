(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var color = require('../lib/index')

window.color = color
},{"../lib/index":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = new Map([['transparent', 'rgba(0,0,0,0)'], ['black', '#000000'], ['silver', '#C0C0C0'], ['gray', '#808080'], ['white', '#FFFFFF'], ['maroon', '#800000'], ['red', '#FF0000'], ['purple', '#800080'], ['fuchsia', '#FF00FF'], ['green', '#008000'], ['lime', '#00FF00'], ['olive', '#808000'], ['yellow', '#FFFF00'], ['navy', '#000080'], ['blue', '#0000FF'], ['teal', '#008080'], ['aqua', '#00FFFF'], ['aliceblue', '#f0f8ff'], ['antiquewhite', '#faebd7'], ['aquamarine', '#7fffd4'], ['azure', '#f0ffff'], ['beige', '#f5f5dc'], ['bisque', '#ffe4c4'], ['blanchedalmond', '#ffebcd'], ['blueviolet', '#8a2be2'], ['brown', '#a52a2a'], ['burlywood', '#deb887'], ['cadetblue', '#5f9ea0'], ['chartreuse', '#7fff00'], ['chocolate', '#d2691e'], ['coral', '#ff7f50'], ['cornflowerblue', '#6495ed'], ['cornsilk', '#fff8dc'], ['crimson', '#dc143c'], ['cyan', '#00ffff'], ['darkblue', '#00008b'], ['darkcyan', '#008b8b'], ['darkgoldenrod', '#b8860b'], ['darkgray', '#a9a9a9'], ['darkgreen', '#006400'], ['darkgrey', '#a9a9a9'], ['darkkhaki', '#bdb76b'], ['darkmagenta', '#8b008b'], ['darkolivegreen', '#556b2f'], ['darkorange', '#ff8c00'], ['darkorchid', '#9932cc'], ['darkred', '#8b0000'], ['darksalmon', '#e9967a'], ['darkseagreen', '#8fbc8f'], ['darkslateblue', '#483d8b'], ['darkslategray', '#2f4f4f'], ['darkslategrey', '#2f4f4f'], ['darkturquoise', '#00ced1'], ['darkviolet', '#9400d3'], ['deeppink', '#ff1493'], ['deepskyblue', '#00bfff'], ['dimgray', '#696969'], ['dimgrey', '#696969'], ['dodgerblue', '#1e90ff'], ['firebrick', '#b22222'], ['floralwhite', '#fffaf0'], ['forestgreen', '#228b22'], ['gainsboro', '#dcdcdc'], ['ghostwhite', '#f8f8ff'], ['gold', '#ffd700'], ['goldenrod', '#daa520'], ['greenyellow', '#adff2f'], ['grey', '#808080'], ['honeydew', '#f0fff0'], ['hotpink', '#ff69b4'], ['indianred', '#cd5c5c'], ['indigo', '#4b0082'], ['ivory', '#fffff0'], ['khaki', '#f0e68c'], ['lavender', '#e6e6fa'], ['lavenderblush', '#fff0f5'], ['lawngreen', '#7cfc00'], ['lemonchiffon', '#fffacd'], ['lightblue', '#add8e6'], ['lightcoral', '#f08080'], ['lightcyan', '#e0ffff'], ['lightgoldenrodyellow', '#fafad2'], ['lightgray', '#d3d3d3'], ['lightgreen', '#90ee90'], ['lightgrey', '#d3d3d3'], ['lightpink', '#ffb6c1'], ['lightsalmon', '#ffa07a'], ['lightseagreen', '#20b2aa'], ['lightskyblue', '#87cefa'], ['lightslategray', '#778899'], ['lightslategrey', '#778899'], ['lightsteelblue', '#b0c4de'], ['lightyellow', '#ffffe0'], ['limegreen', '#32cd32'], ['linen', '#faf0e6'], ['magenta', '#ff00ff'], ['mediumaquamarine', '#66cdaa'], ['mediumblue', '#0000cd'], ['mediumorchid', '#ba55d3'], ['mediumpurple', '#9370db'], ['mediumseagreen', '#3cb371'], ['mediumslateblue', '#7b68ee'], ['mediumspringgreen', '#00fa9a'], ['mediumturquoise', '#48d1cc'], ['mediumvioletred', '#c71585'], ['midnightblue', '#191970'], ['mintcream', '#f5fffa'], ['mistyrose', '#ffe4e1'], ['moccasin', '#ffe4b5'], ['navajowhite', '#ffdead'], ['oldlace', '#fdf5e6'], ['olivedrab', '#6b8e23'], ['orange', '#ffa500'], ['orangered', '#ff4500'], ['orchid', '#da70d6'], ['palegoldenrod', '#eee8aa'], ['palegreen', '#98fb98'], ['paleturquoise', '#afeeee'], ['palevioletred', '#db7093'], ['papayawhip', '#ffefd5'], ['peachpuff', '#ffdab9'], ['peru', '#cd853f'], ['pink', '#ffc0cb'], ['plum', '#dda0dd'], ['powderblue', '#b0e0e6'], ['rosybrown', '#bc8f8f'], ['royalblue', '#4169e1'], ['saddlebrown', '#8b4513'], ['salmon', '#fa8072'], ['sandybrown', '#f4a460'], ['seagreen', '#2e8b57'], ['seashell', '#fff5ee'], ['sienna', '#a0522d'], ['skyblue', '#87ceeb'], ['slateblue', '#6a5acd'], ['slategray', '#708090'], ['slategrey', '#708090'], ['snow', '#fffafa'], ['springgreen', '#00ff7f'], ['steelblue', '#4682b4'], ['tan', '#d2b48c'], ['thistle', '#d8bfd8'], ['tomato', '#ff6347'], ['turquoise', '#40e0d0'], ['violet', '#ee82ee'], ['wheat', '#f5deb3'], ['whitesmoke', '#f5f5f5'], ['yellowgreen', '#9acd32']]);

exports["default"] = _default;
},{}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRgbValue = getRgbValue;
exports.getRgbaValue = getRgbaValue;
exports.getOpacity = getOpacity;
exports.toRgb = toRgb;
exports.toHex = toHex;
exports.getColorFromRgbValue = getColorFromRgbValue;
exports.darken = darken;
exports.lighten = lighten;
exports.fade = fade;
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _keywords = _interopRequireDefault(require("./config/keywords"));

var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
var rgbReg = /^(rgb|rgba|RGB|RGBA)/;
var rgbaReg = /^(rgba|RGBA)/;
/**
 * @description Color validator
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {String|Boolean} Valid color Or false
 */

function validator(color) {
  var isHex = hexReg.test(color);
  var isRgb = rgbReg.test(color);
  if (isHex || isRgb) return color;
  color = getColorByKeyword(color);

  if (!color) {
    console.error('Color: Invalid color!');
    return false;
  }

  return color;
}
/**
 * @description Get color by keyword
 * @param {String} keyword Color keyword like red, green and etc.
 * @return {String|Boolean} Hex or rgba color (Invalid keyword will return false)
 */


function getColorByKeyword(keyword) {
  if (!keyword) {
    console.error('getColorByKeywords: Missing parameters!');
    return false;
  }

  if (!_keywords["default"].has(keyword)) return false;
  return _keywords["default"].get(keyword);
}
/**
 * @description Get the Rgb value of the color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Array<Number>|Boolean} Rgb value of the color (Invalid input will return false)
 */


function getRgbValue(color) {
  if (!color) {
    console.error('getRgbValue: Missing parameters!');
    return false;
  }

  color = validator(color);
  if (!color) return false;
  var isHex = hexReg.test(color);
  var isRgb = rgbReg.test(color);
  var lowerColor = color.toLowerCase();
  if (isHex) return getRgbValueFromHex(lowerColor);
  if (isRgb) return getRgbValueFromRgb(lowerColor);
}
/**
 * @description Get the rgb value of the hex color
 * @param {String} color Hex color
 * @return {Array<Number>} Rgb value of the color
 */


function getRgbValueFromHex(color) {
  color = color.replace('#', '');
  if (color.length === 3) color = Array.from(color).map(function (hexNum) {
    return hexNum + hexNum;
  }).join('');
  color = color.split('');
  return new Array(3).fill(0).map(function (t, i) {
    return parseInt("0x".concat(color[i * 2]).concat(color[i * 2 + 1]));
  });
}
/**
 * @description Get the rgb value of the rgb/rgba color
 * @param {String} color Hex color
 * @return {Array} Rgb value of the color
 */


function getRgbValueFromRgb(color) {
  return color.replace(/rgb\(|rgba\(|\)/g, '').split(',').slice(0, 3).map(function (n) {
    return parseInt(n);
  });
}
/**
 * @description Get the Rgba value of the color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Array<Number>|Boolean} Rgba value of the color (Invalid input will return false)
 */


function getRgbaValue(color) {
  if (!color) {
    console.error('getRgbaValue: Missing parameters!');
    return false;
  }

  var colorValue = getRgbValue(color);
  if (!colorValue) return false;
  colorValue.push(getOpacity(color));
  return colorValue;
}
/**
 * @description Get the opacity of color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Number|Boolean} Color opacity (Invalid input will return false)
 */


function getOpacity(color) {
  if (!color) {
    console.error('getOpacity: Missing parameters!');
    return false;
  }

  color = validator(color);
  if (!color) return false;
  var isRgba = rgbaReg.test(color);
  if (!isRgba) return 1;
  color = color.toLowerCase();
  return Number(color.split(',').slice(-1)[0].replace(/[)|\s]/g, ''));
}
/**
 * @description Convert color to Rgb|Rgba color
 * @param {String} color   Hex|Rgb|Rgba color or color keyword
 * @param {Number} opacity The opacity of color
 * @return {String|Boolean} Rgb|Rgba color (Invalid input will return false)
 */


function toRgb(color, opacity) {
  if (!color) {
    console.error('toRgb: Missing parameters!');
    return false;
  }

  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;
  var addOpacity = typeof opacity === 'number';
  if (addOpacity) return 'rgba(' + rgbValue.join(',') + ",".concat(opacity, ")");
  return 'rgb(' + rgbValue.join(',') + ')';
}
/**
 * @description Convert color to Hex color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {String|Boolean} Hex color (Invalid input will return false)
 */


function toHex(color) {
  if (!color) {
    console.error('toHex: Missing parameters!');
    return false;
  }

  if (hexReg.test(color)) return color;
  color = getRgbValue(color);
  if (!color) return false;
  return '#' + color.map(function (n) {
    return Number(n).toString(16);
  }).map(function (n) {
    return n === '0' ? '00' : n;
  }).join('');
}
/**
 * @description Get Color from Rgb|Rgba value
 * @param {Array<Number>} value Rgb|Rgba color value
 * @return {String|Boolean} Rgb|Rgba color (Invalid input will return false)
 */


function getColorFromRgbValue(value) {
  if (!value) {
    console.error('getColorFromRgbValue: Missing parameters!');
    return false;
  }

  var valueLength = value.length;

  if (valueLength !== 3 && valueLength !== 4) {
    console.error('getColorFromRgbValue: Value is illegal!');
    return false;
  }

  var color = valueLength === 3 ? 'rgb(' : 'rgba(';
  color += value.join(',') + ')';
  return color;
}
/**
 * @description Deepen color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Number} Percent of Deepen (1-100)
 * @return {String|Boolean} Rgba color (Invalid input will return false)
 */


function darken(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!color) {
    console.error('darken: Missing parameters!');
    return false;
  }

  var rgbaValue = getRgbaValue(color);
  if (!rgbaValue) return false;
  rgbaValue = rgbaValue.map(function (v, i) {
    return i === 3 ? v : v - Math.ceil(2.55 * percent);
  }).map(function (v) {
    return v < 0 ? 0 : v;
  });
  return getColorFromRgbValue(rgbaValue);
}
/**
 * @description Brighten color
 * @param {String} color Hex|Rgb|Rgba color or color keyword
 * @return {Number} Percent of brighten (1-100)
 * @return {String|Boolean} Rgba color (Invalid input will return false)
 */


function lighten(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!color) {
    console.error('lighten: Missing parameters!');
    return false;
  }

  var rgbaValue = getRgbaValue(color);
  if (!rgbaValue) return false;
  rgbaValue = rgbaValue.map(function (v, i) {
    return i === 3 ? v : v + Math.ceil(2.55 * percent);
  }).map(function (v) {
    return v > 255 ? 255 : v;
  });
  return getColorFromRgbValue(rgbaValue);
}
/**
 * @description Adjust color opacity
 * @param {String} color   Hex|Rgb|Rgba color or color keyword
 * @param {Number} Percent of opacity
 * @return {String|Boolean} Rgba color (Invalid input will return false)
 */


function fade(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (!color) {
    console.error('fade: Missing parameters!');
    return false;
  }

  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;
  var rgbaValue = [].concat((0, _toConsumableArray2["default"])(rgbValue), [percent / 100]);
  return getColorFromRgbValue(rgbaValue);
}

var _default = {
  fade: fade,
  toHex: toHex,
  toRgb: toRgb,
  darken: darken,
  lighten: lighten,
  getOpacity: getOpacity,
  getRgbValue: getRgbValue,
  getRgbaValue: getRgbaValue,
  getColorFromRgbValue: getColorFromRgbValue
};
exports["default"] = _default;
},{"./config/keywords":2,"@babel/runtime/helpers/interopRequireDefault":5,"@babel/runtime/helpers/toConsumableArray":8}],4:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],5:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],6:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],7:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],8:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":4,"./iterableToArray":6,"./nonIterableSpread":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYnVpbGQvZW50cnkuanMiLCJsaWIvY29uZmlnL2tleXdvcmRzLmpzIiwibGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIGNvbG9yID0gcmVxdWlyZSgnLi4vbGliL2luZGV4JylcclxuXHJcbndpbmRvdy5jb2xvciA9IGNvbG9yIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZhdWx0ID0gbmV3IE1hcChbWyd0cmFuc3BhcmVudCcsICdyZ2JhKDAsMCwwLDApJ10sIFsnYmxhY2snLCAnIzAwMDAwMCddLCBbJ3NpbHZlcicsICcjQzBDMEMwJ10sIFsnZ3JheScsICcjODA4MDgwJ10sIFsnd2hpdGUnLCAnI0ZGRkZGRiddLCBbJ21hcm9vbicsICcjODAwMDAwJ10sIFsncmVkJywgJyNGRjAwMDAnXSwgWydwdXJwbGUnLCAnIzgwMDA4MCddLCBbJ2Z1Y2hzaWEnLCAnI0ZGMDBGRiddLCBbJ2dyZWVuJywgJyMwMDgwMDAnXSwgWydsaW1lJywgJyMwMEZGMDAnXSwgWydvbGl2ZScsICcjODA4MDAwJ10sIFsneWVsbG93JywgJyNGRkZGMDAnXSwgWyduYXZ5JywgJyMwMDAwODAnXSwgWydibHVlJywgJyMwMDAwRkYnXSwgWyd0ZWFsJywgJyMwMDgwODAnXSwgWydhcXVhJywgJyMwMEZGRkYnXSwgWydhbGljZWJsdWUnLCAnI2YwZjhmZiddLCBbJ2FudGlxdWV3aGl0ZScsICcjZmFlYmQ3J10sIFsnYXF1YW1hcmluZScsICcjN2ZmZmQ0J10sIFsnYXp1cmUnLCAnI2YwZmZmZiddLCBbJ2JlaWdlJywgJyNmNWY1ZGMnXSwgWydiaXNxdWUnLCAnI2ZmZTRjNCddLCBbJ2JsYW5jaGVkYWxtb25kJywgJyNmZmViY2QnXSwgWydibHVldmlvbGV0JywgJyM4YTJiZTInXSwgWydicm93bicsICcjYTUyYTJhJ10sIFsnYnVybHl3b29kJywgJyNkZWI4ODcnXSwgWydjYWRldGJsdWUnLCAnIzVmOWVhMCddLCBbJ2NoYXJ0cmV1c2UnLCAnIzdmZmYwMCddLCBbJ2Nob2NvbGF0ZScsICcjZDI2OTFlJ10sIFsnY29yYWwnLCAnI2ZmN2Y1MCddLCBbJ2Nvcm5mbG93ZXJibHVlJywgJyM2NDk1ZWQnXSwgWydjb3Juc2lsaycsICcjZmZmOGRjJ10sIFsnY3JpbXNvbicsICcjZGMxNDNjJ10sIFsnY3lhbicsICcjMDBmZmZmJ10sIFsnZGFya2JsdWUnLCAnIzAwMDA4YiddLCBbJ2RhcmtjeWFuJywgJyMwMDhiOGInXSwgWydkYXJrZ29sZGVucm9kJywgJyNiODg2MGInXSwgWydkYXJrZ3JheScsICcjYTlhOWE5J10sIFsnZGFya2dyZWVuJywgJyMwMDY0MDAnXSwgWydkYXJrZ3JleScsICcjYTlhOWE5J10sIFsnZGFya2toYWtpJywgJyNiZGI3NmInXSwgWydkYXJrbWFnZW50YScsICcjOGIwMDhiJ10sIFsnZGFya29saXZlZ3JlZW4nLCAnIzU1NmIyZiddLCBbJ2RhcmtvcmFuZ2UnLCAnI2ZmOGMwMCddLCBbJ2RhcmtvcmNoaWQnLCAnIzk5MzJjYyddLCBbJ2RhcmtyZWQnLCAnIzhiMDAwMCddLCBbJ2RhcmtzYWxtb24nLCAnI2U5OTY3YSddLCBbJ2RhcmtzZWFncmVlbicsICcjOGZiYzhmJ10sIFsnZGFya3NsYXRlYmx1ZScsICcjNDgzZDhiJ10sIFsnZGFya3NsYXRlZ3JheScsICcjMmY0ZjRmJ10sIFsnZGFya3NsYXRlZ3JleScsICcjMmY0ZjRmJ10sIFsnZGFya3R1cnF1b2lzZScsICcjMDBjZWQxJ10sIFsnZGFya3Zpb2xldCcsICcjOTQwMGQzJ10sIFsnZGVlcHBpbmsnLCAnI2ZmMTQ5MyddLCBbJ2RlZXBza3libHVlJywgJyMwMGJmZmYnXSwgWydkaW1ncmF5JywgJyM2OTY5NjknXSwgWydkaW1ncmV5JywgJyM2OTY5NjknXSwgWydkb2RnZXJibHVlJywgJyMxZTkwZmYnXSwgWydmaXJlYnJpY2snLCAnI2IyMjIyMiddLCBbJ2Zsb3JhbHdoaXRlJywgJyNmZmZhZjAnXSwgWydmb3Jlc3RncmVlbicsICcjMjI4YjIyJ10sIFsnZ2FpbnNib3JvJywgJyNkY2RjZGMnXSwgWydnaG9zdHdoaXRlJywgJyNmOGY4ZmYnXSwgWydnb2xkJywgJyNmZmQ3MDAnXSwgWydnb2xkZW5yb2QnLCAnI2RhYTUyMCddLCBbJ2dyZWVueWVsbG93JywgJyNhZGZmMmYnXSwgWydncmV5JywgJyM4MDgwODAnXSwgWydob25leWRldycsICcjZjBmZmYwJ10sIFsnaG90cGluaycsICcjZmY2OWI0J10sIFsnaW5kaWFucmVkJywgJyNjZDVjNWMnXSwgWydpbmRpZ28nLCAnIzRiMDA4MiddLCBbJ2l2b3J5JywgJyNmZmZmZjAnXSwgWydraGFraScsICcjZjBlNjhjJ10sIFsnbGF2ZW5kZXInLCAnI2U2ZTZmYSddLCBbJ2xhdmVuZGVyYmx1c2gnLCAnI2ZmZjBmNSddLCBbJ2xhd25ncmVlbicsICcjN2NmYzAwJ10sIFsnbGVtb25jaGlmZm9uJywgJyNmZmZhY2QnXSwgWydsaWdodGJsdWUnLCAnI2FkZDhlNiddLCBbJ2xpZ2h0Y29yYWwnLCAnI2YwODA4MCddLCBbJ2xpZ2h0Y3lhbicsICcjZTBmZmZmJ10sIFsnbGlnaHRnb2xkZW5yb2R5ZWxsb3cnLCAnI2ZhZmFkMiddLCBbJ2xpZ2h0Z3JheScsICcjZDNkM2QzJ10sIFsnbGlnaHRncmVlbicsICcjOTBlZTkwJ10sIFsnbGlnaHRncmV5JywgJyNkM2QzZDMnXSwgWydsaWdodHBpbmsnLCAnI2ZmYjZjMSddLCBbJ2xpZ2h0c2FsbW9uJywgJyNmZmEwN2EnXSwgWydsaWdodHNlYWdyZWVuJywgJyMyMGIyYWEnXSwgWydsaWdodHNreWJsdWUnLCAnIzg3Y2VmYSddLCBbJ2xpZ2h0c2xhdGVncmF5JywgJyM3Nzg4OTknXSwgWydsaWdodHNsYXRlZ3JleScsICcjNzc4ODk5J10sIFsnbGlnaHRzdGVlbGJsdWUnLCAnI2IwYzRkZSddLCBbJ2xpZ2h0eWVsbG93JywgJyNmZmZmZTAnXSwgWydsaW1lZ3JlZW4nLCAnIzMyY2QzMiddLCBbJ2xpbmVuJywgJyNmYWYwZTYnXSwgWydtYWdlbnRhJywgJyNmZjAwZmYnXSwgWydtZWRpdW1hcXVhbWFyaW5lJywgJyM2NmNkYWEnXSwgWydtZWRpdW1ibHVlJywgJyMwMDAwY2QnXSwgWydtZWRpdW1vcmNoaWQnLCAnI2JhNTVkMyddLCBbJ21lZGl1bXB1cnBsZScsICcjOTM3MGRiJ10sIFsnbWVkaXVtc2VhZ3JlZW4nLCAnIzNjYjM3MSddLCBbJ21lZGl1bXNsYXRlYmx1ZScsICcjN2I2OGVlJ10sIFsnbWVkaXVtc3ByaW5nZ3JlZW4nLCAnIzAwZmE5YSddLCBbJ21lZGl1bXR1cnF1b2lzZScsICcjNDhkMWNjJ10sIFsnbWVkaXVtdmlvbGV0cmVkJywgJyNjNzE1ODUnXSwgWydtaWRuaWdodGJsdWUnLCAnIzE5MTk3MCddLCBbJ21pbnRjcmVhbScsICcjZjVmZmZhJ10sIFsnbWlzdHlyb3NlJywgJyNmZmU0ZTEnXSwgWydtb2NjYXNpbicsICcjZmZlNGI1J10sIFsnbmF2YWpvd2hpdGUnLCAnI2ZmZGVhZCddLCBbJ29sZGxhY2UnLCAnI2ZkZjVlNiddLCBbJ29saXZlZHJhYicsICcjNmI4ZTIzJ10sIFsnb3JhbmdlJywgJyNmZmE1MDAnXSwgWydvcmFuZ2VyZWQnLCAnI2ZmNDUwMCddLCBbJ29yY2hpZCcsICcjZGE3MGQ2J10sIFsncGFsZWdvbGRlbnJvZCcsICcjZWVlOGFhJ10sIFsncGFsZWdyZWVuJywgJyM5OGZiOTgnXSwgWydwYWxldHVycXVvaXNlJywgJyNhZmVlZWUnXSwgWydwYWxldmlvbGV0cmVkJywgJyNkYjcwOTMnXSwgWydwYXBheWF3aGlwJywgJyNmZmVmZDUnXSwgWydwZWFjaHB1ZmYnLCAnI2ZmZGFiOSddLCBbJ3BlcnUnLCAnI2NkODUzZiddLCBbJ3BpbmsnLCAnI2ZmYzBjYiddLCBbJ3BsdW0nLCAnI2RkYTBkZCddLCBbJ3Bvd2RlcmJsdWUnLCAnI2IwZTBlNiddLCBbJ3Jvc3licm93bicsICcjYmM4ZjhmJ10sIFsncm95YWxibHVlJywgJyM0MTY5ZTEnXSwgWydzYWRkbGVicm93bicsICcjOGI0NTEzJ10sIFsnc2FsbW9uJywgJyNmYTgwNzInXSwgWydzYW5keWJyb3duJywgJyNmNGE0NjAnXSwgWydzZWFncmVlbicsICcjMmU4YjU3J10sIFsnc2Vhc2hlbGwnLCAnI2ZmZjVlZSddLCBbJ3NpZW5uYScsICcjYTA1MjJkJ10sIFsnc2t5Ymx1ZScsICcjODdjZWViJ10sIFsnc2xhdGVibHVlJywgJyM2YTVhY2QnXSwgWydzbGF0ZWdyYXknLCAnIzcwODA5MCddLCBbJ3NsYXRlZ3JleScsICcjNzA4MDkwJ10sIFsnc25vdycsICcjZmZmYWZhJ10sIFsnc3ByaW5nZ3JlZW4nLCAnIzAwZmY3ZiddLCBbJ3N0ZWVsYmx1ZScsICcjNDY4MmI0J10sIFsndGFuJywgJyNkMmI0OGMnXSwgWyd0aGlzdGxlJywgJyNkOGJmZDgnXSwgWyd0b21hdG8nLCAnI2ZmNjM0NyddLCBbJ3R1cnF1b2lzZScsICcjNDBlMGQwJ10sIFsndmlvbGV0JywgJyNlZTgyZWUnXSwgWyd3aGVhdCcsICcjZjVkZWIzJ10sIFsnd2hpdGVzbW9rZScsICcjZjVmNWY1J10sIFsneWVsbG93Z3JlZW4nLCAnIzlhY2QzMiddXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRSZ2JWYWx1ZSA9IGdldFJnYlZhbHVlO1xuZXhwb3J0cy5nZXRSZ2JhVmFsdWUgPSBnZXRSZ2JhVmFsdWU7XG5leHBvcnRzLmdldE9wYWNpdHkgPSBnZXRPcGFjaXR5O1xuZXhwb3J0cy50b1JnYiA9IHRvUmdiO1xuZXhwb3J0cy50b0hleCA9IHRvSGV4O1xuZXhwb3J0cy5nZXRDb2xvckZyb21SZ2JWYWx1ZSA9IGdldENvbG9yRnJvbVJnYlZhbHVlO1xuZXhwb3J0cy5kYXJrZW4gPSBkYXJrZW47XG5leHBvcnRzLmxpZ2h0ZW4gPSBsaWdodGVuO1xuZXhwb3J0cy5mYWRlID0gZmFkZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX2tleXdvcmRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb25maWcva2V5d29yZHNcIikpO1xuXG52YXIgaGV4UmVnID0gL14jKFswLTlhLWZBLWZdezN9fFswLTlhLWZBLWZdezZ9KSQvO1xudmFyIHJnYlJlZyA9IC9eKHJnYnxyZ2JhfFJHQnxSR0JBKS87XG52YXIgcmdiYVJlZyA9IC9eKHJnYmF8UkdCQSkvO1xuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBDb2xvciB2YWxpZGF0b3JcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIEhleHxSZ2J8UmdiYSBjb2xvciBvciBjb2xvciBrZXl3b3JkXHJcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufSBWYWxpZCBjb2xvciBPciBmYWxzZVxyXG4gKi9cblxuZnVuY3Rpb24gdmFsaWRhdG9yKGNvbG9yKSB7XG4gIHZhciBpc0hleCA9IGhleFJlZy50ZXN0KGNvbG9yKTtcbiAgdmFyIGlzUmdiID0gcmdiUmVnLnRlc3QoY29sb3IpO1xuICBpZiAoaXNIZXggfHwgaXNSZ2IpIHJldHVybiBjb2xvcjtcbiAgY29sb3IgPSBnZXRDb2xvckJ5S2V5d29yZChjb2xvcik7XG5cbiAgaWYgKCFjb2xvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NvbG9yOiBJbnZhbGlkIGNvbG9yIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjb2xvcjtcbn1cbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gR2V0IGNvbG9yIGJ5IGtleXdvcmRcclxuICogQHBhcmFtIHtTdHJpbmd9IGtleXdvcmQgQ29sb3Iga2V5d29yZCBsaWtlIHJlZCwgZ3JlZW4gYW5kIGV0Yy5cclxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59IEhleCBvciByZ2JhIGNvbG9yIChJbnZhbGlkIGtleXdvcmQgd2lsbCByZXR1cm4gZmFsc2UpXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENvbG9yQnlLZXl3b3JkKGtleXdvcmQpIHtcbiAgaWYgKCFrZXl3b3JkKSB7XG4gICAgY29uc29sZS5lcnJvcignZ2V0Q29sb3JCeUtleXdvcmRzOiBNaXNzaW5nIHBhcmFtZXRlcnMhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFfa2V5d29yZHNbXCJkZWZhdWx0XCJdLmhhcyhrZXl3b3JkKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gX2tleXdvcmRzW1wiZGVmYXVsdFwiXS5nZXQoa2V5d29yZCk7XG59XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgUmdiIHZhbHVlIG9mIHRoZSBjb2xvclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgSGV4fFJnYnxSZ2JhIGNvbG9yIG9yIGNvbG9yIGtleXdvcmRcclxuICogQHJldHVybiB7QXJyYXk8TnVtYmVyPnxCb29sZWFufSBSZ2IgdmFsdWUgb2YgdGhlIGNvbG9yIChJbnZhbGlkIGlucHV0IHdpbGwgcmV0dXJuIGZhbHNlKVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRSZ2JWYWx1ZShjb2xvcikge1xuICBpZiAoIWNvbG9yKSB7XG4gICAgY29uc29sZS5lcnJvcignZ2V0UmdiVmFsdWU6IE1pc3NpbmcgcGFyYW1ldGVycyEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb2xvciA9IHZhbGlkYXRvcihjb2xvcik7XG4gIGlmICghY29sb3IpIHJldHVybiBmYWxzZTtcbiAgdmFyIGlzSGV4ID0gaGV4UmVnLnRlc3QoY29sb3IpO1xuICB2YXIgaXNSZ2IgPSByZ2JSZWcudGVzdChjb2xvcik7XG4gIHZhciBsb3dlckNvbG9yID0gY29sb3IudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGlzSGV4KSByZXR1cm4gZ2V0UmdiVmFsdWVGcm9tSGV4KGxvd2VyQ29sb3IpO1xuICBpZiAoaXNSZ2IpIHJldHVybiBnZXRSZ2JWYWx1ZUZyb21SZ2IobG93ZXJDb2xvcik7XG59XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgcmdiIHZhbHVlIG9mIHRoZSBoZXggY29sb3JcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIEhleCBjb2xvclxyXG4gKiBAcmV0dXJuIHtBcnJheTxOdW1iZXI+fSBSZ2IgdmFsdWUgb2YgdGhlIGNvbG9yXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFJnYlZhbHVlRnJvbUhleChjb2xvcikge1xuICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJyk7XG4gIGlmIChjb2xvci5sZW5ndGggPT09IDMpIGNvbG9yID0gQXJyYXkuZnJvbShjb2xvcikubWFwKGZ1bmN0aW9uIChoZXhOdW0pIHtcbiAgICByZXR1cm4gaGV4TnVtICsgaGV4TnVtO1xuICB9KS5qb2luKCcnKTtcbiAgY29sb3IgPSBjb2xvci5zcGxpdCgnJyk7XG4gIHJldHVybiBuZXcgQXJyYXkoMykuZmlsbCgwKS5tYXAoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoXCIweFwiLmNvbmNhdChjb2xvcltpICogMl0pLmNvbmNhdChjb2xvcltpICogMiArIDFdKSk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIHJnYiB2YWx1ZSBvZiB0aGUgcmdiL3JnYmEgY29sb3JcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIEhleCBjb2xvclxyXG4gKiBAcmV0dXJuIHtBcnJheX0gUmdiIHZhbHVlIG9mIHRoZSBjb2xvclxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRSZ2JWYWx1ZUZyb21SZ2IoY29sb3IpIHtcbiAgcmV0dXJuIGNvbG9yLnJlcGxhY2UoL3JnYlxcKHxyZ2JhXFwofFxcKS9nLCAnJykuc3BsaXQoJywnKS5zbGljZSgwLCAzKS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobik7XG4gIH0pO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgdGhlIFJnYmEgdmFsdWUgb2YgdGhlIGNvbG9yXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBIZXh8UmdifFJnYmEgY29sb3Igb3IgY29sb3Iga2V5d29yZFxyXG4gKiBAcmV0dXJuIHtBcnJheTxOdW1iZXI+fEJvb2xlYW59IFJnYmEgdmFsdWUgb2YgdGhlIGNvbG9yIChJbnZhbGlkIGlucHV0IHdpbGwgcmV0dXJuIGZhbHNlKVxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRSZ2JhVmFsdWUoY29sb3IpIHtcbiAgaWYgKCFjb2xvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2dldFJnYmFWYWx1ZTogTWlzc2luZyBwYXJhbWV0ZXJzIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBjb2xvclZhbHVlID0gZ2V0UmdiVmFsdWUoY29sb3IpO1xuICBpZiAoIWNvbG9yVmFsdWUpIHJldHVybiBmYWxzZTtcbiAgY29sb3JWYWx1ZS5wdXNoKGdldE9wYWNpdHkoY29sb3IpKTtcbiAgcmV0dXJuIGNvbG9yVmFsdWU7XG59XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEdldCB0aGUgb3BhY2l0eSBvZiBjb2xvclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgSGV4fFJnYnxSZ2JhIGNvbG9yIG9yIGNvbG9yIGtleXdvcmRcclxuICogQHJldHVybiB7TnVtYmVyfEJvb2xlYW59IENvbG9yIG9wYWNpdHkgKEludmFsaWQgaW5wdXQgd2lsbCByZXR1cm4gZmFsc2UpXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE9wYWNpdHkoY29sb3IpIHtcbiAgaWYgKCFjb2xvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2dldE9wYWNpdHk6IE1pc3NpbmcgcGFyYW1ldGVycyEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb2xvciA9IHZhbGlkYXRvcihjb2xvcik7XG4gIGlmICghY29sb3IpIHJldHVybiBmYWxzZTtcbiAgdmFyIGlzUmdiYSA9IHJnYmFSZWcudGVzdChjb2xvcik7XG4gIGlmICghaXNSZ2JhKSByZXR1cm4gMTtcbiAgY29sb3IgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gTnVtYmVyKGNvbG9yLnNwbGl0KCcsJykuc2xpY2UoLTEpWzBdLnJlcGxhY2UoL1spfFxcc10vZywgJycpKTtcbn1cbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ29udmVydCBjb2xvciB0byBSZ2J8UmdiYSBjb2xvclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgICBIZXh8UmdifFJnYmEgY29sb3Igb3IgY29sb3Iga2V5d29yZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gb3BhY2l0eSBUaGUgb3BhY2l0eSBvZiBjb2xvclxyXG4gKiBAcmV0dXJuIHtTdHJpbmd8Qm9vbGVhbn0gUmdifFJnYmEgY29sb3IgKEludmFsaWQgaW5wdXQgd2lsbCByZXR1cm4gZmFsc2UpXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvUmdiKGNvbG9yLCBvcGFjaXR5KSB7XG4gIGlmICghY29sb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCd0b1JnYjogTWlzc2luZyBwYXJhbWV0ZXJzIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciByZ2JWYWx1ZSA9IGdldFJnYlZhbHVlKGNvbG9yKTtcbiAgaWYgKCFyZ2JWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgYWRkT3BhY2l0eSA9IHR5cGVvZiBvcGFjaXR5ID09PSAnbnVtYmVyJztcbiAgaWYgKGFkZE9wYWNpdHkpIHJldHVybiAncmdiYSgnICsgcmdiVmFsdWUuam9pbignLCcpICsgXCIsXCIuY29uY2F0KG9wYWNpdHksIFwiKVwiKTtcbiAgcmV0dXJuICdyZ2IoJyArIHJnYlZhbHVlLmpvaW4oJywnKSArICcpJztcbn1cbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ29udmVydCBjb2xvciB0byBIZXggY29sb3JcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIEhleHxSZ2J8UmdiYSBjb2xvciBvciBjb2xvciBrZXl3b3JkXHJcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufSBIZXggY29sb3IgKEludmFsaWQgaW5wdXQgd2lsbCByZXR1cm4gZmFsc2UpXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvSGV4KGNvbG9yKSB7XG4gIGlmICghY29sb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCd0b0hleDogTWlzc2luZyBwYXJhbWV0ZXJzIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChoZXhSZWcudGVzdChjb2xvcikpIHJldHVybiBjb2xvcjtcbiAgY29sb3IgPSBnZXRSZ2JWYWx1ZShjb2xvcik7XG4gIGlmICghY29sb3IpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuICcjJyArIGNvbG9yLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBOdW1iZXIobikudG9TdHJpbmcoMTYpO1xuICB9KS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gJzAnID8gJzAwJyA6IG47XG4gIH0pLmpvaW4oJycpO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBHZXQgQ29sb3IgZnJvbSBSZ2J8UmdiYSB2YWx1ZVxyXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IHZhbHVlIFJnYnxSZ2JhIGNvbG9yIHZhbHVlXHJcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufSBSZ2J8UmdiYSBjb2xvciAoSW52YWxpZCBpbnB1dCB3aWxsIHJldHVybiBmYWxzZSlcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q29sb3JGcm9tUmdiVmFsdWUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2dldENvbG9yRnJvbVJnYlZhbHVlOiBNaXNzaW5nIHBhcmFtZXRlcnMhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuXG4gIGlmICh2YWx1ZUxlbmd0aCAhPT0gMyAmJiB2YWx1ZUxlbmd0aCAhPT0gNCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2dldENvbG9yRnJvbVJnYlZhbHVlOiBWYWx1ZSBpcyBpbGxlZ2FsIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBjb2xvciA9IHZhbHVlTGVuZ3RoID09PSAzID8gJ3JnYignIDogJ3JnYmEoJztcbiAgY29sb3IgKz0gdmFsdWUuam9pbignLCcpICsgJyknO1xuICByZXR1cm4gY29sb3I7XG59XG4vKipcclxuICogQGRlc2NyaXB0aW9uIERlZXBlbiBjb2xvclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgSGV4fFJnYnxSZ2JhIGNvbG9yIG9yIGNvbG9yIGtleXdvcmRcclxuICogQHJldHVybiB7TnVtYmVyfSBQZXJjZW50IG9mIERlZXBlbiAoMS0xMDApXHJcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufSBSZ2JhIGNvbG9yIChJbnZhbGlkIGlucHV0IHdpbGwgcmV0dXJuIGZhbHNlKVxyXG4gKi9cblxuXG5mdW5jdGlvbiBkYXJrZW4oY29sb3IpIHtcbiAgdmFyIHBlcmNlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG5cbiAgaWYgKCFjb2xvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2RhcmtlbjogTWlzc2luZyBwYXJhbWV0ZXJzIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciByZ2JhVmFsdWUgPSBnZXRSZ2JhVmFsdWUoY29sb3IpO1xuICBpZiAoIXJnYmFWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuICByZ2JhVmFsdWUgPSByZ2JhVmFsdWUubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgcmV0dXJuIGkgPT09IDMgPyB2IDogdiAtIE1hdGguY2VpbCgyLjU1ICogcGVyY2VudCk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2IDwgMCA/IDAgOiB2O1xuICB9KTtcbiAgcmV0dXJuIGdldENvbG9yRnJvbVJnYlZhbHVlKHJnYmFWYWx1ZSk7XG59XG4vKipcclxuICogQGRlc2NyaXB0aW9uIEJyaWdodGVuIGNvbG9yXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBIZXh8UmdifFJnYmEgY29sb3Igb3IgY29sb3Iga2V5d29yZFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFBlcmNlbnQgb2YgYnJpZ2h0ZW4gKDEtMTAwKVxyXG4gKiBAcmV0dXJuIHtTdHJpbmd8Qm9vbGVhbn0gUmdiYSBjb2xvciAoSW52YWxpZCBpbnB1dCB3aWxsIHJldHVybiBmYWxzZSlcclxuICovXG5cblxuZnVuY3Rpb24gbGlnaHRlbihjb2xvcikge1xuICB2YXIgcGVyY2VudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICBpZiAoIWNvbG9yKSB7XG4gICAgY29uc29sZS5lcnJvcignbGlnaHRlbjogTWlzc2luZyBwYXJhbWV0ZXJzIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciByZ2JhVmFsdWUgPSBnZXRSZ2JhVmFsdWUoY29sb3IpO1xuICBpZiAoIXJnYmFWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuICByZ2JhVmFsdWUgPSByZ2JhVmFsdWUubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgcmV0dXJuIGkgPT09IDMgPyB2IDogdiArIE1hdGguY2VpbCgyLjU1ICogcGVyY2VudCk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2ID4gMjU1ID8gMjU1IDogdjtcbiAgfSk7XG4gIHJldHVybiBnZXRDb2xvckZyb21SZ2JWYWx1ZShyZ2JhVmFsdWUpO1xufVxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBBZGp1c3QgY29sb3Igb3BhY2l0eVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgICBIZXh8UmdifFJnYmEgY29sb3Igb3IgY29sb3Iga2V5d29yZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gUGVyY2VudCBvZiBvcGFjaXR5XHJcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufSBSZ2JhIGNvbG9yIChJbnZhbGlkIGlucHV0IHdpbGwgcmV0dXJuIGZhbHNlKVxyXG4gKi9cblxuXG5mdW5jdGlvbiBmYWRlKGNvbG9yKSB7XG4gIHZhciBwZXJjZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDA7XG5cbiAgaWYgKCFjb2xvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2ZhZGU6IE1pc3NpbmcgcGFyYW1ldGVycyEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcmdiVmFsdWUgPSBnZXRSZ2JWYWx1ZShjb2xvcik7XG4gIGlmICghcmdiVmFsdWUpIHJldHVybiBmYWxzZTtcbiAgdmFyIHJnYmFWYWx1ZSA9IFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKHJnYlZhbHVlKSwgW3BlcmNlbnQgLyAxMDBdKTtcbiAgcmV0dXJuIGdldENvbG9yRnJvbVJnYlZhbHVlKHJnYmFWYWx1ZSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZmFkZTogZmFkZSxcbiAgdG9IZXg6IHRvSGV4LFxuICB0b1JnYjogdG9SZ2IsXG4gIGRhcmtlbjogZGFya2VuLFxuICBsaWdodGVuOiBsaWdodGVuLFxuICBnZXRPcGFjaXR5OiBnZXRPcGFjaXR5LFxuICBnZXRSZ2JWYWx1ZTogZ2V0UmdiVmFsdWUsXG4gIGdldFJnYmFWYWx1ZTogZ2V0UmdiYVZhbHVlLFxuICBnZXRDb2xvckZyb21SZ2JWYWx1ZTogZ2V0Q29sb3JGcm9tUmdiVmFsdWVcbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyJdfQ==
