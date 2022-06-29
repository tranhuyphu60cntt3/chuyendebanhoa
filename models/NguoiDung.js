const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const NguoiDung = sequelize.define('nguoiDung', {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
      Ho: {
        type: DataTypes.STRING
      },
      Ten: {
        type: DataTypes.STRING
      },
      DiaChi: {
        type: DataTypes.STRING
      },
      Email: {
        type: DataTypes.STRING
      },
      Password: {
        type: DataTypes.STRING
      },
      LNDId: {
        type: DataTypes.INTEGER
      }
    }
);

module.exports = NguoiDung