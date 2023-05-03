const express = require('express')
const router = express.Router()
var TKBModel = require('../models/TKB.js')

router.post('/TKB', (req, res, next)=>{
    var Class = req.body.class
    var School = req.body.school
    TKBModel.findOne({
        School: School,
        Class: Class
    })
    .then(data=>{
        if (data){
            return res.json(data)
        } else return res.json("NOT FOUND")
    })
    .catch(err=>{
        return res.status(500).json("Error server")
    })
})

module.exports = router