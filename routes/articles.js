import { Router} from "express";

const route = Router()

route.get("/articles", (req, res) => {
    const demo = "img.png"
    const demo2 = "img.png"
    res.status(200).json(
        [{
            id: 1,
            title: "Fleur rose",
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
        }]
    )
})


module.exports = route
