<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();

const userName = ref('');
</script>

<template>
  <div class="table-top-info">
    <label>
      <span class="input-group">
      <input v-model="userName"
             placeholder="Search for users..."
             type="text"
             class="form-input form-input--dark">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" fill="var(--color-gray-dark)"/>
          </svg>
        </button>
      </span>
    </label>
    <RouterLink :to="{ name: 'UserAdd'}"
                class="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
      </svg>
      <span>Add User</span>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/scss/variables/breakepoints';

.table-top-info {
  padding: 0 0 20px 0;
  border-bottom: 1px solid var(--color-gray-lighter);
  margin-bottom: 20px;

  @media screen and (min-width: $screen-md-min) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}
</style>