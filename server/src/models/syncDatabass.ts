import {sequelize} from "../database";
import {seedProjects, seedTypes} from "../seeddata/projects";
import seedEmployees from "../seeddata/employees";


export const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced successfully');
        seedEmployees();
        // seedTypes();
        // seedProjects();
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}
