const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const LoaiNguoiDung = sequelize.define('loaiNguoiDung', {
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

module.exports = LoaiNguoiDung