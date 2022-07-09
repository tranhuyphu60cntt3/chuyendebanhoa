const NguoiDung = require('../models/NguoiDung')
const LoaiNguoiDung = require('../models/LoaiNguoiDung');
exports.getAllNguoiDung = async (req, res) => {
  const docs = await NguoiDung.findAll({
    include: {
        model: LoaiNguoiDung,
        attributes: ['Ten']
    }
  });

  res.json({
      data: {docs}
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
      const doc =  await NguoiDung.findOne({
        where: { id: id },
      });
      res.json({
        data: { doc: doc ? 0 : id },
      });
}
