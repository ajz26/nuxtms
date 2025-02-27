import preset from "./src/preset";
import { resolve } from "path";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  extends: [
    resolve(__dirname, "./src/layers/tenancy"),
    resolve(__dirname, "./src/layers/auth"),
    resolve(__dirname, "./src/layers/stock"),
    resolve(__dirname, "./src/layers/dashboard"),
  ],
  devtools: {
     enabled: true,
    componentInspector: false,
  },
  modules: ['@pinia/nuxt', "@primevue/nuxt-module"],
  
  css: [
    "~/assets/scss/app.scss",
    "~/assets/fonts/lc-icons/style.css"
  ],
  primevue: {
    options: {
      theme: {
        options: {
          prefix: "my-app",
          cssLayer: {
            name: "primevue",
            order: 'theme, base , primevue, extend_primevue',
          },
          darkModeSelector: ".my-app-dark",
        },
        preset: preset,
      },
    },
  },
  vite: {
    server: {
      allowedHosts: ['v2.leadcars.es', 'localhost']
    }
  },
  srcDir: "src",
  app: {
    baseURL: '/v2/',

  }, 
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL ?? 'https://api.leadcars.es',
      TOLGEE_API_URL: process.env.NUXT_PUBLIC_TOLGEE_API_URL,
      TOLGEE_API_KEY: process.env.NUXT_PUBLIC_TOLGEE_API_KEY,
      JWT_SECRET: process.env.NUXT_PUBLIC_JWT_SECRET,
    }
  },

});
