<script setup lang="ts">
import { useClientStore } from './store/client';
import { TolgeeProvider } from "@tolgee/vue";
import { markRaw } from 'vue';
const layout = "general";

const staticData = {
  es: await import("./lang/es.json").then((module) => module.default),
  pt: await import("./lang/pt.json").then((module) => module.default),
  it: await import("./lang/it.json").then((module) => module.default),
};

</script>

<template>
  <NuxtLoadingIndicator :height="5" :duration="60000" />

  <TolgeeProvider :ssr="{ staticData, language: 'es', }">
    <NuxtLayout :layout="layout">
      <NuxtPage />
    </NuxtLayout>
  </TolgeeProvider>
</template>