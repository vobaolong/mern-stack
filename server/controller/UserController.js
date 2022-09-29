const User = require('../model/UserModel')

module.exports = {
    getAll: (req, res) => {
        User.find({})
        .then(users => res.json(users))

    },
    create: (req, res) => {
        User.create(req.body)
        .then(res.json({message: 'Create a new user Successfully!!'}))
    },
    getDetail: (req, res) => {
        User.findById(req.params.userId)
        .then(user => res.json(user))
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.userId, req.body)
        .then(res.json({message: 'Update Successfully!!'}))
        .catch(err => res.json({message:'Update Failed!!!'}))
    },

    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId, req.body)
        .then(res.json({message: 'Delete Successfully!!'}))
    }
}