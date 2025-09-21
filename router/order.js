import express from 'express'
import { createOrder, getOrder, getOrderById, totalOrder } from '../controller/order.js';
import { authMiddleware } from '../middleware/authMiddleware.js';


const orderRouter = express.Router();

orderRouter.get('/count',totalOrder)
orderRouter.get('/', authMiddleware, getOrder)
orderRouter.get('/:id',authMiddleware,getOrderById)
orderRouter.post('/',authMiddleware, createOrder)


export default orderRouter;