import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { api } from "./api/api.js"
import { generateAccessToken } from "./utils/jwt.js"

const app = express()
app.use(cors())
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

export {app as app}

