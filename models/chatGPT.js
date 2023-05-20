const express = require('express')
const router = express.Router()
var infoModel = require('../models/info.js')
var historyChatModel = require('../models/historyChat.js')

const jwt = require('jsonwebtoken')

require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const { data } = require('jquery')

const configuration = new Configuration({
    apiKey: process.env.API_KEY
})


const openai = new OpenAIApi(configuration)

router.post('/chatGPT', (req, res, next)=>{
    var token = req.cookies.token
    var id = jwt.verify(token, 'it_nht')
    var idQuiz = req.params.id
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes()
    var seconds = dateObj.getSeconds()
    infoModel.findOne({_id : id})
    .then(data=>{
        historyChatModel.create({
            username: data.username,
            content: req.body.prompt,
            time: day+'/'+month+'/'+year + ' - ' + hours + ':' + minutes + ':' + seconds
        })
        .then(data=>{})
        .catch(err=>{res.status(500).json("Error server")})
        next()
    })
    .catch(err=>{
        return res.status(500).json("Error server!")
    })
}, async (req, res, next)=>{
    try{
        const prompt = req.body.prompt
        // const response = await openai.createCompletion({
        //     model: "text-davinci-003",
        //     prompt: prompt,
        //     temperature: 1,
        //     max_tokens: 3000,
        //     top_p: 1,
        //     frequency_penalty: 0,
        //     presence_penalty: 0,
        //   });
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: prompt}]
        })
        res.send({
            message: response.data.choices[0].message.content
            // message: response.data.choices[0].text
        })
    } catch(err){
        res.status(500).send("Error server")
    }
})

module.exports = router