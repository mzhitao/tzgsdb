// 定义员工类型接口
export interface EmployeeType {
    id: string;
    username: string;
    password: string;
    role: string;
    level: string;
    phone: string;
    bankName: string;
    bankAccount: string;
    eduBackground: string;
    eduName: string;
    eduLastDate: string; 
    address: string;
    partment: string;
    loginTime: string; 
    joinDate: string; 
    email: string | null;
    emergencyContact: string | null;
    emergencyPhone: string | null;
  }