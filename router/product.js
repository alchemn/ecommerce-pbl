import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct, fileUpload } from '../controller/product.js'
import { upload } from '../utils/uploadFileHandler.js'


const productRouter = express.Router()


productRouter.get('/',getProduct)
productRouter.get('/:id', getProductById)
productRouter.post('/', upload.single('image'), createProduct)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter;
