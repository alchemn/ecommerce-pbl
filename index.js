import express from 'express'
import cors from 'cors'
import userRouter from './router/user.js'
import productRouter from './router/product.js'
import orderRouter from './router/order.js'




const app = express()

app.use(cors())
app.use(express.json())
app.use('/public/uploads', express.static('public/uploads'))



const PORT = 9009


app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)

app.listen(PORT, () => {
    console.log(`🚀 Server Deploy at ${PORT}`);
    
})
