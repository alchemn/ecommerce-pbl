import express from 'express'
import { createCategory, getcategory, getProductByCategory } from '../controller/kategori.js';
import { upload } from '../utils/uploadFileHandler.js';
import { fileUpload } from '../controller/product.js';

const categoryRouter = express.Router()

categoryRouter.get('/', getcategory)
categoryRouter.get('/:id', getProductByCategory)
categoryRouter.post('/', createCategory)
categoryRouter.post('/upload', upload.single('image'), fileUpload)

export default categoryRouter;