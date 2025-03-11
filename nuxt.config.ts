import preset from "./src/preset";
import { resolve } from "path";
import { h } from "vue";

export default defineNuxtConfig({
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
    "~/assets/fonts/lc-icons/style.css",
    'vue-final-modal/style.css'
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
      pt : {

        paginator : {
          first: {
            class: "p-paginator-first custom-paginator-button",
            innerHTML: '<i class="lc-icon-arrow-right-end rotate-180"></i>',
          },
          prev: {
            class: "p-paginator-prev custom-paginator-button",
            innerHTML: '<i class="lc-icon-arrow-right rotate-180"></i>',
          },
          next: {
            class: "p-paginator-next custom-paginator-button",
            innerHTML: '<i class="lc-icon-arrow-right"></i>',
          },
          last: {
            class: "p-paginator-last custom-paginator-button",
            innerHTML: '<i class="lc-icon-arrow-right-end"></i>',
          }
        },
        datatable: {
          // column : {
          //   root : "text-center",
          //   columnTitle: "ml-auto",
          //   sort : "mr-auto",
          //   bodyCell: {
          //     root : "text-center",
          //   }
          // },
         
        }
      }
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
