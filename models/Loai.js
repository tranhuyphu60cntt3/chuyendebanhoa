const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const Loai = sequelize.define('loai', {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
      Ten: {
        type: DataTypes.STRING
      }
    }
);

module.exports = Loai