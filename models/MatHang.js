const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const MatHang = sequelize.define('matHang', {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      },
      Anh: {
        type: DataTypes.STRING
      },
      Ten: {
        type: DataTypes.STRING
      },
      SoLuong: {
        type: DataTypes.INTEGER
      },
      DonVi: {
        type: DataTypes.STRING
      },
      Gia: {
        type: DataTypes.INTEGER
      },
      NCCId: {
        type: DataTypes.INTEGER
      },
      IdLoai: {
        type: DataTypes.INTEGER
      }
  }
);

module.exports = MatHang