<script setup>

const route = useRoute()

const { data: vehicles } = await useStockRepository().getStockVo()



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


const views = ref([
  {
    title: 'Configuración 1',
    value: '0',
    columns: [
      { field: 'matricula', header: 'matricula', frozen: true, sortable: false, },
      { field: 'marca', header: 'Marca', sortable: true, },
      { field: 'modelo', header: 'Modelo', sortable: true, },
      { field: 'version', header: 'Versión', sortable: false, },
      { field: 'color', header: 'Color', sortable: false, },
      { field: 'colorTapiceria', header: 'Color Tapicería', sortable: false, },
      { field: 'kilometros', header: 'Kilómetros', sortable: false, },
      { field: 'transmision', header: 'Transmisión', sortable: false, },
      { field: 'combustible', header: 'Combustible', sortable: false, },
      { field: 'potencia', header: 'Potencia', sortable: false, },
      { field: 'potenciaKw', header: 'Potencia Kw', sortable: false, },
      { field: 'matricula', header: 'Matrícula', sortable: false, },
      { field: 'bastidor', header: 'Bastidor', sortable: false, },
      { field: 'nombreConcesionario', header: 'Nombre Concesionario', sortable: false, },
      { field: 'nombreSede', header: 'Nombre Sede', sortable: false, },
      { field: 'precio', header: 'Precio', sortable: false, },
      { field: 'tipoVehTexto', header: 'Tipo Vehículo' },
      { field: 'distintivoAmbiental', header: 'Distintivo Ambiental' },
      { field: 'concesionarioObjeto', header: 'Concesionario' },
    ]
  },
  {
    title: 'Configuración 2',
    value: '1',
    columns: [
      { field: 'id', header: 'ID', frozen: true },
      { field: 'marca', header: 'Marca' },
      { field: 'modelo', header: 'Modelo' },
      { field: 'version', header: 'Versión' },
      { field: 'color', header: 'Color' },
      { field: 'kilometros', header: 'Kilómetros' },
      { field: 'transmision', header: 'Transmisión' },
      { field: 'combustible', header: 'Combustible' },
      { field: 'potencia', header: 'Potencia' },
      { field: 'potenciaKw', header: 'Potencia Kw' },
      { field: 'matricula', header: 'Matrícula' },
      { field: 'bastidor', header: 'Bastidor' },
      { field: 'nombreConcesionario', header: 'Nombre Concesionario' },
      { field: 'nombreSede', header: 'Nombre Sede' },
      { field: 'precio', header: 'Precio' },
      { field: 'tipoVehTexto', header: 'Tipo Vehículo' },
      { field: 'distintivoAmbiental', header: 'Distintivo Ambiental' },
      { field: 'concesionarioObjeto', header: 'Concesionario' },
    ]
  }
])




</script>

<template>
  <div class="vehicles-page">
    <Searchform />
    <div class="vehicles-list-header">
      <div class="header-left">
        <h3>{{ $t('vehicles.title') }}</h3>
      </div>
      <Button label="Añadir" icon="pi pi-plus" severity="secondary" rounded size="big" />
    </div>
    <div v-if="vehicles?.data" class="vehicles-list">
      <Listing v-model="vehicles.data" :views="views" />
    </div>
  </div>
</template>

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