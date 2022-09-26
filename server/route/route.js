module.exports = function(app) {
    let userCtrl = require('../controller/UserController')

    app.route('/user').get(userCtrl.getAll).post(userCtrl.create)

    app.route('/user/:userId').get(userCtrl.get).put(userCtrl.update).delete(userCtrl.delete)
}