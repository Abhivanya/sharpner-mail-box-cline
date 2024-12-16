import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    exclude: ["**/node_modules/**", "**/dist/**"],
    reporters: "verbose",
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
