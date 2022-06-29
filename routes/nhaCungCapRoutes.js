const express = require('express')
const router = express.Router();
const nhaCungCap = require('../controllers/nhaCungCap')

router.route('/').get(nhaCungCap.getAllNhacungcap)

router.route('/:id')
.get(nhaCungCap.getNhacungcap)
.delete(nhaCungCap.deleteNhacungcap)

module.exports = router
