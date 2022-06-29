const express = require('express')
const router = express.Router();
const nguoiDung = require('../controllers/nguoiDung')

router.route('/').get(nguoiDung.getAllNguoiDung)

router.route('/:id')
.get(nguoiDung.getNguoiDung)
.delete(nguoiDung.deleteNguoiDung)

module.exports = router
