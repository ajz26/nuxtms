<script setup lang="ts">
import { useClientStore } from './store/client';

const layout = "general";

</script>

<template>
  <NuxtLayout :layout="layout">
    <NuxtPage />
  </NuxtLayout>
</template>