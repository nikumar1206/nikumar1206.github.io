import react from "@vitejs/plugin-react-swc";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		webfontDownload([
			"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800&display=swap",
		]),
	],
	server: {
		host: true,
	},

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "build",
		emptyOutDir: true,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes("react")) {
						return "react";
					} else if (id.includes("node_modules")) {
						return "vendor";
					} else {
						return "index";
					}
				},
			},
		},
	},
});
