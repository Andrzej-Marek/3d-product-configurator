import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { ViteFaviconsPlugin } from "vite-plugin-favicon";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginFaviconsInject("./public/muscle_logo.svg")],
});
