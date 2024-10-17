<script setup>
import {defineProps} from "vue";

const props = defineProps({
  numberOfRows: {
    type: Number,
    required: false,
    default: 6
  }
});
</script>

<template>
  <tr v-for="user in numberOfRows">
    <td>
      <div class="skeleton-user-table skeleton-user-table__avatar"></div>
    </td>
    <td>
      <div class="skeleton-user-table skeleton-user-table__text"></div>
    </td>
    <td>
      <div class="skeleton-user-table skeleton-user-table__text"></div>
    </td>
  </tr>
</template>

<style lang="scss" scoped>
@import 'src/assets/scss/variables/breakepoints';

.skeleton-user-table {
  position: relative;
  height: 24px;
  max-width: 200px;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-skelton);

  &__avatar {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }

  &__text {
    height: 17px;
    max-width: 80%;
    width: 100%;
    @media screen and (min-width: $screen-md-min) {
      max-width: 50%;
    }
  }
}

.skeleton-user-table::after {
  animation: animation-skeleton 1.5s linear 0.5s infinite;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent);
  content: '';
  position: absolute;
  transform: translateX(-100%);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

@keyframes animation-skeleton {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>