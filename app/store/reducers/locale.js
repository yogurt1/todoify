import {SET_LOCALE, RESET_LOCALE} from "../actions/locale"

const initialState = "en"

export default function localeReducer(state = initialState, action) {
    switch (action.type) {
    case SET_LOCALE: return action.payload
    case RESET_LOCALE: return initialState
    default: return state
    }
}
