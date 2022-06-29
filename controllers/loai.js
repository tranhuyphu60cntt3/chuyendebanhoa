const Loai = require('../models/Loai')

exports.getAllLoai = async (req, res) => {
  const loai = await Loai.findAll({
      where: req.query
  })

  res.json({
      data: {docs: loai}
  })
}

exports.getLoai = async (req, res) => {
      const id = req.params.id
      const loai = await Loai.findOne({
          where: {id: id}
      })
    
      res.json({
          data: {docs: loai}
      })
    }

exports.deleteLoai = async (req, res) => {
      const id = req.params.id
      const loai = await Loai.findOne({
            where: {id: id}
      })
      loai.destroy();
      res.json({
            data: {docs: loai}
      })
}
