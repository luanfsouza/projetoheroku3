const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})

const ContatoModel = mongoose.model('Contatos', songSchema)
module.exports = ContatoModel