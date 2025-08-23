import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router/index';
import mapboxgl from "mapbox-gl";
import "./modules/echarts/echarts.ts"

const app = createApp(App)

app.use(createPinia()).use(router);

app.mount('#app');

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
mapboxgl.accessToken =
  'pk.eyJ1IjoibGl1MDAyeGYiLCJhIjoiY203MDBzYmhyMGE5bTJuc2VicmcwcjVwYSJ9.vmz61cTBw1moR3GCoWtVyQ';
console.log("mapboxgl.accessToken", mapboxgl.accessToken);