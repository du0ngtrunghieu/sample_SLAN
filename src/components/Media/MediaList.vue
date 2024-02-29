<template>
  <div class="container mb-5">
    <SearchInput @search="handleSearch" />
    <div class="row">
      <div class="col-md-12">
        <div
          class="d-flex flex-row justify-content-between align-items-center filters"
        >
          <h6>Showing {{ getMeta.total }} posts</h6>
          <div class="right-sort d-flex flex-row">
            <div class="sort-by d-flex flex-row">
              <SortBy @sortBy="handleSortBy" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-1" v-for="value in list" :key="value.id">
      <MediaItem :details="value" />
    </div>
    <Pagination
      :current-page="getMeta.page"
      :total-pages="getMeta.totalPages"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ListBlog } from "@/interfaces/index";
import { PropType } from "vue";
import MediaItem from "@/components/Media/MediaItem.vue";
import SearchInput from "@/components/Search/index.vue";
import Pagination from "@/components/Pagination/index.vue";
import SortBy from "@/components/Sort/index.vue";
import store from "@/store";
@Options({
  name: "MediaList",
  components: { SortBy, MediaItem, SearchInput, Pagination },
  props: {
    list: {
      type: Object as PropType<ListBlog>,
    },
  },
  methods: {
    handleSearch(searchTerm: string) {
      const payloadMeta = Object.assign({}, store.getters.getMeta);
      store.dispatch("setMetaData", {
        ...payloadMeta,
        search: searchTerm,
      });

      store.dispatch("loadPosts");
    },
    handlePageChange(pageNumber: number) {
      const payloadMeta = Object.assign({}, store.getters.getMeta);
      store.dispatch("setMetaData", {
        ...payloadMeta,
        page: pageNumber,
      });
      store.dispatch("loadPosts");
    },

    handleSortBy(value: string) {
      const payloadMeta = Object.assign({}, store.getters.getMeta);
      store.dispatch("setMetaData", {
        ...payloadMeta,
        sortBy: value,
      });
      store.dispatch("loadPosts");
    },
  },
  computed: {
    getMeta() {
      return store.getters.getMeta;
    },
  },
})
export default class MediaList extends Vue {
  list!: ListBlog;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filter {
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.profiles img {
  margin-right: -6px;
}

.col-md-4 {
  margin-top: 26px;
}
</style>
