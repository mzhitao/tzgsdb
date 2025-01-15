import { DataTypes,Model,Optional } from "sequelize";
import { sequelize } from "../database";
import { Employee } from "./Employee";
import exp from "constants";


export type ServiceOption = "编制"|"审核"|"全过程";
export type StatusOption="未开始"|"进行中"|"已完成";

interface ProjectAttributes {
    id: string;
    name: string;
    typeId: number;
    service: ServiceOption;
    clientName: string;
    contactName?: string|null;
    contactTelephone?: string|null;
    masterId?: string;
    status: StatusOption;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    startedAt?: Date;
    completedAt?: Date;
}

interface ProjectCreationAttributes extends Optional<ProjectAttributes, "id"> {}

class Project extends Model<ProjectAttributes,ProjectCreationAttributes> implements ProjectAttributes {
    findAll() {
        throw new Error("Method not implemented.");
    }
    id!: string;
    name!: string;
    typeId!: number;
    service!: ServiceOption;
    clientName!: string;
    contactName?: string|null;
    contactTelephone?: string|null;
    masterId?: string;
    description!: string;
    status: StatusOption="未开始";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

Project.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,  // 自动生成 UUID
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
        type: DataTypes.ENUM('编制', '审核',"全过程"),
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

interface TypeAttributes {
    id: number;  // 改为 number 类型，表示自增
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface TypeCreationAttributes extends Optional<TypeAttributes, "id"> {}

class Type extends Model<TypeAttributes,TypeCreationAttributes> implements TypeAttributes {
    id!: number;
    name!: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
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
Project.belongsTo(Employee, { foreignKey: 'masterId', as:'master'});
Employee.hasMany(Project, { foreignKey: 'masterId',as:'projects' });

export { Project, Type }