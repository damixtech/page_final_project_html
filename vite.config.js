import { defineConfig } from "vite";

export default defineConfig({
  base: "/page_final_project_html/",

  build: {
    rollupOptions: {
      input: [
        "index.html",
        "404.html",
        "aviso_legal.html",
        "blog.html",
        "contacto.html",
        "curso_css.html",
        "curso_html.html",
        "cursos.html",
        "login.html",
        "post_css.html",
        "post_html.html",
        "quienes_somos.html",
        "registro.html",
      ],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});