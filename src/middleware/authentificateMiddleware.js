const Jwt = require("jsonwebtoken")
const { masterKey } = require("../config/index.js")

const authentificateMiddleware = (request, response, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")(1)

    if (!token) {
        return response.status(401).json({
            "code": 401,
            "message": "user not authorized"
        })
    }

    Jwt.verify(token, masterKey, (err, user) => {
        if (err) {
            return response.status(401).json({
                "code": 401,
                "message": "user not authorized"
            })
        }
        req.user = user
        next()
    })
}

module.exports = { authentificateMiddleware }