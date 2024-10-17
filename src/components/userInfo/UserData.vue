<script setup>
import SkeltonInput from "../skeltons/SkeltonInput.vue";
import {computed, defineProps, ref} from 'vue';
import {useStore} from "vuex";

const store = useStore();
const isUserDataLoading = computed(() => store.getters.getIsUserDataLoading);
const isSendingData = computed(() => store.getters.getIsSendingData);

const props = defineProps({
  isEditingMode: {
    type: Boolean,
    required: false,
    default: false
  },
  userId: {
    type: [Number, String],
    required: false,
  }
});

const firstName = computed({
  get() {
    return store.getters.getFirstName
  },
  set(newValue) {
    store.commit('setFirstName', newValue)
  }
});

const lastName = computed({
  get() {
    return store.getters.getLastName
  },
  set(newValue) {
    store.commit('setLastName', newValue)
  }
});

const avatar = computed({
  get() {
    return store.getters.getAvatar
  },
  set(newValue) {
    store.commit('setAvatar', newValue)
  }
});

const errors = ref([]);
const data = ref({})

const checkForm = (e) => {
  store.commit('setIsSendingData', true)
  errors.value = [];
  if (firstName.value && lastName.value && avatar.value) {
    updateDetails()
    return true;
  } else {
    if(!firstName.value) errors.value.push("First Name is required.");
    if(!lastName.value) errors.value.push("Last Name is required.");
    if(!avatar.value) errors.value.push("Avatar is required.");
    store.commit('setIsSendingData', false)
    e.preventDefault();
  }
}

const updateDetails = () => {
  data.value = {
    first_name: firstName.value,
    last_name: lastName.value,
    avatar: avatar.value,
  }
  if (props.isEditingMode) {
    store.dispatch('editUser', { userId: props.userId, userData: data.value});
  } else {
    store.dispatch('createUser', data.value);
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-8">
      <div class="box-container">
        <div class="form">
          <div class="row">
            <div class="col">
              <div class="input-box">
                <label for="firstName">First Name</label>
                <SkeltonInput v-if="isEditingMode && isUserDataLoading"></SkeltonInput>
                <input v-else v-model="firstName" @keyup.enter="checkForm"
                       placeholder="Type your first name"
                       id="firstName" type="text" class="form-input" tabindex="1">
              </div>
            </div>
            <div class="col">
              <div class="input-box">
                <label for="lastName">Last Name</label>
                <SkeltonInput v-if="isEditingMode && isUserDataLoading"></SkeltonInput>
                <input v-else v-model="lastName" @keyup.enter="checkForm"
                       placeholder="Type your last name"
                       id="lastName" type="text" class="form-input" tabindex="2">
              </div>
            </div>
          </div>
        </div>
        <div v-if="errors.length" class="color-danger">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <button type="submit" @click="checkForm" :class="isSendingData ? 'disabled' : ''" :disabled="isSendingData" tabindex="4">Update Details</button>
      </div>
    </div>
    <div class="col-md-4">

      <div class="box-container">
        <div class="row">
          <div class="col">
            <div class="avatar-box">
              <div :style="'background-image: url(' + avatar + ')'" class="user-avatar user-avatar--big"></div>
              <div class="input-box">
                <label for="avatar">Avatar Url</label>
                <SkeltonInput v-if="isEditingMode && isUserDataLoading" class="mb-0"></SkeltonInput>
                <input v-else v-model="avatar" @keyup.enter="checkForm"
                       placeholder="Type your avatar url"
                       id="avatar" type="url" class="form-input mb-0" tabindex="3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterLink :to="{ name: 'UserList' }"
              class="cursor-pointer icon-list">
    User List
  </RouterLink>
</template>

<style lang="scss" scoped>
@import 'src/assets/scss/variables/breakepoints';

.col {
  min-width: 100%;
  @media screen and (min-width: $screen-sm-min) {
    min-width: auto;
  }
}
button {
  margin-top: auto;
}
.input-box {
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    font-weight: 600;
    margin-bottom: 8px;
  }
}

@media screen and (min-width: $screen-md-min) {
  .box-container {
    flex: 1;
  }
}
</style>