import express from 'express';
import { createCert, getCert } from '../../controllers/employee/cert';

const router = express.Router();

// 定义路由
router.post('/', createCert);
router.get('/', getCert);

export default router;