import { Project, Type } from "../models/Project";
const randomProjects = [
    {
        name: "城市规划设计",
        typeId: 1, // 将会替换为随机的 typeId
        service: "编制",
        clientName: "未来城市有限公司",
        contactName: "张伟",
        contactTelephone: "13800138000",
        masterId: "a9d1e5b7-1f22-4c68-9f7b-8a6e5c7b9d6f",
        description: "城市规划的初步方案设计。",
        status: "未开始",
    },
    {
        name: "高速公路项目审查",
        typeId: 1, // 将会替换为随机的 typeId
        service: "审核",
        clientName: "交通建设集团",
        contactName: "李静",
        contactTelephone: "13512345678",
        masterId: "b7d3e8c9-4f62-4b7d-8a9e-6f3b7c5e9d4f",
        description: "审查高速公路设计方案。",
        status: "进行中",
    },
    {
        name: "建筑节能评估",
        typeId: 1,
        service: "全过程",
        clientName: "绿色建筑研究院",
        contactName: "王敏",
        contactTelephone: "13987654321",
        masterId: "c8e9d7b5-4f6a-4b9e-8d5c-7f3b6e9c8d4f",
        description: "全过程管理节能评估。",
        status: "已完成",
    },
    {
        name: "园林景观设计",
        typeId: 1, // 将会替换为随机的 typeId
        service: "编制",
        clientName: "生态环境公司",
        contactName: "赵丽",
        contactTelephone: "13765432100",
        masterId: "d9e7b4c8-5f6a-4e9d-8b5c-7f3e9c8d7b4f",
        description: "园林景观设计方案编制。",
        status: "未开始",
    },
    {
        name: "工业园区规划",
        typeId: 1, // 将会替换为随机的 typeId
        service: "审核",
        clientName: "科技开发区",
        contactName: "周强",
        contactTelephone: "13678901234",
        masterId: "e7b5c9d8-4f6a-4b7e-9d5c-8f3e9c7b6d4a",
        description: "工业园区规划的审核工作。",
        status: "进行中",
    },
    {
        name: "城市地下管网改造",
        typeId: 1, // 将会替换为随机的 typeId
        service: "全过程",
        clientName: "市政工程公司",
        contactName: "陈刚",
        contactTelephone: "13876543210",
        masterId: "f9e8d7b6-4c5a-4f9e-8b7c-6f3d9c8b7e4a",
        description: "全过程管理地下管网改造。",
        status: "未开始",
    },
    {
        name: "高层建筑抗震设计",
        typeId: 1, // 将会替换为随机的 typeId
        service: "编制",
        clientName: "建筑设计研究院",
        contactName: "徐鹏",
        contactTelephone: "13912345678",
        masterId: "g8f9d7b6-4e5c-4b9f-8d3c-7e6f9b4a5d3c",
        description: "高层建筑抗震方案设计。",
        status: "已完成",
    },
    {
        name: "智慧城市建设方案",
        typeId: 1, // 将会替换为随机的 typeId
        service: "审核",
        clientName: "智慧科技有限公司",
        contactName: "林峰",
        contactTelephone: "13654321098",
        masterId: "h9e8f7b6-4d5c-4b7e-8f9d-6c3e7b9a5d4c",
        description: "智慧城市建设方案审核。",
        status: "进行中",
    },
    {
        name: "生态保护区规划",
        typeId: 1, // 将会替换为随机的 typeId
        service: "全过程",
        clientName: "自然资源局",
        contactName: "黄婷",
        contactTelephone: "13789012345",
        masterId: "i8f7e9d6-4b5c-4e9f-8d3b-7e6c9b4a5d3f",
        description: "全过程管理生态保护区规划。",
        status: "未开始",
    },
    {
        name: "轨道交通设计",
        typeId: 1, // 将会替换为随机的 typeId
        service: "编制",
        clientName: "轨道交通集团",
        contactName: "刘洋",
        contactTelephone: "13509876543",
        masterId: "j7e6f9d8-4c5b-4e7f-8d3a-6b9e5c7a4d3c",
        description: "轨道交通设计方案编制。",
        status: "进行中",
    },
];
const types = [
    { id: 1, name: '估算' },
    { id: 2, name: '概算' },
    { id: 3, name: '预算' },
    { id: 4, name: '结算' },
    { id: 5, name: '全过程' },
    { id: 6, name: '财评' },
    { id: 7, name: '司法鉴定' },
    { id: 8, name: '评估' },
    { id: 9, name: '其他' },
];
const getRandomTypeId = () => {
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex].id;
};
// 修改 randomProjects 中的 typeId
randomProjects.forEach(project => {
    project.typeId = getRandomTypeId();
});
export const seedTypes = async () => {
    try {
        await Type.bulkCreate(types);
        console.log('建立Types成功!');
    }
    catch (error) {
        console.error('建立Types错误!:', error);
    }
};
export const seedProjects = async () => {
    try {
        for (const project of randomProjects) {
            await Project.create(project);
        }
        console.log('建立Projects成功!');
    }
    catch (error) {
        console.error('建立Projects错误!:', error);
    }
};
//# sourceMappingURL=projects.js.map