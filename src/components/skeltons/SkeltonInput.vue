<script setup>

</script>

<template>
  <div class="skeleton-input"></div>
</template>

<style lang="scss" scoped>
.skeleton-input {
  position: relative;
  padding: 0;
  border-radius: 4px;
  height: 38px;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  margin-bottom: 24px;
  background-color: var(--color-skelton);
}

.skeleton-input::after {
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