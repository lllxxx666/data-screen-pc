export const TaskType = {
  '1': '灭火',
  '2': '赈灾',
  '3': '照明',
  '4': '搜救',
  '5': '搭建信号',
  '6': '其他',
};

export const TaskObject = {
  '1': '森林',
  '2': '城市',
  '3': '其他',
};

export const TaskStatus = {
  '1': '准备中',
  '2': '飞检完成',
  '3': '物资确认完成',
  '4': '装备确认完成',
  '5': '出车检查完成',
  '6': '救援组准备完成',
};
export const peopleTaskStatus = {
  '100': '待命',
  '600': '救援',
  '600001': '前往救援点',
  '600002': '已到达救援点',
};
export const peopleStatus = {
  '1': '在岗',
  // '2': '救援',
  '3': '值班',
  '4': '请假',
};

export const ObjectType = {
  "1": "无人机",
  "2": "救援车",
  "3": "救援组",
};

const PlanTaskStatus = {
  '0': '无计划',
  '1': '有计划',
};

export const PlanTaskStatusLabel = PlanTaskStatus;

//参与类型
export enum JoinType {
  Uav = 1,
  Vehicle,
  // RescueGroup,
  Team,
}
