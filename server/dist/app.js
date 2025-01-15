//app.ts
import express from 'express';
import { syncDatabase } from './models/syncDatabass'; // 更正拼写
import projectRoutes from './routes/project.ts/projectRoutes'; // 导入路由
import employeeRoutes from './routes/employee.ts/employeeRouters';
import loginRoutes from './routes/logins';
const app = express();
const port = 3000;
// 使用 async 函数确保数据库同步完成后再启动服务器
const startServer = async () => {
    try {
        await syncDatabase();
        console.log("Database synced successfully");
        app.use(express.json());
        app.use('/api/projects', projectRoutes);
        app.use('/api/employees', employeeRoutes);
        app.use('/api', loginRoutes);
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error("Error syncing database:", error);
    }
};
startServer();
//# sourceMappingURL=app.js.map