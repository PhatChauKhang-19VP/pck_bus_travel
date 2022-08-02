import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { store, key } from "./store"

import BootstrapVue3 from "bootstrap-vue-3"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

const app = createApp(App).use(router)
app.use(store, key).use(BootstrapVue3).mount("#app")
