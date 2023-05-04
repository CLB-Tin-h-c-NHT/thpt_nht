const express = require('express')
const router = express.Router()
var infoModel = require('../models/info.js')
const jwt = require('jsonwebtoken')

router.get('/', (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    infoModel.findOne({_id : id})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json("Error server!")
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
        res.json("Success")
    })
    .catch(err=>{
        res.status(500).json("Error server")
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