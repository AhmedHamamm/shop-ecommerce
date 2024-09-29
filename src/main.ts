import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Notifications from "@kyvg/vue3-notification";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

// Main style
import "@/styles/main.scss";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Boxicons
import "boxicons/css/boxicons.min.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(Notifications);
app.use(ToastPlugin);
app.mount("#app");

console.log("Vue app mounted successfully");
