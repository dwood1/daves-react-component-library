import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "playground/src/component-lib/index.js",
        format: "esm",
        banner: "/* eslint-disable */",
      },
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [del({ targets: ["dist/*", "playground/src/component-lib"] })],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
