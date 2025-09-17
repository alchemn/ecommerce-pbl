import express from 'express'
import sellerRouter from './router/user.js'
import productRouter from './router/product.js'



const app = express()

app.use(express.json())




const PORT = 9009

app.use('/', (req,res) => {
    res.send("Hello Dunia")
})

app.use('/seller', sellerRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
    console.log(`🚀 Server Deploy at ${PORT}`);
    
})