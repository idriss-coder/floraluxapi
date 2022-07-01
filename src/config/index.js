import dotenv from "dotenv"
dotenv.config()

const endpoint = process.env.API_URL
const port = process.env.PORT
const masterKey = process.env.API_KEY
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbDialect = process.env.DB_DIALECT

export {endpoint, port, masterKey, dbHost, dbName, dbUser, dbPass, dbDialect}
