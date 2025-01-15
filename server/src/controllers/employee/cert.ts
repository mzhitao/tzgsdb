import { Request,Response } from "express";
import { Certs } from "../../models/Employee";

export const createCert = async (req: Request, res: Response) => {
    const employee = await Certs.create(req.body);
    res.json({ employee });
}

export const getCert = async (req: Request, res: Response) => {
    const employees = await Certs.findAll();
    res.json({ employees });
}

