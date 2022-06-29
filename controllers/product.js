// const Product = require('../models/Product')

// exports.getAllProduct = async (req, res) => {
//   const product = await Product.findAll({
//       where: req.query
//   })

//   res.json({
//       data: {docs: product}
//   })
// }

// exports.getProduct = async (req, res) => {
//       const id = req.params.id
//       const product = await Product.findOne({
//           where: {id: id}
//       })
    
//       res.json({
//           data: {docs: product}
//       })
//     }

// exports.deleteProduct = async (req, res) => {
//       const id = req.params.id
//       const product = await Product.findOne({
//             where: {id: id}
//       })
//       product.destroy();
//       res.json({
//             data: {docs: product}
//       })
// }
