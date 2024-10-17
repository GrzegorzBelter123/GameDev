<script setup>
import UserTableTop from "../components/table/UserTableTop.vue";
import UserTableMain from "../components/table/UserTableMain.vue";
import UserTablePaginator from "../components/table/UserTablePaginator.vue";
import {onMounted} from "vue";
import {useStore} from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch('fetchUserList');
});
</script>

<template>
  <div class="container">
    <h1 class="h1">User list</h1>
    <div class="box-container">
      <UserTableTop></UserTableTop>
      <UserTableMain></UserTableMain>
    </div>
    <UserTablePaginator></UserTablePaginator>
  </div>
</template>

<style scoped>

</style>