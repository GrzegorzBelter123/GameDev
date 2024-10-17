import {
    createUser,
    editUser,
    deleteUser,
    getUser,
} from '../../utils/api';
import {ALERT_SUCCESS, ALERT_FAIL} from '../../utils/alerts'

const state = () => ({
    firstName: null,
    lastName: null,
    avatar: null,
    response: {
        type: null,
        text: null
    },
    isUser: true,
    isUserDataLoading: true,
    isUserDeleted: false
})

const mutations = {
    setFirstName(state, value) {
        state.firstName = value
    },
    setLastName(state, value) {
        state.lastName = value
    },
    setAvatar(state, value) {
        state.avatar = value
    },
    setResponseAlert(state, value) {
        state.response = value
    },
    setIsUser(state, value) {
        state.isUser = value
    },
    setIsUserDataLoading(state, value) {
        state.isUserDataLoading = value
    },
    setIsUserDeleted(state, value) {
        state.isUserDeleted = value
    }
}

const actions = {
    async createUser({commit}, value) {
        try {
            const response = await createUser(value);
            commit('setResponseAlert', {type: ALERT_SUCCESS, text: 'User has been created'})
        } catch (error) {
            commit('setResponseAlert', {type: ALERT_FAIL, text: 'User has not been created'})
        }
        commit('setIsSendingData', false)
    },
    async editUser({commit}, userData) {
        try {
            const response = await editUser(userData);
            commit('setResponseAlert', {type: ALERT_SUCCESS, text: 'User has been updated'})
        } catch (error) {
            commit('setResponseAlert', {type: ALERT_FAIL, text: 'User has not been updated'})
            console.error('Failed to edit user:', error);
        }
        commit('setIsSendingData', false)
    },
    async deleteUser({commit, dispatch}, value) {
        commit('setIsUserDeleted', true)
        try {
            const response = await deleteUser(value);
            commit('setResponseAlert', {type: ALERT_SUCCESS, text: 'User has been removed'})
            dispatch('fetchUserList');
        } catch (error) {
            commit('setResponseAlert', {type: ALERT_FAIL, text: 'User has not been removed'})
            console.error('Failed to delete user:', error);
        }
        commit('setIsUserDeleted', false)
    },
    async getUser({commit}, value) {
        commit('setIsUserDataLoading', true)
        try {
            const response = await getUser(value);
            if (response === 404) {
                commit('setIsUser', false)
            }
            commit('setFirstName', response.data.first_name)
            commit('setLastName', response.data.last_name)
            commit('setAvatar', response.data.avatar)
        } catch (error) {
            console.error('Failed to get user:', error);
        }
        commit('setIsUserDataLoading', false)
    },
}

const getters = {
    getFirstName(state) {
        return state.firstName
    },
    getLastName(state) {
        return state.lastName
    },
    getAvatar(state) {
        return state.avatar
    },
    getResponse(state) {
        return state.response
    },
    getIsUser(state) {
        return state.isUser
    },
    getIsUserDataLoading(state) {
        return state.isUserDataLoading
    },
    getIsUserDeleted(state) {
        return state.isUserDeleted
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
