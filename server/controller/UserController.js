const User = require('../model/UserModel')

module.exports = {
    get: (req, res) => {
        User.find({}, function(err, users){
            if (!err) {
                res.json(users)
                return
            }
            res.status(400).json({message: 'ERROR!!!'})
        })
<<<<<<< HEAD
=======
    },
    detail: (req, res) => {

    },

    update: (req, res) => {

    },

    store: (req, res) => {

    },

    delete: (req, res) => {

>>>>>>> e544daf604b087015e2a398536df04ec66c8c36b
    }
}