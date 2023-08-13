import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      ethTokenAddress: "",
      qTokenAddress: "",
      provider: {},
      ethTokenContract: null,
    };
  },

  actions: {},
});
