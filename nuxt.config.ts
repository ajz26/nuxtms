
import preset from './src/theme'

import { resolve } from "path";



export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  extends : [
    resolve(__dirname, "./src/layers/auth"),
    resolve(__dirname, "./src/layers/stock"),
    resolve(__dirname, "./src/layers/dashboard"),
  ],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@primevue/nuxt-module'
  ],
  css: [
    '~/assets/scss/app.scss'
  ],
  primevue: {
    options: {
      theme: {
        options: {
          prefix : 'my-app',
          cssLayer: false,
          darkModeSelector: '.my-app-dark',
      },
          preset : preset,
            ripple: true,
            inputStyle: 'outlined',
            buttonStyle: 'text',
            
        }
    }
},
  srcDir: 'src',
})