const mongoose = require('mongoose')


const todoschema = mongoose.Schema({
    item: String,
    
})

module.exports = mongoose.model('data',todoschema)