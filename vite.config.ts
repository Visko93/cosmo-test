import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Icons({
      // expiremental
      autoInstall: true,
      compiler: "jsx",
      jsx: "react",
    }),
    splitVendorChunkPlugin(),
  ],

  build: {
    manifest: true,
  },
});
