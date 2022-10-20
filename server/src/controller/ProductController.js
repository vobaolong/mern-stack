const Product = require('../model/ProductModel')

module.exports = {
  getAll: (req, res) => {
    const param = req.query.sort
    switch (param) {
      case 'ascending':
        Product.find().sort({price: 1})
        .then(products => res.json(products))
        break;
      case 'decrease':
        Product.find().sort({price: -1})
        .then(products => res.json(products))
        break;
      default:
        Product.find()
        .then(products => res.json(products))  
    }
  },


  create: (req, res) => {
    Product.create(req.body)
      .then(res.json({ message: 'Create a new user Successfully!!' }))
  },
  getDetail: (req, res) => {
    Product.findById(req.params.productId)
      .then(user => res.json(user))
  },
  update: (req, res) => {
    const id = req.params.productId
    Product.findByIdAndUpdate(req.params.productId, req.body)
      .then(res.json({ message: 'Update Successfully!!'}))
      .catch(err => res.json({ message: 'Update Failed!!!' }))
    
      console.log(req.body)
  },

  delete: (req, res) => {
    Product.findByIdAndDelete(req.params.productId)
      .then(res.json({ message: 'Delete Successfully!!' }))
  }

}