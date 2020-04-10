import { RgbValue, RgbaValue } from 'types/index'
import colorKeywords from './config/keywords'

/**
 * @description Test if a hex color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export function isHex(color: string): boolean {
  if (typeof color !== 'string') return false
  color = color.toLowerCase()

  return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(color)
}

/**
 * @description Test if a rgb color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export function isRgb(color: string): boolean {
  if (typeof color !== 'string') return false
  color = color.toLowerCase()

  return /^(rgb\(|RGB\()/.test(color)
}

/**
 * @description Test if a rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export function isRgba(color: string): boolean {
  if (typeof color !== 'string') return false
  color = color.toLowerCase()

  return /^(rgba|RGBA)/.test(color)
}

/**
 * @description Test if a rgb or rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export function isRgbOrRgba(color: string): boolean {
  return /^(rgb|rgba|RGB|RGBA)/.test(color)
}

/**
 * @description Get color by keyword
 * @param {string} keyword Color keyword like red, green and etc.
 * @return {string|false} Hex or rgba color (Invalid keyword will return false)
 */
function getColorByKeyword(keyword: string): string | false {
  if (!colorKeywords.has(keyword)) return false

  return colorKeywords.get(keyword)!
}

/**
 * @description Color validator
 * @param {string} color Hex|Rgb|Rgba color or color keywords
 * @return {string} Valid color
 */
function validator(color: string): string {
  if (isHex(color) || isRgbOrRgba(color)) return color

  const keywordColor = getColorByKeyword(color)

  if (!keywordColor) throw new Error('Color: Invalid color!')

  return keywordColor
}

/**
 * @description Get the rgb value of the hex color
 * @param {string} color Hex color
 * @return {RgbValue} Rgb value of the color
 */
function getRgbValueFromHex(color: string): RgbValue {
  color = color.replace('#', '')

  if (color.length === 3)
    color = Array.from(color)
      .map(hexNum => hexNum + hexNum)
      .join('')

  const colorValues = color.split('')

  return new Array(3)
    .fill(0)
    .map((_, i) => parseInt(`0x${colorValues[i * 2]}${colorValues[i * 2 + 1]}`)) as RgbValue
}

/**
 * @description Get the rgb value of the rgb/rgba color
 * @param {string} color Hex color
 * @return {RgbValue} Rgb value of the color
 */
function getRgbValueFromRgb(color: string): RgbValue {
  return color
    .replace(/rgb\(|rgba\(|\)/g, '')
    .split(',')
    .slice(0, 3)
    .map(n => parseInt(n)) as RgbValue
}

/**
 * @description Get the Rgb value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbValue|false} Rgb value of the color (Invalid input will return false)
 */
export function getRgbValue(color: string): RgbValue | false {
  if (!color) throw new Error('getRgbValue: Missing parameters!')

  const validColor = validator(color)

  const lowerColor = validColor.toLowerCase()

  if (isHex(lowerColor)) return getRgbValueFromHex(lowerColor)
  if (isRgbOrRgba(lowerColor)) return getRgbValueFromRgb(lowerColor)

  return false
}

/**
 * @description Get the opacity of color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {number} Color opacity
 */
export function getOpacity(color: string): number {
  if (!color) throw new Error('getOpacity: Missing parameters!')

  const validColor = validator(color)

  if (!isRgba(validColor)) return 1

  const lowerColor = validColor.toLowerCase()

  return Number(
    lowerColor
      .split(',')
      .slice(-1)[0]
      .replace(/[)|\s]/g, '')
  )
}

/**
 * @description Get the Rgba value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbaValue|false} Rgba value of the color (Invalid input will return false)
 */
export function getRgbaValue(color: string): RgbaValue | false {
  if (!color) throw new Error('getRgbaValue: Missing parameters!')

  const rgbValue = getRgbValue(color)
  if (!rgbValue) return false

  const rgbaValue = [...rgbValue, getOpacity(color) as number]

  return rgbaValue as RgbaValue
}

/**
 * @description Convert color to Rgb|Rgba color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} opacity The opacity of color
 * @return {string|false} Rgb|Rgba color (Invalid input will return false)
 */
export function toRgb(color: string, opacity?: number): string | false {
  if (!color) throw new Error('toRgb: Missing parameters!')

  const rgbValue = getRgbValue(color)
  if (!rgbValue) return false

  const validOpacity = typeof opacity === 'number'

  if (validOpacity) return 'rgba(' + rgbValue.join(',') + `,${opacity})`

  return 'rgb(' + rgbValue.join(',') + ')'
}

/**
 * @description Convert color to Hex color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {string|false} Hex color (Invalid input will return false)
 */
export function toHex(color: string): string | false {
  if (!color) throw new Error('toHex: Missing parameters!')

  if (isHex(color)) return color

  const colorValue = getRgbValue(color)
  if (!colorValue) return false

  return (
    '#' +
    colorValue
      .map(n => Number(n).toString(16))
      .map(n => (n === '0' ? '00' : n))
      .join('')
  )
}

/**
 * @description Get Color from Rgb|Rgba value
 * @param {RgbValue|RgbaValue} value Rgb|Rgba color value
 * @return {string} Rgb|Rgba color
 */
export function getColorFromRgbValue(value: RgbValue | RgbaValue): string {
  if (!value) throw new Error('getColorFromRgbValue: Missing parameters!')

  const valueLength = value.length

  if (valueLength !== 3 && valueLength !== 4)
    throw new Error('getColorFromRgbValue: Value is illegal!')

  let color = valueLength === 3 ? 'rgb(' : 'rgba('

  color += value.join(',') + ')'

  return color
}

/**
 * @description Deepen color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of Deepen (1-100)
 * @return {string|false} Rgba color (Invalid input will return false)
 */
export function darken(color: string, percent = 0): string | false {
  if (!color) throw new Error('darken: Missing parameters!')

  let rgbaValue = getRgbaValue(color)
  if (!rgbaValue) return false

  rgbaValue = rgbaValue
    .map((v, i) => (i === 3 ? v : v - Math.ceil(2.55 * percent)))
    .map(v => (v < 0 ? 0 : v)) as RgbaValue

  return getColorFromRgbValue(rgbaValue)
}

/**
 * @description Brighten color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of brighten (1-100)
 * @return {string|false} Rgba color (Invalid input will return false)
 */
export function lighten(color: string, percent = 0): string | false {
  if (!color) throw new Error('lighten: Missing parameters!')

  let rgbaValue = getRgbaValue(color)
  if (!rgbaValue) return false

  rgbaValue = rgbaValue
    .map((v, i) => (i === 3 ? v : v + Math.ceil(2.55 * percent)))
    .map(v => (v > 255 ? 255 : v)) as RgbaValue

  return getColorFromRgbValue(rgbaValue)
}

/**
 * @description Adjust color opacity
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of opacity
 * @return {string|false} Rgba color (Invalid input will return false)
 */
export function fade(color: string, percent = 100): string | false {
  if (!color) throw new Error('fade: Missing parameters!')

  const rgbValue = getRgbValue(color)
  if (!rgbValue) return false

  const rgbaValue = [...rgbValue, percent / 100] as RgbaValue

  return getColorFromRgbValue(rgbaValue)
}

export default {
  isHex,
  isRgb,
  isRgba,
  isRgbOrRgba,
  fade,
  toHex,
  toRgb,
  darken,
  lighten,
  getOpacity,
  getRgbValue,
  getRgbaValue,
  getColorFromRgbValue,
}
