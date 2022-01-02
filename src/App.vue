<script  setup>
import interceptorService from "./services/interceptorService";
import { useAuth } from "./stores/oauth";
const store = useAuth();
store.fetchAccessToken();
interceptorService();
import Tracks from "./components/Tracks.vue";
</script>


<template>
  <Suspense>
    <Tracks />
    <template #fallback>
      <div>loading...</div>
    </template>
  </Suspense>
</template>

<style>
</style>
