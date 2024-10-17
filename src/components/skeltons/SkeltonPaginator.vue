<script setup>

</script>

<template>
  <div class="skeleton-paginator"></div>
</template>

<style lang="scss" scoped>
.skeleton-paginator {
  position: relative;
  padding: 0;
  border-radius: 4px;
  height: 36px;
  max-width: 50%;
  width: 100%;
  overflow: hidden;
  margin: 16px 0;
  background-color: var(--color-skelton);
}

.skeleton-paginator::after {
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