<script setup lang="ts">
import type { NuxtError } from '#app'
import { useRouter } from 'vue-router';
const router = useRouter()

const props = defineProps({
  error: Object as () => NuxtError
})


const handleClearError = () => {
  clearError()
  router.push('/')
}

</script>

<template>
  <div>
    <h1>{{ error?.statusCode }}</h1>
    esta es la página de error
    <button @click="handleClearError()">Go back home</button>
  </div>
</template>
