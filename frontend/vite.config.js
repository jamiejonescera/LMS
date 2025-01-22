import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    proxy: {
      "/api": {
        target: "https://logisticsmanagementsystem-5c8t.onrender.com",
        secure: false,
      },
    },
  },
});
