<script setup lang='ts'>
import * as echarts from 'echarts';
import { onMounted, onUnmounted } from 'vue';
import { fontSizeFn } from '@/modules/echarts/use-echarts';

// 这是一个展示物资用量的柱状图组件
// 当库存大于60%时，柱状图会显示为绿色；
// 当库存小于60%时，柱状图会显示为黄色；
// 当库存小于30%时，柱状图会显示为红色；

type DataItem = {
    value: number; // 当前值
    total: string | number; // 总量
    name: string; // 名称
};
type DataItemEx = DataItem & { originalValue: number };
// 模拟数据
const fakeData : DataItem[] = [
    { value: 335, total: '500', name: '灭火弹' },
    { value: 410, total: '500', name: '消杀药物' },
    { value: 234, total: '500', name: '救援物资包' },
    { value: 54, total: '500', name: '强光手电筒' },
    { value: 135, total: '300', name: '缆绳' },
    { value: 1548, total: '2000', name: '其他' },
];

const processData = ((data:DataItem[]) => {
    return data.map(item => { 
        const percentage = ((item.value / +item.total) * 100).toFixed(2);
        return {
            ...item,
            value: percentage,
            originalValue: item.value,
        };
    });
});
const processedData = processData(fakeData);
const xAxisData = processedData.map(item => item.name);
const colors = [
    '#20C3BA', // 绿色
    '#ffce51', // 黄色
    '#C54444', // 红色
];
const colorList = [
{
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
    {
        offset: 0,
        color: "#C54444", // 0% 处的颜色
    },
    {
        offset: 1,
        color: "#5A252570", // 100% 处的颜色
    },
    ],
    global: false, // 缺省为 false
},
{
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    global: false, // 缺省为 false
    colorStops: [
    {
        offset: 0,
        color: "#ffce51", // 0% 处的颜色
    },
    {
        offset: 1,
        color: "#453a25", // 100% 处的颜色
    },
    ],
},
{
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
    {
        offset: 0,
        color: "#20C3BA", // 0% 处的颜色
    },
    {
        offset: 1,
        color: "#14382D70", // 100% 处的颜色
    },
    ],
    global: false, // 缺省为 false
},
];

const option = {
    tooltip: {
        show: false,
        trigger: 'axis',
    },
    grid: {
        containLabel: true,
        top: 35,
        left: 0,
        right: 0,
        bottom: 8,
        width: fontSizeFn(290),
    },
    legend: {
        orient: 'horizontal',
        data: [
            { 
                name: '物资预警线', 
                lineStyle: { 
                    width: fontSizeFn(1), type: 'dashed', color: colors[2]
                },
                itemStyle: { 
                    color: 'transparent',
                }
             },
            { 
                name: '物资存储上限',
                icon: 'rect',
                itemStyle: {
                    color: '#413c3c'
                }
             },
            {
                name: '物资量（单位：%）',
                icon: 'roundRect',
            }
        ],
        textStyle: {
            color: '#FFFFFFcc',
            fontSize: fontSizeFn(12),
            rich: {
              a: {
                verticalAlign: "middle",
              },
            },
            padding: [0, 0, -fontSizeFn(2), 0], 
        },
        itemHeight: fontSizeFn(8),
        itemWidth: fontSizeFn(8),
        // itemStyle: {
        //     borderWidth: 0,
        //     borderColor: "transparent",
        // },

    },
    xAxis: {
        type: 'category',
        data: xAxisData,
        axisLabel: {
            interval: 0,
            color: '#ffffffcc',
            width: fontSizeFn(60),
            overflow: 'break',
            fontSize: fontSizeFn(12),
        },
    },
    yAxis: { 
        show: false,
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: { 
            formatter: '{value}%',
        },
    },
    calculable: true,
    series: [
        {
            name: '物资预警线',
            type: 'line',
            symbol: 'none',
        },
        {
            name: '物资存储上限',
            type: 'bar',
            symbol: 'none',
        },
        {
            name: '物资量（单位：%）',
            z: 1,
            type: 'bar',
            borderWidth: fontSizeFn(25),
            data: processedData,
            //设置柱状图背景
            showBackground: true,
            backgroundStyle: {
              color: 'rgb(66 62 61 / 50%)'
            },
            markLine: {
                data: [
                    {
                        type: 'line', 
                        yAxis: 60, 
                        lineStyle: {
                            color: colors[1],
                            width: fontSizeFn(2),
                            type: 'dashed',
                        },
                        label: { 
                            show: false,
                        },
                    },
                    {
                        type: 'line', 
                        yAxis: 30, 
                        lineStyle: {
                            color: colors[2],
                            width: fontSizeFn(2),
                            type: 'dashed',
                        },
                        label: { 
                            show: false,
                        },
                    },
                ],
                symbol: ['none', 'none'],
                silent: true
            },
            itemStyle: {
                color: function (params: any) {
                    const percent = parseInt(params.data.value);
                    if (percent >= 60) {
                        return colorList[2];
                    } else if (percent < 60 && percent >= 30) {
                        return colorList[1];
                    } else {
                        return colorList[0];
                    }
                },
            },
            label: { 
                show: true,
                position: 'top',
                // fontSize: fontSizeFn(8),
                formatter: (params: any) => { 
                    const percent = parseInt(params.data.value);
                    if (percent >= 60) {
                       return '{a|' + params.value + '%}';
                    } else if (percent < 60 && percent >= 30) {
                        return '{b|' + params.value + '%}';
                    } else {
                        return '{c|' + params.value + '%}';
                    }
                },
                rich: { 
                    a: { 
                        color: '#20C3BA',fontSize: fontSizeFn(8),
                    },
                    b: { 
                        color: '#ffce51',fontSize: fontSizeFn(8),
                    },
                    c: { 
                        color: '#C54444',fontSize: fontSizeFn(8),
                    },
                }
            },
        },
    ],
}
onMounted(() => {
  const chart = echarts.init(document.getElementById('barChart') as HTMLElement);
  chart.setOption(option);
});
onUnmounted(() => {
  // Destroy the chart when the component is unmounted
  const chart = echarts.getInstanceByDom(document.getElementById('barChart') as HTMLElement);
  if (chart) {
    chart.dispose();
  }
});
</script>
<template>
  <div id="barChart" class="w-full h-[2.22rem]"></div>
</template>
<style scoped></style>