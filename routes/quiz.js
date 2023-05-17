const express = require('express')
const router = express.Router()
var quizModel = require('../models/quiz.js')

router.post('/create/quiz', (req, res, next) =>{
    quizModel.findOne({
        name: req.body.name
    })
    .then (data=>{
        if (data) res.json("Name error")
        else next()
    })
    .catch(err=>{
        res.status(500).json("Server error")
    })
},(req, res, next)=>{
    var quiz = JSON.parse(req.body.quiz)
    var name = req.body.name
    quizModel.create({
        name: name,
        quiz: quiz
    })
    .then(data=>{
        res.json("Thành công")
    })
    .catch(err=>{
        res.status(500).json("Error server")
    })
})



module.exports = router