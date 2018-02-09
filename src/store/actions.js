export default {
    getTask({commit}, task){
        commit('getTask', task)
    },
    addTask({commit}){
        commit('addTask')
    },
    editTask({commit}, task){
        commit('editTask', task)
    },
    removeTask({commit}, task){
        commit('removeTask', task)
    },
    completeTask({commit}, task){
        commit('completeTask', task)
    },
    clearTask({commit}){
        commit('clearTask')
    }
}
