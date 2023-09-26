const mongoose = require('mongoose')

const schema = mongoose.Schema({
    titre: String,
    auteur: String,
    genre: String
})

module.exports = mongoose.model('livre', schema)