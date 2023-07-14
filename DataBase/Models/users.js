const mongoose = require('mongoose')

const user = new mongoose.Schema(
    {
        name: String,
        emaul: String,
        age:Number
    }
)

const User = mongoose.model('User', user)

module.exports = User