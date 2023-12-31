// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// icon
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
library.add(
  faCartShopping,
  faMagnifyingGlass,
  faYoutube,
  faPlay,
  faAngleRight,
  faDumbbell,
  faClock,
  faPerson
);

// app
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
