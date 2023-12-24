import react from "@vitejs/plugin-react-swc";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
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
					} else if (id.includes("node_modules") && id.length % 2 === 0) {
						return "vendor-1";
					} else if (id.includes("node_modules") && id.length % 2 !== 0) {
						return "vendor-2";
					} else {
						return "index";
					}
				},
			},
		},
	},
});
