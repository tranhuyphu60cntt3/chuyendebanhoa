const ChiTietHoaDon = require('../models/ChiTietHoaDon')
const MatHang = require("../models/MatHang");
const HoaDon = require("../models/HoaDon");

exports.getAllChiTietHoaDon = async (req, res) => {
  const chiTietHoaDon = await ChiTietHoaDon.findAll({
    include: [
        {
          model: HoaDon,
          attributes: ["Ten"],
        },
        {
          model: MatHang,
          attributes: ["Ten"],
        },
      ],
  });

  res.json({
      data: {docs: chiTietHoaDon}
  })
}

exports.getChiTietHoaDon = async (req, res) => {
      const id = req.params.id
      const chiTietHoaDon = await ChiTietHoaDon.findOne({
          where: {id: id}
      })
    
      res.json({
          data: {docs: chiTietHoaDon}
      })
    }

exports.deleteChiTietHoaDon = async (req, res) => {
      const id = req.params.id
      const chiTietHoaDon = await ChiTietHoaDon.findOne({
            where: {id: id}
      })
      chiTietHoaDon.destroy();
      res.json({
            data: {docs: chiTietHoaDon}
      })
}
