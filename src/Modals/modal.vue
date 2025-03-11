<script setup>
import Button from 'primevue/button'
import { VueFinalModal } from 'vue-final-modal'

defineProps({
  showActions: {
    type: Boolean,
    default: true
  },
  shiftX: {
    type: Number,
    default: 0
  }
})

defineEmits(['confirm', 'cancel'])
</script>
<template>
  <vue-final-modal v-slot="{ params, close }" v-bind="$attrs" class="modal-container" :content-class="{
    'modal-container-inner': true,
    'right-0': shiftX > 0,
    'left-0': shiftX < 0
  }" :max-width="400" :click-to-close="true" :lock-scroll="true" :hide-overlay="false" :prevent-click="false">
    <span class="modal-header">
      <h3 class="modal-title">
        <slot name="title"></slot>
      </h3>
      <button v-on:click="close" class="modal-close-button lc-icon-cross"></button>
    </span>
    <div class="modal-content styled-scrollbar">
      <slot :params="{ params }" :close="close"></slot>
    </div>
    <div class="modal-footer" v-if="showActions">
      <Button @click="$emit('cancel', close)" :label="$t('cancel')" rounded />
      <Button @click="$emit('confirm', close)" :label="$t('save')" severity="secondary" rounded />
    </div>
  </vue-final-modal>
</template>

<style lang="scss">
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container-inner {
  width: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  box-shadow: 0px 0px 14px 0px #06284e57;

  &.right-0 {
    position: absolute;
    right: 0;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  &.left-0 {
    position: absolute;
    left: 0;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .accordeon {
    display: grid;
    gap: 1rem;
  }

  .accordeon-item {
    margin-left: -1rem;
    margin-right: -1rem;
    display: grid;
    gap: 0.5rem;

    &:not(.disabled) {
      .accordeon-title {
        grid-template-columns: 1fr auto;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: var(--lc-color-azul-050);
        }
      }
    }
  }

  .accordeon-title {
    display: grid;
    align-items: center;
    background-color: var(--lc-color-gris-050);
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    font-weight: 700;
  }

  .accordeon-title-icon {
    font-size: 0.75rem;
  }

  .accordeon-content {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

.vfm--overlay {
  background: rgba(0, 0, 0, 0.35);
}

.modal-container {
  cursor: not-allowed;

  .modal-container-inner {
    cursor: auto;
  }
}

.modal-content {
  padding: 1rem;
}

.modal-close-button {
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: var(--lc-color-azul-600);

  &:hover {
    color: var(--lc-color-azul-300);
  }
}

.modal-header {
  padding: 1rem;
  padding-right: 2.5rem;
  border-bottom: solid 1px var(--lc-color-gris-100);
}

.modal-title {
  font-size: 1.2rem;
}

.modal-content {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  gap: 0.5rem;
  border-top: solid 1px var(--lc-color-gris-100);

  .p-button {
    &.p-button-sm {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
}

.form-container {
  display: grid;
  gap: 1rem;
}

.fade-enter-active,
.fade-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: transform 22s ease;
}

.fade-enter-from,
.fade-leave-to {
  transition: transform 22s ease;
}

.fade-enter-from,
.fade-leave-to {
  transition: transform 22s ease;
}
</style>

<style scoped>
.dark-mode div .modal-container-inner {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
