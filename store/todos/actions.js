import axios from 'axios'
export default {
    async getTodos({ commit }) {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos?_limit=5'
            )
            commit('SET_TODOS', response.data)
        } catch (error) {
            console.log(error)
        }
    },

    async deleteTodo({ commit }, todoId) {
        try {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/todos/${todoId}`
            )
            commit('DELETE_TODO', todoId)
        } catch (error) {
            console.log(error)
        }
    },

    async addTodo({ commit }, newTodo) {
        try {
            await axios.post(
                'https://jsonplaceholder.typicode.com/todos',
                newTodo
            )
            commit('ADD_TODO', newTodo)
        } catch (error) {
            console.log(error)
        }
    },
}
