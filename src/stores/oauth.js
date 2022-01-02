import axios from "axios";
import { defineStore } from "pinia";
import appAuthStore from "../services/appAuthStore";

export const useAuth = defineStore("auth", {
  state: () => {
    return {
      accessToken: localStorage.access_token || null,
      band: false,
    };
  }, // options...
  actions: {
    async fetchAccessToken() {
      if (!this.band) this.accessToken = await appAuthStore();
    },
  },
});
