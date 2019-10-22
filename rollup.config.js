import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
//import { uglify } from 'rollup-plugin-uglify'
import uglify from 'rollup-plugin-uglify-es';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: './src/storage.js',
    output: {
      file: './dist/storage.js',
      format: 'iife',
      name: 'Storage',
    },
    plugins: [resolve({ browser: true }), commonjs(), babel(), uglify()],
  },
  {
    input: './src/storage.js',
    output: {
      file: './module/storage.js',
      format: 'esm',
      name: 'Storage',
    },
    plugins: [peerDepsExternal(), babel(), uglify()],
  },
]
