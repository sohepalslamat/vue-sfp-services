import { fileURLToPath, URL } from "node:url";
// import path from "path";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-sfp-services',
  plugins: [
    vue2(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, "src/lib/main.ts"),
  //     name: "vue-sfp-services",
  //     fileName: (format) => `vue-sfp-services.${format}.js`,
  //   },
  //   rollupOptions: {
  //     // make sure to externalize deps that shouldn't be bundled
  //     // into your library
  //     external: ["vue", "vue-router"],
  //     output: {
  //       // Provide global variables to use in the UMD build
  //       // for externalized deps
  //       globals: {
  //         vue: "Vue",
  //       },
  //     },
  //   },
  // },
});
