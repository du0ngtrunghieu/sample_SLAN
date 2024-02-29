<template>
  <div class="container mt-5">
    <h2>Create Post</h2>
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
    return {
      formData: {
        createdAt: new Date().toISOString(),
        title: "",
        image: "",
        content: "",
        id: "",
      },
    };
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

      this.formData.id = this.generateRandomId();
      store.dispatch("createPost", this.formData);

      // Reset form data after submission
      this.formData.title = "";
      this.formData.image = "";
      this.formData.content = "";

      alert("Create Successfully");
    },
    generateRandomId() {
      // Generate a random ID
      return Math.random().toString(36).substr(2, 9);
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
