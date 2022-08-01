const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

const SongModel = mongoose.model('Songs', songSchema)
module.exports = SongModel