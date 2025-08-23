
<script lang='ts' setup>
import { createReusableTemplate } from '@vueuse/core'
import ContentLayout from '@/layouts/content.vue';
import Panel from '@/components/Panel/index.vue';
import Doughnut from '@/components/charts/doughnut.vue'
import BarChart from '@/components/charts/bar.vue'
import { AlarmType, AlarmLevel, AlarmStatus, NaturalAlarmType, DeviceAlarmType } from '@/enums/alarmEnum';
import { TaskType , TaskStatus as TaskExecutingState} from '@/enums/taskEnum';

const [DefineItemTemplate, ListItemTemplate] = createReusableTemplate()
const [DefineCardTemplate, ReuseCardTemplate] = createReusableTemplate()

const fakeAlarmData = [
    { 
        id: 1, 
        title: '钱江世纪城小型江河泛滥',
        type: 1, 
        childType: 2,
        status: 1,
        level: 1,
        place: '钱江世纪城钱塘江畔',
        time: '2023-07-01 10:00:00'
    },
    {
        id: 2,
        title: "西湖区短时强降雨引发城市内涝",
        type: 1,
        childType: 1,
        status: 1,
        level: 2,
        place: "杭州市西湖区文二路沿线",
        time: "2023-08-15 14:30:00"
    },
    {
        id: 3,
        title: "临安区山区突发泥石流灾害",
        type: 1,
        childType: 1,
        status: 1,
        level: 3,
        place: "临安区天目山自然保护区",
        time: "2023-06-20 08:45:00"
    },
    // {
    //     id: 4,
    //     title: "滨江区雷雨大风橙色预警",
    //     type: 1,
    //     childType: 3,
    //     status: 1,
    //     level: 2,
    //     place: "滨江区物联网街周边区域",
    //     time: "2023-07-12 16:20:00"
    // }
];
const fakeDeviceAlarmData = [
    { 
        id: 1, 
        title: '油量告警',
        type: 2, 
        childType: 3,
        status: 1,
        level: 1,
        place: '钱江世纪城钱塘江畔',
        coordinate: '120.123456,30.123456',
        time: '2023-07-01 10:00:00'
    },
    {
        id: 2,
        title: "发动机故障警报",
        type: 2,
        childType: 1,
        status: 1,
        level: 3,
        place: "西湖区上空",
        coordinate: "120.125678,30.259876",
        time: "2023-08-15 11:23:45"
    },
    {
        id: 3,
        title: "液压系统压力异常",
        type: 2,
        childType: 2,
        status: 1,
        level: 2,
        place: "滨江区应急指挥中心附近",
        coordinate: "120.158742,30.185463",
        time: "2023-09-20 09:15:30"
    },
    {
        id: 4,
        title: "救援车辆GPS信号丢失",
        type: 3,
        childType: 4,
        status: 1,
        level: 2,
        place: "萧山区风情大道",
        coordinate: "120.269874,30.147852",
        time: "2023-10-05 16:40:22"
    },
    {
        id: 5,
        title: "直升机旋翼振动超限",
        type: 2,
        childType: 5,
        status: 1,
        level: 3,
        place: "临安区天目山上空",
        coordinate: "119.456123,30.336699",
        time: "2023-11-12 14:08:17"
    },
    {
        id: 6,
        title: "救援车辆轮胎爆胎",
        type: 3,
        childType: 6,
        status: 1,
        level: 1,
        place: "钱塘区江东大道",
        coordinate: "120.378945,30.296317",
        time: "2023-12-08 08:55:10"
    }
 ]
const alarmTypeString = (alarmType: number, childType: number) => {
    const alarmTypeText = AlarmType[alarmType] as string || '未知告警';
    switch(alarmTypeText) {
        case '灾情告警':
            return NaturalAlarmType[childType] || '未知灾情';
        case '设备告警':
            return DeviceAlarmType[childType] || '未知设备';
        default:
            return '未知类型';
    }
 };
const TaskTypeList = Object.entries(TaskType).map(([key, value]) => {
    return {
        id: key,
        value: value,
    };
});
TaskTypeList.unshift({id: '0', value:'总览'});

const selectedTaskId = '0';
const TaskTypeStyle = (id: string) => {
    if (id === selectedTaskId) {
        return {
            color:'#FF6D6D',
            boxShadow: 'inset 0px 0px 8px 0px rgba(255, 84, 84, 0.65)'
        };
    } else {
        return {
            color:'#ffffff',
            opacity: 0.5,
            boxShadow: 'inset 0px 0px 8px 0px rgba(255,255, 255, 0.65)'
        };
    }
};
const TaskStatus = {
    1: '正在执行',
    2: '待执行',
    3: '已取消',
};
const fakeTaskData = [
    { id: 1, type: 1, status: 1, name: '下沙大学城灭火',executingState: '1', description: '下沙大学城发生火灾，请立即前往灭火' },
    { id: 2, type: 3, status: 2, name: '下沙大学城火警',executingState: '4', description: '下沙大学城发生火灾，请立即前往灭火' },
    { id: 3, type: 2, status: 1, name: '滨江区赈灾',executingState: '5', description: '滨江区发生洪涝灾害，请立即前往赈灾' },
    { id: 4, type: 2, status: 3, name: '滨江区救援',executingState: '3', description: '滨江区发生洪涝灾害，请立即前往赈灾' },
    { id: 5, type: 3, status: 2, name: '西湖区救援',executingState: '3', description: '西湖区发生地震，请立即前往救援' },
    { id: 6, type: 3, status: 1, name: '西湖区地震',executingState: '2', description: '西湖区发生地震，请立即前往救援' },
]; 
const executingStateText = (state: string) => TaskExecutingState[state];
</script>
<template>
    <DefineItemTemplate v-slot="{ $slots, slotProps }">
        <div class="listItem-wrap">
            <div class="listItem flex items-center p-2" style="font-size: 14px;">
                <component :is="$slots.default" v-bind="slotProps" />
            </div>
        </div>
    </DefineItemTemplate>
    <DefineCardTemplate >
        <div class="box-wrap">
            <div class="box">
                <div> img </div>
                <div> img </div>
                <div> img </div>
            </div>
        </div>
    </DefineCardTemplate>
    <ContentLayout>
        <template #left-section>
            <div class="grid h-full gap-y-10" style="grid-template-rows: 6rem 1fr;">
                <Panel :title="'救援信息'">
                    <div class="title">
                        <span>无人机</span>
                    </div>

                    <div class="flex gap-x-14 mb-4">
                        <ReuseCardTemplate />
                        <ReuseCardTemplate />
                    </div>
                    <div class="flex flex-col gap-10">
                        <template v-for="i in 3" :key="i">
                        <ListItemTemplate >
                            <div class="flex flex-col justify-center items-start flex-1 gap-y-4">
                                <div class="text-14">XA01-01</div>
                                <div class="text-8 text-[#ffffff4d] tracking-tighter">XA01-01-1111111111</div>
                            </div>
                            <div class="text-[#FF3257] text-12 font-thin mr-16">
                                icon: 飞行时长
                            </div>
                            <div class="text-16 ">
                                1,0098
                            </div>
                        </ListItemTemplate>
                        </template>
                    </div>
                    
                    <Doughnut />
                </Panel>
                <Panel  :title="'物资用量'">
                    <BarChart />
                    <div class="text-12 text-[#FF5555]">【警告】：类型B、类型C、类型E、类型物资严重不足，请立刻进行补充！</div>
                </Panel>
            </div>
        </template>
        <template #right-section>
            <div class="grid h-full gap-y-10" style="grid-template-rows: 5rem 1fr;">
                <Panel :title="'告警信息'">
                    <div class="title">
                        <span>当前告警</span>
                    </div>
                    <div class="flex flex-col gap-y-10"> 
                        <template v-for="data in fakeAlarmData" :key="data.id">
                            <div class="vListItem-wrap">
                                <div class="vListItem flex flex-col gap-y-10 text-14">
                                    <div class="flex justify-between items-start">
                                        <div class="text-16 font-bold">{{data.title}}</div>
                                        <div class="text-14 text-[#D23F3F] tracking-tighter">{{ alarmTypeString(data.type,data.childType) }} ></div>
                                    </div>
                                    <div class="flex items-center text-14 text-[#ffffffcc]">
                                        <div class="ml-2 mr-1">告警时间：</div>
                                        <div class="tracking-tighter">{{data.time}}</div>
                                    </div>
                                    <div class="flex items-center text-14 text-[#ffffffcc]">
                                        <div class="ml-2 mr-1">告警地点：</div>
                                        <div class="tracking-tighter truncate">{{data.place}}</div>
                                    </div>
                                    <div class="flex justify-between items-start">
                                        <div class="text-14 text-[#FF9E19]">{{ data.id === 1 ?  '* 新增' : ''}}</div>
                                        <div class="text-14 text-[#D38319] tracking-tighter">· {{ AlarmStatus[data.status] }}</div>
                                    </div>
                                </div>
                            </div>
                        </template >
                    </div>
                </Panel>
                <Panel :title="'任务分析'">
                    <div class="grid mb-10" style="grid-template-columns: 0.96rem 1fr 1fr;">
                        <div class="icon-img h-[0.82rem]"></div>
                        <div class="flex flex-col">
                            <p class="text-14 pb-8" style="line-height: 0.16rem;">总执行任务</p>
                            <div class="flex flex-row">
                                <div class="text-[.26rem]">1126</div>
                                <div class="text-12">次</div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-14 pb-8" style="line-height: 0.16rem;">总任务面积</p>
                            <div class="flex">
                                <div class="text-[.26rem]">2，252</div>
                                <div class="text-12">km²</div>
                            </div>
                        </div>

                    </div>
                    <div class="flex gap-x-10 overflow-hidden w-320">
                        <template v-for="type in TaskTypeList" :key="type.id">
                             <div class="h-[.23rem] px-8 py-4 text-12 text-nowrap cursor-pointer"
                                :style="TaskTypeStyle(type.id)"
                                style="
                                    line-height: 0.14rem;
                                    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
                                    border-radius: .03rem; background: rgb(255, 255, 255,0.01);"
                             >
                             {{ type.value }}
                            </div>
                        </template>
                    </div>

                    <template v-for="data in fakeTaskData" :key="data.id">
                        <div class="vListItem-wrap">
                            <div class="vListItem flex justify-between items-center text-14 gap-x-4">
                                <div class="h-36 w-36"></div>
                                <div class="flex-1 overflow-hidden flex flex-col justify-between items-start gap-y-10">
                                    <div class="text-16 font-bold">{{data.name}}</div>
                                    <div class="text-14 text-[#D23F3F] tracking-tighter truncate">{{ data.description }}</div>
                                </div>
                                <div>{{ executingStateText(data.executingState) }}</div>
                            </div>
                        </div>
                    </template >
                </Panel>
            </div>
        </template>
    </ContentLayout>

</template>
<style scoped>

.title {
    overflow: hidden;
    position: relative;
    width: auto;
    width: 1rem;
    padding: 0 0.16rem;
}
.title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: radial-gradient(50% 50% at 50% 50%, #FF6F6F 0%, #FF6F6F 8%, rgba(255, 155, 155, 0) 79%);
}
.box-wrap { 
    box-sizing: border-box;
    border-top: 0.02rem solid #FF4343;
    width: 1.42rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.box {
    box-sizing: border-box;
    width: 1.40rem;
    height: 1.74rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: .01rem solid;
    background-origin: padding-box, border-box;
    background-clip: padding-box, border-box; 
    background: linear-gradient(212deg, rgba(29, 6, 6, 0.6) -24%, rgba(62, 23, 23, 0.6) 13%, rgba(61, 20, 20, 0.6) 30%, rgba(97, 37, 37, 0.6) 48%, rgba(115, 41, 41, 0.6) 60%, rgba(124, 46, 46, 0.6) 69%, rgba(184, 61, 61, 0.6) 82%, rgba(255, 101, 101, 0.6) 95%);
    border-image: linear-gradient(359deg, #FF9A9A -246%, #FF9A9A -173%, rgba(0, 0, 0, 0) 415%) 1;
}
.listItem-wrap {
    box-sizing: border-box;
    width: 100%;
    height: .44rem;
    border-left: .03rem solid #FF4343;
}
.listItem {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: .42rem;
    overflow: hidden;
    border-top: 0.01rem  solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.01rem  solid rgba(255, 255, 255, 0.2);
}
.listItem::before {
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
.vListItem-wrap {
    box-sizing: border-box;
    width: 100%;
    border-left: .03rem solid #FF4343;
    border-right: .03rem solid #ffffff33;
}
.vListItem {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 0.08rem 0.10rem 0.02rem;
}
.vListItem::before {
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