<template>
    <div id="app">
        <h1>{{ message }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello Vue!"
        }
    }
}
</script>

<style>
h1 {
    color: green;
}
</style>
