export default {
    SET_TODOS(state, todos) {
        state.todos = todos
    },
    DELETE_TODO(state, todoId) {
        state.todos = state.todos.filter((todo) => todo.id !== todoId)
    },
}
