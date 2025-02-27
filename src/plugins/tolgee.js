import { Tolgee, DevTools, VueTolgee, FormatSimple } from "@tolgee/vue";
import { markRaw } from "vue";
export default defineNuxtPlugin((nuxtApp) => {
  const tolgee = Tolgee()
    .use(DevTools())
    .use(FormatSimple())
    .init({
      language: "es",
      apiUrl: process.env.NUXT_PUBLIC_TOLGEE_API_URL,
      apiKey: process.env.NUXT_PUBLIC_TOLGEE_API_KEY,
      fallbackLanguage: "es",
      staticData: {
        es: import("../lang/es.json").then((module) => module.default),
        pt: import("../lang/pt.json").then((module) => module.default),
        it: import("../lang/it.json").then((module) => module.default),
      },
    });

  // @ts-ignore - Tolgee instance is compatible with Vue plugin
  nuxtApp.vueApp.use(VueTolgee, {
    tolgee,
    enableSSR: true,
  });

  return {
    provide: {
      tolgee,
    },
  };
});
