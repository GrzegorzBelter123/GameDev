<script setup>
import Alert from "./components/shared-components/Alert.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"/>
  </router-view>
  <Alert></Alert>
</template>
