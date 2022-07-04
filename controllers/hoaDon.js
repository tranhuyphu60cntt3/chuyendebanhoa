const HoaDon = require('../models/HoaDon');
const NguoiDung = require("../models/NguoiDung");

exports.getAllHoaDon = async (req, res) => {
    const docs = await HoaDon.findAll({
        include: [
            {model: NguoiDung,   as :'khachhang', attributes :["Ten","Ho"]},
            {model: NguoiDung,   as :'nhanvien', attributes :["Ten","Ho"]}
        ]
      });

  res.json({
      data: {docs}
  })
}

exports.getHoaDon = async (req, res) => {
      const id = req.params.id
      const hoaDon = await HoaDon.findOne({
          where: {id: id}
      })
    
      res.json({
          data: {docs: hoaDon}
      })
    }

exports.deleteHoaDon = async (req, res) => {
      const id = req.params.id
      const hoaDon = await HoaDon.findOne({
            where: {id: id}
      })
      hoaDon.destroy();
      res.json({
            data: {docs: hoaDon}
      })
}
