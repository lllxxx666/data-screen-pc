<script setup lang='ts'>
import { computed } from 'vue';

const props =  defineProps<{
  count?: number; // 可选属性，默认值为5
  width?: string; // 可选属性，默认值为40px
  height?: string; // 可选属性，默认值为30px
  gap?: string; // 可选属性，默认值为4px
  angle?: string; // 可选属性，默认值为20deg
  colorStart?: string; // 可选属性，默认值为#3f1111
  colorMid?: string; // 可选属性，默认值为#ff3f3f
  colorEnd?: string; // 可选属性，默认值为#3f1111
}>();
 
 const parallelogramStrip =computed(() => {
  return {
    '--count': props.count || 5,
    '--width': props.width || '12px',
    '--height': props.height || '8px',
    '--gap': props.gap || '4px',
    '--angle': props.angle || '20deg',
    '--color-start': props.colorStart || '#3f1111',
    '--color-mid': props.colorMid || '#ff3f3f',
    '--color-end': props.colorEnd || '#3f1111'
  };
});
</script>
<template>
  <div class="parallelogram-strip" :style="parallelogramStrip"></div>
</template>
<style scoped>
.parallelogram-strip {
  position: relative;
  height: var(--height);
  width: calc(var(--count) * (var(--width) + var(--gap)) - (var(--gap) * 2));
}

.parallelogram-strip::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, var(--color-start), var(--color-mid), var(--color-end));
  transform: skewX(calc(-1 * var(--angle)));
}

/* 创建间隔效果 */
.parallelogram-strip::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    repeating-linear-gradient(
      to right,
      transparent 0,
      transparent calc(var(--width) - 1px),
      #0f0606 calc(var(--width) - 1px),
      #0f0606 calc(var(--width) + var(--gap) - 1px)
    );
  transform: skewX(calc(-1 * var(--angle)));
}
</style>