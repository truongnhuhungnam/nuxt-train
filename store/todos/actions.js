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
}
