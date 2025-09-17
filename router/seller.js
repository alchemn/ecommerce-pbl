import express from 'express'


const sellerRouter = express.Router()


sellerRouter.get('/', (req,res) => {
    res.send('Huahauhaua')
})
sellerRouter.get('/:id', (req,res) => {
    res.send('Huahauhaua')
})
sellerRouter.post(',', (req,res) => {
    res.send('Huahauhaua')
})
sellerRouter.put('/:id', (req,res) => {
    res.send('Huahauhaua')
})
sellerRouter.delete('/:id', (req,res) => {
    res.send('Huahauhaua')
})

export default sellerRouter;