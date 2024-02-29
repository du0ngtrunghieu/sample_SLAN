<template>
  <div>
    <div class="col-md-12 p-card p-2 rounded-3 px-3 bg-gray-900">
      <div class="d-flex flex-row align-items-center">
        <div class="flex-shrink-0 ms-5">
          <img
            id="img-thumbnail"
            class="rounded-3 img-fluid"
            v-lazyload="details.image"
            alt="..."
            width="200"
            height="140"
          />
        </div>
        <div class="d-flex align-items-start flex-column mb-3 mx-3">
          <router-link :to="'/edit/' + details.id">
            <div id="title" class="mb-auto p-3 fs-4 fw-bold">
              {{ details.title }}
            </div>
          </router-link>
          <div class="p-2" id="content">
            {{ details.content }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom"
    ></div>
  </div>
</template>

<script lang="ts">
import { BlogModel } from "@/interfaces";
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  directives: {
    lazyload: {
      mounted(el, binding) {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lazyImage = entry.target as any;
              lazyImage.src = binding.value;
              observer.unobserve(lazyImage);
            }
          });
        }, options);

        observer.observe(el);
      },
    },
  },
  props: {
    details: {
      type: Object as PropType<BlogModel>,
      required: true,
    },
  },
})
export default class MediaItem extends Vue {
  details!: BlogModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
