
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
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

definePageMeta({
    layout: 'general',
    title: 'Vehicles',
    description: 'Here is a list of vehicles',
    image: 'https://example.com/image.jpg',
    url: 'https://example.com/vehicles'
})

</script>

<template>
    <div>
        <h1>Vehicles</h1>

        {{ route.params.id }}
        <p>Here is a list of vehicles</p>
    </div>
</template>