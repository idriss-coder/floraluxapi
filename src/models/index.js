import { Sequelize } from "sequelize"
import { DataTypes } from "sequelize/types"
import { dbHost, dbUser, dbName, dbPass, dbDialect } from "../config/index.js"

const pool = {
    min: 0,
    max: 5,
    acquire: 3000,
    idle: 10000
}

const sequelize = new Sequelize(
    dbName,
    dbUser,
    dbPass,
    {
        host: dbHost,
        dialect: dbDialect,
        operatorsAlicases: false,

        pool:{
            max: pool.max,
            min: pool.min,
            acquire: pool.acquire,
            idle: pool.idle
        }
    }
)

sequelize.authenticate()
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log('Error' + err)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.articles = require("./articlesModel.js")(sequelize, DataTypes)

db.sequelize.sync({force: false})
    .then(() => {
        console.log("connected to database")
    })
    .catch(() => {})

export {db}