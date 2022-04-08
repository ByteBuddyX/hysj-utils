import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
export default {
  input: 'src/main.js',
  output: {
    file: './dist/hy_utils.min.js',
    format: 'umd',
    name: 'hy_utils',
    compact: true
  },
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}
