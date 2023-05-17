const express = require('express')
const router = express.Router()
var CFSModel = require('../models/cfs.js')

router.post('/upload/cfs', (req, res, next)=>{
    var content = req.body.content
    CFSModel.create({
        content: content
    })
    .then(data=>{
        res.json("Đăng thành công")
    })
    .catch(err=> {
        res.status(500).json("Error server")
    })
})

var sk
router.get('/data/cfs', (req, res, next)=>{
    CFSModel.countDocuments()
    .then(data=>{
        sk = data-6
        let size = data
        if (sk < 0) sk = 0
        CFSModel.find({})
        .skip(sk)
        .limit(6)
        .then(data=>{
            res.json({
                count: size,
                content: data
            })
        })
        .catch(err=>{
            res.status.json("Error server")
        })
    })
    .catch(err=>{
        res.status(500).json("Error server")
    })
    
})

module.exports = router