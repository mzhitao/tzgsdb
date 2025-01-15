import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Employee } from '../models/Employee';
const express = require('express');
const router = express.Router();
const SECRET_KEY = "mao6684855";
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Employee.findOne({ where: { username } });
        if (!user) {
            res.status(401).json({ message: "Invalid username or password" });
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid username or password" });
            return;
        }
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token }); // 使用 res.json() 来返回 token
        console.log(token);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
});
export default router;
//# sourceMappingURL=logins.js.map