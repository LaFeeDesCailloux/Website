import { defineConfig } from "astro/config"
import icon from "astro-icon"
import sitemap from "@astrojs/sitemap"
import metaTags from "astro-meta-tags"
import compressor from "astro-compressor"
import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
	site: "https://lafeedescailloux.fr",
	base: '/',
	integrations: [icon(), sitemap(), metaTags(), compressor()],
	adapter: cloudflare({
		imageService: "cloudflare",
		platformProxy: {
			enabled: true
		}
	}),
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "/src/assets/scss/mixin" as *;`
				}
			}
		}
	}
})
