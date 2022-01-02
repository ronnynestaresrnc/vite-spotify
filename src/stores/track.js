
import { defineStore } from "pinia";


export const useTracks = defineStore("tracks", {
  state: () => {
    return {
        images:[],
        tracks:[],
        albumName:[]

    };
  }, // options...
 
});
