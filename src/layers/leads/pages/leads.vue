
<script setup>

const route = useRoute()

useHead({
  title: 'Leads',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],

})

definePageMeta({
    layout: 'general',
    title: 'Vehicles',
})



</script>

<template>
    <div>
        <h1>Leads</h1>
      
        {{ route.params.id }}        
    </div>
</template>