const NguoiDung = require('../models/NguoiDung')
const LoaiNguoiDung = require('../models/LoaiNguoiDung');
exports.getAllNguoiDung = async (req, res) => {
  const nguoiDung = await NguoiDung.findAll({
      where: req.query,
        include: [
            {model: LoaiNguoiDung}
        ]
  })

  res.json({
      data: {docs: nguoiDung}
  })
}

exports.getNguoiDung = async (req, res) => {
      const id = req.params.id
      const nguoiDung = await NguoiDung.findOne({
          where: {id: id}
      })
    
      res.json({
          data: {docs: nguoiDung}
      })
    }

exports.deleteNguoiDung = async (req, res) => {
      const id = req.params.id
      const nguoiDung = await NguoiDung.findOne({
            where: {id: id}
      })
      nguoiDung.destroy();
      res.json({
            data: {docs: nguoiDung}
      })
}
