const express = require('express')
const app = express()
const port = 3000
const jwt = require('jsonwebtoken')
const accountModel = require('./models/account')
var cookieParser = require('cookie-parser')
app.use(express.static('public'))
app.use(cookieParser())

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.post('/register', (req, res, next)=>{
  var name = req.body.name
  var password = req.body.password
  var role = req.body.role
  accountModel.findOne({
    username: name
  })
  .then(data=>{
    if (data) {
      res.json("Username da ton tai")
    } else {
      return accountModel.create({
        username: name,
        password: password,
        role: role
      })
    }
  })
  .then(data=> {
    res.json('Tao tai khoan thanh cong')
  })
  .catch(err=>{
    res.status(500).json('Tao tai khoan that bai')
  })
})

app.post('/login', (req, res, next) =>{
  var username = req.body.username
  var password = req.body.password
  accountModel.findOne({
    username: username,
    password: password,
  })
  .then(data=>{
    if (data){
      var token = jwt.sign({_id: data._id}, 'it_nht')
      return res.json({
          message: 'Thanh cong',
          token: token
      })
    } else {
      return res.json('Tai khoan sai')
    }
  })
  .catch(err=>{
    res.status(500).json("Loi dang nhap")
  })
})

app.get('/profile/:token', (req, res, next)=>{
  try{
    var token = req.cookies.token
    console.log(token)
    var answer = jwt.verify(token, 'it_nht')
    if (answer){
      next()
    }
  } catch (error){
    return res.json("Ban can phai dang nhap")
  }
}, (req, res, next)=>{
  res.sendFile('public/assets/html/profile_hs.html', {root: __dirname})
})

app.use('/', require('./routerNav.js'))
app.use('/api/account/', require('./routes/account.js'))

app.listen(port, () => {
  console.log(`Example app listening on port port`)
})