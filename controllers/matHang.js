const MatHang = require('../models/MatHang')
const LoaiMatHang = require('../models/Loai')

exports.getAllMatHang = async (req, res) => {
  const docs = await MatHang.findAll({
    include: {
      model: LoaiMatHang,
      attributes: ['Ten']
    }
  });
  res.json({
      data: {docs}
  })
}

exports.getMatHang = async (req, res) => {
      const id = req.params.id
      const matHang = await MatHang.findOne({
          where: {id: id}
      })
    
      res.json({
          data: {docs: matHang}
      })
    }

exports.deleteMatHang = async (req, res) => {
      const id = req.params.id
      const matHang = await MatHang.findOne({
            where: {id: id}
      })
      matHang.destroy();
      res.json({
            data: {docs: matHang}
      })
}
