<template>
  <div class="map-view-wrapper bg-black p-8 relative overflow-hidden">      
    <div class="absolute flex justify-between top-0 left-0 right-0">
        <img src="@/assets/svg/triangleLeft.svg" alt="" class="w-[0.35rem] z-10">
        <img src="@/assets/svg/triangleRight.svg" alt="" class="w-[0.35rem] z-10">
      </div>
    <div class="map-view-container h-full z-0 relative">
      <div id="map" class="w-full h-full" ref="mapContainer"></div>
        
    <!-- <TMapZoomControl :map="map" position="TOP_LEFT" /> -->
       
    </div>
  </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import TMapZoomControl from '@/components/map/control/ZoomControl.vue';
import mapboxgl from 'mapbox-gl';

// let map: any;
const map = ref(null);
const mapContainer = ref();

onMounted(() => {
    // Initialize the map when the component is mounted
    // map.value = new T.Map('map', {
    //     projection: 'EPSG:4326'
    // });
    // var zoom = 18;
    // map.value.centerAndZoom(new T.LngLat(116.40769, 39.89945), zoom);
initMap();
//       // 添加控件
//   map.value.addControl(new T.Control.Zoom())
//   map.value.addControl(new T.Control.OverviewMap())
//   map.value.addControl(new T.Control.Scale())
});

function initMap() {
  const mapElement = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [116.40769, 39.89945],
    zoom: 18
  });
}
// const currentMapType = ref(TMAP_NORMAL_MAP)

// const changeMapType = (type) => {
//   map.setMapType(type)
//   currentMapType.value = type
// }


</script>
<style scoped>
.map-view-wrapper {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    
    border: 0.04rem solid; 
    border-image: linear-gradient(130deg, #622F2F 1%, #622F2F 21%, #842B2B 37%, #6A2C2C 62%, #2E1515 75%, #722F2F 93%, #731D1D 101%) 5;
    box-shadow: inset 0 0 0 0.13rem #000000;

    
}
/* .map-view-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: linear-gradient(270deg, rgba(29, 6, 6, 0.6) 34%, rgba(29, 6, 6, 0.6) 44%, rgba(62, 23, 23, 0.6) 57%, rgba(61, 20, 20, 0.6) 67%, rgba(97, 37, 37, 0.6) 74%, rgba(115, 41, 41, 0.6) 76%, rgba(157, 48, 48, 0.6) 81%, rgba(227, 52, 52, 0.6) 88%, rgba(255, 34, 34, 0.6) 95%),
        linear-gradient(130deg, #622F2F 1%, #622F2F 21%, #842B2B 37%, #6A2C2C 62%, #2E1515 75%, #722F2F 93%, #731D1D 101%) 5;
    background-origin: padding-box, border-box;
    background-clip: padding-box, border-box;
    box-shadow: inset 0px 0px 0px 13px #000000;
} */
</style>