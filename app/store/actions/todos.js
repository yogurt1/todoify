export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST"
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS"
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE"
export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST"
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS"
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE"

export const fetchTodosRequest = () =>
    ({type: FETCH_TODOS_REQUEST})
export const fetchTodosSuccess = todos =>
    ({type: FETCH_TODOS_SUCCESS, payload: todos})
export const fetchTodosFailure = error =>
    ({type: FETCH_TODOS_FAILURE, error})

export const fetchTodoRequest = () =>
    ({type: FETCH_TODO_REQUEST})
export const fetchTodoSuccess = todo =>
    ({type: FETCH_TODO_SUCCESS, payload: todo})
export const fetchTodoFailure = error =>
    ({type: FETCH_TODO_FAILURE, error})


export const getTodo = id => dispatch => {
    dispatch(fetchTodoRequest())
    fetch(`/api/todos/${id}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }

            return res
        })
        .then(res => res.json())
        .then(data => dispatch(fetchTodoSuccess(data)))
        .catch(err => dispatch(fetchTodoFailure(err)))
}

export const getTodos = () => dispatch => {
    dispatch(fetchTodosRequest())
    fetch("/api/todos/")
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }

            return res
        })
        .then(res => res.json())
        .then(data => dispatch(fetchTodosSuccess(data)))
        .catch(err => dispatch(fetchTodosFailure(err)))
}

