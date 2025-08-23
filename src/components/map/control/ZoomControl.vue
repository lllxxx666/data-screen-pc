<template>
  <div class="tmap-zoom-control">
    <button class="zoom-in" @click="zoomIn" title="放大">
      <svg viewBox="0 0 24 24">
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>
    </button>
    
    <div class="zoom-slider">
      <input 
        type="range" 
        v-model="sliderValue"
        :min="minZoom"
        :max="maxZoom"
        :step="1"
        @input="onSliderChange"
        orient="vertical"
      >
    </div>
    
    <button class="zoom-out" @click="zoomOut" title="缩小">
      <svg viewBox="0 0 24 24">
        <path d="M19,13H5V11H19V13Z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
const props = defineProps<{
  map: any; // 地图实例
  position?: string; // 控件位置
}>();


const minZoom = ref(1);
const maxZoom = ref(18);
const sliderValue = ref(10);
const mapInstance = ref<any>(null);

// 初始化
onMounted(() => {
    mapInstance.value = props.map;
    updateZoomLevel();
    
    // 监听地图缩放变化
    mapInstance.value.on('zoomchange', updateZoomLevel);
});

// 更新滑块值
const updateZoomLevel = () => {
    const zoom = mapInstance.value.getZoom();
    sliderValue.value = Math.round(zoom);
    minZoom.value = mapInstance.value.getMinZoom();
    maxZoom.value = mapInstance.value.getMaxZoom();
};

// 滑块变化处理
const onSliderChange = () => {
    const zoom = parseInt(sliderValue.value.toString());
    mapInstance.value.setZoom(zoom);
};

// 放大
const zoomIn = () => {
    mapInstance.value.zoomIn();
};

// 缩小
const zoomOut = () => {
    mapInstance.value.zoomOut();
};

  
</script>

<style scoped>
.tmap-zoom-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.4);
  padding: 5px;
}

.tmap-zoom-control button {
  width: 30px;
  height: 30px;
  border: none;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 2px;
}

.tmap-zoom-control button:hover {
  background: #f0f0f0;
}

.tmap-zoom-control button svg {
  width: 20px;
  height: 20px;
  fill: #333;
}

.zoom-slider {
  height: 100px;
  margin: 5px 0;
  display: flex;
  align-items: center;
}

.zoom-slider input[type="range"] {
  -webkit-appearance: slider-vertical;
  width: 30px;
  height: 100%;
  padding: 0 5px;
}

/* 兼容不同浏览器 */
input[type="range"][orient="vertical"] {
  writing-mode: bt-lr; /* IE */
  -webkit-appearance: slider-vertical; /* Chromium */
}
</style>