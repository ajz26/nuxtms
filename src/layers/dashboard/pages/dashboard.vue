<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTolgee } from '@tolgee/vue'

const { t } = useTolgee()

const user = ref({
  name: 'Usuario Demo'
})

definePageMeta({
  layout: 'general',
  title: 'Dashboard',
  path: '/',
});

const totalSales = ref(0)
const activeCustomers = ref(0)
const monthlyRevenue = ref(0)
const recentActivities = ref([])

onMounted(async () => {
  // Aquí irían las llamadas a la API para obtener los datos
  // Por ejemplo:
  // const data = await fetchDashboardData()
})
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Panel de Control</h1>
      <div class="user-info">
        <span>{{ user.name }}</span>
      </div>
    </header>

    <div class="dashboard-content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Ventas</h3>
          <div class="stat-value">{{ totalSales }}</div>
        </div>
        <div class="stat-card">
          <h3>Clientes Activos</h3>
          <div class="stat-value">{{ activeCustomers }}</div>
        </div>
        <div class="stat-card">
          <h3>Ingresos Mensuales</h3>
          <div class="stat-value">{{ monthlyRevenue }}</div>
        </div>
      </div>

      {{ $t('hello') }}
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.dashboard-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>