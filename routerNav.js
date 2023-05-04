const express = require('express')
const app = express()
const port = 3000
var router = express.Router()
app.use(express.static('public'))
var TKBModel = require("./models/TKB")

router.get('/home', (req, res, next) =>{
    res.sendFile('/index.html', {root: __dirname})
})
  
router.get('/tkb/class10', (req, res, next) =>{
      res.sendFile('public/assets/html/TKB/tkb10.html', {root: __dirname})
})

router.get('/chat', (req, res, next) =>{
    res.sendFile('public/assets/html/chat.html', {root: __dirname})
})

router.get('/bxh', (req, res, next) =>{ 
    res.sendFile('public/assets/html/leaderboard.html', {root: __dirname})
})

router.get('/login', (req, res, next) =>{
    res.sendFile('public/assets/html/login.html', {root: __dirname})
})

router.get('/register', (req, res, next) =>{
    res.sendFile('public/assets/html/register.html', {root: __dirname})
})

router.get('/add/tkb', (req, res, next) =>{
    res.sendFile('public/assets/html/TKB/input_tkb.html', {root: __dirname})
})
module.exports = router