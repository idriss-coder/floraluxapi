const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const api = require("./api/api.js")
const {generateAccessToken} = require("./utils/jwt.js")

const app = express()

const corsOptions = {
    origin: "http://localhost:3000/"
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api", api)

const user = {
    id: 1,
    name: "idriss",
    email: "idrisscoder@gmail.com",
    admin: true
}

app.get("/",(_req, res, _next) => {
    res.status(200).json({
        message: `${generateAccessToken(user)}`
    })
})

module.exports = {app}

