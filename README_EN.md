[中文](./README.md)

<h1 align="center">Color Extension</h1>

<p align="center">
  <a href="https://travis-ci.com/DataV-Team/color">
    <img src="https://img.shields.io/travis/com/DataV-Team/color.svg" alt="Travis CI" />
  </a>
  <a href="https://github.com/DataV-Team/color/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/DataV-Team/color.svg" alt="LICENSE" />
  </a>
  <a href="https://www.npmjs.com/package/@jiaminghi/color">
    <img src="https://img.shields.io/npm/v/@jiaminghi/color.svg" alt="NPM" />
  </a>
</p>

### This plugin provides some extension methods for color.

- **[isHex](#isHex)**

  Test if a Hex color.

- **[isRgb](#isRgb)**

  Test if a Rgb color.

* **[isRgba](#isRgba)**

  Test if a Rgba color.

* **[isRgbOrRgba](#isRgbOrRgba)**

  Test if a Rgb or Rgba color.

* **[darken](#darken)**

  Deepen color.

* **[lighten](#lighten)**

  Brighten color.

* **[fade](#fade)**

  Adjust color opacity.

* **[toHex](#toHex)**

  Convert color to Hex color.

* **[toRgb](#toRgb)**

  Convert color to Rgb|Rgba color.

* **[getOpacity](#getOpacity)**

  Get color opacity.

* **[getRgbValue](#getRgbValue)**

  Get the color Rgb value.

* **[getRgbaValue](#getRgbaValue)**

  Get the color Rgba value.

* **[getColorFromRgbValue](#getColorFromRgbValue)**

  Get Color from Rgb|Rgba value.

### Appendix

- **[Color Keywords](#Color-Keywords)**

  Built-in color keywords.

### Install with npm

```shell
$ npm install @jiaminghi/color
```

### Use

```javascript
import { toHex } from '@jiaminghi/color'

// do something
```

### Quick experience

```html
<!--Debug version-->
<script src="https://unpkg.com/@jiaminghi/color/dist/index.js"></script>
<!--Compression version-->
<script src="https://unpkg.com/@jiaminghi/color/dist/index.min.js"></script>
<script>
  const { darken, lighten } = window.Color
  // do something
</script>
```

---

<h3 align="center">Examples</h3>

#### isHex

```typescript
/**
 * @description Test if a Hex color
 * @param {string} color A color string maybe Hex
 * @return {boolean} Test result
 */
type isHex = (color: string) => boolean

isHex('#000') // true
isHex('#333333') // true
isHex('Not A Color') // false
isHex('rgb(0,0,0)') // false
isHex('rgba(0,0,0,1)') // false
```

#### isRgb

```typescript
/**
 * @description Test if a Rgb color
 * @param {string} color A color string maybe Rgb
 * @return {boolean} Test result
 */
type isRgb = (color: string) => boolean

isRgb('rgb(0,0,0)') // true
isRgb('RGB(0,0,0)') // true
isRgb('Not A Color') // false
isRgb('#000') // false
isRgb('#000000') // false
```

#### isRgba

```typescript
/**
 * @description Test if a Rgba color
 * @param {string} color A color string maybe Rgba
 * @return {boolean} Test result
 */
type isRgba = (color: string) => boolean

isRgba('rgba(0,0,0,1)') // true
isRgba('rgb(0,0,0)') // false
isRgba('Not A Color') // false
isRgba('#000') // false
isRgba('#000000') // false
```

#### isRgbOrRgba

```typescript
/**
 * @description Test if a Rgb or Rgba color
 * @param {string} color A color string maybe Rgb or Rgba
 * @return {boolean} Test result
 */
type isRgbOrRgba = (color: string) => boolean

isRgbOrRgba('rgb(0,0,0)') // true
isRgbOrRgba('RGB(0,0,0)') // true
isRgbOrRgba('rgba(0,0,0,1)') // true
isRgbOrRgba('#000') // false
isRgbOrRgba('Not A Color') // false
```

#### darken

```typescript
/**
 * @description Deepen color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent Percent of Deepen (1-100)
 * @return {string|null} Rgba color (Invalid input will return null)
 */
type darken = (color: string, percent: number) => string | null

const before = '#3080E8'

const after = darken(color, 20)
// after = 'rgba(0,77,181,1)'
```

<p align="center">
  <img width="180px" src="./exampleImgs/1.jpg" />
</p>

#### lighten

```typescript
/**
 * @description Brighten color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent Percent of brighten (1-100)
 * @return {string|null} Rgba color (Invalid input will return null)
 */
type lighten = (color: string, percent: number) => string | null

const before = '#3080E8'

const after = lighten(color, 20)
// after = 'rgba(99,179,255,1)'
```

<p align="center">
  <img width="180px" src="./exampleImgs/2.jpg" />
</p>

#### fade

```typescript
/**
 * @description Adjust color opacity
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent Percent of opacity
 * @return {string|null} Rgba color (Invalid input will return null)
 */
type fade = (color: string, percent: number) => string | null

const before = '#3080E8'

const after = lighten(color, 20)
// after = 'rgba(48,128,232,0.2)'
```

<p align="center">
  <img width="180px" src="./exampleImgs/3.jpg" />
</p>

#### toHex

```typescript
/**
 * @description Convert color to Hex color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {string|null} Hex color (Invalid input will return null)
 */
type toHex = (color: string) => string | null

const before = 'rgb(48,128,232)'

const after = toHex(before)
// after = '#3080e8'
```

#### toRgb

```typescript
/**
 * @description Convert color to Rgb|Rgba color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} opacity The opacity of color
 * @return {string|null} Rgb|Rgba color (Invalid input will return null)
 */
type toRgb = (color: string, opacity: number) => string | null

const before = '#3080E8'

const after1 = toRgb(before)
// after1 = 'rgb(48,128,232)'
const after2 = toRgb(before, 0.2)
// after2 = 'rgba(48,128,232,0.2)'
```

#### getOpacity

```typescript
/**
 * @description Get the opacity of color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {number|null} Color opacity (Invalid input will return null)
 */
type getOpacity = (color: string) => number | null

const color1 = '#3080E8'
const color2 = 'rgba(48,128,232,0.2)'

const opacity1 = getOpacity(color1)
// opacity1 = 1
const opacity2 = getOpacity(color2)
// opacity2 = 0.2
```

#### getRgbValue

```typescript
/**
 * @description Get the Rgb value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbValue|null} Rgb value of the color (Invalid input will return null)
 */
type RgbValue = [number, number, number]
type getRgbValue = (color: string) => RgbValue | null

const color = '#3080E8'

const rgbValue = getRgbValue(color)
// rgbValue = [48, 128, 232]
```

#### getRgbaValue

```typescript
/**
 * @description Get the Rgba value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbaValue|null} Rgba value of the color (Invalid input will return null)
 */
type RgbaValue = [number, number, number, number]
type getRgbaValue = (color: string) => RgbaValue

const color1 = '#3080E8'
const color2 = 'rgba(48,128,232,0.2)'

const rgbaValue1 = getRgbaValue(color1)
// rgbaValue1 = [48, 128, 232, 1]
const rgbaValue2 = getRgbaValue(color2)
// rgbaValue2 = [48, 128, 232, 0.2]
```

#### getColorFromRgbValue

```typescript
/**
 * @description Get Color from Rgb|Rgba value
 * @param {Value} value Rgb|Rgba color value
 * @return {string|null} Rgb|Rgba color (Invalid input will return null)
 */
type RgbValue = [number, number, number]
type RgbaValue = [number, number, number, number]
type Value = RgbValue | RgbaValue
type getColorFromRgbValue = (value: Value) => string | null

const value1 = [48, 128, 232]
const value2 = [48, 128, 232, 0.2]

const color1 = getColorFromRgbValue(value1)
// color1 = 'rgb(48,128,232)'
const color2 = getColorFromRgbValue(value2)
// color2 = 'rgba(48,128,232,0.2)'
```

#### Color Keywords

<p align="center">
  <img width="750px" src="./exampleImgs/keywords.png" />
</p>
