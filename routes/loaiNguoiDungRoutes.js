const express = require('express')
const router = express.Router();
const loaiNguoiDung = require('../controllers/loaiNguoiDung')

router.route('/').get(loaiNguoiDung.getAllLoaiNguoiDung)

router.route('/:id')
.get(loaiNguoiDung.getLoaiNguoiDung)
.delete(loaiNguoiDung.deleteLoaiNguoiDung)

module.exports = router
