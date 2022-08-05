const express = require('express')
const Review = require('../models/review')

const router = express.Router()
router.post('/review', async (req, res)=>{
    const review = new Review(req.body)
    try{
        await review.save()
        res.status(201).send(review)
    } catch(e) {
        res.status(400).send(e)
    }
})