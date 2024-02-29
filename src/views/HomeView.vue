<template>
  <div>
    <MediaList :list="posts"></MediaList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MediaList from "@/components/Media/MediaList.vue";
import store from "@/store";

@Options({
  components: {
    MediaList,
  },
  computed: {
    posts() {
      return store.getters.getPosts;
    },
  },
})
export default class HomeView extends Vue {}
</script>
