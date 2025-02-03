import { defineNuxtModule, extendPages,addLayout } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      // Add /test page
      pages.push({
        name: 'vehicles',
        path: '/vehicles',
        file: resolve(__dirname, './pages/vehicles.vue'),
      }),
      pages.push({
        name: 'vehicle-details',
        path: '/vehicles/:id',
        file: resolve(__dirname, './pages/vehicles.vue'),
      })
    })
  },
})
