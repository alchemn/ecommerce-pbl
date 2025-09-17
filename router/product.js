import express from 'express'


const productRouter = express.Router()


productRouter.get('/', (req,res) => {
    res.send('Huahauhaua')
})
productRouter.get('/:id', (req,res) => {
    res.send('Huahauhaua')
})
productRouter.post(',', (req,res) => {
    res.send('Huahauhaua')
})
productRouter.put('/:id', (req,res) => {
    res.send('Huahauhaua')
})
productRouter.delete('/:id', (req,res) => {
    res.send('Huahauhaua')
})

export default productRouter;