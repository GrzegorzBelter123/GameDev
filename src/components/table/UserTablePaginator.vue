<script setup>
import SkeltonPaginator from "../skeltons/SkeltonPaginator.vue";

import {computed, watch, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const isPaginationLoaded = ref(true)

const currentPage = computed(() => store.getters.getUsersList.page);
const totalPages = computed(() => store.getters.getUsersList.total_pages);
const isUsersListLoading = computed(() => store.getters.getIsUsersListLoading);

const goToPage = (pageNumber) => {
  store.commit('setPageNumber', pageNumber);
  store.dispatch('fetchUserList');
}

watch(
    () => isUsersListLoading.value,
    (newValue) => {
      if (newValue && isPaginationLoaded.value)
        isPaginationLoaded.value = false
    }
);
</script>

<template>
  <SkeltonPaginator v-if="isUsersListLoading && isPaginationLoaded"></SkeltonPaginator>
  <ul v-else class="paginator">
    <li @click="goToPage(1)" :class="currentPage === 1 ? 'disabled' : ''"> &#171; </li>
    <li v-for="(page, index) in totalPages" :key="index"
        :class="currentPage === page ? 'current' : ''"
        @click="goToPage(page)">
      {{ page }}
    </li>
    <li @click="goToPage(totalPages)" :class="currentPage === totalPages ? 'disabled' : ''"> &#187; </li>
  </ul>
</template>

<style lang="scss" scoped>

</style>