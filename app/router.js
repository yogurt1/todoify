import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import About from "./components/About.vue"

export const route = (path, component, custom) => ({path, component, ...custom})

export const routes = [
    route("/", Home),
    route("/about", About)
]

Vue.use(VueRouter)
export const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
