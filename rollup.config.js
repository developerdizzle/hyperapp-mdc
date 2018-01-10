import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import minify from 'rollup-plugin-babel-minify';
import multiEntry from "rollup-plugin-multi-entry";

export default {
  input: ['demo/src/app.js'],
  output: {
    file: 'demo/dist/app.js',
    format: 'umd',
    name: 'demo'
  },
  plugins: [
    resolve(),
    multiEntry(),
    postcss({
      extract: true,
      modules: true,
    }),
    babel({
      exclude: [
        'node_modules/**',
      ],
    }),
    minify({
      comments: false,
    }),
  ],
};
