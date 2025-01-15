import { DataTypes, Model } from "sequelize";
import { Employee } from "./Employee";
import { Project } from "./Project";
import { sequelize } from "../database";
export class EmployeeProjects extends Model {
    employeeId;
    projectId;
    assignedDate;
    role;
}
EmployeeProjects.init({
    employeeId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    projectId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    assignedDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "employeeProjects",
    timestamps: false, // 中间表一般不需要自动时间戳
});
Employee.belongsToMany(Project, {
    through: EmployeeProjects, // 指定中间表
    foreignKey: "employeeId",
    otherKey: "projectId",
});
Project.belongsToMany(Employee, {
    through: EmployeeProjects,
    foreignKey: "projectId",
    otherKey: "employeeId",
});
//# sourceMappingURL=EmployeeProject.js.map