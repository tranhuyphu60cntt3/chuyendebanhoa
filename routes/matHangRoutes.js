const express = require('express')
const router = express.Router();
const matHang = require('../controllers/matHang')

router.
  route('/')
  .get(matHang.getAllMatHang)
  // .post(matHang,createMatHang)
router.route('/:id')
    .get(matHang.getMatHang)
    // .patch(matHang.updateMatHang)
    .delete(matHang.deleteMatHang)

module.exports = router
