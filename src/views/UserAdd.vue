<script setup>
import UserData from "../components/userInfo/UserData.vue";
import {onBeforeUnmount} from "vue";
import {clearUserData} from "../utils/user";

onBeforeUnmount(() => {
  clearUserData()
})
</script>

<template>
  <div class="container">
    <h1 class="h1">Add user</h1>
    <UserData></UserData>
  </div>
</template>

<style scoped>

</style>