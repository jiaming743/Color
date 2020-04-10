import { RgbValue, RgbaValue } from 'types/index';
/**
 * @description Test if a hex color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export declare function isHex(color: string): boolean;
/**
 * @description Test if a rgb or rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export declare function isRgb(color: string): boolean;
/**
 * @description Test if a rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export declare function isRgba(color: string): boolean;
/**
 * @description Get the Rgb value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbValue|false} Rgb value of the color (Invalid input will return false)
 */
export declare function getRgbValue(color: string): RgbValue | false;
/**
 * @description Get the opacity of color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {number} Color opacity
 */
export declare function getOpacity(color: string): number;
/**
 * @description Get the Rgba value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbaValue|false} Rgba value of the color (Invalid input will return false)
 */
export declare function getRgbaValue(color: string): RgbaValue | false;
/**
 * @description Convert color to Rgb|Rgba color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} opacity The opacity of color
 * @return {string|false} Rgb|Rgba color (Invalid input will return false)
 */
export declare function toRgb(color: string, opacity?: number): string | false;
/**
 * @description Convert color to Hex color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {string|false} Hex color (Invalid input will return false)
 */
export declare function toHex(color: string): string | false;
/**
 * @description Get Color from Rgb|Rgba value
 * @param {RgbValue|RgbaValue} value Rgb|Rgba color value
 * @return {string} Rgb|Rgba color
 */
export declare function getColorFromRgbValue(value: RgbValue | RgbaValue): string;
/**
 * @description Deepen color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of Deepen (1-100)
 * @return {string|false} Rgba color (Invalid input will return false)
 */
export declare function darken(color: string, percent?: number): string | false;
/**
 * @description Brighten color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of brighten (1-100)
 * @return {string|false} Rgba color (Invalid input will return false)
 */
export declare function lighten(color: string, percent?: number): string | false;
/**
 * @description Adjust color opacity
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of opacity
 * @return {string|false} Rgba color (Invalid input will return false)
 */
export declare function fade(color: string, percent?: number): string | false;
declare const _default: {
    fade: typeof fade;
    isHex: typeof isHex;
    isRgb: typeof isRgb;
    toHex: typeof toHex;
    toRgb: typeof toRgb;
    isRgba: typeof isRgba;
    darken: typeof darken;
    lighten: typeof lighten;
    getOpacity: typeof getOpacity;
    getRgbValue: typeof getRgbValue;
    getRgbaValue: typeof getRgbaValue;
    getColorFromRgbValue: typeof getColorFromRgbValue;
};
export default _default;
