const express = require('express')
const app = express()
const port = 3000
var router = express.Router();

router.get('/v1', (req, res) => {
  res.json("Sang user Get " + req.headers.fullname);
})

router.post('/v1', (req, res) => {
  res.json("Sang user post");
})

router.put('/v1', (req, res) => {
  res.json("Sang user put");
})

router.delete('/v1', (req, res) => {
  res.json("Sang user delete");
})

module.exports = router
