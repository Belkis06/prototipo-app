import { defineConfig } from "vite";
const { resolve } = require('path')
const env = process.env;
env.mode = env.mode || "production";
export default defineConfig({
  root: "./",
  //:home: En esta linea se cambia la frase /eventos-app/ por el nombre de su repositorio
  base: env.mode === "production" ? "/Eventos/" : "/",
  build: {
    outDir: "docs",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detalles: resolve(__dirname, 'index.html'),
        detalles_informacion: resolve(__dirname, 'index.html'),
        locations: resolve(__dirname, 'locations.html'),
        timeline: resolve(__dirname, 'timeline.html'),
        tickets: resolve (__dirname, 'tickets.html'),
        perfil: resolve (__dirname, 'perfil.html'),

      }
    }
  },
  plugins: []
});