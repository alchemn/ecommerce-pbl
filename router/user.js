import express from 'express'
import { addProfile, createuser, deleteuser, getuser, getuserById, updateProfile, updateuser } from '../controller/user.js'


const userRouter = express.Router()


userRouter.get('/', getuser)
userRouter.get('/:id', getuserById)
userRouter.post('/', createuser)
userRouter.post('/profile', addProfile)
userRouter.put('/profile/:id', updateProfile)
userRouter.put('/:id', updateuser)
userRouter.delete('/:id', deleteuser)

export default userRouter;