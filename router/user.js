import express from 'express'
import { addProfile, createuser, getuser } from '../controller/user.js'


const userRouter = express.Router()


userRouter.get('/', getuser)
userRouter.get('/:id', (req,res) => {
    res.send('Huahauhaua')
})
userRouter.post('/', createuser)
userRouter.put('/profile/', addProfile)
userRouter.put('/:id', (req,res) => {
    res.send('Huahauhaua')
})
userRouter.delete('/:id', (req,res) => {
    res.send('Huahauhaua')
})

export default userRouter;