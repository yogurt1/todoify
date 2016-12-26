import Vue from "vue"

export const SET_LOCALE = "SET_LOCALE"
export const RESET_LOCALE = "RESET_LOCALE"

const getLocale = () => {
    return "en"
}

export const setLocale = locale => {
    Vue.config.lang = locale

    return {
        type: SET_LOCALE,
        payload: locale || getLocale()
    }
}

export const resetLocale = () => ({
    type: RESET_LOCALE
})
