
import preset from './src/theme'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
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