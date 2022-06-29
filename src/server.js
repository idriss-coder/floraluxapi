import http from "http"
import {app} from "./app.js"
import { port } from "./config/index.js"

const server = http.createServer(app)
server.listen(port)
