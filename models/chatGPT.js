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