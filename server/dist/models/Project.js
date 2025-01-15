import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { Employee } from "./Employee";
class Project extends Model {
    findAll() {
        throw new Error("Method not implemented.");
    }
    id;
    name;
    typeId;
    service;
    clientName;
    contactName;
    contactTelephone;
    masterId;
    description;
    status = "未开始";
    createdAt;
    updatedAt;
}
Project.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // 自动生成 UUID
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    service: {
        type: DataTypes.ENUM('编制', '审核', "全过程"),
        allowNull: false
    },
    contactName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contactTelephone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    masterId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Employee,
            key: 'id'
        }
    },
    clientName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('未开始', '进行中', '已完成'),
        allowNull: false,
        defaultValue: '未开始'
    }
}, {
    sequelize,
    modelName: 'projects',
    timestamps: true
});
class Type extends Model {
    id;
    name;
    createdAt;
    updatedAt;
}
Type.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'types',
    timestamps: true
});
Type.hasMany(Project, { foreignKey: 'typeId' });
Project.belongsTo(Type, { foreignKey: 'typeId' });
Project.belongsTo(Employee, { foreignKey: 'masterId', as: 'master' });
Employee.hasMany(Project, { foreignKey: 'masterId', as: 'projects' });
export { Project, Type };
//# sourceMappingURL=Project.js.map