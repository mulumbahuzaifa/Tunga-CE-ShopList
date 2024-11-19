const { Sequelize } = require('sequelize');
const {dbConfig} = require('./config/database');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect:'mysql',
//   dialectOptions: {
//     useUTC: false, // for reading from database
//   },
//   timezone: '-05:00', // for writing to database
});

module.exports = sequelize;