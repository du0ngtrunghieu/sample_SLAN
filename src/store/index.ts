import { BlogModel, ListBlog } from "@/interfaces";
import { getAllBlog, getDetailsBlogById } from "@/services/blog";
import { createStore } from "vuex";

const PAGE_DEFAULT = 1;
const LIMIT_DEFAULT = 5;
export default createStore({
  state: {
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
  },
  mutations: {
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
    setMetaData: (context, payload) => {
      context.commit("setMetaData", payload);
    },
    getDetailsBlogById: async (context, payload) => {
      await getDetailsBlogById(payload.id, {
        onSuccess(a) {
          context.commit("setDetailsPost", a);
        },
        onFailure(a) {
          //TODO: error
        },
      });
    },
  },
  modules: {},
});
