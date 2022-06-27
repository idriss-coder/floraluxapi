import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import api from "./api/api.js"

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/' , (req , res)=>{
   res.send('hello from floralux api server :)')
})

app.use("/api", api)

app.listen(100, () => {
    console.log(`Server started on 100`);
});