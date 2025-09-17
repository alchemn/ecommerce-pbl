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
      const { email,password,role } = req.body;
      const user = await prisma.user.create({
        data: {
          email: email,
          password: password,
          role: role,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

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