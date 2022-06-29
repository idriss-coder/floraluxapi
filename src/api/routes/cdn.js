import { Router } from "express"
import { extname, resolve } from "path"
import fs from "fs"
import { patcher } from "../../utils/pather.js"

const route = Router()

const relativeImgPath = "src/public/cdn/image"

route.get("/images", (req, res) => {
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

route.get('/images/:img', (req, res) => {
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

export {route as cdnRoute}