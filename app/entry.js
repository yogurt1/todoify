import "./polyfills"
import Vue from "vue"
import App from "./components/App.vue"
import router from "./router"
import store from "./store"
import "./locales"

new Vue({
    router,
    store,
    el: "#app",
    render: h => h(App)
})
