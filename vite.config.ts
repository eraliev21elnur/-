import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      // Vite's SPA preview falls back to root HTML for /work (without a slash).
      // Serve the prerendered document, matching Apache/Pages production behavior.
      name: "prerender-preview",
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = new URL(req.url ?? "/", "http://localhost");
          const root = resolve("dist");
          const page = resolve(root, `.${url.pathname}`, "index.html");
          if (page.startsWith(`${root}/`) && existsSync(page))
            req.url = `${url.pathname.replace(/\/$/, "")}/index.html${url.search}`;
          else if (!existsSync(resolve(root, `.${url.pathname}`))) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(readFileSync(resolve(root, "404.html")));
            return;
          }
          next();
        });
      },
    },
  ],
  build: { target: "es2022" },
});
