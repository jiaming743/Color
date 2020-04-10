import { expect } from 'chai'

import {
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
} from '../src/index'

describe('isHex', () => {
  it(`isHex()`, () => {
    try {
      // @ts-ignore
      isHex()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`isHex('Not A Color')`, () => {
    expect(isHex('Not A Color')).to.be.false
  })

  it(`isHex('#000')`, () => {
    expect(isHex('#000')).to.be.true
  })

  it(`isHex('#000000')`, () => {
    expect(isHex('#000000')).to.be.true
  })

  it(`isHex('rgb(0,0,0)')`, () => {
    expect(isHex('rgb(0,0,0)')).to.be.false
  })

  it(`isHex('RGB(0,0,0)')`, () => {
    expect(isHex('rgb(0,0,0)')).to.be.false
  })

  it(`isHex('rgba(0,0,0,1)')`, () => {
    expect(isHex('rgba(0,0,0,1)')).to.be.false
  })

  it(`isHex('RGBA(0,0,0,1)')`, () => {
    expect(isHex('RGBA(0,0,0,1)')).to.be.false
  })
})

describe('isRgb', () => {
  it(`isRgb()`, () => {
    try {
      // @ts-ignore
      isRgb()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`isRgb('Not A Color')`, () => {
    expect(isRgb('Not A Color')).to.be.false
  })

  it(`isRgb('#000')`, () => {
    expect(isRgb('#000')).to.be.false
  })

  it(`isRgb('#000000')`, () => {
    expect(isRgb('#000000')).to.be.false
  })

  it(`isRgb('rgb(0,0,0)')`, () => {
    expect(isRgb('rgb(0,0,0)')).to.be.true
  })

  it(`isRgb('RGB(0,0,0)')`, () => {
    expect(isRgb('rgb(0,0,0)')).to.be.true
  })

  it(`isRgb('rgba(0,0,0,1)')`, () => {
    expect(isRgb('rgba(0,0,0,1)')).to.be.false
  })

  it(`isRgb('RGBA(0,0,0,1)')`, () => {
    expect(isRgb('RGBA(0,0,0,1)')).to.be.false
  })
})

describe('isRgba', () => {
  it(`isRgba()`, () => {
    try {
      // @ts-ignore
      isRgba()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`isRgba('Not A Color')`, () => {
    expect(isRgba('Not A Color')).to.be.false
  })

  it(`isRgba('#000')`, () => {
    expect(isRgba('#000')).to.be.false
  })

  it(`isRgba('#000000')`, () => {
    expect(isRgba('#000000')).to.be.false
  })

  it(`isRgba('rgb(0,0,0)')`, () => {
    expect(isRgba('rgb(0,0,0)')).to.be.false
  })

  it(`isRgba('RGB(0,0,0)')`, () => {
    expect(isRgba('rgb(0,0,0)')).to.be.false
  })

  it(`isRgba('rgba(0,0,0,1)')`, () => {
    expect(isRgba('rgba(0,0,0,1)')).to.be.true
  })

  it(`isRgba('RGBA(0,0,0,1)')`, () => {
    expect(isRgba('RGBA(0,0,0,1)')).to.be.true
  })
})

describe('isRgbOrRgba', () => {
  it(`isRgbOrRgba()`, () => {
    try {
      // @ts-ignore
      isRgbOrRgba()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`isRgbOrRgba('Not A Color')`, () => {
    expect(isRgbOrRgba('Not A Color')).to.be.false
  })

  it(`isRgbOrRgba('#000')`, () => {
    expect(isRgbOrRgba('#000')).to.be.false
  })

  it(`isRgbOrRgba('#000000')`, () => {
    expect(isRgbOrRgba('#000000')).to.be.false
  })

  it(`isRgbOrRgba('rgb(0,0,0)')`, () => {
    expect(isRgbOrRgba('rgb(0,0,0)')).to.be.true
  })

  it(`isRgbOrRgba('RGB(0,0,0)')`, () => {
    expect(isRgbOrRgba('rgb(0,0,0)')).to.be.true
  })

  it(`isRgbOrRgba('rgba(0,0,0,1)')`, () => {
    expect(isRgbOrRgba('rgba(0,0,0,1)')).to.be.true
  })

  it(`isRgbOrRgba('RGBA(0,0,0,1)')`, () => {
    expect(isRgbOrRgba('RGBA(0,0,0,1)')).to.be.true
  })
})

describe('fade', () => {
  it(`fade('Not A Color')`, () => {
    try {
      fade('Not A Color')
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`fade()`, () => {
    try {
      // @ts-ignore
      fade()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`fade('black', 50)`, () => {
    expect(fade('black', 50)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`fade('#000', 0)`, () => {
    expect(fade('#000', 0)).to.equal('rgba(0,0,0,0)')
  })

  it(`fade('#000', 50)`, () => {
    expect(fade('#000', 50)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`fade('#000', 100)`, () => {
    expect(fade('#000', 100)).to.equal('rgba(0,0,0,1)')
  })

  it(`fade('#000000', 0)`, () => {
    expect(fade('#000', 0)).to.equal('rgba(0,0,0,0)')
  })

  it(`fade('#000000', 50)`, () => {
    expect(fade('#000', 50)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`fade('#000000', 100)`, () => {
    expect(fade('#000', 100)).to.equal('rgba(0,0,0,1)')
  })

  it(`fade('rgb(0,0,0)', 0)`, () => {
    expect(fade('#000', 0)).to.equal('rgba(0,0,0,0)')
  })

  it(`fade('rgb(0,0,0)', 50)`, () => {
    expect(fade('#000', 50)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`fade('rgb(0,0,0)', 100)`, () => {
    expect(fade('#000', 100)).to.equal('rgba(0,0,0,1)')
  })

  it(`fade('rgba(0,0,0,0)', 0)`, () => {
    expect(fade('#000', 0)).to.equal('rgba(0,0,0,0)')
  })

  it(`fade('rgba(0,0,0,0)', 50)`, () => {
    expect(fade('#000', 50)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`fade('rgba(0,0,0,0)', 100)`, () => {
    expect(fade('#000', 100)).to.equal('rgba(0,0,0,1)')
  })
})

describe('toHex', () => {
  it(`toHex()`, () => {
    try {
      // @ts-ignore
      toHex()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`toHex('Not A Color')`, () => {
    try {
      toHex('Not A Color')
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`toHex('#000')`, () => {
    expect(toHex('#000')).to.equal('#000')
  })

  it(`toHex('rgb(0,0,0)')`, () => {
    expect(toHex('rgb(0,0,0)')).to.equal('#000000')
  })

  it(`toHex('rgba(0,0,0,0)')`, () => {
    expect(toHex('rgb(0,0,0,0)')).to.equal('#000000')
  })

  it(`toHex('black')`, () => {
    expect(toHex('black')).to.equal('#000000')
  })

  it(`toHex('transparent')`, () => {
    expect(toHex('transparent')).to.equal('#000000')
  })
})

describe('toRgb', () => {
  it(`toRgb()`, () => {
    try {
      // @ts-ignore
      toRgb()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`toRgb('Not A Color')`, () => {
    try {
      toRgb('Not A Color')
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`toRgb('#000')`, () => {
    expect(toRgb('#000')).to.equal('rgb(0,0,0)')
  })

  it(`toRgb('#000', 0.5)`, () => {
    expect(toRgb('#000', 0.5)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`toRgb('rgb(0,0,0)')`, () => {
    expect(toRgb('rgb(0,0,0)')).to.equal('rgb(0,0,0)')
  })

  it(`toRgb('rgb(0,0,0)', 0.5)`, () => {
    expect(toRgb('rgb(0,0,0)', 0.5)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`toRgb('rgba(0,0,0,0)')`, () => {
    expect(toRgb('rgb(0,0,0,0)')).to.equal('rgb(0,0,0)')
  })

  it(`toRgb('rgba(0,0,0,1)', 0.5)`, () => {
    expect(toRgb('rgba(0,0,0,1)', 0.5)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`toRgb('black')`, () => {
    expect(toRgb('black')).to.equal('rgb(0,0,0)')
  })

  it(`toRgb('transparent')`, () => {
    expect(toRgb('transparent')).to.equal('rgb(0,0,0)')
  })

  it(`toRgb('transparent', 0.5)`, () => {
    expect(toRgb('transparent', 0.5)).to.equal('rgba(0,0,0,0.5)')
  })
})

describe('darken', () => {
  it(`darken()`, () => {
    try {
      // @ts-ignore
      darken()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`darken('Not A Color')`, () => {
    try {
      darken('Not A Color')
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`darken('#3080E8', 20)`, () => {
    expect(darken('#3080E8', 20)).to.equal('rgba(0,77,181,1)')
  })

  it(`darken('#000')`, () => {
    expect(darken('#000')).to.equal('rgba(0,0,0,1)')
  })

  it(`darken('#fff', 100)`, () => {
    expect(darken('#fff', 100)).to.equal('rgba(0,0,0,1)')
  })

  it(`darken('rgb(255,255,255)', 100)`, () => {
    expect(darken('rgb(255,255,255)', 100)).to.equal('rgba(0,0,0,1)')
  })

  it(`darken('rgba(255,255,255, 1)', 100)`, () => {
    expect(darken('rgba(255,255,255, 1)', 100)).to.equal('rgba(0,0,0,1)')
  })

  it(`darken('rgba(255,255,255, 0.5)', 100)`, () => {
    expect(darken('rgba(255,255,255, 0.5)', 100)).to.equal('rgba(0,0,0,0.5)')
  })

  it(`darken('black', 100)`, () => {
    expect(darken('black', 100)).to.equal('rgba(0,0,0,1)')
  })
})

describe('lighten', () => {
  it(`lighten()`, () => {
    try {
      // @ts-ignore
      darken()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`lighten('Not A Color')`, () => {
    try {
      darken('Not A Color')
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`lighten('#3080E8', 20)`, () => {
    expect(lighten('#3080E8', 20)).to.equal('rgba(99,179,255,1)')
  })

  it(`lighten('#000')`, () => {
    expect(lighten('#000')).to.equal('rgba(0,0,0,1)')
  })

  it(`lighten('#000', 100)`, () => {
    expect(lighten('#000', 100)).to.equal('rgba(255,255,255,1)')
  })

  it(`lighten('rgb(0,0,0)', 100)`, () => {
    expect(lighten('rgb(0,0,0)', 100)).to.equal('rgba(255,255,255,1)')
  })

  it(`lighten('rgba(0,0,0,1)', 100)`, () => {
    expect(lighten('rgba(0,0,0,1)', 100)).to.equal('rgba(255,255,255,1)')
  })

  it(`lighten('rgba(0,0,0,0.5)', 100)`, () => {
    expect(lighten('rgba(0,0,0,0.5)', 100)).to.equal('rgba(255,255,255,0.5)')
  })

  it(`lighten('white', 100)`, () => {
    expect(lighten('white', 100)).to.equal('rgba(255,255,255,1)')
  })
})

describe('getOpacity', () => {
  it(`getOpacity()`, () => {
    try {
      // @ts-ignore
      darken()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`getOpacity('Not A Color')`, () => {
    try {
      darken('Not A Color')
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`getOpacity('#000')`, () => {
    expect(getOpacity('#000')).to.equal(1)
  })

  it(`getOpacity('rgb(0,0,0)')`, () => {
    expect(getOpacity('rgb(0,0,0)')).to.equal(1)
  })

  it(`getOpacity('rgb(0, 0,  0)')`, () => {
    expect(getOpacity('rgb(0, 0,  0)')).to.equal(1)
  })

  it(`getOpacity('rgba(0,0,0,1)')`, () => {
    expect(getOpacity('rgba(0,0,0,1)')).to.equal(1)
  })

  it(`getOpacity('rgba(0,0,0,0.5)')`, () => {
    expect(getOpacity('rgba(0,0,0,0.5)')).to.equal(0.5)
  })

  it(`getOpacity('rgba(0, 0, 0, 0.5)')`, () => {
    expect(getOpacity('rgba(0, 0, 0, 0.5)')).to.equal(0.5)
  })

  it(`getOpacity('rgba(1.111, 1.111, 1.111, 0.5)')`, () => {
    expect(getOpacity('rgba(1.111, 1.111, 1.111, 0.5)')).to.equal(0.5)
  })

  it(`getOpacity('black')`, () => {
    expect(getOpacity('black')).to.equal(1)
  })

  it(`getOpacity('transparent')`, () => {
    expect(getOpacity('transparent')).to.equal(0)
  })
})

describe('getRgbaValue', () => {
  it(`getRgbaValue()`, () => {
    try {
      // @ts-ignore
      getRgbValue()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`getRgbaValue('Not A Color')`, () => {
    try {
      getRgbValue('Not A Color')
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`getRgbaValue('black')`, () => {
    expect(getRgbaValue('black')).to.deep.equal([0, 0, 0, 1])
  })

  it(`getRgbaValue('#000')`, () => {
    expect(getRgbaValue('#000')).to.deep.equal([0, 0, 0, 1])
  })

  it(`getRgbaValue('#000000')`, () => {
    expect(getRgbaValue('#000000')).to.deep.equal([0, 0, 0, 1])
  })

  it(`getRgbaValue('rgb(0,0,0)')`, () => {
    expect(getRgbaValue('rgb(0,0,0)')).to.deep.equal([0, 0, 0, 1])
  })

  it(`getRgbaValue('rgb(1, 12,  123)')`, () => {
    expect(getRgbaValue('rgb(1, 12,  123)')).to.deep.equal([1, 12, 123, 1])
  })

  it(`getRgbaValue('rgba(1,12,123,1)')`, () => {
    expect(getRgbaValue('rgba(1,12,123,1)')).to.deep.equal([1, 12, 123, 1])
  })

  it(`getRgbaValue('rgba(1,12,123,0.5)')`, () => {
    expect(getRgbaValue('rgba(1,12,123,0.5)')).to.deep.equal([1, 12, 123, 0.5])
  })

  it(`getRgbaValue('rgba(1, 12,  123,   1)')`, () => {
    expect(getRgbaValue('rgba(1, 12,  123,   1)')).to.deep.equal([1, 12, 123, 1])
  })
})

describe('getRgbaValue', () => {
  it(`getRgbValue()`, () => {
    try {
      // @ts-ignore
      getRgbValue()
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`getRgbValue('Not A Color')`, () => {
    try {
      getRgbValue('Not A Color')
    } catch (e) {
      expect(true).to.be.true
    }
  })

  it(`getRgbValue('black')`, () => {
    expect(getRgbValue('black')).to.deep.equal([0, 0, 0])
  })

  it(`getRgbValue('#000')`, () => {
    expect(getRgbValue('#000')).to.deep.equal([0, 0, 0])
  })

  it(`getRgbValue('#000000')`, () => {
    expect(getRgbValue('#000000')).to.deep.equal([0, 0, 0])
  })

  it(`getRgbValue('rgb(0,0,0)')`, () => {
    expect(getRgbValue('rgb(0,0,0)')).to.deep.equal([0, 0, 0])
  })

  it(`getRgbValue('rgb(1, 12,  12)')`, () => {
    expect(getRgbValue('rgb(1, 12,  123)')).to.deep.equal([1, 12, 123])
  })

  it(`getRgbValue('rgba(1,12,123,1)')`, () => {
    expect(getRgbValue('rgba(1,12,123,1)')).to.deep.equal([1, 12, 123])
  })

  it(`getRgbValue('rgba(1, 12,  123,   1)')`, () => {
    expect(getRgbValue('rgba(1, 12,  123,   1)')).to.deep.equal([1, 12, 123])
  })
})

describe('getColorFromRgbValue', () => {
  it(`getColorFromRgbValue()`, () => {
    try {
      // @ts-ignore
      getColorFromRgbValue()
    } catch (e) {
      expect(true).to.equal(true)
    }
  })

  it(`getColorFromRgbValue([0,0,0])`, () => {
    expect(getColorFromRgbValue([0, 0, 0])).to.equal('rgb(0,0,0)')
  })

  it(`getColorFromRgbValue([0,0,0,1])`, () => {
    expect(getColorFromRgbValue([0, 0, 0, 1])).to.equal('rgba(0,0,0,1)')
  })
})
