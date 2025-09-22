import express from 'express'
import { addProfile, deleteuser, getuser, getuserById, updateProfile, getProfile, totalUser } from '../controller/user.js'
import { loginUser, registerUser } from '../controller/auth.js'

import { authMiddleware,roleMiddleware } from '../middleware/authMiddleware.js'

const userRouter = express.Router()

userRouter.get('/', getuser)
userRouter.get('/count', totalUser) // Move this before authMiddleware routes
userRouter.get('/profile',authMiddleware,getProfile)
userRouter.get('/:id',authMiddleware,getuserById)
userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/profile', authMiddleware,addProfile)
userRouter.put('/profile/:id', authMiddleware,updateProfile)
// userRouter.put('/:id', updateuser)
userRouter.delete('/:id', authMiddleware,roleMiddleware(["SELLER"]),deleteuser)

export default userRouter;