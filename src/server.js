const express = require("express")
const {app} = require("./app")
const {port} = require("./config/index.js")

const server = express()

server.use(app)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`Test with PM2: pm2 start pm2.config.js`)
})
