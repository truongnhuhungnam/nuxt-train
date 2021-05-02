import axios from 'axios'
export default {
    async getTodos({ commit }) {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos'
            )
            commit('SET_TODOS', response.data)
        } catch (error) {}
    },

    async deleteTodo({ commit }, todoId) {
        try {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/todos/${todoId}`
            )
            commit('DELETE_TODO', todoId)
        } catch (error) {}
    },
}
