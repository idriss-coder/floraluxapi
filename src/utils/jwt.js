const Jwt = require("jsonwebtoken")
const { masterKey } = require("../config/index.js")

const generateAccessToken = (user, time='30m') => {
    return Jwt.sign(user, masterKey, {expiresIn: time})
}

module.exports = { generateAccessToken }
 