<script setup>
</script>

<template>
  <div class="container">
    <div class="box-container">
      Sorry,<br>
      the page does not exist :(<br>
      <RouterLink :to="{ name: 'UserList' }"
                  class="cursor-pointer">
        Return to User List
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>