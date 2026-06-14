import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  env: {
    NODE_ENV: "prod",
  },
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".mjs",
    };
  },
});
