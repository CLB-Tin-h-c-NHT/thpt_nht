const crypto = require("crypto");
const express = require('express')
const router = express.Router()

function generateAvatarUrl(emailAddress, options = {}) {
    const defaultImage = options.defaultImage || "monsterid";
    const emailHash = crypto
        .createHash("md5")
        .update(emailAddress)
        .digest("hex");
    return `https://www.gravatar.com/avatar/${emailHash}?d=${defaultImage}`;
}

router.get('/data/avt/:email', (req, res, next)=>{
    var email = req.params.email
    return res.json(generateAvatarUrl(email))
})

module.exports = router