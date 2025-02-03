<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>hola desde auth!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
