<script setup>

const route = useRoute()

useHead({
  title: 'Vehicles',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

definePageMeta({
  layout: 'general',
  title: 'Vehicles',
  path: '/vehicles/:id',
})



</script>

<template>
  <div>
    <h1>Vehicles</h1>

    {{ route.params.id }}
    <p>Here is a list of vehicles</p>
  </div>
</template>