<script setup>
import {ALERT_SUCCESS} from '../../utils/alerts'
import {computed, onMounted, ref, watch} from "vue";
import {useStore} from "vuex";
const store = useStore();

const response = computed(() => store.getters.getResponse);

const toggleAlert = ref(false)
const timeout = ref(null)

watch(
    () => response.value,
    (newValue) => {
      clearTimeout(timeout.value);
      if (newValue) {
        toggleAlert.value = true
        timeout.value = setTimeout(() => {
          toggleAlert.value = false
          store.commit('setResponseAlert', '')
        }, 3000)
      }
    }
);

const setAlertStyle = (response) => {
  if (response === ALERT_SUCCESS) {
    return 'alert-success'
  } else {
    return 'alert-danger'
  }
}

onMounted(() => {
  store.commit('setResponseAlert', '')
});
</script>

<template>
  <Transition name="fade" :duration="500">
    <p v-if="toggleAlert" class="alert" :class="setAlertStyle(response.type)">
      <span>{{ response.text }}</span>
    </p>
  </Transition>
</template>

<style lang="scss" scoped>

</style>