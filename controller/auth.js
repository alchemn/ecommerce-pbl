import prisma from "../utils/prisma.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



const JWT = process.env.JWT_SECRET


export const registerUser = async (req,res) => {
    const {email,password} = req.body;

    const checkUser = await prisma.user.findUnique({
        where: {email:email}

    })
    if(checkUser){
        return res.status(404).json({
            message: "Email Already Register"
        })
    }

    const hashPass = await bcrypt.hash(password,10)

    const newUser = await prisma.user.create({
        data:{
            email:email,
            password:hashPass
        }
        })

        const token = jwt.sign({id: newUser.id, email: newUser.email}, JWT, {expiresIn: '1h'})
    res.status(200).json({
        message: "Register Success",
        newUser,token
    })
}

export const loginUser = async (req,res) => {
    try {
         const {email, password} = req.body

    const findEmail = await prisma.user.findUnique({
        where: {email:email}
    })
    if(!findEmail){
        return res.status(404).json({
            message: "Email Not Found"
        })
    }
    const isMatch =  await bcrypt.compare(password, findEmail.password)
    if(!isMatch){
        return res.status(404).json({
            message: "Password Not Match"
        })
    }
    const token = jwt.sign({
        id: findEmail.id,
        email: findEmail.email,
        role: findEmail.role
    }, JWT)
    res.status(200).json({
        message: "Login Success",
        token
    })
}catch (error) {
    res.status(500).json({
        message: error.message
    })       
    }
}