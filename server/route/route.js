module.exports = function (app) {
    let userCtrl = require('../controller/UserController')
    let productCtrl = require('../controller/ProductController')

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
}