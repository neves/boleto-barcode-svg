import { buildSvg } from "./buildSvg.js"
import { itf } from "./itf.js"

export function boletoBarcodeSvg(number) {
  number = format(number)
  const stripes = itf(number)
  const props = stripesToProps(stripes)
  const svg = buildSvg(props)

  return svg
}

/**
 * Converts the printed bank slip number into the barcode number
 *
 * The bank slip's number is a rearrangement of its barcode, plus three
 * checksum digits. This function executes the inverse process and returns the
 * original arrangement of the code. Specifications can be found at
 * https://portal.febraban.org.br/pagina/3166/33/pt-br/layour-arrecadacao
 *
 */
function format(number) {
  return number
    .replace(/\D/g, "")
    .replace(
      /^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/,
      "$1$5$2$3$4"
    )
}

/**
 * Transform [1, 2, 2, 1] into [
 *  {x: 0, width: 4, fill: "#fff"},
 *  {x: 4, width: 8, fill: "#000"}
 *  {x: 12, width: 8, fill: "#fff"}
 *  {x: 20, width: 4, fill: "#000"}
 * ]
 */
function stripesToProps(stripes) {
  return strToIntArray(stripes).map(
    (x => (bit, i) => {
      const attr = {
        x,
        width: bit * STRIPE_WIDTH,
        fill: i % 2 ? WHITE : BLACK
      }
      x += attr.width
      return attr
    })(0)
  )
}

// Transform "1221121" into [1, 2, 2, 1, 1, 2, 1]
// can't use parseInt with map because the second param (index)
function strToIntArray(stripes) {
  return stripes.split("").map(Number)
}

// bars colors
const BLACK = "#000"
const WHITE = "#fff"
// bar width multiplier
const STRIPE_WIDTH = 4
