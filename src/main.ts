import "virtual:windi.css";
import App from "./App.vue";
import { createApp } from "vue";
import { setupStore } from "/@/store";
import "./libs/rem";

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);
}

void bootstrap();
