<script setup lang="ts">
import { useClientStore } from './store/client';
import { TolgeeProvider } from "@tolgee/vue";
import { markRaw } from 'vue';
const layout = "general";

const staticData = markRaw({
  "en": {
    "hello": "Hello"
  },
  "es-ES": () =>
    import("./lang/es-ES/index").then((module) => module.default),
});

</script>

<template>

  <TolgeeProvider :ssr="{ staticData, language: 'es-ES', }">
    <NuxtLayout :layout="layout">
      <NuxtPage />
    </NuxtLayout>
  </TolgeeProvider>
</template>