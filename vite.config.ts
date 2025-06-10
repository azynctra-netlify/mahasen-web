import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // mode === 'development' && <plugin>, // Uncomment and replace <plugin> with the actual plugin if needed
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false, // Disable sourcemaps to avoid the errors
    chunkSizeWarningLimit: 1500, // Increase chunk size limit to reduce warnings
    rollupOptions: {
      output: {
        sourcemap: false, // Explicitly disable sourcemaps in output
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
        }
      }
    }
  },
}));
