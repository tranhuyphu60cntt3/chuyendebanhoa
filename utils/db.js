const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hoa', 'root', '', {
      host: 'localhost',
      dialect: 'mysql'
});

module.exports = sequelize