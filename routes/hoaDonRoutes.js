const express = require('express')
const router = express.Router();
const hoaDon = require('../controllers/hoaDon')

router.route('/').get(hoaDon.getAllHoaDon)

router.route('/:id')
.get(hoaDon.getHoaDon)
.delete(hoaDon.deleteHoaDon)

module.exports = router
