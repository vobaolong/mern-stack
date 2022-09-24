module.exports = function(app) {
    let userCtrl = require('../controller/UserController')

    app.route('/user/getAll').get(userCtrl.get).post(userCtrl.store)

    app.route('/product/:productId').get(userCtrl.detail).put(userCtrl.update).delete(userCtrl.delete)
}