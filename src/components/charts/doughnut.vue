<script setup lang='ts'>
import * as echarts from 'echarts';
import { onMounted, onUnmounted } from 'vue';

import { getRem, fontSizeFn } from '@/modules/echarts/use-echarts';
const title = '飞机总数';
const totalCount = 10098; // 总数

const option = {
  tooltip: {
    show: false,
    trigger: "item",
  },
  legend: {
    orient: 'horizontal',
    data: ['A', 'B', 'C', 'D', 'E', 'F'],
    lineStyle: {
        type: 'dashed',
        width: fontSizeFn(2),
        color: '#fff'
    },
    itemStyle: {
        borderWidth: 0,
        borderColor: "transparent",
    },
    textStyle: {
      fontSize: fontSizeFn(12),
        color: '#ffffffcc',
        rich: {
            a: {
                verticAlign: 'middle',
                align: 'center'
            }
        },
        padding: [0, 0, -fontSizeFn(4), fontSizeFn(20)]
    },
    top: '22%',
    right: 0,
    width: fontSizeFn(140),
    itemGap: fontSizeFn(20),
    itemWidth: fontSizeFn(8),
    itemHeight: fontSizeFn(8),
    icon: 'rect',
    selectedMode: false,
  },
  title: {
    text: `{name|${title}}\n{val|${totalCount}} {units|架}`,
    top: fontSizeFn(30),
    left: fontSizeFn(42),
    zlevel: 0,
    textStyle: {
        color: '#fff',
        rich: { 
            name: { 
                fontSize: fontSizeFn(14),
                padding: [fontSizeFn(10), 0],
                align: 'center'
            },
            val: { 
                fontSize: getRem(26),
                fontWeight: 'bold',
                align: 'center'
            },
            units: { 
              fontSize: getRem(12),
              padding: [0, 0, fontSizeFn(5), 0],
            }
        }
    }
 },
  series: [
    {
      type: 'pie',
      radius: ['75%', '100%'],
      center: ['30%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          color: '#fff',
          formatter: '{name|{b}}\n{val|{c}} {units|架}',
          rich: {
            name: {
              fontSize: getRem(14),
              padding: [fontSizeFn(10), 0]
            },
            val: { 
                fontSize: getRem(26),
                fontWeight: 'bold',
            },
            units: {
              fontSize: getRem(12),
              padding: [0, 0, fontSizeFn(5), 0],
            }
          }
        }
      },
      data: [
        { value: 335, name: 'A' },
        { value: 310, name: 'B' },
        { value: 234, name: 'C' },
        { value: 135, name: 'D' },
        { value: 1548, name: 'E' },
        { value: 1541, name: 'F' }
      ]
    }
  ]
};

onMounted(() => {
  const chart = echarts.init(document.getElementById('doughnut') as HTMLElement);
  chart.setOption(option);
});
onUnmounted(() => {
  // Destroy the chart when the component is unmounted
  const chart = echarts.getInstanceByDom(document.getElementById('doughnut') as HTMLElement);
  if (chart) {
    chart.dispose();
  }
});
</script>
<template>
  <div id="doughnut" class="w-full h-[1.5rem]"></div>
</template>
<style scoped></style>