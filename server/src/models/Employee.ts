import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import bcrypt from 'bcrypt';

// 定义数据类型
export type PartmentOption = "造价一室" | "造价二室" | "造价三室" | "造价四室" | "造价五室" | "总工室" | "财务室";
export type EmployeeLevelOption = "挂靠" | "实习" | "普通" | "副主管" | "主管" | "副总";
export type RoleOption = "super" | "admin" | "user";

// 定义模型属性接口
interface EmployeeAttributes {
    id: string;
    username: string;
    realname: string;
    password: string;
    email: string | null;
    role: string;
    level: string;
    phone: string;
    emergencyContact: string | null;
    emergencyPhone: string | null;
    bankName: string;
    bankAccount: string;
    eduBackground: string;
    eduName: string;
    eduLastDate: Date;
    address: string;
    partment: string;
    assetId?: string;
    certId?: string;
    loginTime: Date;
    joinDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

interface AssetAttributes {
    id: string;
    name: string;
    value: number;
    employeeId?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

interface CertsAttributes {
    id: string;
    name: string;
    major: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// 定义创建属性接口
interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, "id"> {}
interface AssetCreationAttributes extends Optional<AssetAttributes, "id"> {}
interface CertsCreationAttributes extends Optional<CertsAttributes, "id"> {}

class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
    id!: string;
    username!: string;
    realname!: string;
    password!: string;
    role: RoleOption = "user";
    level: EmployeeLevelOption = "普通";
    phone!: string;
    bankName!: string;
    bankAccount!: string;
    eduBackground!: string;
    eduName!: string;
    eduLastDate!: Date;
    address!: string;
    partment!: PartmentOption;
    assetId?: string | undefined;
    certId?: string | undefined;
    loginTime!: Date;
    joinDate!: Date;
    email: string | null = null;
    emergencyContact: string | null = null;
    emergencyPhone: string | null = null;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;

    // 密码加密
    static async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
    
    // 比对密码
    static async comparePassword(enteredPassword: string, storedPassword: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(enteredPassword, storedPassword);
        return isMatch;
    }
}

class Assets extends Model<AssetAttributes, AssetCreationAttributes> implements AssetAttributes {
    id!: string;
    name!: string;
    value!: number;
    employeeId: string | null = null;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

class Certs extends Model<CertsAttributes, CertsCreationAttributes> implements CertsAttributes {
    id!: string;
    name!: string;
    major!: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

class EmployeeCerts extends Model {
    id!: string;
    employeeId!: string;
    certId!: string;
    obtainedDate!: Date; // 取得证书的日期
    number!: string;     // 证书编号
}

Employee.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    realname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user",
        allowNull: false
    },
    level: {
        type: DataTypes.STRING,
        defaultValue: "普通",
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emergencyContact: {
        type: DataTypes.STRING,
        allowNull: true
    },
    emergencyPhone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bankName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bankAccount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eduBackground: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eduName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eduLastDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    partment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    joinDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'employees',
    timestamps: true
});

Assets.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    employeeId: {
        type: DataTypes.UUID,
        defaultValue: null,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'assets',
    timestamps: true
});

Certs.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // 删除 obtainedDate 和 number 字段
}, {
    sequelize,
    modelName: 'certs',
    timestamps: true
});


EmployeeCerts.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    employeeId: {
        type: DataTypes.UUID,
        references: {
            model: Employee,  // 关联到 Employee 模型
            key: 'id'
        },
        allowNull: false
    },
    certId: {
        type: DataTypes.UUID,
        references: {
            model: Certs,  // 关联到 Certs 模型
            key: 'id'
        },
        allowNull: false
    },
    obtainedDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,  // 改为字符串类型
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'employeeCerts',
    timestamps: false // 联接表通常不需要时间戳
});

// 多对多关系
Employee.belongsToMany(Certs, { through: EmployeeCerts, foreignKey: 'employeeId' });
Certs.belongsToMany(Employee, { through: EmployeeCerts, foreignKey: 'certId' });


// 一对多关系
Employee.hasMany(Assets, { foreignKey: 'employeeId' });
Assets.belongsTo(Employee, { foreignKey: 'employeeId' });

export { Employee, Assets, Certs, EmployeeCerts };
