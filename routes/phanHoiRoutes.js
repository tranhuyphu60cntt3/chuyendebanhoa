const express = require('express')
const router = express.Router();
const phanHoi = require('../controllers/phanHoi')

router.route('/')
.get(phanHoi.getAllPhanHoi)
  // .post(phanHoi,createPhanHoi)
router.route('/:id')
.get(phanHoi.getPhanHoi)
.delete(phanHoi.deletePhanHoi)
    // .patch(phanHoi.updatePhanHoi)
module.exports = router
