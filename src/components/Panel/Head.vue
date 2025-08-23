<template>
    <div class="header">
        <div class="header-content text-lg text-left">
            {{ title }}
        </div>
    </div>
</template>
<script lang='ts' setup>
defineProps<{
    title: string;
}>();
</script>
<style scoped>
.header {
    box-sizing: border-box;
    width: 100%;
    padding: .02rem;
    border-left: 0.04rem solid #FE4A4A; 
}
.header-content {
    width: 100%;
    height: .4rem;
    font-size: 0.18rem;
    line-height: 0.4rem;
    text-indent: 0.16rem;
    box-sizing: border-box;
    border: .02rem solid transparent; 
    background: linear-gradient(270deg, rgba(29, 6, 6, 0.6) 34%, rgba(29, 6, 6, 0.6) 44%, rgba(62, 23, 23, 0.6) 57%, rgba(61, 20, 20, 0.6) 67%, rgba(97, 37, 37, 0.6) 74%, rgba(115, 41, 41, 0.6) 76%, rgba(157, 48, 48, 0.6) 81%, rgba(227, 52, 52, 0.6) 88%, rgba(255, 34, 34, 0.6) 95%),
    linear-gradient(270deg, rgba(29, 6, 6, 0.6) 34%, rgba(29, 6, 6, 0.6) 44%, rgba(62, 23, 23, 0.6) 57%, rgba(61, 20, 20, 0.6) 67%, rgba(97, 37, 37, 0.6) 74%, rgba(115, 41, 41, 0.6) 76%, rgba(157, 48, 48, 0.6) 81%, rgba(227, 52, 52, 0.6) 88%, rgba(255, 34, 34, 0.6) 95%);
    background-origin: padding-box, border-box;
    background-clip: padding-box, border-box;
}
</style>