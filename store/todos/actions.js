import axios from 'axios'
export default {
    loadTodos({ commit }) {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.data)
            .then((todos) => {
                console.log(todos)
                commit('SET_TODOS', todos)
            })
    },
}
