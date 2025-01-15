import { Request,Response } from "express";
import { Employee } from "../../models/Employee";

export const createEmployee = async (req: Request, res: Response) => {
    try{
        const {password,...rest} = await Employee.create(req.body);
        const hashedPassword = await Employee.hashPassword(password);
        const employee = await Employee.create({ ...rest, password: hashedPassword });
        res.json({ employee });
    }catch(e){
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }

}

export const getEmployees = async (req: Request, res: Response) => {
    const employees = await Employee.findAll();
    res.json({ employees });
}