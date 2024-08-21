import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://miguelrv12.github.io",
    base: "/AstroProject",
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true
        }
    }
});
