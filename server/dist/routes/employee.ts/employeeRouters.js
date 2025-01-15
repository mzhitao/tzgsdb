// server/src/routes/userRoutes.ts
import express from 'express';
import { createEmployee, getEmployees } from '../../controllers/employee/employee';
import certsRouter from './certs';
const router = express.Router();
// 定义路由
router.post('/', createEmployee);
router.get('/', getEmployees);
router.use('/certs', certsRouter);
export default router;
//# sourceMappingURL=employeeRouters.js.map