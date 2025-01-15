import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { Project } from "./Project";
class ProjectConclusion extends Model {
    id;
    projectId;
    conclusionType;
    cost;
    reportDate;
    constructionUnit;
    auditCost;
    contractAmount;
    reductionAmount;
    contractor;
    startDate;
    completionDate;
    createdAt;
    updatedAt;
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
            model: 'projects', // 假设项目表的名称为 'projects'
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
    as: 'conclusions' // 可以通过这个字段来访问项目的所有结论
});
// 在 ProjectConclusion 模型中添加反向关系
ProjectConclusion.belongsTo(Project, {
    foreignKey: 'projectId',
    as: 'project' // 可以通过这个字段来访问结论对应的项目
});
export { ProjectConclusion };
//# sourceMappingURL=Conclusion.js.map