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

var ColorKeywords;

(function (ColorKeywords) {
  ColorKeywords["transparent"] = "rgba(0,0,0,0)";
  ColorKeywords["black"] = "#000000";
  ColorKeywords["silver"] = "#C0C0C0";
  ColorKeywords["gray"] = "#808080";
  ColorKeywords["white"] = "#FFFFFF";
  ColorKeywords["maroon"] = "#800000";
  ColorKeywords["red"] = "#FF0000";
  ColorKeywords["purple"] = "#800080";
  ColorKeywords["fuchsia"] = "#FF00FF";
  ColorKeywords["green"] = "#008000";
  ColorKeywords["lime"] = "#00FF00";
  ColorKeywords["olive"] = "#808000";
  ColorKeywords["yellow"] = "#FFFF00";
  ColorKeywords["navy"] = "#000080";
  ColorKeywords["blue"] = "#0000FF";
  ColorKeywords["teal"] = "#008080";
  ColorKeywords["aqua"] = "#00FFFF";
  ColorKeywords["aliceblue"] = "#f0f8ff";
  ColorKeywords["antiquewhite"] = "#faebd7";
  ColorKeywords["aquamarine"] = "#7fffd4";
  ColorKeywords["azure"] = "#f0ffff";
  ColorKeywords["beige"] = "#f5f5dc";
  ColorKeywords["bisque"] = "#ffe4c4";
  ColorKeywords["blanchedalmond"] = "#ffebcd";
  ColorKeywords["blueviolet"] = "#8a2be2";
  ColorKeywords["brown"] = "#a52a2a";
  ColorKeywords["burlywood"] = "#deb887";
  ColorKeywords["cadetblue"] = "#5f9ea0";
  ColorKeywords["chartreuse"] = "#7fff00";
  ColorKeywords["chocolate"] = "#d2691e";
  ColorKeywords["coral"] = "#ff7f50";
  ColorKeywords["cornflowerblue"] = "#6495ed";
  ColorKeywords["cornsilk"] = "#fff8dc";
  ColorKeywords["crimson"] = "#dc143c";
  ColorKeywords["cyan"] = "#00ffff";
  ColorKeywords["darkblue"] = "#00008b";
  ColorKeywords["darkcyan"] = "#008b8b";
  ColorKeywords["darkgoldenrod"] = "#b8860b";
  ColorKeywords["darkgray"] = "#a9a9a9";
  ColorKeywords["darkgreen"] = "#006400";
  ColorKeywords["darkgrey"] = "#a9a9a9";
  ColorKeywords["darkkhaki"] = "#bdb76b";
  ColorKeywords["darkmagenta"] = "#8b008b";
  ColorKeywords["darkolivegreen"] = "#556b2f";
  ColorKeywords["darkorange"] = "#ff8c00";
  ColorKeywords["darkorchid"] = "#9932cc";
  ColorKeywords["darkred"] = "#8b0000";
  ColorKeywords["darksalmon"] = "#e9967a";
  ColorKeywords["darkseagreen"] = "#8fbc8f";
  ColorKeywords["darkslateblue"] = "#483d8b";
  ColorKeywords["darkslategray"] = "#2f4f4f";
  ColorKeywords["darkslategrey"] = "#2f4f4f";
  ColorKeywords["darkturquoise"] = "#00ced1";
  ColorKeywords["darkviolet"] = "#9400d3";
  ColorKeywords["deeppink"] = "#ff1493";
  ColorKeywords["deepskyblue"] = "#00bfff";
  ColorKeywords["dimgray"] = "#696969";
  ColorKeywords["dimgrey"] = "#696969";
  ColorKeywords["dodgerblue"] = "#1e90ff";
  ColorKeywords["firebrick"] = "#b22222";
  ColorKeywords["floralwhite"] = "#fffaf0";
  ColorKeywords["forestgreen"] = "#228b22";
  ColorKeywords["gainsboro"] = "#dcdcdc";
  ColorKeywords["ghostwhite"] = "#f8f8ff";
  ColorKeywords["gold"] = "#ffd700";
  ColorKeywords["goldenrod"] = "#daa520";
  ColorKeywords["greenyellow"] = "#adff2f";
  ColorKeywords["grey"] = "#808080";
  ColorKeywords["honeydew"] = "#f0fff0";
  ColorKeywords["hotpink"] = "#ff69b4";
  ColorKeywords["indianred"] = "#cd5c5c";
  ColorKeywords["indigo"] = "#4b0082";
  ColorKeywords["ivory"] = "#fffff0";
  ColorKeywords["khaki"] = "#f0e68c";
  ColorKeywords["lavender"] = "#e6e6fa";
  ColorKeywords["lavenderblush"] = "#fff0f5";
  ColorKeywords["lawngreen"] = "#7cfc00";
  ColorKeywords["lemonchiffon"] = "#fffacd";
  ColorKeywords["lightblue"] = "#add8e6";
  ColorKeywords["lightcoral"] = "#f08080";
  ColorKeywords["lightcyan"] = "#e0ffff";
  ColorKeywords["lightgoldenrodyellow"] = "#fafad2";
  ColorKeywords["lightgray"] = "#d3d3d3";
  ColorKeywords["lightgreen"] = "#90ee90";
  ColorKeywords["lightgrey"] = "#d3d3d3";
  ColorKeywords["lightpink"] = "#ffb6c1";
  ColorKeywords["lightsalmon"] = "#ffa07a";
  ColorKeywords["lightseagreen"] = "#20b2aa";
  ColorKeywords["lightskyblue"] = "#87cefa";
  ColorKeywords["lightslategray"] = "#778899";
  ColorKeywords["lightslategrey"] = "#778899";
  ColorKeywords["lightsteelblue"] = "#b0c4de";
  ColorKeywords["lightyellow"] = "#ffffe0";
  ColorKeywords["limegreen"] = "#32cd32";
  ColorKeywords["linen"] = "#faf0e6";
  ColorKeywords["magenta"] = "#ff00ff";
  ColorKeywords["mediumaquamarine"] = "#66cdaa";
  ColorKeywords["mediumblue"] = "#0000cd";
  ColorKeywords["mediumorchid"] = "#ba55d3";
  ColorKeywords["mediumpurple"] = "#9370db";
  ColorKeywords["mediumseagreen"] = "#3cb371";
  ColorKeywords["mediumslateblue"] = "#7b68ee";
  ColorKeywords["mediumspringgreen"] = "#00fa9a";
  ColorKeywords["mediumturquoise"] = "#48d1cc";
  ColorKeywords["mediumvioletred"] = "#c71585";
  ColorKeywords["midnightblue"] = "#191970";
  ColorKeywords["mintcream"] = "#f5fffa";
  ColorKeywords["mistyrose"] = "#ffe4e1";
  ColorKeywords["moccasin"] = "#ffe4b5";
  ColorKeywords["navajowhite"] = "#ffdead";
  ColorKeywords["oldlace"] = "#fdf5e6";
  ColorKeywords["olivedrab"] = "#6b8e23";
  ColorKeywords["orange"] = "#ffa500";
  ColorKeywords["orangered"] = "#ff4500";
  ColorKeywords["orchid"] = "#da70d6";
  ColorKeywords["palegoldenrod"] = "#eee8aa";
  ColorKeywords["palegreen"] = "#98fb98";
  ColorKeywords["paleturquoise"] = "#afeeee";
  ColorKeywords["palevioletred"] = "#db7093";
  ColorKeywords["papayawhip"] = "#ffefd5";
  ColorKeywords["peachpuff"] = "#ffdab9";
  ColorKeywords["peru"] = "#cd853f";
  ColorKeywords["pink"] = "#ffc0cb";
  ColorKeywords["plum"] = "#dda0dd";
  ColorKeywords["powderblue"] = "#b0e0e6";
  ColorKeywords["rosybrown"] = "#bc8f8f";
  ColorKeywords["royalblue"] = "#4169e1";
  ColorKeywords["saddlebrown"] = "#8b4513";
  ColorKeywords["salmon"] = "#fa8072";
  ColorKeywords["sandybrown"] = "#f4a460";
  ColorKeywords["seagreen"] = "#2e8b57";
  ColorKeywords["seashell"] = "#fff5ee";
  ColorKeywords["sienna"] = "#a0522d";
  ColorKeywords["skyblue"] = "#87ceeb";
  ColorKeywords["slateblue"] = "#6a5acd";
  ColorKeywords["slategray"] = "#708090";
  ColorKeywords["snow"] = "#fffafa";
  ColorKeywords["springgreen"] = "#00ff7f";
  ColorKeywords["steelblue"] = "#4682b4";
  ColorKeywords["tan"] = "#d2b48c";
  ColorKeywords["thistle"] = "#d8bfd8";
  ColorKeywords["tomato"] = "#ff6347";
  ColorKeywords["turquoise"] = "#40e0d0";
  ColorKeywords["violet"] = "#ee82ee";
  ColorKeywords["wheat"] = "#f5deb3";
  ColorKeywords["whitesmoke"] = "#f5f5f5";
  ColorKeywords["yellowgreen"] = "#9acd32";
})(ColorKeywords || (ColorKeywords = {}));

var ColorKeywords$1 = ColorKeywords;

/**
 * @description Test if a hex color
 * @param {string} color color string
 * @return {boolean} Test result
 */

function isHex(color) {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();
  return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color);
}
/**
 * @description Test if a rgb color
 * @param {string} color color string
 * @return {boolean} Test result
 */

function isRgb(color) {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();
  return /^(rgb\(|RGB\()/.test(color);
}
/**
 * @description Test if a rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */

function isRgba(color) {
  if (typeof color !== 'string') return false;
  color = color.toLowerCase();
  return /^(rgba|RGBA)/.test(color);
}
/**
 * @description Test if a rgb or rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */

function isRgbOrRgba(color) {
  return /^(rgb|rgba|RGB|RGBA)/.test(color);
}
/**
 * @description Get color by keyword
 * @param {keyof typeof ColorKeywords} keyword Color keyword like red, green and etc.
 * @return {ColorKeywords} Hex or rgba color
 */

function getColorByKeyword(keyword) {
  return ColorKeywords$1[keyword];
}
/**
 * @description Color validator
 * @param {string} color Hex|Rgb|Rgba color or color keywords
 * @return {string|null} Valid color (Invalid input will return null)
 */


function validator(color) {
  if (isHex(color) || isRgbOrRgba(color)) return color;
  return getColorByKeyword(color) || null;
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
 * @return {RgbValue|null} Rgb value of the color (Invalid input will return null)
 */


function getRgbValue(color) {
  var validColor = validator(color);
  if (!validColor) return null;
  var lowerColor = validColor.toLowerCase();
  return isHex(lowerColor) ? getRgbValueFromHex(lowerColor) : getRgbValueFromRgb(lowerColor);
}
/**
 * @description Get the opacity of color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {number} Color opacity
 */

function getOpacity(color) {
  var validColor = validator(color);
  if (!validColor || !isRgba(validColor)) return 1;
  return Number(validColor.toLowerCase().split(',').slice(-1)[0].replace(/[)|\s]/g, ''));
}
/**
 * @description Get the Rgba value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbaValue|null} Rgba value of the color (Invalid input will return null)
 */

function getRgbaValue(color) {
  var rgbValue = getRgbValue(color);
  return rgbValue && __spreadArrays(rgbValue, [getOpacity(color)]);
}
/**
 * @description Convert color to Rgb|Rgba color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} opacity The opacity of color
 * @return {string|null} Rgb|Rgba color (Invalid input will return null)
 */

function toRgb(color, opacity) {
  var rgbValue = getRgbValue(color);
  if (!rgbValue) return null;
  return typeof opacity === 'number' ? "rgba(" + rgbValue.join(',') + "," + opacity + ")" : "rgb(" + rgbValue.join(',') + ")";
}
/**
 * @description Convert color to Hex color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {string|null} Hex color (Invalid input will return null)
 */

function toHex(color) {
  if (isHex(color)) return color;
  var colorValue = getRgbValue(color);
  if (!colorValue) return null;

  var format10To16 = function format10To16(_) {
    return Number(_).toString(16).padStart(2, '0');
  };

  return "#" + colorValue.map(format10To16).join('');
}
/**
 * @description Get Color from Rgb|Rgba value
 * @param {RgbValue|RgbaValue} value Rgb|Rgba color value
 * @return {string|null} Rgb|Rgba color (Invalid input will return null)
 */

function getColorFromRgbValue(value) {
  if (!Array.isArray(value)) return null;
  var length = value.length;
  if (length !== 3 && length !== 4) return null;
  return (length === 3 ? 'rgb(' : 'rgba(') + value.join(',') + ')';
}
/**
 * @description Deepen color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of Deepen (1-100)
 * @return {string|null} Rgba color (Invalid input will return null)
 */

function darken(color, percent) {
  if (percent === void 0) {
    percent = 0;
  }

  var rgbaValue = getRgbaValue(color);
  if (!rgbaValue) return null;
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
 * @return {string|null} Rgba color (Invalid input will return null)
 */

function lighten(color, percent) {
  if (percent === void 0) {
    percent = 0;
  }

  var rgbaValue = getRgbaValue(color);
  if (!rgbaValue) return null;
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
 * @return {string|null} Rgba color (Invalid input will return null)
 */

function fade(color, percent) {
  if (percent === void 0) {
    percent = 100;
  }

  var rgbValue = getRgbValue(color);
  if (!rgbValue) return null;
  return getColorFromRgbValue(__spreadArrays(rgbValue, [percent / 100]));
}
var index = {
  isHex: isHex,
  isRgb: isRgb,
  isRgba: isRgba,
  isRgbOrRgba: isRgbOrRgba,
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

export default index;
export { darken, fade, getColorFromRgbValue, getOpacity, getRgbValue, getRgbaValue, isHex, isRgb, isRgbOrRgba, isRgba, lighten, toHex, toRgb };
