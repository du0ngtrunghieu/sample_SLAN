<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click="prevPage">Previous</a>
      </li>
      <li
        class="page-item"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ active: pageNumber === currentPage }"
      >
        <a class="page-link" href="#" @click="changePage(pageNumber)">{{
          pageNumber
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.$emit("page-changed", pageNumber);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
  },
};
</script>
