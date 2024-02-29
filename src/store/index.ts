import { BlogModel, ListBlog } from "@/interfaces";
import { getAllBlog, getDetailsBlogById } from "@/services/blog";
import { createStore } from "vuex";

const PAGE_DEFAULT = 1;
const LIMIT_DEFAULT = 10;
export default createStore({
  state: {
    isLoading: false,
    posts: [] as ListBlog,
    postDetails: {} as BlogModel,
    meta: {
      page: PAGE_DEFAULT,
      total: 52, //FAKE total - api not response
      limit: LIMIT_DEFAULT,
      sortBy: "id",
      order: "asc",
      search: "",
      totalPages: 5,
      trigger: false,
    },
  },
  getters: {
    getPosts: (state) => state.posts,
    getPostDetails: (state) => state.postDetails,
    getMeta: (state) => state.meta,
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
    updatePost: (state, payload) => {
      //call api
      const index = state.posts.findIndex((post) => post.id === payload.id);
      if (index !== 1) {
        state.posts.splice(index, 1, payload);
      }
    },
    createPost: (state, payload) => {
      state.posts.unshift({ ...payload });
    },
    deletePost: (state, id) =>
      (state.posts = state.posts.filter((post) => post.id !== id)),
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setDetailsPost: (state, payload) => {
      state.postDetails = {} as BlogModel;
      state.postDetails = payload;
    },
    setMetaData: (state, payload) => {
      state.meta = payload;
    },
  },
  actions: {
    showLoading({ commit }) {
      commit("showLoading");
    },
    hideLoading({ commit }) {
      commit("hideLoading");
    },
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
      context.state.isLoading = true;
      await getAllBlog(
        context.state.meta.page,
        context.state.meta.limit,
        context.state.meta.sortBy,
        context.state.meta.order,
        context.state.meta.search,
        {
          onSuccess(a) {
            if (a.length >= 0) {
              context.state.isLoading = false;
              context.commit("setPosts", a);
            }
          },
          onFailure(error) {
            //TODO : Set error message
            context.state.isLoading = false;
          },
        }
      );
    },
    setMetaData: (context, payload) => {
      context.commit("setMetaData", payload);
    },
    getDetailsBlogById: async (context, payload) => {
      context.state.isLoading = true;
      await getDetailsBlogById(payload.id, {
        onSuccess(a) {
          context.state.isLoading = false;
          context.commit("setDetailsPost", a);
        },
        onFailure(a) {
          //TODO: error
          context.state.isLoading = false;
        },
      });
    },
  },
  modules: {},
});
