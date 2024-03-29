import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { router } from "./router";
import store from "./store";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App).use(store).use(router);

router.isReady().then(() => app.mount("#app"));

store.dispatch("loadPosts");
