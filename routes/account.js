const express = require('express')
const router = express.Router()
var accountModel = require('../models/account.js')

router.get('/', (req, res, next)=>{
    accountModel.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json("Loi!")
    })
})

router.post('/', (req, res, next)=>{})

router.put('/', (req, res, next)=>{})

router.delete('/', (req, res, next)=>{})

module.exports = router