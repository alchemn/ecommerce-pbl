import express from 'express'
import { createProduct, getProduct } from '../controller/product.js'


const productRouter = express.Router()


productRouter.get('/',getProduct)
productRouter.get('/:id', (req,res) => {
    res.send('Huahauhaua')
})
productRouter.post('/'  , createProduct)
productRouter.put('/:id', (req,res) => {
    res.send('Huahauhaua')
})
productRouter.delete('/:id', (req,res) => {
    res.send('Huahauhaua')
})

export default productRouter;