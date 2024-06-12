import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    root: "web/src",
    publicDir: "../public",
    server: {
      port: env.VITE_DEV_PORT | 5000,
    },
  };
});
