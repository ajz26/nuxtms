<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import type ApiListResponse from '@/types/ApiListResponse';
import type Vehicle from '@/layers/stock/types/Vehicle';
import type { ViewDef, ColumnDef } from '@/types/views';

const props = defineProps({
  modelValue: {
    type: Object as () => ApiListResponse<Vehicle> | null,
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false
  },
  view: {
    type: Object as () => ViewDef,
    required: true
  }
})

const menu = ref()
const menuitems = ref([
  { label: 'Editar', icon: 'pi pi-pencil', command: () => { } },
  { label: 'Eliminar', icon: 'pi pi-trash', command: () => { } }
])

const showVehicleMenu = (event: Event, data: any) => {
  menu.value.toggle(event);
  menuitems.value = vehicleItemsMenu(data);
}

const vehicleItemsMenu = (data: any) => {
  return [
    { label: 'Editar', icon: 'pi pi-pencil', command: () => { console.log('Editar', data) } },
    { label: 'Eliminar', icon: 'pi pi-trash', command: () => { console.log('Eliminar', data) } }
  ]
}

defineSlots<{
  'header-left': {
    render: () => VNode
  }
}>()

const emit = defineEmits(['paginate'])

const items = computed(() => {
  return props.modelValue?.data ?? []
})

const limit = computed(() => {
  return props.modelValue?.meta?.pagination?.per_page ?? 25
})

const currentPage = computed(() => {
  return props.modelValue?.meta?.pagination.current_page ?? 1
})


const first = computed(() => {
  return (currentPage.value - 1) * limit.value
})

const last = computed(() => {
  return currentPage.value * limit.value
})

const totalRecords = computed(() => {
  return props.modelValue?.meta?.pagination?.total ?? 0
})

const limit_options = computed(() => {
  return [
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 }
  ]
})

const calculateAntiguedad = (fecha: string) => {
  return Math.floor((new Date().getTime() - new Date(fecha).getTime()) / (1000 * 60 * 60 * 24))
}

const calculateAntiguedadColor = (fecha: string) => {
  const antiguedad = calculateAntiguedad(fecha)
  if (antiguedad > 90) return 'danger';
  if (antiguedad > 60) return 'warn';
  if (antiguedad <= 60) return 'info';
  return 'success';
}
const columns = computed(() => {
  return Object.values(props.view.columns)
}) as Ref<ColumnDef[]>

const activeColumns = computed(() => {
  return columns.value.filter((col) => col.active === true)
}) as Ref<ColumnDef[]>
</script>




<template>
  <div>
    <Menu ref="menu" :model="menuitems" :popup="true" />

    <DataTable :value="items" tableStyle="min-width: 50rem max-width: 100%" scrollable :alwaysShowPaginator="false"
      :rows="Number(limit)" @page="($event) => $emit('paginate', $event)" :first="first" :last="last"
      @sort="($event) => $emit('paginate', $event)" @filter="($event) => $emit('paginate', $event)"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
      :totalRecords="totalRecords" :paginator="true" :lazy="true"
      :currentPageReportTemplate="$t('Mostrando {first} a {last} ({totalRecords} vehículos)', {})"
      :rowsPerPageOptions="[10, 25, 50]" class="mt-6" :loading="loading">

      <template #header>
        <div class="flex justify-between items-center">
          <div>
            <slot name="header-left" />
          </div>
          <div>
            <Select v-model="limit" :options="limit_options" optionLabel="label" placeholder="por página"
              option-value="value" checkmark :highlightOnSelect="false"
              @change="($event) => $emit('paginate', { rows: $event.value })" />
          </div>
        </div>
      </template>

      <template #loading> Loading customers data. Please wait. </template>

      <Column v-for="(col, index) of activeColumns" :field="col.field" :header="col.header"
        :key="col.field + '_' + index" :frozen="col.frozen" :sortable="col.sortable" :headerStyle="col.headerStyle"
        :bodyClass="col.bodyClass" :headerClass="col.headerClass">

        <!-- render for thumbnail column -->
        <template #body="slotProps" v-if="col.field === 'thumbnail'">
          <Avatar shape="square" size="xlarge" :class="$style.thumbnail">
            <img :src="slotProps.data.fotos[0].url" alt="Thumbnail" class="thumbnail">
          </Avatar>

        </template>

        <!-- render for vehicle column -->
        <template #body="slotProps" v-else-if="col.field === 'vehicle'">
          <div class="vehicle-name text-left">
            <span class="marca">{{ slotProps.data.marca['nombre'] }} {{ slotProps.data.modelo['nombre'] }}
              <span class="matricula" v-if="slotProps.data.matricula">[{{ slotProps.data.matricula }}]</span>
            </span>

            <span class="version">{{ slotProps.data.version }}</span>
            <div>
              <Tag v-for="(value, etiqueta) in slotProps.data.atributos" :key="etiqueta"
                :value="etiqueta.slice(0, 2) + '...'" size="small" v-tooltip.bottom="etiqueta" />
            </div>
          </div>
        </template>

        <!-- render for matricula column -->
        <template #body="slotProps" v-else-if="col.field === 'matricula'">
          <b class="matricula">{{ slotProps.data.matricula }}</b>
        </template>

        <!-- render for textoEstado column -->
        <template #body="slotProps" v-else-if="col.field === 'textoEstado'">
          <span class="estado-color" :style="{ backgroundColor: slotProps.data.estilo['color'] }"
            v-tooltip.bottom="slotProps.data.estilo['nombre']"></span>

        </template>

        <!-- render for publicadoEnMiWeb column -->
        <template #body="slotProps" v-else-if="col.field === 'publicadoEnMiWeb'">
          <i class="published-icon"
            :class="{ 'lc-icon-tick published': slotProps.data.publicadoEnMiWeb, 'lc-icon-cross unpublished': !slotProps.data.publicadoEnMiWeb }"
            v-tooltip.bottom="slotProps.data.publicadoEnMiWeb ? $t('stock.pusblished.onweb') : $t('stock.unpublished.onweb')"></i>
        </template>

        <!-- render for procedencia column -->
        <template #body="slotProps" v-else-if="col.field === 'procedencia'">
          <span class="procedencia">{{ slotProps.data.procedencia?.nombre ?? '--' }}</span>
        </template>

        <!-- render for marca column -->
        <template #body="slotProps" v-else-if="col.field === 'marca'">
          <span class="marca">{{ slotProps.data.marca['nombre'] }}</span>
        </template>

        <!-- render for modelo column -->
        <template #body="slotProps" v-else-if="col.field === 'modelo'">
          <span class="modelo">{{ slotProps.data.modelo['nombre'] }}</span>
        </template>

        <!-- render for potencia column -->
        <template #body="slotProps" v-else-if="col.field === 'potencia'">
          <span class="potencia">{{ slotProps.data.potencia }} cv</span>
          <span class="potencia-kw text-small text-mutted d-block" v-if="slotProps.data.potenciaKw">({{
            slotProps.data.potenciaKw
            }} kw)
          </span>

        </template>

        <!-- render for fechaMatriculacion column -->
        <template #body="slotProps" v-else-if="col.field === 'fechaMatriculacion'">
          <span class="fecha-matriculacion">{{ new Date(slotProps.data.fechaMatriculacion).toLocaleDateString('en-EN', {
            month: '2-digit', year: 'numeric'
          }) }}</span>
        </template>

        <!-- render for fechaDeRecepcionDelVo column -->
        <template #body="slotProps" v-else-if="col.field === 'fechaDeRecepcionDelVo'">
          <Tag class="antiguedad" :severity="calculateAntiguedadColor(slotProps.data.fechaDeRecepcionDelVo)"
            v-tooltip.bottom="$t('stock.antiguedad.tooltip', { antiguedad: calculateAntiguedad(slotProps.data.fechaDeRecepcionDelVo) })">
            {{
              calculateAntiguedad(slotProps.data.fechaDeRecepcionDelVo) }}</Tag>
        </template>

        <!-- render for pvp column -->
        <template #body="slotProps" v-else-if="col.field === 'pvp'">
          <span class="pvp">{{ slotProps.data.economicos.pvp }} €</span>
        </template>

        <!-- render for pvf column -->
        <template #body="slotProps" v-else-if="col.field === 'pvf'">
          <span class="pvf">{{ slotProps.data.economicos.pvf }} €</span>
        </template>

        <!-- render for kilometros column -->
        <template #body="slotProps" v-else-if="col.field === 'kilometros'">
          <span class="kms">{{ slotProps.data.kilometros }} km</span>
        </template>

        <!-- render for ubicacion column -->
        <template #body="slotProps" v-else-if="col.field === 'ubicacion'">
          <span class="ubicacion">{{ slotProps.data.ubicacion?.nombre ?? '--' }}</span>
        </template>

        <!-- render for numLeads column -->
        <template #body="slotProps" v-else-if="col.field === 'numLeads'">
          <span class="num-leads">{{ slotProps.data.numLeads?.numLeadsLc ?? '--' }}</span>
        </template>

        <!-- render for manCode column -->
        <template #body="slotProps" v-else-if="col.field === 'manCode'">
          {{ slotProps.data.manCode }}
        </template>

        <!-- render for color column -->
        <template #body="slotProps" v-else-if="col.field === 'color'">
          {{ slotProps.data.color['nombre'] }}
        </template>
        <template #body="slotProps" v-else-if="col.field === 'km0'">
          <i class="published-icon"
            :class="{ 'lc-icon-tick published': slotProps.data.kkm0, 'lc-icon-cross unpublished': !slotProps.data.kkm0 }"
            v-tooltip.bottom="slotProps.data.kkm0 ? $t('stock.is.km0') : $t('stock.not.km0')"></i>
        </template>

        <template #body="slotProps" v-else>
          {{ slotProps.data[col.field] ?? '--' }}
        </template>
      </Column>
      <Column :frozen="true" align-frozen="right">
        <template #body="slotProps">
          <Button icon="lc-icon-plus" size="small" rounded @click="showVehicleMenu($event, slotProps.data)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style module lang="scss">
.thumbnail {
  overflow: hidden;
  border: 1px solid var(--my-app-gray-disabled);

  img {
    object-fit: cover;
  }
}
</style>

<style lang="scss">
.popover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  max-width: 120px;
  border: 1px solid var(--my-app-gray-disabled);
}

.vehicle-name {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.marca {
  font-size: 1rem;
  font-weight: 600;
}

.version {
  font-size: .8rem;
  color: var(--my-app-gray-400);
}

.published-icon {
  color: var(--my-app-green-100);
}

.unpublished {
  color: var(--my-app-red-400);
}

.estado-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid white;
}
</style>
