const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const ChiTietHoaDon = sequelize.define('chiTietHoaDon', {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
      MHId: {
      type: DataTypes.INTEGER
      },
      HDId: {
      type: DataTypes.INTEGER
      },
      SoLuong: {
        type: DataTypes.INTEGER
      },
      Gia: {
        type: DataTypes.INTEGER
      }
    }
);

module.exports = ChiTietHoaDon