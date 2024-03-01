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
      <li class="dropdown-item" @click="sortBy('id', 'asc')">ID (Asc)</li>
      <li class="dropdown-item" @click="sortBy('title', 'asc')">Title (Asc)</li>
      <li class="dropdown-item" @click="sortBy('createdAt', 'asc')">
        Created Date (Asc)
      </li>
      <li class="dropdown-item" @click="sortBy('id', 'desc')">ID (Desc)</li>
      <li class="dropdown-item" @click="sortBy('title', 'desc')">
        Title (Desc)
      </li>
      <li class="dropdown-item" @click="sortBy('createdAt', 'desc')">
        Created Date (Desc)
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SortDropdown",
  setup(props, { emit }) {
    const sortByField = ref(""); // Initially no sorting

    const sortBy = (field, order) => {
      sortByField.value = field;
      emit("sortBy", field, order);
    };

    return {
      sortBy,
    };
  },
};
</script>
