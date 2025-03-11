<script setup lang="ts">
import modal from '~/Modals/modal.vue';
import type { ColumnDef, ViewDef } from '~/types/views';
import draggable from 'vuedraggable';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';

const props = defineProps({
  view: {
    type: Object as PropType<ViewDef>,
    required: true
  }
});

const avaliableColumns = ref<ColumnDef[]>([
  { field: 'thumbnail', header: 'Foto', sortable: false, removable: false, active: false }, //fotos[0].url
  { field: 'vehicle', header: 'Vehículo', sortable: false, headerStyle: 'min-width: 200px;', active: false }, //marca.nombre + modelo.nombre + version
  { field: 'matricula', header: 'Matricula', sortable: true, active: false }, //matricula
  { field: 'textoEstado', header: 'Estado', sortable: true, active: false }, //estado
  { field: 'etiquetas', header: 'Tags', sortable: true, active: false }, //etiquetas
  { field: 'enPreparacion', header: 'En preparación', sortable: true, active: false }, //
  { field: 'publicadoEnMiWeb', header: 'Web', sortable: true, active: false }, //web
  { field: 'procedencia', header: 'Procedencia', sortable: true, headerStyle: 'text-align: center;', bodyClass: 'text-center', active: false }, //procedencia
  { field: 'manufacturerCode', header: 'Man Code', sortable: true, active: false }, //Man Code
  { field: 'marca', header: 'Marca', sortable: true, active: false }, //Marca
  { field: 'modelo', header: 'Modelo', sortable: true, active: false }, //Modelo
  { field: 'version', header: 'Versión', sortable: true, active: false }, //Versión
  { field: 'color', header: 'Color', sortable: true, active: false }, //Color
  { field: 'potencia', header: 'Potencia', sortable: true, active: false }, //Potencia
  { field: 'fechaMatriculacion', header: 'Fecha matriculación', sortable: true, active: false }, //Fecha matriculación
  { field: 'pvp', header: 'PVP', sortable: true, active: false }, //PVP
  { field: 'pvf', header: 'PVF', sortable: true, active: false }, //PVF
  { field: 'kilometros', header: 'KMS', sortable: true, active: false }, //KMS
  { field: 'ubicacion', header: 'Ubicación', sortable: true, active: false }, //Ubicación
  { field: 'fechaDeRecepcionDelVo', header: 'Antiguedad', sortable: true, active: false }, //Antiguedad
  { field: 'iva', header: 'IVA', sortable: true, active: false }, //IVA
  { field: 'km0', header: 'KM0', sortable: true, active: false }, //KM0
])

const save = (close: () => void) => {
  console.log('save')
  close()
}

const columns = computed(() => props.view.columns);

const updateColumns = () => {
  // Obtener las columnas existentes
  const existingColumns = props.view.columns || [];

  // Añadir columnas faltantes preservando el orden
  avaliableColumns.value.forEach(column => {
    if (!existingColumns.some(c => c.field === column.field)) {
      existingColumns.push(column);
    } else {
      let removable = column.removable;
      const existingColumn = existingColumns.find(c => c.field === column.field);
      if (existingColumn) {
        existingColumn.removable = removable;
      }
    }
  });

  props.view.columns = existingColumns;
}

// Ejecutar al montar para asegurar que todas las columnas estén presentes
updateColumns();


// avaliableColumns.value = avaliableColumns.value.map((column) => {
//   if (columns.value[column.field]) {
//     return {
//       ...column,
//       ...columns.value[column.field]
//     }
//   }
//   return column
// })

// const updateColumns = () => {
//   props.view.columns = avaliableColumns.value.reduce((acc, column) => {
//     let key = column.field as string
//     acc[key] = column
//     return acc
//   }, {} as Record<string, ColumnDef>)

//   console.log(props.view.columns)
// }

// watch(avaliableColumns.value, () => {
//   updateColumns()
// })


const onRowReorder = (e) => {
  console.log(e)
  props.view.columns = e.value
}



const filters = ref({
  global: {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  }
})


</script>

<template>
  <modal @cancel="(close) => close()" @confirm="(close) => save(close)" :shiftX="1">
    <template v-slot:title>{{ $t('createview.title') }}</template>
    <div class="flex flex-column space-y-4">
      <h2>Nombre de la vista</h2>
      <InputText v-model="props.view.name" class="w-full" placeholder="Nombre de la vista" />
    </div>

    <div class="flex flex-column space-y-2">
      <h2 for="columns" class="text-sm font-semibold mb-2">{{ $t('createview.filters') }}</h2>
      <div class="selector">
        <Dropdown v-model="props.view.filters" :options="avaliableColumns" optionLabel="header" optionValue="field"
          :placeholder="$t('createview.prefilters')" class="w-full" />
      </div>
    </div>

    <div class="flex flex-column space-y-4">

      <DataTable :value="props.view.columns" v-model:filters="filters" :reorderableColumns="true"
        tableStyle="max-width: 100%" @rowReorder="onRowReorder" :globalFilterFields="['field', 'header']">
        <template #header>
          <div class="flex flex-column  mb-4">
            <h2 for="columns" class="text-sm font-semibold mb-2">{{ $t('createview.columns') }}</h2>

            <IconField>

              <InputText v-model="filters['global'].value" :placeholder="$t('createview.columns.search')"
                class="w-full" />
              <InputIcon>
                <i class="lc-icon-search" />
              </InputIcon>
            </IconField>
          </div>
        </template>
        <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
        <Column field="header" header="Columna" headerClass="text-left" bodyClass="text-left">
          <template #body="{ data }">
            {{ data.header }}
          </template>
        </Column>
        <Column field="frozen" :header="$t('createview.frozen')">
          <template #body="{ data }">
            <ToggleSwitch v-model="data.frozen" :disabled="data.removable === false" />
          </template>
        </Column>
        <Column field="active" :header="$t('createview.active')">
          <template #body="{ data }">
            <ToggleSwitch v-model="data.active" :disabled="data.removable === false" />
          </template>
        </Column>
      </DataTable>

      <!-- <draggable v-model="props.view.columns" item-key="field">
        <template #header>
          <h2 for="columns" class="text-sm font-semibold mb-0">{{ $t('createview.columns') }}</h2>
          <span class="text-small text-muted mb-2">Selecciona las columnas que quieres mostrar en la vista</span>
        </template>
        <template #item="{ element: column }">
          <div class="column-container">
            <i class="lc-icon-list"></i>
            <label :for="`${column.field}-checkbox`" class="ml-2" v-tooltip.bottom="column.tooltip">{{
              column.header }}</label>

            <ToggleSwitch v-model="column.frozen" :disabled="column.removable === false" value="true" />
            <ToggleSwitch v-model="column.active" :disabled="column.removable === false" value="true" />
          </div>

        </template>
      </draggable> -->
    </div>
  </modal>
</template>


<style lang="scss">
.column-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid var(--my-app-gray-disabled);
  margin-bottom: 2px;

}
</style>