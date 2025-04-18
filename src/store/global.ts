import { defineStore } from "pinia";
import { ClientInterface } from "@/types/Client";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    loading: true,
    items: JSON.parse(
      localStorage.getItem("items") || "[]",
    ) as ClientInterface[],
  }),
  actions: {
    addItem(items: ClientInterface) {
      this.items.push(items);
      localStorage.setItem("items", JSON.stringify(this.items));
    },
  },
});
