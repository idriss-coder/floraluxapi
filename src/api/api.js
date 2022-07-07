const Router = require("express").Router()
const articlesRoute = require("./routes/articlesRouter.js")
const cdnRoute = require("./routes/cdn.js")


Router.use("/articles", articlesRoute)
Router.use("/cdn", cdnRoute)


module.exports = Router
