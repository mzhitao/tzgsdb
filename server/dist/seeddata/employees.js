import { Employee, Assets, Certs, EmployeeCerts } from "../models/Employee";
const employees = [
    {
        id: "d6c8d1b5-940e-4b5c-bad6-ffb219e6f7fa",
        realname: "毛志涛",
        username: "maozhitao",
        password: "password123",
        email: "user1347@example.com",
        role: "user",
        level: "普通",
        phone: "13800138001",
        emergencyContact: "联系人_4321",
        emergencyPhone: "13800138002",
        bankName: "Bank of China",
        bankAccount: "62284800123456789",
        eduBackground: "本科",
        eduName: "清华大学",
        eduLastDate: new Date("2020-06-30T00:00:00Z"), // 转换为 Date 对象
        address: "北京市海淀区",
        partment: "造价一室",
        loginTime: new Date("2025-01-13T10:00:00Z"), // 转换为 Date 对象
        joinDate: new Date("2021-01-01T00:00:00Z") // 转换为 Date 对象
    },
    {
        id: "a2b6a4b2-9cd9-45fc-a5b5-e42c28f0977f",
        realname: "王志军",
        username: "wangzhijun",
        password: "password123",
        email: "user5678@example.com",
        role: "admin",
        level: "副总",
        phone: "13800138002",
        emergencyContact: "联系人_5678",
        emergencyPhone: "13800138003",
        bankName: "Industrial and Commercial Bank of China",
        bankAccount: "62284800123456780",
        eduBackground: "硕士",
        eduName: "北京大学",
        eduLastDate: new Date("2021-08-15T00:00:00Z"), // 转换为 Date 对象
        address: "北京市朝阳区",
        partment: "造价二室",
        loginTime: new Date("2025-01-13T10:15:00Z"), // 转换为 Date 对象
        joinDate: new Date("2020-05-22T00:00:00Z") // 转换为 Date 对象
    },
    {
        id: "b6f6be97-35b0-47f4-a3da-b42ed6a38bc2",
        realname: "吴磊华",
        username: "wuleihua",
        password: "password123",
        email: "user9012@example.com",
        role: "super",
        level: "主管",
        phone: "13800138003",
        emergencyContact: "联系人_6789",
        emergencyPhone: "13800138004",
        bankName: "China Construction Bank",
        bankAccount: "62284800123456781",
        eduBackground: "博士",
        eduName: "复旦大学",
        eduLastDate: new Date("2019-11-30T00:00:00Z"), // 转换为 Date 对象
        address: "北京市昌平区",
        partment: "财务室",
        loginTime: new Date("2025-01-13T10:30:00Z"), // 转换为 Date 对象
        joinDate: new Date("2018-03-19T00:00:00Z") // 转换为 Date 对象
    }
];
// 资产数据
const assets = [
    {
        "id": "1b24ec78-5b1e-4ac9-b5e1-84a5c6178c6a",
        "name": "办公电脑",
        "value": 5000,
        "employeeId": "d6c8d1b5-940e-4b5c-bad6-ffb219e6f7fa"
    },
    {
        "id": "f6543763-040b-489f-82d0-e34fcce9c204",
        "name": "工作手机",
        "value": 1500,
        "employeeId": "a2b6a4b2-9cd9-45fc-a5b5-e42c28f0977f"
    },
    {
        "id": "3f97d28b-5574-4c8d-a68d-b20e3bfe3c30",
        "name": "办公桌",
        "value": 2000,
        "employeeId": "b6f6be97-35b0-47f4-a3da-b42ed6a38bc2"
    }
];
// 证书数据
const certs = [
    {
        "id": "ebc9f9ae-998d-48c7-b32f-7a1a19b731a0",
        "name": "项目管理证书",
        "major": "项目管理"
    },
    {
        "id": "6dbb1ff7-c8ad-44f2-9a61-746c19c7e334",
        "name": "高级工程师证书",
        "major": "土木工程"
    },
    {
        "id": "4770bb3f-7fd0-40c3-b416-61e7ec3a60c2",
        "name": "计算机科学证书",
        "major": "计算机科学"
    },
    {
        "id": "e0e7d37b-26c9-4378-8c62-62b617cf4c7a",
        "name": "财务管理证书",
        "major": "财务"
    }
];
// 员工证书关系数据
const employeeCerts = [
    {
        "id": "de4b545d-d38d-44de-9d5e-06d16946a55b",
        "employeeId": "d6c8d1b5-940e-4b5c-bad6-ffb219e6f7fa",
        "certId": "ebc9f9ae-998d-48c7-b32f-7a1a19b731a0",
        "obtainedDate": "2021-06-01T00:00:00Z",
        "number": "CERT1234"
    },
    {
        "id": "0fa0365e-410e-456d-b1b6-5fdbd462c9c3",
        "employeeId": "a2b6a4b2-9cd9-45fc-a5b5-e42c28f0977f",
        "certId": "6dbb1ff7-c8ad-44f2-9a61-746c19c7e334",
        "obtainedDate": "2020-08-15T00:00:00Z",
        "number": "CERT5678"
    },
    {
        "id": "32b8cfeb-fd29-464f-9e88-93b3d704e21a",
        "employeeId": "b6f6be97-35b0-47f4-a3da-b42ed6a38bc2",
        "certId": "4770bb3f-7fd0-40c3-b416-61e7ec3a60c2",
        "obtainedDate": "2019-03-10T00:00:00Z",
        "number": "CERT9101"
    }
];
// 批量插入数据
const seedEmployees = async () => {
    try {
        await Employee.bulkCreate(employees);
        await Assets.bulkCreate(assets);
        await Certs.bulkCreate(certs);
        await EmployeeCerts.bulkCreate(employeeCerts);
        console.log("数据插入成功!");
    }
    catch (error) {
        console.error("数据插入失败:", error);
    }
};
export default seedEmployees;
//# sourceMappingURL=employees.js.map