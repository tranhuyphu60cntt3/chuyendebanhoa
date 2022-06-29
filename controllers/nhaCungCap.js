const NhaCungCap = require('../models/NhaCungCap')

exports.getAllNhaCungCap = async (req, res) => {
  const nhaCungCap = await NhaCungCap.findAll({
      where: req.query
  })

  res.json({
      data: {docs: nhaCungCap}
  })
}

exports.getNhaCungCap = async (req, res) => {
      const id = req.params.id
      const nhaCungCap = await NhaCungCap.findOne({
          where: {id: id}
      })
    
      res.json({
          data: {docs: nhaCungCap}
      })
    }

exports.deleteNhaCungCap = async (req, res) => {
      const id = req.params.id
      const nhaCungCap = await NhaCungCap.findOne({
            where: {id: id}
      })
      nhaCungCap.destroy();
      res.json({
            data: {docs: nhaCungCap}
      })
}
