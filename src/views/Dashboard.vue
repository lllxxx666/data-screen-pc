<template>
  <div class="dashboard-container">
    <!-- 顶部标题栏 -->
    <header class="dashboard-header">
      <h1>智慧物流监控大屏</h1>
      <div class="flex flex-col items-center">
        <div class="text-lg text-red-500">当前时间：</div>
        <div>当前时间：</div>
        <!-- 实时更新时间显示 -->
         </div>
      <div class="time-display">{{ currentTime }}</div>
    </header>
    
    <!-- 核心可视化区域 -->
    <main class="dashboard-main">
      <MapView class="map-section" />
      <RealtimeTable class="table-section" />
    </main>
    
    <!-- 底部状态栏 -->
    <footer class="dashboard-footer">
      <!-- <DataStatusPanel /> -->
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MapView from '@/modules/mapView/MapView.vue'
import RealtimeTable from '@/modules/realtimeTable/RealtimeTable.vue'

const currentTime = ref('')

onMounted(() => {
  // 更新时间显示
  setInterval(() => {
    currentTime.value = new Date().toLocaleString()
  }, 1000)
})
</script>

<style scoped>
.dashboard-container {
  display: grid;
  grid-template-rows: 80px 1fr 60px;
  height: 100vh;
}

.dashboard-main {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>