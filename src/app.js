import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { api } from "./api/api.js"

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api", api)

app.get("/",(_req, res, _next) => {
    res.status(200).json({
        message: 'hello from floralux api server :)'
    })
})

export {app as app}

