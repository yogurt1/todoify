import Vue from "vue"
import VueI18n from "vue-i18n"
import ru from "./ru.json"
import en from "./en.json"
Vue.use(VueI18n)

const locales = {en, ru}

for (const locale in locales) {
    Vue.locale(locale, locales[locale])
}
