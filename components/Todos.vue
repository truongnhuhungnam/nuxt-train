<template>
    <div class="Todos m-5">
        <TodosForm />
        <ul class="list-none md:list-disc">
            <li
                v-for="todo in todos"
                :key="todo.id"
                class="Todo flex justify-between mb-4"
            >
                <nuxt-link
                    :to="'todos/' + todo.id"
                    class="text-blue-400 hover:underline"
                >
                    {{ todo.title }}
                </nuxt-link>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
                    @click="deleteTodo(todo.id)"
                >
                    Delete
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TodosForm from './TodosForm.vue'
export default {
    name: 'Todos',

    components: { TodosForm },

    computed: {
        ...mapState({
            todos: (state) => state.todos.todos,
        }),
    },

    mounted() {
        this.$store.dispatch('todos/getTodos')
    },

    methods: {
        deleteTodo(todoId) {
            this.$store.dispatch('todos/deleteTodo', todoId)
        },
    },
}
</script>
