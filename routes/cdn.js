import { Router } from "express";
import { extname, resolve } from "path"

const route = Router()

route.get("/images", (req, res) => {
    const images = [
        { 
            id: 1,
            path: "demo-ctg.jpg"
        },     
        { 
            id: 2,
            path: "demo-ctg.jpg"
        }
    ]
    res.status(200).send(images)
})

route.get('/image/:img', (req, res) => {
    const query = req.query
    const params = req.params

    const image = resolve("public/cdn/image", params.img)
    const ext = extname(image)

    console.log(image)
    res.type(ext)
    res.status(200).sendFile(image)
})

module.exports = route