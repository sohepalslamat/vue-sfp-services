import { fileURLToPath, URL } from "node:url";
import path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import legacy from "@vitejs/plugin-legacy";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // legacy({
    //   targets: ["ie >= 11"],
    //   additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    // }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["vue-router", "vue"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/sfp-service.ts"),
      name: "vue-sfp-services",
      fileName: (format) => `vue-sfp-services.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue", "vue-router"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
