const PhanHoi = require('../models/PhanHoi')

exports.getAllPhanHoi = async (req, res) => {
  const phanHoi = await PhanHoi.findAll({
      where: req.query
  })

  res.json({
      data: {docs: phanHoi}
  })
}

exports.getPhanHoi = async (req, res) => {
      const id = req.params.id
      const phanHoi = await PhanHoi.findOne({
          where: {id: id}
      })
    
      res.json({
          data: {docs: phanHoi}
      })
    }

exports.deletePhanHoi = async (req, res) => {
      const id = req.params.id
      const phanHoi = await PhanHoi.findOne({
            where: {id: id}
      })
      phanHoi.destroy();
      res.json({
            data: {docs: phanHoi}
      })
}
