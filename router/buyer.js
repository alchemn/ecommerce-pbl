import express from 'express'


const buyRouter = express.Router()


buyRouter.get('/', (req,res) => {
    res.send('Huahauhaua')
})
buyRouter.get('/:id', (req,res) => {
    res.send('Huahauhaua')
})
buyRouter.post(',', (req,res) => {
    res.send('Huahauhaua')
})
buyRouter.put('/:id', (req,res) => {
    res.send('Huahauhaua')
})
buyRouter.delete('/:id', (req,res) => {
    res.send('Huahauhaua')
})

export default buyRouter;