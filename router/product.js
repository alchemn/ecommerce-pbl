import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct, getLatestProduct,getCalculateProduct } from '../controller/product.js'
import { upload } from '../utils/uploadFileHandler.js'


const productRouter = express.Router()


productRouter.get('/',getProduct)
productRouter.get('/calculate', getCalculateProduct)
productRouter.get('/last', getLatestProduct)
productRouter.get('/:id', getProductById)
productRouter.post('/', upload.single('image'), createProduct)
productRouter.put('/:id', upload.single('image'), updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter;
