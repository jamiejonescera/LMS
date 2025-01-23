import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // Match with your local frontend port
    proxy: {
      "/api": {
        target: "https://lms-backend-58c4.onrender.com", // Make sure to set this if using local dev
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
