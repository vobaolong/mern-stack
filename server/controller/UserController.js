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
    }
}