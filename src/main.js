// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// icon
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret);

// app
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);
