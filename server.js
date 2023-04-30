const express = require('express')
const app = express()
const port = 3000
var accountModel = require('./models/account.js')
app.use(express.static('public'))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

var router = require('./routerNav.js')

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

})

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port port`)
})