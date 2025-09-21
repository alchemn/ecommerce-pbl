import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct, getLatestProduct,getCalculateProduct, totalProduct} from '../controller/product.js'
import { upload } from '../utils/uploadFileHandler.js'
import {authMiddleware,roleMiddleware} from '../middleware/authMiddleware.js'


const productRouter = express.Router()


productRouter.get('/',getProduct)
productRouter.get('/count',totalProduct)
productRouter.get('/calculate', getCalculateProduct)
productRouter.get('/last', getLatestProduct)
productRouter.get('/:id', getProductById)
productRouter.post('/', authMiddleware,roleMiddleware(["SELLER"]), upload.single('image'), createProduct)
productRouter.put('/:id', authMiddleware,roleMiddleware(["SELLER"]),upload.single('image'), updateProduct)
productRouter.delete('/:id', authMiddleware,roleMiddleware(["SELLER"]), deleteProduct)

export default productRouter;
