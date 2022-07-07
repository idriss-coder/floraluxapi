const Router = require("express").Router()
const {setArticle, getArticles} = require("../../controllers/articleCtrl.js")
const {patcher} = require("../../utils/pather.js")


Router.get("/", (req, res, _next) => {
    const demo = patcher(req.headers.host, "bouquet-illus.jpeg")
    const demo2 = patcher(req.headers.host, "demo-permut.webp")
    const fakeArticles = [
        {
            id: 1,
            title: "idriss rose",
            slug: "fleur-rose",
            image: demo,
            galery: [demo2],
            price: 2500,
            ctg: "Rose",
            description: "lorem ipsum",
            qtt: 12,
        },
        {
            id: 2,
            title: "Fleur de palme",
            slug: "fleur-rose",
            image: demo2,
            galery: [demo],
            price: 1300,
            ctg: "Rose",
            description: "lorem ipsum",
            qtt: 12,
        },
        {
            id: 3,
            title: "Superbe fleur",
            slug: "superbe-fleur",
            image: demo2,
            galery: [demo],
            price: 1900,
            ctg: "Rose",
            description: "lorem ipsum",
            qtt: 12,
        }
    ]

    getArticles(req, res)
})


module.exports = Router