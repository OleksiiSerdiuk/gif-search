<template>
  <div id="app">
    <search-gifs />
  </div>
</template>

<script>
import SearchGifs from '@/components/SearchGifs.vue';

export default {
  name: 'App',
  components: {
      SearchGifs,
  }
}
</script>
