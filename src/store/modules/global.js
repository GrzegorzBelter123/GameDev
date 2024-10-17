const state = () => ({
    isSendingData: false
})

const mutations = {
    setIsSendingData(state, value) {
        state.isSendingData = value
    }
}

const actions = {

}

const getters = {
    getIsSendingData(state) {
        return state.isSendingData
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
