<script setup>
import { Transition } from 'vue';
const props = defineProps({
  expanded: {
    type: Boolean,
    default: false,
    required: false
  }
})

const expanded = ref(props.expanded)

const value1 = ref('')
const value2 = ref('')

const checked1 = ref(false)


const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
])
</script>

<template>

  <div class="searchform-container" :class="{ 'expanded': expanded }">
    <h3>{{ $t('vehicles.searchform.title') }}</h3>
    <div :class="$style.basicSearch">
      <FloatLabel>

        <InputText v-model="value1" id="bastidor" class="w-full" />

        <label for="bastidor">Bastidor</label>

      </FloatLabel>


      <FloatLabel>
        <InputText v-model="value1" id="matricula" class="w-full" />

        <label for="matricula">Matricula</label>
      </FloatLabel>

      <FloatLabel>
        <InputText v-model="value1" id="matricula" class="w-full" />

        <label for="matricula">Matricula</label>
      </FloatLabel>

      <FloatLabel>
        <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid class="w-full" />
        <label for="modelo">Modelo</label>
      </FloatLabel>

      <CustomInputSwitch inputId="with_images" :label="$t('searchform.vehicles.with_images')" position="right" />

      <CustomInputSwitch inputId="only_available" :label="$t('searchform.vehicles.only_available')" position="right" />

    </div>
    <Transition name="slide">
      <div :class="$style.advancedSearch" v-if="expanded">
        <FloatLabel>
          <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid />
          <label for="modelo">Modelo</label>
        </FloatLabel>
        <FloatLabel>
          <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid />
          <label for="modelo">Modelo</label>
        </FloatLabel>
        <FloatLabel>
          <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid />
          <label for="modelo">Modelo</label>
        </FloatLabel>
        <FloatLabel>
          <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid />
          <label for="modelo">Modelo</label>
        </FloatLabel>
        <FloatLabel>
          <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid />
          <label for="modelo">Modelo</label>
        </FloatLabel>
        <FloatLabel>
          <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid />
          <label for="modelo">Modelo</label>
        </FloatLabel>

        <div class="advanced-search-row 2-columns">
          <FloatLabel>
            <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid />
            <label for="modelo">Modelo</label>
          </FloatLabel>
          <FloatLabel>
            <Select name="city" :options="cities" optionLabel="name" id="modelo" fluid />
            <label for="modelo">Modelo</label>
          </FloatLabel>
        </div>

      </div>

    </Transition>

    <button class="expand-button" @click="expanded = !expanded" severity="secondary">
      <span>
        <i :class="expanded ? 'lc-icon-cross' : 'lc-icon-filter'" />
        {{ $t('searchform.advanced') }}
      </span>
    </button>
  </div>
</template>

<style module>
.basicSearch {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  row-gap: 25px;
  margin-bottom: 10px;
  margin-top: 25px;
}

.advancedSearch {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  row-gap: 25px;
  margin-bottom: 10px;
  margin-top: 25px;
}

@media (max-width: 1200px) {

  .basicSearch,
  .advancedSearch {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {

  .basicSearch,
  .advancedSearch {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {

  .basicSearch,
  .advancedSearch {
    grid-template-columns: 1fr;
  }
}
</style>
<style lang="scss">
.w-full {
  width: 100%;
}

.advanced-search-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.searchform-container {
  padding: 22px 10px;
  box-shadow: 0 0 10px 0 #194e8d21;
  position: relative;
  z-index: 1;
  margin-bottom: 30px;

  .basic-search {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .expand-button {
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 220px;
    display: flex;
    text-align: center;
    align-items: center;

    background: var(--my-app-primary-600);
    color: var(--my-app-primary-contrast-color);
    border: none;
    border-radius: 0 0 10px 10px;
    padding: 8px 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;

    span {
      margin: 0 auto;
    }

  }


}
</style>