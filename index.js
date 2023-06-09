const express = require('express')
const app = express()
// const port = 3000
const jwt = require('jsonwebtoken')
const accountModel = require('./models/account')

var cookieParser = require('cookie-parser')
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.get('/', (req, res, next) =>{
  res.redirect('/home')
})

app.post('/register', (req, res, next)=>{
  var name = req.body.username
  var password = req.body.password
  var role = req.body.role
  var email = req.body.email

  accountModel.findOne({
    username: name
  })
  .then(data=>{
    if (data) {
      res.json("Username da ton tai")
    } else {
      next()
    }
  })
  .catch(err=>{
    res.status(500).json("Server error")
  })
}, (req, res, next)=>{
  var name = req.body.username
  var password = req.body.password
  var role = req.body.role
  var email = req.body.email
  accountModel.findOne({
    username: name
  })
  .then(data=>{
    if (data) {
      res.json("Email da ton tai")
    } else {
      next()
    }
  })
  .catch(err=>{
    res.status(500).json("Server error")
  })
},(req, res, next)=>{
  var name = req.body.username
  var password = req.body.password
  var role = req.body.role
  var email = req.body.email
  accountModel.create({
    username: name,
    password: password,
    role: role,
  })
  .then(data=>{
    res.json("data")
  })
  .catch(err=>{
    res.json('Server error')
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

app.get('/profile', (req, res, next)=>{
  try{
    var token = req.cookies.token
    var answer = jwt.verify(token, 'it_nht')
    if (answer){
      next()
    }
  } catch (error){
    return res.redirect('/login')
  }
}, (req, res, next)=>{
  res.sendFile('public/assets/html/profile_hs.html', {root: __dirname})
})

app.get('/profile/:id', (req, res, next)=>{
  try{
    var token = req.cookies.token
    var answer = jwt.verify(token, 'it_nht')
    if (answer){
      next()
    }
  } catch (error){
    return res.redirect('/login')
  }
}, (req, res, next)=>{
  res.sendFile('public/assets/html/profile_hs.html', {root: __dirname})
})


app.use('/data', require('./routes/getLeaderBorad'))
app.use('/data', require('./routes/getTKB'))
app.use('/add/tkb', require('./routes/updateTKB'))
app.use('/', require('./routerNav.js'))
app.use('/', require('./routes/info'))
app.use('/', require('./routes/gravatar'))
app.use('/api', require('./routes/quiz'))
app.use('/api', require('./routes/posts'))
app.use('/api', require('./models/chatGPT'))



app.listen(3000, () => {
  console.log(`Example app listening on port`, 3000)
}) 