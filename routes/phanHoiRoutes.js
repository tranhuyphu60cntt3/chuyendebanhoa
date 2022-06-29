const express = require('express')
const router = express.Router();
const phanHoi = require('../controllers/phanHoi')

router.route('/').get(phanHoi.getAllPhanHoi)

router.route('/:id')
.get(phanHoi.getPhanHoi)
.delete(phanHoi.deletePhanHoi)

module.exports = router
