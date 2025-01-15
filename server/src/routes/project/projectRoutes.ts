// server/src/routes/userRoutes.ts
import express from 'express';
import { createProject, getProjects } from '../../controllers/project/project';

const router = express.Router();

// 定义路由
router.post('/', createProject);
router.get('/', getProjects);

export default router;
