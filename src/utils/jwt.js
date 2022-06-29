import Jwt from "jsonwebtoken"
import {masterKey} from "../config/index.js"


const generateAccessToken = (user, time='30m') => {
    return Jwt.sign(user, masterKey, {expiresIn: time})
}

export { generateAccessToken }
