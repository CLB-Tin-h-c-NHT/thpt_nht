const express = require('express')
const app = express()
var router = express.Router()
app.use(express.static('public'))
var accountModel = require('./models/account.js')
const jwt = require('jsonwebtoken')

var checkAdmin = (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    accountModel.findOne({_id : id})
    .then(data=>{
        if (data.role === "Student" || data.role === "Teacher") res.send("<h1>Bạn không đủ quyền try cập</h1>");
        else next()
    })
    .catch(err=>{
        res.status(500).json("Error server!")
    })
}

var checkNotStudent = (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    accountModel.findOne({_id : id})
    .then(data=>{
        if (data.role === "Student") res.send("<h1>Bạn không đủ quyền try cập</h1>");
        else next()
    })
    .catch(err=>{
        res.status(500).json("Error server!")
    })
}

router.get('/home', (req, res, next) =>{
    try{
        var token = req.cookies.token
        var answer = jwt.verify(token, 'it_nht')
        if (answer){
          next()
        }
      } catch (error){
        return res.redirect('/login')
    }
}, (req, res, next) =>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    accountModel.findOne({_id : id})
    .then(data=>{
        if (data.role === "Student"){
            res.sendFile('/index.html', {root: __dirname})
        } else if (data.role === "Teacher"){
            res.sendFile('public/assets/html/teacher.html', {root: __dirname})
        } else {
            res.sendFile('public/assets/html/admin.html', {root: __dirname})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json("Error server!")
    })
})
  
router.get('/tkb', (req, res, next) =>{
      res.sendFile('public/assets/html/TKB/tkb.html', {root: __dirname})
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
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    accountModel.findOne({_id : id})
    .then(data=>{
        if (data.role === "Student") res.send("<h1>Bạn không đủ quyền try cập</h1>");
        else next()
    })
    .catch(err=>{
        res.status(500).json("Error server!")
    })
},(req, res, next) =>{
    res.sendFile('public/assets/html/TKB/input_tkb.html', {root: __dirname})
})

router.get('/quiz', (req, res, next)=>{
    res.sendFile('public/assets/html/menuQuiz.html', {root: __dirname})
})

router.get('/quiz/create', checkNotStudent,(req, res, next)=>{
    res.sendFile('public/assets/html/createQuiz.html', {root: __dirname})
})

router.get('/upload/cfs', checkAdmin,(req, res, next)=>{

    res.sendFile('public/assets/html/admin/cfs.html', {root: __dirname})
})

router.get('/upload/study', checkNotStudent ,(req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    accountModel.findOne({_id : id})
    .then(data=>{
        if (data.role === "Teacher"){
            res.sendFile('public/assets/html/teacher/study.html', {root: __dirname})        
        } else {
            res.sendFile('public/assets/html/admin/study.html', {root: __dirname})
        }
    })
    .catch(err=>{
        res.status(500).json("Error server")
    })
})

router.get('/quiz/:id', (req, res, next)=>{
    res.sendFile('public/assets/html/quiz.html', {root: __dirname})
})

router.get('/post/:id', (req, res, next)=>{
    res.sendFile('public/assets/html/post.html', {root: __dirname})
})

router.get('/chatAI', (req, res, next)=>{
    res.sendFile('public/assets/html/chatGPT.html', {root: __dirname})
})

router.get('/account/create/admin', checkAdmin,(req, res, next)=>{
    res.sendFile('public/assets/html/admin/createAccount.html', {root: __dirname})
})

router.get('/account/create/teacher', checkNotStudent,(req, res, next)=>{
    res.sendFile('public/assets/html/teacher/createAccount.html', {root: __dirname})
})

module.exports = router