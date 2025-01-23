import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure this matches your deployment setup
  server: {
    port: 3002,
    proxy: {
      "/api": {
        target: "https://lms-backend-58c4.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
