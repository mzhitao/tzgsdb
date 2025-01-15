"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize('tzgsdb', 'root', '4828', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: false
});
exports.sequelize = sequelize;
