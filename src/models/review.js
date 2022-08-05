const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    u_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    placeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        trim: true
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review