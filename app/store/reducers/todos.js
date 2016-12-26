import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    FETCH_TODO_REQUEST
} from "../actions/todos"

const initialState = {
    isLoading: false,
    error: null,
    todos: {}
}

const formatTodo = todo => ({[todo.id]: todo})
const formatTodos = todoList => {
    const todos = {}

    for (const todo of todoList) {
        Object.assign(todos,
            formatTodo(todo))
    }

    return todos
}

export default function todosReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TODOS_REQUEST: 
        case FETCH_TODO_REQUEST: return {
            ...state,
            isLoading: true
        }
        case FETCH_TODOS_SUCCESS: return {
            ...state,
            isLoading: false,
            todos: Object.assign({}, state.todos,
                formatTodos(action.payload))
        }
        case FETCH_TODO_SUCCESS: return {
            ...state,
            isLoading: false,
            todos: Object.assign({}, state.todos,
                formatTodo(action.payload))
        }
        case FETCH_TODOS_FAILURE:
        case FETCH_TODO_FAILURE: return {
            ...state,
            isLoading: false,
            error: {
                message: action.error.message,
                stack: action.error.stack
            }
        }
        default: return state
    }
}
