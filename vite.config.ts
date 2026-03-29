import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
	},
});
