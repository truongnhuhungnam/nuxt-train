import axios from 'axios'
export const state = () => ({
    todos: [],
})
export const getters = {
    todos: (state) => {
        return state.todos
    },
}

export const mutations = {
    SET_TODOS(state, todos) {
        state.todos = todos
    },
}

export const actions = {
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
