const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const NhaCungCap = sequelize.define('nhaCungCap', {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
      Ten: {
        type: DataTypes.STRING
      },
      DienThoai: {
        type: DataTypes.STRING
      },
      DiaChi: {
        type: DataTypes.STRING
      }
    }
);

module.exports = NhaCungCap