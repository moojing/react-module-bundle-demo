import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default {
  input: "components/index.js",
  output: [
    { file: pkg.module, format: "esm", sourcemap: true },
    { file: pkg.main, format: "cjs", sourcemap: true },
  ],
  plugins: [
    commonjs({
      include: /node_modules/,
    }),
    resolve({
      browser: true,
    }),
    postcss({
      extract: "css/common.css",
      modules: true,
      minimize: true,
    }),
    babel({
      exclude: ["node_modules/**"],
      babelHelpers: "runtime",
    }),
    external(),
    svgr(),
    image({
      exclude: ["**/*.svg"],
    }),
    del({ targets: ["dist/css", "dist/esm.*", "dist/cjs.*"] }),
  ],
};
