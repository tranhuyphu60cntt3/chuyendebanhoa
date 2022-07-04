const express = require('express')
const router = express.Router();
const nhaCungCap = require('../controllers/nhaCungCap')

router.route('/').get(nhaCungCap.getAllNhaCungCap)
.post(nhaCungCap.createNhaCungCap)
router.route('/:id')
.get(nhaCungCap.getNhaCungCap)
.patch(nhaCungCap.updateNhaCungCap)
.delete(nhaCungCap.deleteNhaCungCap)

module.exports = router
