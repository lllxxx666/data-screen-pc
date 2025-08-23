<template>
<div class="panel-box flex flex-col items-center">
    <Head :title="title"></Head>
    <div class="panel-container  w-full h-full flex flex-col relative">
        <slot></slot>
    </div>
</div>
</template>
<script lang='ts' setup>

import Head from './Head.vue';


defineProps<{
    title: string;
}>();
</script>
<style scoped>
.panel-box {
    box-sizing: border-box;
    position: relative;
}
.panel-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(210deg, #CD8783 11%, #CD8783 13%, rgba(114, 88, 86, 0.5634) 32%, rgba(87, 67, 66, 0.3991) 45%, rgba(55, 43, 42, 0.2043) 58%, rgba(22, 18, 17, 0) 65%, #733232 99%),
        linear-gradient(210deg, #CD8783 11%, #CD8783 13%, rgba(114, 88, 86, 0.5634) 32%, rgba(87, 67, 66, 0.3991) 45%, rgba(55, 43, 42, 0.2043) 58%, rgba(22, 18, 17, 0) 65%, #733232 99%);
    background-origin: padding-box, border-box;
    background-clip: padding-box, border-box;
    border: .02rem solid;
    opacity: 0.2;
}
.panel-container {
    padding: 0.10rem;
    gap: 0.10rem;

}
</style>