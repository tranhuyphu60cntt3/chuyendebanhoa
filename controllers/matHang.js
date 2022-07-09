const MatHang = require('../models/MatHang')
const Loai = require('../models/Loai')
exports.getAllMatHang = async (req, res) => {
  const docs = await MatHang.findAll({
    include:[
      {
        model: Loai,
        attributes: ["Ten"],
      },
      {
        model: MatHang,
        attributes: ["Ten"],
      }
    ] 
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

// exports.createMatHang = async (req, res) => {
//   const doc = await MatHang.create(req.body);

//   res.json({
//     data: { doc: doc },
//   });
// };

// exports.updateMatHang = async (req, res) => {
//     const id = req.params.id;
//     const doc = await MatHang.findOne({
//         where: { id: id },
//     });
//     doc.Anh = req.body.Anh;
//     doc.Ten = req.body.Ten;
//     doc.SoLuong = req.body.SoLuong;
//     doc.DonVi = req.body.DonVi;
//     doc.Gia = req.body.Gia;
//     doc.NCCId = req.body.NCCId;
//     doc.LoaiId = req.body.LoaiId;
//     doc.save()

//   res.json({
//     data: { doc: doc },
//   });
// };
exports.deleteMatHang = async (req, res) => {
      const id = req.params.id
      const matHang = await MatHang.findOne({
            where: {id: id}
      })
      matHang.destroy();
      res.json({
        data: { doc: id },
      })
}
