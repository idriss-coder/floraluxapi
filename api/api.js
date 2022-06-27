import { Router } from "express";
import {articles} from "../routes/articles.js"
import {cdn} from "../routes/cdn.js"

const route = Router()

route.use("/articles", articles)
route.use("/cdn", cdn)


module.exports = route
