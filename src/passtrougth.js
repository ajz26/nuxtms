import { usePassThrough } from "primevue/passthrough";
import preset from "./preset";

export default usePassThrough(
  preset,
  {
    paginator: {
      root: "cacerola",
      firstIcon: {
        class: "cacerola",
      },
      prevIcon: "pi pi-angle-left",
      nextIcon: "pi pi-angle-right",
      lastIcon: "pi pi-angle-right",
    },
  },
  {
    mergeSections: true,
    mergeProps: false,
  }
);
