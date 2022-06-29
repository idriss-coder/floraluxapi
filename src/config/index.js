import dotenv from "dotenv"
dotenv.config()

const endpoint = process.env.API_URL
const port = process.env.PORT
const masterKey = process.env.API_KEY

export {endpoint, port, masterKey}
