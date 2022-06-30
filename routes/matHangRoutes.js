const express = require('express')
const router = express.Router();
const matHang = require('../controllers/matHang')

router.
  route('/')
  .get(matHang.getAllMatHang)

router
  .route('/:id')
    .get(matHang.getMatHang)
    .delete(matHang.deleteMatHang)

module.exports = router
