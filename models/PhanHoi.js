const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const PhanHoi = sequelize.define('phanHoi', {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
      MHId: {
        type: DataTypes.INTEGER
      },
      NDId: {
        type: DataTypes.INTEGER
      },
      NoiDung: {
        type: DataTypes.STRING
      }
    }
);

module.exports = PhanHoi