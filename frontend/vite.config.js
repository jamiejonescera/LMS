import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3002,
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         secure: false,
//       },
//     },
//   },
// });
