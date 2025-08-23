<script setup lang='ts'>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './layouts/default.vue';
const route = useRoute();

const hasLayout = computed(() => route.meta.hasLayout !== false);
const layout = computed(() => route.meta.layout || DefaultLayout);
const layoutProps = computed(() => {
  return route.meta || {}
})
</script>
<template>
  <template v-if="hasLayout">
    <component :is="layout" v-bind="layoutProps" :title="layoutProps.title">
      <RouterView v-bind="layoutProps"/>
    </component>
  </template>
  <template v-else>
    <RouterView v-bind="layoutProps"/>
  </template>
</template>