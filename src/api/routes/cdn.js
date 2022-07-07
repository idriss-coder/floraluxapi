const Router = require("express").Router()
const {extname, resolve} = require("path")
const fs = require("fs")
const { patcher } = require("../../utils/pather.js")

const relativeImgPath = "src/public/cdn/image"

Router.get("/images", (req, res) => {
    const images = [
        { 
            id: 1,
            path: patcher(req.headers.host,"demo-ctg.jpg")
        },     
        { 
            id: 2,
            path: patcher(req.headers.host, "demo-ctg.jpg")
        }
    ]
    res.status(200).send(images)
})

Router.get('/images/:img', (req, res) => {
    const query = req.query
    const params = req.params

    const image = resolve(relativeImgPath, params.img)
    const notFound = resolve(relativeImgPath, "notFound.png")

    if(fs.existsSync(image)){
        const ext = extname(image)

        res.type(ext)
        res.status(200).sendFile(image)
    }else{
        res.status(404).sendFile(notFound)
    }
})

module.exports = Router