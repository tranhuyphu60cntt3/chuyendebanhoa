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

exports.deletePhanHoi = async (req, res) => {
  const id = req.params.id;
  const phanHoi = await PhanHoi.findOne({
    where: { id: id },
  });
  phanHoi.destroy();
  res.json({
    data: { docs: phanHoi },
  });
};
