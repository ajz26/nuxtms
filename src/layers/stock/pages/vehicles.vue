<script setup lang="ts">
import type ApiListResponse from '~/types/ApiListResponse'
import type Vehicle from '~/layers/stock/types/Vehicle'
import { ref, onMounted } from 'vue'
import { useModal } from 'vue-final-modal'
import createview from '../modals/createview.vue'
import type { ViewDef } from '~/types/views'
const route = useRoute()

useHead({
  title: 'Vehicles',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],

})

definePageMeta({
  layout: 'general',
  title: 'Vehicles',
  path: '/vehicles',
})

const params = ref({
  page: 1,
  limit: 25,
} as any);

const query = ref(route.query)

if (query.value) {
  params.value = {
    ...params.value,
    ...query.value
  }
}



const views = ref<ViewDef[]>([
  {
    name: 'Configuración 1',
    id: '0',
    filters: {},
    columns: [
      { field: 'thumbnail', header: 'Foto', sortable: false, frozen: true, active: true }, //fotos[0].url
      { field: 'vehicle', header: 'Vehículo', sortable: false, headerStyle: 'min-width: 200px;', frozen: true, active: true, headerClass: 'text-left' }, //marca.nombre + modelo.nombre + version
      { field: 'matricula', header: 'Matricula', sortable: true, active: true, bodyClass: 'text-center' }, //matricula
      { field: 'textoEstado', header: 'Estado', sortable: true, active: true, bodyClass: 'text-center' }, //estado
      { field: 'etiquetas', header: 'Tags', sortable: true, active: true }, //etiquetas
      // { field: 'enPreparacion', header: 'En preparación', sortable: true, active: true }, //
      { field: 'publicadoEnMiWeb', header: 'Web', sortable: true, active: true }, //web
      { field: 'procedencia', header: 'Procedencia', sortable: true, headerStyle: 'text-align: center;', bodyClass: 'text-center', active: true }, //procedencia
      { field: 'manufacturerCode', header: 'Man Code', sortable: true, active: true }, //Man Code
      { field: 'marca', header: 'Marca', sortable: true, active: true }, //Marca
      { field: 'modelo', header: 'Modelo', sortable: true, active: true }, //Modelo
      { field: 'version', header: 'Versión', sortable: true, active: true }, //Versión
      { field: 'color', header: 'Color', sortable: true, active: true }, //Color
      { field: 'potencia', header: 'Potencia', sortable: true, active: true }, //Potencia
      { field: 'fechaMatriculacion', header: 'Fecha matriculación', sortable: true, active: true }, //Fecha matriculación
      { field: 'pvp', header: 'PVP', sortable: true, active: true, bodyClass: 'text-right' }, //PVP
      { field: 'pvf', header: 'PVF', sortable: true, active: true, bodyClass: 'text-right' }, //PVF
      { field: 'kilometros', header: 'KMS', sortable: true, active: true }, //KMS
      { field: 'ubicacion', header: 'Ubicación', sortable: true, active: true }, //Ubicación
      { field: 'fechaDeRecepcionDelVo', header: 'Antiguedad', sortable: true, active: true }, //Antiguedad
      { field: 'numLeads', header: 'Leads', sortable: true, active: true }, //Leads
      { field: 'iva', header: 'IVA', sortable: true, active: true }, //IVA
      { field: 'km0', header: 'KM0', sortable: true, active: true }, //KM0
    ]
  }
])
const activeView = ref(views.value[0]) as Ref<ViewDef>

const changeView = (view: any) => {
  activeView.value = view
}



const editView = (view: ViewDef) => {
  const { open } = useModal({
    component: createview,
    attrs: {
      view: activeView.value,
    }
  })
  open()
}

const filledParams = computed(() => {

  let parameters = params.value

  for (const key in parameters) {
    if (parameters[key] === null || parameters[key] === undefined || parameters[key] === '') {
      delete parameters[key]
    }
  }

  return parameters
})

const response = await useStockRepository().getStockVo({
  lazy: true,
  server: false,
  params: filledParams.value
})

const vehicles = ref(response.data) as Ref<ApiListResponse<Vehicle>>

const { status, error, refresh } = response



const loading = computed(() => {

  if (!vehicles.value) return true

  return status.value === 'success' ? false : true
})

const paginate = async (event: any) => {
  let page = 1, rows = 25, sort_by = null, sort = null;

  if (event.rows) {
    rows = event.rows;
  }

  if (event.sortField) {
    sort_by = event.sortField;
    sort = event.sortOrder == 1 ? "ASC" : "DESC";
  }

  if (event.page) {
    page = event.page;
    page += 1;
  }

  params.value.limit = rows;
  params.value.page = page;
  params.value.sort_by = sort_by ?? 'id';
  params.value.sort = sort ?? 'DESC';

  const router = useRouter()
  const route = useRoute()

  router.push({
    query: {
      ...route.query,
      ...params.value
    }
  })

  refresh()

}


const addView = () => {
  views.value.push({
    name: 'Nueva vista',
    id: views.value.length,
    filters: {},
    columns: []
  })
}

</script>

<template>
  <div class="vehicles-page">
    <Searchform />
    <div class="vehicles-list-header">
      <div class="header-left">
        <h3>{{ $t('vehicles.title') }}</h3>
      </div>
    </div>
    <Listing v-model="vehicles as ApiListResponse<Vehicle>" :view="activeView" :loading="loading"
      v-on:paginate="paginate($event)">
      <template #header-left>
        <button v-for="view in views" :key="view.name" @click="changeView(view)" :class="{
          [$style.viewbButtonSelector]: true,
          [$style.viewbButtonSelectorActive]: activeView.id === view.id
        }">
          {{ view.name }}
          <i class="lc-icon-edit" v-if="activeView.id == view.id" @click="editView" />
        </button>
        <button :class="$style.viewbButtonSelector" @click="addView">
          <i class="lc-icon-plus" />
        </button>
      </template>
    </Listing>
  </div>
</template>


<style module lang="scss">
.viewbButtonSelector {
  background-color: var(--my-app-primary-125);
  color: var(--my-app-primary-600);
  border-radius: 1.5rem 1.5rem 0 0;
  border: 0;
  padding: 1rem 1.2rem;
  margin-right: .7rem;
  border-color: var(--my-app-primary-600);
  border-left: 1px solid var(--my-app-primary-600);
  border-right: 1px solid var(--my-app-primary-600);
  border-top: 1px solid var(--my-app-primary-600);
  cursor: pointer;

  &:hover {
    background-color: var(--my-app-primary-600);
    color: var(--my-app-primary-contrast-color);
  }

}


.viewbButtonSelectorActive {
  background-color: var(--my-app-primary-600);
  color: var(--my-app-primary-contrast-color);
}
</style>

<style lang="scss">
.vehicles-list {
  padding: 20px 10px;
}

.vehicles-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}
</style>