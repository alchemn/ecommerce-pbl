import express from 'express'
import { createOrder, getOrder, getOrderById } from '../controller/order.js';
import { authMiddleware, roleMiddleware } from '../middleware/authMiddleware.js';


const orderRouter = express.Router();



orderRouter.post('/',authMiddleware, createOrder)
orderRouter.get('/', authMiddleware,roleMiddleware(["SELLER"]),getOrder)
orderRouter.get('/:id', authMiddleware,getOrderById)

export default orderRouter;