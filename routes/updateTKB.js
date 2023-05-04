const express = require('express')
const router = express.Router()
var TKBModel = require('../models/TKB.js')



router.post('/', (req, res, next)=>{
    var School = req.body.School
    var Class = req.body.Class
    TKBModel.findOneAndDelete({
        School: School,
        Class: Class
    })
    .then(data=>{
        next()
    })
    .catch(err=>{
        res.status(500).json("Error server")
    })
},(req, res, next)=>{
    var School = req.body.School
    var Class = req.body.Class
    var T2_Sang = JSON.parse(req.body.T2_Sang)
    var T3_Sang = JSON.parse(req.body.T3_Sang)
    var T4_Sang = JSON.parse(req.body.T4_Sang)
    var T5_Sang = JSON.parse(req.body.T5_Sang)
    var T6_Sang = JSON.parse(req.body.T6_Sang)
    var T7_Sang = JSON.parse(req.body.T7_Sang)

    var T2_Chieu = JSON.parse(req.body.T2_Chieu)
    var T3_Chieu = JSON.parse(req.body.T3_Chieu)
    var T4_Chieu = JSON.parse(req.body.T4_Chieu)
    var T5_Chieu = JSON.parse(req.body.T5_Chieu)
    var T6_Chieu = JSON.parse(req.body.T6_Chieu)
    var T7_Chieu = JSON.parse(req.body.T7_Chieu)
    
    TKBModel.findOne({Class: Class})
    .then(data=>{
        if (data)
            res.json('Đã tồn tại') 
        else 
        TKBModel.create({
            School: School,
            Class: Class,
            Sang:{
                T2:{
                    t1: T2_Sang[0],
                    t2: T2_Sang[1],
                    t3: T2_Sang[2],
                    t4: T2_Sang[3],
                    t5: T2_Sang[4],
                },
                T3:{
                    t1: T3_Sang[0],
                    t2: T3_Sang[1],
                    t3: T3_Sang[2],
                    t4: T3_Sang[3],
                    t5: T3_Sang[4],
                },
                T4:{
                    t1: T4_Sang[0],
                    t2: T4_Sang[1],
                    t3: T4_Sang[2],
                    t4: T4_Sang[3],
                    t5: T4_Sang[4],
                },
                T5:{
                    t1: T5_Sang[0],
                    t2: T5_Sang[1],
                    t3: T5_Sang[2],
                    t4: T5_Sang[3],
                    t5: T5_Sang[4],
                },
                T6:{
                    t1: T6_Sang[0],
                    t2: T6_Sang[1],
                    t3: T6_Sang[2],
                    t4: T6_Sang[3],
                    t5: T6_Sang[4],
                },
                T7:{
                    t1: T7_Sang[0],
                    t2: T7_Sang[1],
                    t3: T7_Sang[2],
                    t4: T7_Sang[3],
                    t5: T7_Sang[4],
                },
            },
            Chieu:{
                T2:{
                    t1: T2_Chieu[0],
                    t2: T2_Chieu[1],
                    t3: T2_Chieu[2],
                    t4: T2_Chieu[3],
                    t5: T2_Chieu[4],
                },
                T3:{
                    t1: T3_Chieu[0],
                    t2: T3_Chieu[1],
                    t3: T3_Chieu[2],
                    t4: T3_Chieu[3],
                    t5: T3_Chieu[4],
                },
                T4:{
                    t1: T4_Chieu[0],
                    t2: T4_Chieu[1],
                    t3: T4_Chieu[2],
                    t4: T4_Chieu[3],
                    t5: T4_Chieu[4],
                },
                T5:{
                    t1: T5_Chieu[0],
                    t2: T5_Chieu[1],
                    t3: T5_Chieu[2],
                    t4: T5_Chieu[3],
                    t5: T5_Chieu[4],
                },
                T6:{
                    t1: T6_Chieu[0],
                    t2: T6_Chieu[1],
                    t3: T6_Chieu[2],
                    t4: T6_Chieu[3],
                    t5: T6_Chieu[4],
                },
                T7:{
                    t1: T7_Chieu[0],
                    t2: T7_Chieu[1],
                    t3: T7_Chieu[2],
                    t4: T7_Chieu[3],
                    t5: T7_Chieu[4],
                }
            }
        })
        .then(data=>{
            res.json("Thành công")
        })
        .catch(err=>{
            res.status(500).json("Lỗi server")  
        })
    })
    .catch(err=>{
        res.status(500).json("Lỗi server")
    })
})

router.delete('/', (req, res, next)=>{
    var School = req.body.School
    var Class = req.body.Class
    
    
})
module.exports = router