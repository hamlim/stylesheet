const rollup = require('rollup')

const inputOpts = {
  input: 'src/index.js',
}

const outputOpts = {
  file: 'dist/index.js',
  format: 'es',
}

async function build() {
  const bundle = await rollup.rollup(inputOpts)

  // or write the bundle to disk
  await bundle.write(outputOpts)
}

build()
