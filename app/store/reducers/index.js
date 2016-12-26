import {combineReducers} from "redux"
import localeReducer from "./locale"
import counterReducer from "./counter"
import todosReducer from "./todos"

export default combineReducers({
    locale: localeReducer,
    counter: counterReducer,
    todos: todosReducer
})
