<template>
    <div>
        <h3>todos</h3>
        <div v-if="todos">
            <div class="error" v-if="todos.error">
                <h1>got error</h1>
                <p>{{ todos.error.message }}</p>
            </div>
            <div class="loading" v-else-if="todos.isLoading">
                <h1>loading...</h1>
            </div>
            <div class="todos" v-else>
                <div class="todo" v-for="todo in todos.todos">
                    <h3>{{ todo.name }}</h3>
                    <p>{{ todo.content }}</p>
                    <em>status {{ todo.status }}</em>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {actions} from "../store" 

export default {
    data() {
        return {
            todos: this.$select("todos")
        }
    },
    created() {
        actions.getTodos()
    }
}
</script>
