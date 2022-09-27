module.exports = function(app) {
    let userCtrl = require('../controller/UserController')
    let productCtrl = require('../controller/ProductController')

    app.route('/user').get(userCtrl.getAll).post(userCtrl.create)

    app.route('/user/:userId').get(userCtrl.get).put(userCtrl.update).delete(userCtrl.delete)
    
    app.route('/product').get(productCtrl.getAll).post(productCtrl.create)

    app.route('/product/:productId').get(productCtrl.get).put(productCtrl.update).delete(productCtrl.delete)

}