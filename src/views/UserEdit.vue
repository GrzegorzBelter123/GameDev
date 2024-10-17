<script setup>
import UserData from "../components/userInfo/UserData.vue";
import {useStore} from "vuex";
import {computed, onBeforeUnmount, onMounted} from "vue";
import {useRoute} from "vue-router";
import {clearUserData} from "../utils/user";
const store = useStore();
const route = useRoute();

const userId = route.params.id;
const isUser = computed(() => store.getters.getIsUser);

onMounted(() => {
  store.dispatch('getUser', userId);
})

onBeforeUnmount(() => {
  clearUserData()
})
</script>

<template>
  <div class="container" v-if="isUser">
    <h1 class="h1">Edit user</h1>
    <UserData :isEditingMode="true" :userId="userId"></UserData>
  </div>
  <div class="container" v-else>
    <h1 class="h1">Edit user</h1>
    No user data<br>
    <RouterLink :to="{ name: 'UserList' }"
                class="cursor-pointer">
      Return to User List
    </RouterLink>
  </div>
</template>

<style scoped>

</style>