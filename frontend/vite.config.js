import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3002, // Use the port provided by Render, fallback to 3002 for local development
    host: "0.0.0.0", // Make the server accessible externally
    proxy: {
      "/api": {
        target: "https://lms-backend-58c4.onrender.com", // Proxy API requests to your backend service
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
