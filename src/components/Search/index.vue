<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      v-model="searchTerm"
      @input="handleInput"
    />
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="clearSearch"
    >
      Clear
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    handleInput() {
      this.$emit("search", this.searchTerm);
    },
    clearSearch() {
      this.searchTerm = "";
      this.$emit("search", "");
    },
  },
};
</script>
