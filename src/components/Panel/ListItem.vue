<template>
    <div class="box2-wrap">
        <div class="box2 flex " style="font-size: 14px;">
            <div class="flex flex-col justify-center items-start" style="width: 100%;">
                <div>XA01-01</div>
                <div>XA01-01-1111111111</div>
            </div>
            <div>
                icon: 飞行时长
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>

</script>
<style scoped>

.box2-wrap {
    box-sizing: border-box;
    width: 100%;
    height: 0.44rem;
    border-left: 0.03rem solid #FF4343;
}
.box2 {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    border-top: 0.01rem  solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.01rem  solid rgba(255, 255, 255, 0.2);
}
.box2::before {
    
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0.02rem;
    bottom: 0.02rem;
    width: 100%;
    opacity: 0.4;

    background-origin: content-box, border-box;
    background-clip: content-box, border-box; 
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) -3%, rgba(255, 255, 255, 0.2) 100%);
}
</style>