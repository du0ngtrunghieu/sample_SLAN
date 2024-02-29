<template>
  <div class="container mt-5">
    <h2>{{ !idRef ? "Create post" : "Update post" }}</h2>
    <form @submit.prevent="submitForm">
      <!-- Title Input -->
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="formData.title"
          required
        />
      </div>

      <!-- Image Input -->
      <div class="mb-3">
        <label for="image" class="form-label">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="image"
          v-model="formData.image"
          required
        />
      </div>

      <!-- Content Input -->
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea
          class="form-control"
          id="content"
          rows="5"
          v-model="formData.content"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "@/store";

export default {
  name: "PostForm",
  data() {
    const idRef = ref(null);
    return {
      formData: {
        createdAt: new Date().toISOString(),
        title: "",
        image: "",
        content: "",
        id: "",
      },
      idRef,
    };
  },
  computed: {
    getDetailsPost: function () {
      return this.$store.state.postDetails;
    },
  },
  methods: {
    submitForm() {
      // Validate the form
      if (
        !this.formData.title ||
        !this.formData.image ||
        !this.formData.content
      ) {
        alert("Please fill in all fields.");
        return;
      }

      if (this.idRef !== null) {
        store.dispatch("updatePost", this.formData);
        alert("Update Successfully");
      } else {
        this.formData.id = this.generateRandomId();
        store.dispatch("createPost", this.formData);

        // Reset form data after submission
        this.formData.title = "";
        this.formData.image = "";
        this.formData.content = "";

        alert("Create Successfully");
      }
    },
    generateRandomId() {
      // Generate a random ID
      return Math.random().toString(36).substr(2, 9);
    },
  },
  mounted() {
    const itemId = this.$route.params.id;
    this.idRef = itemId;
    if (itemId) {
      //get details
      store.dispatch("getDetailsBlogById", { id: itemId });
    }
  },
  watch: {
    getDetailsPost: {
      handler: function (newVal, oldVal) {
        if (newVal !== oldVal && Object.keys(newVal)) {
          //update
          Object.assign(this.formData, newVal);
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
