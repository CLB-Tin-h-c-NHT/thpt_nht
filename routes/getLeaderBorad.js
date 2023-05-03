const express = require('express')
const router = express.Router()
var infoModel = require('../models/info.js')

router.get('/userScore', (req, res, next)=>{
    infoModel.find({}).sort({
        score: -1
    })
    .then (data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})


module.exports = router