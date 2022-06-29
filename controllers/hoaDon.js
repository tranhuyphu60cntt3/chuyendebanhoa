const HoaDon = require('../models/HoaDon')

exports.getAllHoaDon = async (req, res) => {
  const hoaDon = await HoaDon.findAll({
      where: req.query
  })

  res.json({
      data: {docs: hoaDon}
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
