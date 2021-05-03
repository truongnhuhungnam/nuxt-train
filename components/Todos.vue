<template>
    <div class="Todos m-5">
        <TodosForm />
        <h2 class="my-4">
            We have <span class="text-green-400">{{ todos.length }}</span> tasks
        </h2>
        <h2 class="my-4">
            We have
            <span class="text-green-400">{{ doneCount.length }}</span> tasks
            done
        </h2>
        <ul class="list-none md:list-disc">
            <li
                v-for="todo in todos"
                :key="todo.id"
                class="Todo flex justify-between mb-4"
            >
                <nuxt-link
                    :to="'todos/' + todo.id"
                    class="text-green-400 hover:underline"
                >
                    {{ todo.title }}
                </nuxt-link>
                <div class="right flex align-items-center">
                    <button
                        class="bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded mr-4"
                    >
                        {{ todo.completed }}
                    </button>
                    <button
                        class="bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded"
                        @click="deleteTodo(todo.id)"
                    >
                        Delete
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import TodosForm from './TodosForm.vue'
export default {
    name: 'Todos',

    components: { TodosForm },

    computed: {
        ...mapState({
            todos: (state) => state.todos.todos,
        }),
        ...mapGetters({
            doneCount: 'todos/doneTodos',
        }),
    },

    mounted() {
        this.$store.dispatch('todos/getTodos')
    },

    methods: {
        ...mapActions({
            deleteTodo: 'todos/deleteTodo',
        }),
    },
}
</script>
