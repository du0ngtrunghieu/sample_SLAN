<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Sort By
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li class="dropdown-item" @click="sortBy('id')">ID</li>
      <li class="dropdown-item" @click="sortBy('title')">Title</li>
      <li class="dropdown-item" @click="sortBy('createdAt')">Created Date</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SortDropdown",
  setup(props, { emit }) {
    const sortByField = ref(""); // Initially no sorting

    const sortBy = (field) => {
      sortByField.value = field;
      emit("sortBy", field);
    };

    return {
      sortBy,
    };
  },
};
</script>
