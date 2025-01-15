import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import bcrypt from 'bcrypt';
class Employee extends Model {
    id;
    username;
    realname;
    password;
    role = "user";
    level = "普通";
    phone;
    bankName;
    bankAccount;
    eduBackground;
    eduName;
    eduLastDate;
    address;
    partment;
    assetId;
    certId;
    loginTime;
    joinDate;
    email = null;
    emergencyContact = null;
    emergencyPhone = null;
    createdAt;
    updatedAt;
    // 密码加密
    static async hashPassword(password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
    // 比对密码
    static async comparePassword(enteredPassword, storedPassword) {
        const isMatch = await bcrypt.compare(enteredPassword, storedPassword);
        return isMatch;
    }
}
class Assets extends Model {
    id;
    name;
    value;
    employeeId = null;
    createdAt;
    updatedAt;
}
class Certs extends Model {
    id;
    name;
    major;
    createdAt;
    updatedAt;
}
class EmployeeCerts extends Model {
    id;
    employeeId;
    certId;
    obtainedDate; // 取得证书的日期
    number; // 证书编号
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
            model: Employee, // 关联到 Employee 模型
            key: 'id'
        },
        allowNull: false
    },
    certId: {
        type: DataTypes.UUID,
        references: {
            model: Certs, // 关联到 Certs 模型
            key: 'id'
        },
        allowNull: false
    },
    obtainedDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING, // 改为字符串类型
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
//# sourceMappingURL=Employee.js.map