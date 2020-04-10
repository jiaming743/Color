/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var colorKeywords = new Map([['transparent', 'rgba(0,0,0,0)'], ['black', '#000000'], ['silver', '#C0C0C0'], ['gray', '#808080'], ['white', '#FFFFFF'], ['maroon', '#800000'], ['red', '#FF0000'], ['purple', '#800080'], ['fuchsia', '#FF00FF'], ['green', '#008000'], ['lime', '#00FF00'], ['olive', '#808000'], ['yellow', '#FFFF00'], ['navy', '#000080'], ['blue', '#0000FF'], ['teal', '#008080'], ['aqua', '#00FFFF'], ['aliceblue', '#f0f8ff'], ['antiquewhite', '#faebd7'], ['aquamarine', '#7fffd4'], ['azure', '#f0ffff'], ['beige', '#f5f5dc'], ['bisque', '#ffe4c4'], ['blanchedalmond', '#ffebcd'], ['blueviolet', '#8a2be2'], ['brown', '#a52a2a'], ['burlywood', '#deb887'], ['cadetblue', '#5f9ea0'], ['chartreuse', '#7fff00'], ['chocolate', '#d2691e'], ['coral', '#ff7f50'], ['cornflowerblue', '#6495ed'], ['cornsilk', '#fff8dc'], ['crimson', '#dc143c'], ['cyan', '#00ffff'], ['darkblue', '#00008b'], ['darkcyan', '#008b8b'], ['darkgoldenrod', '#b8860b'], ['darkgray', '#a9a9a9'], ['darkgreen', '#006400'], ['darkgrey', '#a9a9a9'], ['darkkhaki', '#bdb76b'], ['darkmagenta', '#8b008b'], ['darkolivegreen', '#556b2f'], ['darkorange', '#ff8c00'], ['darkorchid', '#9932cc'], ['darkred', '#8b0000'], ['darksalmon', '#e9967a'], ['darkseagreen', '#8fbc8f'], ['darkslateblue', '#483d8b'], ['darkslategray', '#2f4f4f'], ['darkslategrey', '#2f4f4f'], ['darkturquoise', '#00ced1'], ['darkviolet', '#9400d3'], ['deeppink', '#ff1493'], ['deepskyblue', '#00bfff'], ['dimgray', '#696969'], ['dimgrey', '#696969'], ['dodgerblue', '#1e90ff'], ['firebrick', '#b22222'], ['floralwhite', '#fffaf0'], ['forestgreen', '#228b22'], ['gainsboro', '#dcdcdc'], ['ghostwhite', '#f8f8ff'], ['gold', '#ffd700'], ['goldenrod', '#daa520'], ['greenyellow', '#adff2f'], ['grey', '#808080'], ['honeydew', '#f0fff0'], ['hotpink', '#ff69b4'], ['indianred', '#cd5c5c'], ['indigo', '#4b0082'], ['ivory', '#fffff0'], ['khaki', '#f0e68c'], ['lavender', '#e6e6fa'], ['lavenderblush', '#fff0f5'], ['lawngreen', '#7cfc00'], ['lemonchiffon', '#fffacd'], ['lightblue', '#add8e6'], ['lightcoral', '#f08080'], ['lightcyan', '#e0ffff'], ['lightgoldenrodyellow', '#fafad2'], ['lightgray', '#d3d3d3'], ['lightgreen', '#90ee90'], ['lightgrey', '#d3d3d3'], ['lightpink', '#ffb6c1'], ['lightsalmon', '#ffa07a'], ['lightseagreen', '#20b2aa'], ['lightskyblue', '#87cefa'], ['lightslategray', '#778899'], ['lightslategrey', '#778899'], ['lightsteelblue', '#b0c4de'], ['lightyellow', '#ffffe0'], ['limegreen', '#32cd32'], ['linen', '#faf0e6'], ['magenta', '#ff00ff'], ['mediumaquamarine', '#66cdaa'], ['mediumblue', '#0000cd'], ['mediumorchid', '#ba55d3'], ['mediumpurple', '#9370db'], ['mediumseagreen', '#3cb371'], ['mediumslateblue', '#7b68ee'], ['mediumspringgreen', '#00fa9a'], ['mediumturquoise', '#48d1cc'], ['mediumvioletred', '#c71585'], ['midnightblue', '#191970'], ['mintcream', '#f5fffa'], ['mistyrose', '#ffe4e1'], ['moccasin', '#ffe4b5'], ['navajowhite', '#ffdead'], ['oldlace', '#fdf5e6'], ['olivedrab', '#6b8e23'], ['orange', '#ffa500'], ['orangered', '#ff4500'], ['orchid', '#da70d6'], ['palegoldenrod', '#eee8aa'], ['palegreen', '#98fb98'], ['paleturquoise', '#afeeee'], ['palevioletred', '#db7093'], ['papayawhip', '#ffefd5'], ['peachpuff', '#ffdab9'], ['peru', '#cd853f'], ['pink', '#ffc0cb'], ['plum', '#dda0dd'], ['powderblue', '#b0e0e6'], ['rosybrown', '#bc8f8f'], ['royalblue', '#4169e1'], ['saddlebrown', '#8b4513'], ['salmon', '#fa8072'], ['sandybrown', '#f4a460'], ['seagreen', '#2e8b57'], ['seashell', '#fff5ee'], ['sienna', '#a0522d'], ['skyblue', '#87ceeb'], ['slateblue', '#6a5acd'], ['slategray', '#708090'], ['slategrey', '#708090'], ['snow', '#fffafa'], ['springgreen', '#00ff7f'], ['steelblue', '#4682b4'], ['tan', '#d2b48c'], ['thistle', '#d8bfd8'], ['tomato', '#ff6347'], ['turquoise', '#40e0d0'], ['violet', '#ee82ee'], ['wheat', '#f5deb3'], ['whitesmoke', '#f5f5f5'], ['yellowgreen', '#9acd32']]);

/**
 * @description Test if a hex color
 * @param {string} color color string
 * @return {boolean} Test result
 */

function isHex(color) {
  return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color);
}
/**
 * @description Test if a rgb or rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */

function isRgb(color) {
  return /^(rgb|rgba|RGB|RGBA)/.test(color);
}
/**
 * @description Test if a rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */

function isRgba(color) {
  return /^(rgba|RGBA)/.test(color);
}
/**
 * @description Get color by keyword
 * @param {string} keyword Color keyword like red, green and etc.
 * @return {string|false} Hex or rgba color (Invalid keyword will return false)
 */

function getColorByKeyword(keyword) {
  if (!colorKeywords.has(keyword)) return false;
  return colorKeywords.get(keyword);
}
/**
 * @description Color validator
 * @param {string} color Hex|Rgb|Rgba color or color keywords
 * @return {string} Valid color
 */


function validator(color) {
  if (isHex(color) || isRgb(color)) return color;
  var keywordColor = getColorByKeyword(color);
  if (!keywordColor) throw new Error('Color: Invalid color!');
  return keywordColor;
}
/**
 * @description Get the rgb value of the hex color
 * @param {string} color Hex color
 * @return {RgbValue} Rgb value of the color
 */


function getRgbValueFromHex(color) {
  color = color.replace('#', '');
  if (color.length === 3) color = Array.from(color).map(function (hexNum) {
    return hexNum + hexNum;
  }).join('');
  var colorValues = color.split('');
  return new Array(3).fill(0).map(function (_, i) {
    return parseInt("0x" + colorValues[i * 2] + colorValues[i * 2 + 1]);
  });
}
/**
 * @description Get the rgb value of the rgb/rgba color
 * @param {string} color Hex color
 * @return {RgbValue} Rgb value of the color
 */


function getRgbValueFromRgb(color) {
  return color.replace(/rgb\(|rgba\(|\)/g, '').split(',').slice(0, 3).map(function (n) {
    return parseInt(n);
  });
}
/**
 * @description Get the Rgb value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbValue|false} Rgb value of the color (Invalid input will return false)
 */


function getRgbValue(color) {
  if (!color) throw new Error('getRgbValue: Missing parameters!');
  var validColor = validator(color);
  var lowerColor = validColor.toLowerCase();
  if (isHex(lowerColor)) return getRgbValueFromHex(lowerColor);
  if (isRgb(lowerColor)) return getRgbValueFromRgb(lowerColor);
  return false;
}
/**
 * @description Get the opacity of color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {number} Color opacity
 */

function getOpacity(color) {
  if (!color) throw new Error('getOpacity: Missing parameters!');
  var validColor = validator(color);
  if (!isRgba(validColor)) return 1;
  var lowerColor = validColor.toLowerCase();
  return Number(lowerColor.split(',').slice(-1)[0].replace(/[)|\s]/g, ''));
}
/**
 * @description Get the Rgba value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbaValue|false} Rgba value of the color (Invalid input will return false)
 */

function getRgbaValue(color) {
  if (!color) throw new Error('getRgbaValue: Missing parameters!');
  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;

  var rgbaValue = __spreadArrays(rgbValue, [getOpacity(color)]);

  return rgbaValue;
}
/**
 * @description Convert color to Rgb|Rgba color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} opacity The opacity of color
 * @return {string|false} Rgb|Rgba color (Invalid input will return false)
 */

function toRgb(color, opacity) {
  if (!color) throw new Error('toRgb: Missing parameters!');
  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;
  var validOpacity = typeof opacity === 'number';
  if (validOpacity) return 'rgba(' + rgbValue.join(',') + ("," + opacity + ")");
  return 'rgb(' + rgbValue.join(',') + ')';
}
/**
 * @description Convert color to Hex color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {string|false} Hex color (Invalid input will return false)
 */

function toHex(color) {
  if (!color) throw new Error('toHex: Missing parameters!');
  if (isHex(color)) return color;
  var colorValue = getRgbValue(color);
  if (!colorValue) return false;
  return '#' + colorValue.map(function (n) {
    return Number(n).toString(16);
  }).map(function (n) {
    return n === '0' ? '00' : n;
  }).join('');
}
/**
 * @description Get Color from Rgb|Rgba value
 * @param {RgbValue|RgbaValue} value Rgb|Rgba color value
 * @return {string} Rgb|Rgba color
 */

function getColorFromRgbValue(value) {
  if (!value) throw new Error('getColorFromRgbValue: Missing parameters!');
  var valueLength = value.length;
  if (valueLength !== 3 && valueLength !== 4) throw new Error('getColorFromRgbValue: Value is illegal!');
  var color = valueLength === 3 ? 'rgb(' : 'rgba(';
  color += value.join(',') + ')';
  return color;
}
/**
 * @description Deepen color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of Deepen (1-100)
 * @return {string|false} Rgba color (Invalid input will return false)
 */

function darken(color, percent) {
  if (percent === void 0) {
    percent = 0;
  }

  if (!color) throw new Error('darken: Missing parameters!');
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
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of brighten (1-100)
 * @return {string|false} Rgba color (Invalid input will return false)
 */

function lighten(color, percent) {
  if (percent === void 0) {
    percent = 0;
  }

  if (!color) throw new Error('lighten: Missing parameters!');
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
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of opacity
 * @return {string|false} Rgba color (Invalid input will return false)
 */

function fade(color, percent) {
  if (percent === void 0) {
    percent = 100;
  }

  if (!color) throw new Error('fade: Missing parameters!');
  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;

  var rgbaValue = __spreadArrays(rgbValue, [percent / 100]);

  return getColorFromRgbValue(rgbaValue);
}
var index = {
  fade: fade,
  isHex: isHex,
  isRgb: isRgb,
  toHex: toHex,
  toRgb: toRgb,
  isRgba: isRgba,
  darken: darken,
  lighten: lighten,
  getOpacity: getOpacity,
  getRgbValue: getRgbValue,
  getRgbaValue: getRgbaValue,
  getColorFromRgbValue: getColorFromRgbValue
};

export default index;
export { darken, fade, getColorFromRgbValue, getOpacity, getRgbValue, getRgbaValue, isHex, isRgb, isRgba, lighten, toHex, toRgb };
