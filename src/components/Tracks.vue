<template>
  <!-- component -->

  <div class="w-full bg-gray-800">
    <form action="" class="flex">
      <input
        type="text"
        placeholder="Search Tracks"
        v-model="searchQuery"
        class="mx-auto p-3 w-80 mt-6"
      />
    </form>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        <div
          class="
            w-full
            bg-gray-900
            rounded-lg
            sahdow-lg
            p-12
            flex flex-col
            justify-center
            items-center
          "
          v-for="(t, index) in store.tracks"
          :key="t.id"
        >
          <div class="mb-8">
            <img
              class="object-center object-cover rounded-full h-36 w-36"
              :src="store.images[index]"
            />
          </div>
          <div class="text-center">
            <p class="text-xl text-white font-bold mb-2">{{ t.name }}</p>
            <p class="text-base text-gray-400 font-normal">
              {{ store.albumName[index].name }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useTracks } from "../stores/track";
import spotifyApi from "../services/spotifyApi";
const store = useTracks();
const searchQuery = ref(null);

watchEffect(async () => {
  const { arrayItemsTracks, arrayImagesTrack, arrayAlbumTracks } =
    await spotifyApi.searchTracks(searchQuery.value);
  store.$patch({
    albumName: arrayAlbumTracks,
    tracks: arrayItemsTracks,
    images: arrayImagesTrack,
  });
});
</script>

<style>
</style>