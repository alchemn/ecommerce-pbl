import prisma from "../utils/prisma.js";



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
      if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
      }
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
    const {name, addres, phone, userId} = req.body
    const profile = await prisma.profile.create({
      data:{
        name:name,
        addres:addres,
        phone:phone,
        user:{
          connect: {
            id: Number(userId)
          }
        }
      }
    })
    res.status(200).json({
      message:"Profile User Created", profile
    })
  } catch (error) {
   res.status(500).json({message:error.message}) 
  }
}


export const updateProfile = async (req,res) => {
  try {
    const {id} = req.params
    const {name,addres,phone,userId} = req.body
    const profile = await prisma.profile.update({
      where: {id: Number(id)},
      data:{
        name:name,
        addres:addres,
        phone:phone,
        user:{
          connect: {
            id: Number(userId)
          }
        }
      }
    })
    res.status(200).json({
      message:"Profile User Updated", profile
    })
  } catch (err) {
    res.status(500).json({message:err.message})
  }
}

export const getProfile = async (req,res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true
      }
    });

    res.status(200).json({
      message: "All User Profiles",
      data: users
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}  
