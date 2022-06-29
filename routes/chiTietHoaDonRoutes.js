const express = require('express')
const router = express.Router();
const chiTietHoaDon = require('../controllers/chiTietHoaDon')

router.route('/').get(chiTietHoaDon.getAllChiTietHoaDon)

router.route('/:id')
.get(chiTietHoaDon.getChiTietHoaDon)
.delete(chiTietHoaDon.deleteChiTietHoaDon)

module.exports = router
