import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    root: "web/src",
    publicDir: "../public",
    server: {
      host: "localhost",
      port: env.VITE_DEV_PORT || 8800,
    },
  };
});
