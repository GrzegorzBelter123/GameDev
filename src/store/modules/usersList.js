import {
    fetchUserList
} from '../../utils/api';

const state = () => ({
    usersList: [],
    pageNumber: 1,
    isUsersListLoading: true
})

const mutations = {
    setUsersList(state, value) {
        state.usersList = value
    },
    setPageNumber(state, value) {
        state.pageNumber = value
    },
    setIsUsersListLoading(state, value) {
        state.isUsersListLoading = value
    }
}

const actions = {
    async fetchUserList({commit, getters}) {
        commit('setIsUsersListLoading', true);
        try {
            const data = await fetchUserList(getters.getPageNumber);
            commit('setIsUsersListLoading', false);
            commit('setUsersList', data);
        } catch (error) {
            console.error('Failed to fetch users list:', error);
        }
    },
}

const getters = {
    getUsersList(state) {
        return state.usersList
    },
    getPageNumber(state) {
        return state.pageNumber
    },
    getIsUsersListLoading(state) {
        return state.isUsersListLoading
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
