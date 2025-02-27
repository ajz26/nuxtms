<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Menu from 'primevue/menu';

interface ColumnDef {
  field: string;
  header: string;
  frozen?: boolean;
  sortable?: boolean;
}

interface ViewDef {
  title: string;
  value: string;
  content?: string;
  columns: ColumnDef[];
}

const props = defineProps({
  modelValue: {
    type: Array,
    required: true
  },
  views: {
    type: Array as () => ViewDef[],
    required: true
  }
})

const views = ref(props.views)
const menu = ref()
const items = ref([
  { label: 'Editar', icon: 'pi pi-pencil', command: () => { } },
  { label: 'Eliminar', icon: 'pi pi-trash', command: () => { } }
])

const showVehicleMenu = (event: Event, data: any) => {
  menu.value.toggle(event);
  items.value = vehicleItemsMenu(data);
}

const vehicleItemsMenu = (data: any) => {
  return [
    { label: 'Editar', icon: 'pi pi-pencil', command: () => { console.log('Editar', data) } },
    { label: 'Eliminar', icon: 'pi pi-trash', command: () => { console.log('Eliminar', data) } }
  ]
}


</script>

<template>
  <div>
    <Menu ref="menu" :model="items" :popup="true" />

    <Tabs value="0">
      <TabList>
        <Tab v-for="tab in views" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="tab in views" :key="tab.content" :value="tab.value">
          <DataTable :value="modelValue" size="small" tableStyle="min-width: 50rem max-width: 100%" scrollable
            class="mt-6">
            <Column :frozen="true" align-frozen="left">
              <template #body="slotProps">
                <Avatar :image="slotProps.data.fotos[0].url" alt="imagen" size="xlarge" />
              </template>
            </Column>

            <Column v-for="(col, index) of tab.columns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index" :frozen="col.frozen" :sortable="col.sortable">
              <template #body="slotProps">
                {{ slotProps.data[col.field] }}
              </template>
            </Column>
            <Column :frozen="true" align-frozen="right">
              <template #body="slotProps">
                <Button icon="lc-icon-plus" size="small" rounded @click="showVehicleMenu($event, slotProps.data)" />
              </template>
            </Column>
          </DataTable>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>
