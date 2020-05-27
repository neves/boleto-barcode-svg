export function buildSvg(props) {
  const barcodeSvg = props.map(rect)
  // sum the last "x" with the last width
  const viewBoxWidth = (({ width, x }) => width + x)(props[props.length - 1])
  const openSvg = `<svg viewBox="0 0 ${viewBoxWidth} 100">`
  const closeSvg = "</svg>"

  const svg = [openSvg, indent(barcodeSvg), closeSvg].join("\n")
  return svg
}

function rect({ fill, width, x }) {
  return `<rect y="0" height="100%" fill="${fill}" width="${width}" x="${x}"></rect>`
}

function indent(lines = []) {
  return lines.map(line => `  ${line}`).join("\n")
}
