const express = require('express')
const router = express.Router();
const loai = require('../controllers/loai')

router.route('/').get(loai.getAllLoai)

router.route('/:id')
.get(loai.getLoai)
.delete(loai.deleteLoai)

module.exports = router
