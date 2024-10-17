<script setup>
import {onMounted, onUnmounted, defineProps} from 'vue';
import {defineEmits} from "vue";

const emit = defineEmits(['close']);
const props = defineProps({
  noFooter: Boolean,
  noHeader: Boolean,
  footerSeparator: Boolean,
});

const closeModal = () => {
  emit('close');
};

const closeOnEscape = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', closeOnEscape);
});

onUnmounted(() => {
  window.removeEventListener('keydown', closeOnEscape);
});
</script>
<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__container">
        <div class="modal__wrapper">
          <div v-if="!noHeader">
            <div class="modal__header">
              <slot name="header"></slot>
              <button type="button" class="button button--close" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                  <path d="M393.4 41.37C405.9 28.88 426.1 28.88 438.6 41.37C451.1 53.87 451.1 74.13 438.6 86.63L269.3 255.1L438.6 425.4C451.1 437.9 451.1 458.1 438.6 470.6C426.1 483.1 405.9 483.1 393.4 470.6L223.1 301.3L54.63 470.6C42.13 483.1 21.87 483.1 9.372 470.6C-3.124 458.1-3.124 437.9 9.372 425.4L178.7 255.1L9.372 86.63C-3.124 74.13-3.124 53.87 9.372 41.37C21.87 28.88 42.13 28.88 54.63 41.37L223.1 210.7L393.4 41.37z"/>
                </svg>
              </button>
            </div>
            <hr class="modal__separator">
          </div>

          <div class="modal__body scroll-bar">
            <slot name="body"></slot>
          </div>

          <hr v-if="footerSeparator" class="modal__separator">

          <div v-if="!noFooter" class="modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import 'src/assets/scss/variables/breakepoints';

.modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
    overflow-x: hidden;
    display: grid;
    place-items: center;
  }

  &__wrapper {
    width: 100%;
    max-height: 100%;
  }

  &__container {
    position: relative;
    background-color: var(--color-white);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: var(--radius-sm);
    outline: 0;
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    padding: var(--space-sm) var(--space-sm);
    margin: var(--space-md);
    width: calc(100% - 2 * (var(--space-md)));
    max-height: calc(100% - 2 * (var(--space-md)));
    overflow: hidden;

    @media screen and (min-width: $screen-md-min) {
      padding: var(--space-md) var(--space-md);
      max-width: 50%;
    }
  }

  &__header {
    display: flex;
    gap: var(--space-md);
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    margin: var(--space-md) calc(-1 * var(--space-lg)) var(--space-md) 0;
    padding-right: var(--space-lg);
    overflow-y: auto;
    max-height: 70vh;
    display: flex !important;
    flex-direction: column;
  }

  &__footer {
    display: flex;
    justify-content: center;
    gap: var(--space-xs);

      & > div {
        width: 100%;
      }
    @media screen and (min-width: $screen-md-min) {
      justify-content: flex-end;
      & > div {
        width: auto;
      }
    }
  }

  &__separator {
    margin-left: calc(-1 * var(--space-lg));
    margin-right: calc(-1 * var(--space-lg));
    margin-top: var(--space-sm);
    border: 1px solid var(--color-gray-lighter);
  }

  &__image {
    text-align: center;
  }
}

.modal-enter {
  opacity: 0;
  transition: all .3s ease-out;
}

.modal-enter-to {
  transform: translateY(-25%);
  transition: all .3s ease-out;
}

.modal-leave-active {
  transition: all .15s ease-out;
  opacity: 0;

  .modal__wrapper {
    transition: transform .3s ease-out;
    transform: translateY(-25%);
  }
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: translateY(-25%);
  transition: all .3s ease-out;
}

</style>
