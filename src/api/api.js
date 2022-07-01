const Router = require("express").Router()
const articlesRoute = require("./routes/articles.js")
const cdnRoute = require("./routes/cdn.js")

const route = Router()

route.use("/articles", articlesRoute)
route.use("/cdn", cdnRoute)


module.exports = { route }
