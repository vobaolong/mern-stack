const User = require('../model/UserModel')

module.exports = {
    getAll: (req, res) => {
        User.find({})
        .then(users => res.status(200).json(users))

    },
    create: (req, res) => {
        User.create(req.body)
        .then(res.json({message: 'Create a new user Successfully!!'}))
    },
    myProfile: (req, res) => {
        User.findById(req.user.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({message:'Can not find user'}))
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.user.id, req.body)
        .then(res.json({message: 'Update Successfully!!'}))
        .catch(err => res.json({message:'Update Failed!!!'}))
    },

    delete: (req, res) => {
        User.findByIdAndDelete(req.user.id)
        .then(res.status(200).json({message: 'Delete Successfully!!'}))
    }
}