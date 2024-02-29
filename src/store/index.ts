import { BlogModel, ListBlog } from "@/interfaces";
import { getAllBlog } from "@/services/blog";
import { createStore } from "vuex";

const PAGE_DEFAULT = 1;
const LIMIT_DEFAULT = 10;
export default createStore({
  state: {
    posts: [] as ListBlog,
    postDetails: {} as BlogModel,
    meta: {
      page: PAGE_DEFAULT,
      total: null,
      limit: LIMIT_DEFAULT,
      sortBy: "id",
      order: "asc",
      search: "",
    },
  },
  getters: {
    getPosts: (state) => state.posts,
    getPostDetails: (state) => state.postDetails,
  },
  mutations: {
    updatePost: (state, payload) => {
      const index = state.posts.findIndex((post) => post.id === payload.id);
      if (index !== 1) {
        state.posts.splice(index, 1, payload);
      }
    },
    createPost: (state, payload) => {
      state.posts.unshift(payload);
    },
    deletePost: (state, id) =>
      (state.posts = state.posts.filter((post) => post.id !== id)),
    setPosts: (state, payload) => {
      console.log(payload);
      state.posts = payload;
    },
    setDetailsPost: (state, payload) => {
      console.log(payload);
    },
  },
  actions: {
    createPost: (context, payload) => {
      context.commit("createPost", payload);
    },
    deletePost: (context, payload) => {
      context.commit("deletePost", payload);
    },
    updatePost: (context, payload) => {
      context.commit("updatePost", payload);
    },
    loadPosts: async (context) => {
      await getAllBlog(
        context.state.meta.page,
        context.state.meta.limit,
        context.state.meta.sortBy,
        context.state.meta.order,
        context.state.meta.search,
        {
          onSuccess(a) {
            if (a.length >= 0) {
              context.commit("setPosts", a);
            }
          },
          onFailure(error) {
            //TODO : Set error message
          },
        }
      );
    },
  },
  modules: {},
});
