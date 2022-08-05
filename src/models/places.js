const mongoose = require('mongoose')

const placeScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

const Place = mongoose.model('Place', placeScheme)

module.exports = Place