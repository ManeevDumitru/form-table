import "./assets/main.css";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router";

import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
