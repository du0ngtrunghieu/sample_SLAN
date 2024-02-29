// MediaItem.spec.ts
import { mount } from "@vue/test-utils";
import MediaItem from "@/components/Media/MediaItem.vue";

// Define the type of the custom directive
interface LazyloadDirective {
  mounted?: (el: HTMLElement, binding: any) => void;
}

describe("MediaItem", () => {
  it("renders correctly with details", () => {
    // Mock the details object
    const details = {
      id: 1,
      title: "Test Title",
      content: "Test Content",
      image: "test-image.jpg",
    };

    // Mount the component
    const wrapper = mount(MediaItem, {
      props: {
        details,
      },
    });

    // Check if the title and content are rendered correctly
    expect(wrapper.find("#title").text()).toBe("Test Title");
    expect(wrapper.find("#content").text()).toBe("Test Content");
    // Check if the image has the correct source attribute
    expect(wrapper.find("#img-thumbnail").attributes("width")).toBe("200");
  });

  // it("lazy loads image", () => {
  //   // Mock the details object
  //   const details = {
  //     id: 1,
  //     title: "Test Title",
  //     content: "Test Content",
  //     image: "test-image.jpg",
  //   };

  //   // Mount the component
  //   const wrapper = mount(MediaItem, {
  //     props: {
  //       details,
  //     },
  //   });

  //   // Simulate intersection observer triggering lazy load
  //   const image = wrapper.find("img").element;
  //   const observerCallback = (
  //     wrapper.vm?.$options.directives?.lazyload as LazyloadDirective
  //   )?.mounted; // Cast to LazyloadDirective
  //   if (observerCallback) {
  //     observerCallback(image, { value: "test-image.jpg" });
  //   }

  //   // Check if the image source is updated after lazy loading
  //   expect(image.getAttribute("src")).toBe("test-image.jpg");
  // });
});
