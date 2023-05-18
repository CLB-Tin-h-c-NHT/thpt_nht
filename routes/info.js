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
        Quiz: [],
        score: 0
    })
    .then(data=>{
        res.json("Success")
    })
    .catch(err=>{
        res.status(500).json("Error server")
    })

})

router.put('/point/:id', (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    var idQuiz = req.params.id
    infoModel.findOne({_id : id})
    .then(data=>{
        for (let index = 0; index < data.Quiz.length; index++) {
            const element = data.Quiz[index];
            if (idQuiz == element) return res.json("No update")
        }
        next()
    })
    .catch(err=>{
        return res.status(500).json("Error server!")
    })

}, (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    var idQuiz = req.params.id
    infoModel.findOne({_id : id})
    .then(data=>{
        var Quiz = data.Quiz
        Quiz.push(idQuiz)
        return infoModel.findByIdAndUpdate(id, {
            score: data.score+req.body.point,
            Quiz: Quiz
        })
        .then(data=>{
            res.json("Updated")
        })
        .catch(err=>{
            res.status(500).json("Error server!")
        })
    })
    .catch(err=>{
        res.status(500).json("Error server!")
    })
})

router.delete('/:token', (req, res, next)=>{})

module.exports = router