
<script lang='ts' setup>
import { createReusableTemplate } from '@vueuse/core'
import parallelogram from '@/components/decorate/parallelogram/index.vue'
import { computed, useSlots } from 'vue';

const props = defineProps<{
  title: string;
}>();

const menus = [
  { name: '管理中心', path: '' },
  { name: '监控中心', path: '' },
  { name: '指挥中心', path: '' },
  { name: '数据中心', path: '' },
]
const activeMenuIndex = computed(() => {
  return menus.findIndex(menu => menu.name === props.title);
});
const slots = useSlots();
const designatedSlots = new Set(['append-form', 'default', 'prepend-form']);
const delegatedSlots = computed(() => {
  const resultSlots: string[] = [];

  for (const key of Object.keys(slots)) {
    if (!designatedSlots.has(key)) {
      resultSlots.push(key);
    }
  }
  return resultSlots;
});
const [DefineSideDecoration, SideDecorationTemplate] = createReusableTemplate()
</script>
<template>
  <DefineSideDecoration>
    <div class="bg-[#FF4444] w-[0.02rem] h-10"></div>
    <div class="flex flex-col gap-y-8">
      <template v-for="n in 20" :key="n">
        <div class="edge-decoration"></div>
      </template>
    </div>
    <div class="bg-[#FF4444] w-1 h-[267px] opacity-60" style="background: linear-gradient(180deg, rgba(255, 68, 68, 0) 0%, #FF4444 100%);"></div>
    <div class="bg-[#FF4444] w-[6px] h-[6px] opacity-40"></div>
    <div class="bg-[#FF4444] w-1 h-[267px] opacity-60" style="background: linear-gradient(0deg, rgba(255, 68, 68, 0) 0%, #FF4444 100%);"></div>
    <div class="flex flex-col gap-y-8">
      <template v-for="n in 20" :key="n">
        <div class="edge-decoration"></div>
      </template>
    </div>
    <div class="bg-[#FF4444] w-[2px] h-10"></div>
  </DefineSideDecoration>
    <div class="bg-[#0F0606] px-16 pt-16 h-full w-full flex flex-col" :style="{height:'100vh'}">
        <header class="header-container relative w-full">
           <video muted playsinline autoplay loop disablePictureInPicture>
            <source src="@/assets/webm/biaotilan.webm" type="video/mp4" class="h-full" />
          </video>
          <div class="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex justify-center items-center text-base">         
            <div class="title-box py-10 flex justify-center items-center">
              <img class="project-icon" src="@/assets/svg/logo.svg" />
              <p class="project-name">XX应急</p>
            </div> 

            <div class="left-menus-box absolute flex gap-16">
              <template v-for="n in 2" :key="n">
                <div class="menu-wrapper relative px-16">
                  <p :class="{'active': activeMenuIndex === n-1}">{{menus[n-1].name}}</p>
                </div>
              </template>
            </div>

            <div class="right-menus-box absolute flex gap-16">
             <template v-for="n in 2" :key="n">
                <div class="menu-wrapper relative px-16">
                  <p :class="{'active': activeMenuIndex === n+1}">{{menus[n+1].name}}</p>
                </div>
              </template>
            </div>
          </div>
        </header>
        <main class="h-full overflow-hidden flex gap-x-12 px-[1px] py-4">
          <div class="flex flex-col justify-between w-8">
            <div class="bg-[#FF4444] w-8 h-8" style="clip-path: polygon(0 0, 0 100%, 100% 0);"></div>
            <SideDecorationTemplate />
            <div class="flex w-18 items-end gap-4">
              <div class="corner-decorate"></div>
              <div class="bg-[#FF4444] w-4 h-4"></div>
            </div>
            
          </div>
          
          <div class="flex-1">
            <slot></slot>
          </div>
          
          <div class="flex  flex-col justify-between items-end w-8">
            <div class="bg-[#FF4444] w-8 h-8" style="clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
            <SideDecorationTemplate />
            <div class="bg-[#FF4444] w-8 h-8" style="clip-path: polygon(100% 0, 0% 100%, 100% 100%);"></div>
          </div>
        </main>

        <footer class="w-full h-30">
          <video muted playsinline autoplay loop disablePictureInPicture>
          <source src="@/assets/webm/footer.webm" type="video/mp4" />
        </video>
        </footer>
    </div>
</template>
<style lang="less" scoped>
.header-container {
  container-type: inherit;
}
.title-box {
  container-type: inherit;
  transform: translateX(-8%);
}
.project-icon {
  width: 8cqw;
  transform: rotate(-2.74deg) ;
  /* background: linear-gradient(180deg, #FF2F2F 0%, #FFFFFF 33%, #FFFFFF 100%);
  box-shadow: 0px 0px 17px 0px rgba(255, 128, 128, 0.6); */
}
.project-name {
  font-size: 3cqw;
  /* font-size: 48px; */
  font-weight: 400;
  line-height: 0.8rem;
  font-family: YouSheBiaoTiHei;
  letter-spacing: 0.035rem;
  background: linear-gradient(180deg, #FF3F3F 0%, #FF3F3F 10%, #FFFFFF 34%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // text-shadow: 0px 0px 7px #FF8080,4.85px 4.85px 3.64px rgba(20, 14, 8, 0.45);
  text-shadow: 0px 0px 110px #FF8080; 
}
.left-menus-box {
  left: 24cqw;
  bottom: 0;
  container-type: inherit;
  .menu-wrapper {
    transform: skewX(calc(1 * 20deg));
    & > p {
      transform: skewX(calc(-1 * 20deg));
    }
  }
}
.right-menus-box {
  right: 24cqw;
  bottom: 0;
  container-type: inherit;
  .menu-wrapper {
    transform: skewX(calc(-1 * 20deg));
    & > p {
      transform: skewX(calc(1 * 20deg));
    }
  }
}
.menu-wrapper {
  position: relative;

  font-size: 1cqw;
  line-height: 1.3cqw;

  border: 1px solid;
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box; 
  background: linear-gradient(180deg, rgba(91, 38, 38, 0.3) -4%, rgba(225, 83, 83, 0.3) 68%, rgba(255, 120, 120, 0.3) 102%),
  radial-gradient(50% 50% at 50% 50%, #FFA5A5 0%, rgba(255, 206, 206, 0) 100%);
  border-image: linear-gradient(110deg, rgba(255, 154, 154, 0.6) -5%, rgba(255, 151, 151, 0.276) 15%, rgba(255, 149, 149, 0.27) 88%, rgba(255, 147, 147, 0.6) 116%) ;
  text-shadow: 0px 0px 3px rgba(255, 103, 103, 0.5),2px 2px 2px rgba(0, 0, 0, 0.25);
  
  &::before { 
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.04rem;
    height: 100%;
    background: linear-gradient(to right, #3f1111, #ff3f3f, #3f1111);
  }
  
  &>p {
    opacity: 0.6;
  }
  .active {
    opacity: 1;
  }
}
.edge-decoration {
  position: relative;
  width: .04rem;
  height: 0rem;

  &::before {
    content: '';
    position: absolute;
    top: -0.01rem;
    left: 0;
    width: inherit;
    height: .04rem;
    opacity: 0.3;
    background: #FF4444;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -0.01rem;
    left: 0;
    width: inherit;
    height: .04rem;
    opacity: 0.3;
    background: #FF4444;
  }
}
.corner-decorate {
  width: .14rem;
  height: .14rem;
  background: #FF4444;
  clip-path: polygon(0 0, 18% 0, 18% 55%, 45% 82%, 100% 82%, 100% 100%, 0 100%);
}
</style>