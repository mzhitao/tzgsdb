import { Employee } from "../../models/Employee";
export const createEmployee = async (req, res) => {
    try {
        const { password, ...rest } = await Employee.create(req.body);
        const hashedPassword = await Employee.hashPassword(password);
        const employee = await Employee.create({ ...rest, password: hashedPassword });
        res.json({ employee });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const getEmployees = async (req, res) => {
    const employees = await Employee.findAll();
    res.json({ employees });
};
//# sourceMappingURL=employee.js.map