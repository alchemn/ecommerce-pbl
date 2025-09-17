import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getuser = async (req, res) => {
    try {
        const user = await prisma.user.findMany()
        res.status(200).json(user)
    }catch (error) {
        res.status(400).json({ message: error.message})
    }
}

export const getuserById = async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where:{id : Number(req.params.id)
        }
    })
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const createuser = async (req, res) => {
    try {
      const { email,password,role} = req.body;
      const userEmail = await prisma.user.findUnique({
        where:{email:email}
      })
      if(userEmail){
        return res.status(400).json({message: "Email Already Register"})
      }
            const user = await prisma.user.create({
        data: {
          email: email,
          password: password,
          role
        },
      });
      res.status(200).json(user);
      }catch (error) {
      res.status(400).json({ message: error.message });
    }
}

export const updateuser = async (req, res) => {
    try {
      const { email, password} = req.body;
      const user = await prisma.user.update({
        where: { id: Number(req.params.id) },
        data: {
          email: email,
          password: password,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const deleteuser = async (req, res) => {
    try {
      const user = await prisma.user.delete({
        where: { id: Number(req.params.id) },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};


export const addProfile = async (req,res) => {
  try {
    const {id} = req.params;
    const userId = await prisma.user.findUnique({
      where:{id:Number(id)}    
    })
    if(!userId){
      res.status(500).json({message:"user not found"})
    }
    const profile = await prisma.profile.create({
      data:{
        userId:userId.id,
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
      }
    })
    res.status(200).json({
      message:"Profile User Created", profile
    })
  } catch (error) {
   res.status(500).json({message:error.message}) 
  }
}


export const loginUser = async (req,res, next) => {
  try {
    if(!req.body.email || !req.body.password){
        return res.stasus(404).json({
          message: "Email and Password Wrong"
        })
    }
    const userEmail = await prisma.user.findUnique({
      where:{email:req.body.email}
    })
    if (userEmail && (await userEmail.matchPassword(req.body.password))){
      res.status(200).json({
        message: "User Login"
      })
    }
    next()
  } catch (error) {
    res.status(500).json({
      message: "Entah apa yang salah"
    })
  }
}