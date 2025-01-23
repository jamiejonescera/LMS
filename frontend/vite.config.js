// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3002,
//     proxy: {
//       "/api": {
//         target: "REACT_APP_BASE_URL",
//         secure: false,
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    proxy: {
      "/api": {
        target: process.env.REACT_APP_BASE_URL, // Use the environment variable
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
