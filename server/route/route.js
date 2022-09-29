module.exports = function (app) {
    let userCtrl = require('../controller/UserController')
    let productCtrl = require('../controller/ProductController')

<<<<<<< HEAD
    app.route('/user/getAll')
        .get(userCtrl.get)
        .post(userCtrl.store)

    app.route('/product/:productId')
        .get(userCtrl.detail)
        .put(userCtrl.update)
        .delete(userCtrl.delete)
    app.route('/product')
        .get(productCtrl.getAll)
        .post(productCtrl.create)

    app.route('/product/:productId')
        .get(productCtrl.get)
        .put(productCtrl.update)
        .delete(productCtrl.delete)
=======
    app.route('/user').get(userCtrl.getAll).post(userCtrl.create)

    app.route('/user/:userId').get(userCtrl.get).put(userCtrl.update).delete(userCtrl.delete)
    
    app.route('/product').get(productCtrl.getAll).post(productCtrl.create)

    app.route('/product/:productId').get(productCtrl.get).put(productCtrl.update).delete(productCtrl.delete)

>>>>>>> 74b02bba427de3c1db00996b952372133dc78837
}