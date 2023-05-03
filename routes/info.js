const express = require('express')
const router = express.Router()
var infoModel = require('../models/info.js')
const jwt = require('jsonwebtoken')

router.get('/:token', (req, res, next)=>{
    var token = req.params.token
    var id = jwt.verify(token, 'it_nht')
    infoModel.find({_id : id})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json("Loi!")
    })
})

router.post('/:id', (req, res, next)=>{
    var id = req.params.id
    var school = req.body.school
    var Class = req.body.Class
    var username = req.body.username
    var role = req.body.role
    infoModel.create({
        _id : id,
        username: username,
        role: role,
        school: school,
        Class: Class,
        score: 0
    })
    .then(data=>{
        res.json("Thành công")
    })
    .catch(err=>{
        res.status(500).json("Lỗi server")
    })

})

router.put('/:token', (req, res, next)=>{
    var id = jwt.verify(token, 'it_nht')
    var school = req.body.school
    var Class = req.body.Class
    var username = req.body.username
    if (school){
        infoModel.findByIdAndUpdate(id, {
            school: school
        })
    }
    if (Class){
        infoModel.findByIdAndUpdate(id, {
            Class: Class
        })
    }
    if (username){
        infoModel.findByIdAndUpdate(id, {
            username: username
        })
    }
    res.json("Thanh cong")
})

router.delete('/:token', (req, res, next)=>{})

module.exports = router