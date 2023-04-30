const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

var router = require('./router/apiRouterAdmin.js')

router.get('/', (req, res) =>{
  res.json("sang");
})

app.use('/admin/api/', router);

app.listen(port, () => {
  console.log(`Example app listening on port port`)
})