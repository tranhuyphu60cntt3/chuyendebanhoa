const LoaiNguoiDung = require('../models/LoaiNguoiDung')

exports.getAllLoaiNguoiDung = async (req, res) => {
  const loaiNguoiDung = await LoaiNguoiDung.findAll({
      where: req.query
  })

  res.json({
      data: {docs: loaiNguoiDung}
  })
}

exports.getLoaiNguoiDung = async (req, res) => {
      const id = req.params.id
      const loaiNguoiDung = await LoaiNguoiDung.findOne({
          where: {id: id}
      })
    
      res.json({
          data: {docs: loaiNguoiDung}
      })
    }

exports.deleteLoaiNguoiDung = async (req, res) => {
      const id = req.params.id
      const loaiNguoiDung = await LoaiNguoiDung.findOne({
            where: {id: id}
      })
      loaiNguoiDung.destroy();
      res.json({
            data: {docs: loaiNguoiDung}
      })
}
