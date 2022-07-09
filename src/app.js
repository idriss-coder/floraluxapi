const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const api = require("./api/api.js")
const {generateAccessToken} = require("./utils/jwt.js")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use("/api", api)

const user = {
    id: 1,
    name: "idriss",
    email: "idrisscoder@gmail.com",
    admin: true
}

app.get("/",(_req, res, _next) => {
    console.log(`http://localhost:${port}`)
    console.log(`Test with PM2: pm2 start pm2.config.js`)
    res.status(200).json({
        message: `${generateAccessToken(user)}`
    })
})

module.exports = {app}

