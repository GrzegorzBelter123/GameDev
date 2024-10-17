import { useStore } from 'vuex';

export function clearUserData() {
    const store = useStore();
    store.commit('setFirstName', null)
    store.commit('setLastName', null)
    store.commit('setAvatar', null)
    store.commit('setIsUser', true)
}