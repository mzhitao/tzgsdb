import { Certs } from "../../models/Employee";
export const createCert = async (req, res) => {
    const employee = await Certs.create(req.body);
    res.json({ employee });
};
export const getCert = async (req, res) => {
    const employees = await Certs.findAll();
    res.json({ employees });
};
//# sourceMappingURL=cert.js.map