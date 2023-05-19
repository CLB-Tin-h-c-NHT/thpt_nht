const express = require('express')
const router = express.Router()

require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.API_KEY
})


const openai = new OpenAIApi(configuration)

router.post('/chatGPT', async (req, res, next)=>{
    try{
        const prompt = req.body.prompt
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: prompt}]
        })
        res.send({
            message: response.data.choices[0].message.content
        })
    } catch(err){
        console.log(err)
        res.status(500).send("Error server")
    }
})

module.exports = router