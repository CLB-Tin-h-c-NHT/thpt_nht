const express = require('express')
const router = express.Router()
var CFSModel = require('../models/cfs.js')
var POSTModel = require('../models/post.js')


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

router.post('/upload/study', (req, res, next)=>{
    var content = req.body.content
    var id_IMG = req.body.id_IMG
    POSTModel.create({
        content: content,
        id_IMG: id_IMG
    })
    .then(data=>{
        res.json("Đăng thành công")
    })
    .catch(err=> {
        res.status(500).json("Error server")
    })
})

var sk = 0
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

router.get('/data/study', (req, res, next)=>{
    POSTModel.countDocuments()
    .then(data=>{
        sk = data-10
        let size = data
        if (sk < 0) sk = 0
        POSTModel.find({})
        .skip(sk)
        .limit(10)
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status.json("Error server")
        })
    })
    .catch(err=>{
        res.status(500).json("Error server")
    })
    
})

router.get('/data/study/:id', (req, res, next)=>{
    var id = req.params.id
    POSTModel.findOne({
        _id: id
    })
    .then(data=>{
        res.json(data)
    })
    .catch(err=>[
        res.status(500).json("Error server")
    ])
})

module.exports = router