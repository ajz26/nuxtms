import { defineNuxtModule, extendPages,  } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      // Add /test page
      pages.push({
        name: 'login',
        path: '/login',
        file: resolve(__dirname, './pages/login.vue'),
      })
    })
  },
})
