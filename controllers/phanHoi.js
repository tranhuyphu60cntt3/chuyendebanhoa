const PhanHoi = require("../models/PhanHoi");
const NguoiDung = require("../models/NguoiDung");
const MatHang = require("../models/MatHang");

exports.getAllPhanHoi = async (req, res) => {
  const docs = await PhanHoi.findAll({
    include: [
      {
        model: NguoiDung,
        attributes: ["Ten","Ho"],
      },
      {
        model: MatHang,
        attributes: ["Ten"],
      },
    ],
  });

  res.json({
    data: { docs },
  });
};

exports.getPhanHoi = async (req, res) => {
  const id = req.params.id;
  const phanHoi = await PhanHoi.findOne({
    where: { id: id },
  });

  res.json({
    data: { docs: phanHoi },
  });
};
exports.updatePhanHoi = async (req, res) => {
  const id = req.params.id;
  const doc = await PhanHoi.findOne({
      where: { id: id },
  });

  doc.Ten = req.body.Ten;
  doc.nguoiDung.Ten = req.body.nguoiDung.Ten;
  doc.nguoiDung.Ho = req.body.nguoiDung.Ho;
  doc.NoiDung = req.body.DiaChi;
  doc.save()

res.json({
  data: { doc: doc },
});
};
exports.deletePhanHoi = async (req, res) => {
  const id = req.params.id;
  const phanHoi = await PhanHoi.findOne({
    where: { id: id },
  });
  phanHoi.destroy();
  const doc =  await PhanHoi.findOne({
    where: { id: id },
  });
  res.json({
    data: { doc: doc ? 0 : id },
  });
};
