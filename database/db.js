//Database Configuration

const { Sequelize } = require("sequelize");

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password =  process.env.DB_PASS;
const database = process.env.DB_DATABASE;

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect:'postgres'
});

module.exports = sequelize;

