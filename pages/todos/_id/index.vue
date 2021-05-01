<template>
    <div>
        <ul class="list-none md:list-disc">
            <li>User Id: {{ todo.userId }}</li>
            <li>Id: {{ todo.id }}</li>
            <li>Title: {{ todo.title }}</li>
            <li>Completed Status: {{ todo.completed }}</li>
        </ul>
        <nuxt-link to="/todos" class="text-blue-400 hover:underline">
            Back to todos list
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: {},
        }
    },
    async fetch() {
        this.todo = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${this.$route.params.id}`
        ).then((res) => res.json())
    },
    fetchOnServer: false,
}
</script>
