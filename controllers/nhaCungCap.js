const NhaCungCap = require("../models/NhaCungCap");

exports.getAllNhaCungCap = async (req, res) => {
  const docs = await NhaCungCap.findAll({
    where: req.query,
  });

  res.json({
    data: { docs },
  });
};

exports.getNhaCungCap = async (req, res) => {
  const id = req.params.id;
  const nhaCungCap = await NhaCungCap.findOne({
    where: { id: id },
  });

  res.json({
    data: { docs: nhaCungCap },
  });
};

exports.createNhaCungCap = async (req, res) => {
  const doc = await NhaCungCap.create(req.body);

  res.json({
    data: { doc: doc },
  });
};

exports.updateNhaCungCap = async (req, res) => {
    const id = req.params.id;
    const doc = await NhaCungCap.findOne({
        where: { id: id },
    });

    doc.Ten = req.body.Ten;
    doc.DienThoai = req.body.DienThoai;
    doc.DiaChi = req.body.DiaChi;
    doc.save()

  res.json({
    data: { doc: doc },
  });
};

exports.deleteNhaCungCap = async (req, res) => {
  const id = req.params.id;
  const nhaCungCap = await NhaCungCap.findOne({
    where: { id: id },
  });
  nhaCungCap.destroy();
  res.json({
    data: { doc: id },
  });
};
