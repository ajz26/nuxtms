<script setup lang="ts">

const props = defineProps({
  inputId: {
    type: String,
    default: undefined,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: false,
  },
  position: {
    type: String,
    default: 'left',
    required: false,
  },
});
</script>

<template>
  <div class="custom-switch" :class="{ 'flex-row-reverse': position === 'right' }">

    <label :for="inputId">{{ label }}</label>
    <ToggleSwitch :inputId="inputId" :modelValue="modelValue">
      <template #handle="{ checked }">
        <i :class="['small-icon', { 'lc-icon-tick': checked, 'lc-icon-cross': !checked }]" />
      </template>
    </ToggleSwitch>
  </div>
</template>


<style lang="scss">
.custom-switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.flex-row-reverse {
    flex-direction: row-reverse;
  }

  .small-icon {
    font-size: 7px;
  }
}
</style>