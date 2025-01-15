import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tzgsdb', 'root', '4828', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
  logging: false
});

export { sequelize };
