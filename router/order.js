import express from 'express'
import { createOrder, getOrder, getOrderById } from '../controller/order.js';


const orderRouter = express.Router();



orderRouter.post('/', createOrder)
orderRouter.get('/', getOrder)
orderRouter.get('/:id', getOrderById)

export default orderRouter;