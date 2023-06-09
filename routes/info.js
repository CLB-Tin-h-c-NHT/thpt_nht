const express = require('express')
const router = express.Router()
var infoModel = require('../models/info.js')
var historyModel = require('../models/history.js')

const jwt = require('jsonwebtoken')

router.get('/data/user', (req, res, next)=>{
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

router.post('/data/add/:id', (req, res, next)=>{
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

router.put('/edit/point/:id', (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    var idQuiz = req.params.id
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes()
    var seconds = dateObj.getSeconds()
    infoModel.findOne({_id : id})
    .then(data=>{
        historyModel.create({
            username: data.username,
            QuizID: idQuiz,
            time: day+'/'+month+'/'+year + ' - ' + hours + ':' + minutes + ':' + seconds,
            score: req.body.point
        })
        .then(data=>{})
        .catch(err=>{res.status(500).json("Error server")})

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
            score: parseFloat(data.score) +parseFloat(req.body.point),
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

router.put('/edit/info', (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    var name = req.body.name 
    if (name == '') next()
    else {
        infoModel.findByIdAndUpdate(id, {
            username: name
        })
        .then(data=>{
            next()
        })
        .catch(err=>{
            res.status(500).json("Server error")
        })
    }
}, (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    var school = req.body.school 
    if (school == '') next()
    else {
        infoModel.findByIdAndUpdate(id, {
            school: school
        })
        .then(data=>{
            next()
        })
        .catch(err=>{
            res.status(500).json("Server error")
        })
    }
    
},(req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    var Class = req.body.Class 
    if (Class == '') next()
    else {
        infoModel.findByIdAndUpdate(id, {
            Class: Class
        })
        .then(data=>{
            next()
        })
        .catch(err=>{
            res.status(500).json("Server error")
        })
    }
    
}, (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    var email = req.body.email
    if (email == '') res.json("Updated")
    else{
        infoModel.find({
            email: email
        })
        .then(data=>{
            if (!data) res.json("Email đã tồn tại")
            else return  infoModel.findByIdAndUpdate(id, {
                email: email
            })
        })
        .then(data=>{
            res.json("Updated")
        })
        .catch(err=>{
            res.status(500).json("Server error")
        })
    }
})

router.delete('/:token', (req, res, next)=>{})


module.exports = router