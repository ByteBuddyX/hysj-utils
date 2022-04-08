import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
export default {
  input: 'src/main.js',
  output: {
    file: './dist/hysjUtils.min.js',
    format: 'umd',
    name: 'hysj-utils',
    compact: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}
