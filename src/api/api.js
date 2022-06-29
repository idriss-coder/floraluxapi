import { Router } from "express";
import { articlesRoute } from "./routes/articles.js"
import { cdnRoute } from "./routes/cdn.js"

const route = Router()

route.use("/articles", articlesRoute)
route.use("/cdn", cdnRoute)


export { route as api }
