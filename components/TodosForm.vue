<template>
    <form @submit="onSubmit">
        <input v-model="title" type="text" class="border py-1 px-4 rounded" />
        <input
            type="submit"
            value="Add Todo"
            class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
        />
    </form>
</template>

<script>
// import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
export default {
    name: 'TodosForm',
    data() {
        return {
            title: '',
        }
    },
    methods: {
        addTodo(newTodo) {
            this.$store.dispatch('todos/addTodo', newTodo)
        },

        onSubmit(event) {
            event.preventDefault()
            this.addTodo({
                id: uuidv4(),
                title: this.title,
                completed: false,
            })
        },
    },
}
</script>
