const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const HoaDon = sequelize.define('hoaDon', {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
      Ten: {
        type: DataTypes.STRING
      },
      NgayDat: {
        type: DataTypes.DATE
      },
      NgayGiao: {
        type: DataTypes.DATE
      },
      TinhTrang: {
        type: DataTypes.BOOLEAN
      },
      NVId: {
        type: DataTypes.INTEGER
      },
      KHId: {
        type: DataTypes.INTEGER
      }
    }
);

module.exports = HoaDon