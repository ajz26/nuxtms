
<script setup>

const route = useRoute()

useHead({
  title: 'Vehicles',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})

definePageMeta({
    layout: 'general',
    title: 'Dashboard',
    path: '/',
})

</script>

<template>
    <div>
       dashboard


       poner aqui cajas de dashboard
    </div>
</template>