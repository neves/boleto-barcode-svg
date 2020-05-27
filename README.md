# Generates a SVG string from a boleto barcode

## Features

- [x] Only 500 bytes (minified and gzipped) bundled with [microbundle](https://github.com/developit/microbundle) and [Size Limit](https://github.com/ai/size-limit) controls the size.
- [x] No dependencies
- [x] Compatible with browser, node and deno
- [x] Easy to use, only **one** function with only **one** param

## Install

`yarn add boleto-barcode-svg`

## Usage

```js
import { boletoBarcodeSvg } from "boleto-barcode-svg"

const number = "34195.00008 01233.203189 64221.470004 5 84410000002000"
const svg = boletoBarcodeSvg(number)
console.log(svg)
```

### Credits

Based on the awesome work of [Guilherme Araújo](https://github.com/guilhermearaujo/boleto.js)
