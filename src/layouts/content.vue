<script setup lang='ts'>
import MapView from '@/modules/mapView/MapView.vue';
</script>
<template>
    <div class="box-border w-full h-full flex gap-x-4">
        <section class="left-section w-[3.40rem]">
            <slot name="left-section"></slot>
        </section>
        <section class="flex-1">
             <!-- <button class="z-10" type="button" name="NYC" id="NYC" title="Statue of Liberty, NYC" alt="Statue of Liberty, NYC"><i style="width: 26px; height: 26px; background: url(./images/statue-of-liberty.png) no-repeat center center; background-size: contain; display: block;"></i></button>
				<button class="z-10" type="button" name="PAR" id="PAR" title="Eiffel Tower, Paris" alt="Eiffel Tower, Paris"><i style="width: 26px; height: 26px; background: url(./images/eiffel-tower.png) no-repeat center center; background-size: contain; display: block;"></i></button> -->
            <MapView class="flex-1"></MapView>
        </section>
        <section class="right-section w-[3.40rem]" >
            <slot name="right-section"></slot>
        </section>
    </div>
</template>
<style scoped lang="scss">
</style>