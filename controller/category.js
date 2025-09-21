import prisma from "../utils/prisma.js";

export const getCategory = async (req,res) => {
    try {
        const category = await prisma.category.findMany()
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}