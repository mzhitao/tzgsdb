import { Project } from "../../models/Project";
import { ProjectConclusion } from "../../models/Conclusion";
import { EmployeeProjects } from "../../models/EmployeeProject";
export const getProjects = async (req, res) => {
    const projects = await Project.findAll();
    res.json(projects);
};
export const createProject = async (req, res) => {
    const { name, typeId, service, masterId, clientName, contactName, contactTelephone, description, status } = req.body;
    const project = await Project.create({ name, typeId, service, masterId, clientName, contactName, contactTelephone, description, status });
    EmployeeProjects.create({ employeeId: masterId, projectId: project.id, assignedDate: new Date(), role: '项目经理' });
    res.status(201).json(project);
};
export const getProjectConclusions = async (req, res) => {
    const { projectId } = req.params;
    const projectConclusions = await ProjectConclusion.findAll({ where: { projectId } });
    res.json(projectConclusions);
};
//# sourceMappingURL=project.js.map