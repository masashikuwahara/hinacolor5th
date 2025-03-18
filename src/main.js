import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 追加

const app = createApp(App);
app.use(router); // ルーターを適用
app.mount("#app");