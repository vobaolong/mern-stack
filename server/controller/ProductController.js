const Product = require('../model/ProductModel')

module.exports = {
  getAll: (req, res) => {
    Product.find({})
      .then(products => res.json(products))

  },
  create: (req, res) => {
    Product.create(req.body)
      .then(res.json({ message: 'Create a new user Successfully!!' }))
  },
  get: (req, res) => {
    Product.findById(req.params.productId)
      .then(user => res.json(user))
  },
  update: (req, res) => {
    Product.findByIdAndUpdate(req.params.userId, req.body)
      .then(res.json({ message: 'Update Successfully!!' }))
      .catch(err => res.json({ message: 'Update Failed!!!' }))
  },

  delete: (req, res) => {
    Product.findByIdAndDelete(req.params.productId, req.body)
      .then(res.json({ message: 'Delete Successfully!!' }))
  }
}