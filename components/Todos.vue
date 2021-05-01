<template>
    <div class="Todos m-5">
        <ul class="list-none md:list-disc">
            <li v-for="todo in todos" :key="todo.id" class="Todo">
                <nuxt-link
                    :to="'todos/' + todo.id"
                    class="text-blue-400 hover:underline"
                    >{{ todo.title }}</nuxt-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Todos',
    // data() {
    //     return {
    //         todos: [],
    //     }
    // },
    // async fetch() {
    //     this.todos = await fetch(
    //         'https://jsonplaceholder.typicode.com/todos'
    //     ).then((res) => res.json())
    // },
    // fetchOnServer: false,

    computed: {
        ...mapState({
            todos: (state) => state.todos.todos,
        }),
    },
    mounted() {
        this.$store.dispatch('todos/loadTodos')
    },
}
</script>
