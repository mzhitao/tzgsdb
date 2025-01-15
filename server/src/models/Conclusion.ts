import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import { ServiceOption,Project } from "./Project";


// 定义模型属性接口
interface ProjectConclusionAttributes {
    id: string;
    projectId: string;  // 关联的项目ID
    conclusionType: ServiceOption;  // 结论类型
    cost: number;  // 工程造价（编制时或审定工程造价）
    reportDate: Date;  // 报告时间
    constructionUnit: string;  // 建设单位
    auditCost?: number;  // 审定工程造价（仅用于审核时）
    contractAmount?: number;  // 合同金额（仅用于审核时）
    reductionAmount?: number;  // 审减额（仅用于审核时）
    contractor?: string;  // 施工单位（仅用于审核时）
    startDate?: Date;  // 开工时间（仅用于审核时）
    completionDate?: Date;  // 竣工时间（仅用于审核时）
    createdAt?: Date;
    updatedAt?: Date;
}

// 定义创建属性接口
interface ProjectConclusionCreationAttributes extends Optional<ProjectConclusionAttributes, "id"> {}

class ProjectConclusion extends Model<ProjectConclusionAttributes, ProjectConclusionCreationAttributes> implements ProjectConclusionAttributes {
    id!: string;
    projectId!: string;
    conclusionType!: ServiceOption;
    cost!: number;
    reportDate!: Date;
    constructionUnit!: string;
    auditCost?: number;
    contractAmount?: number;
    reductionAmount?: number;
    contractor?: string;
    startDate?: Date;
    completionDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

ProjectConclusion.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    projectId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'projects',  // 假设项目表的名称为 'projects'
            key: 'id'
        }
    },
    conclusionType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    reportDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    constructionUnit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    auditCost: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    contractAmount: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    reductionAmount: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    contractor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    completionDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'projectConclusions',
    timestamps: true
});

// 在 Project 模型中添加一对多关系
Project.hasMany(ProjectConclusion, {
    foreignKey: 'projectId',
    as: 'conclusions'  // 可以通过这个字段来访问项目的所有结论
});

// 在 ProjectConclusion 模型中添加反向关系
ProjectConclusion.belongsTo(Project, {
    foreignKey: 'projectId',
    as: 'project'  // 可以通过这个字段来访问结论对应的项目
});

export { ProjectConclusion };
