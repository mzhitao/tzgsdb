import { DataTypes,Model } from "sequelize";
import { Employee } from "./Employee";
import { Project } from "./Project";
import { sequelize } from "../database";

interface EmployeeProjectAttributes {
    employeeId: string;
    projectId: string;
    assignedDate: Date;
    role: string; // 可选字段，用于记录员工在项目中的角色
}

export class EmployeeProjects extends Model<EmployeeProjectAttributes> implements EmployeeProjectAttributes {
    employeeId!: string;
    projectId!: string;
    assignedDate!: Date;
    role!: string;
}

EmployeeProjects.init(
    {
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
    },
    {
        sequelize,
        modelName: "employeeProjects",
        timestamps: false, // 中间表一般不需要自动时间戳
    }
);

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
