import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// @ts-ignore
export default defineConfig((configEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd(), "");

  const isDevelopment = configEnv.mode === "development";

  return {
    base: isDevelopment ? "" : `${env.APP_URL}/ups/parcel-pickup/dist/`,
    build: {
      outDir: "../../public/ups/parcel-pickup/dist",
      rollupOptions: {
        output: {
          manualChunks: false,
          inlineDynamicImports: true,
          entryFileNames: "[name].js", // currently does not work for the legacy bundle
          assetFileNames: "[name].[ext]", // currently does not work for images
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
