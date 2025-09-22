import express from 'express'
import { aiCs } from '../controller/ai.js'

const chatRoute = express.Router()


chatRoute.post("/", aiCs)



export default chatRoute