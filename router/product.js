import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct, fileUpload } from '../controller/product.js'
import { upload } from '../utils/uploadFileHandler.js'


const productRouter = express.Router()


productRouter.get('/',getProduct)
productRouter.get('/:id', getProductById)
productRouter.post('/'  , createProduct)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)
productRouter.post('/upload', upload.single('image'), fileUpload)

export default productRouter;
