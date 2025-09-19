import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getcategory = async ( req, res) => {
    try {
        const category = await prisma.category.findMany()
        if(category.length === 0){
            return res.status(404).json({
                message: "Category Not Found"
            })
        }
        res.status(200).json(category)
    }catch (error) {
        res.status(400).json({ message: error.message})
    }

}

export const createCategory = async (req, res) => {
    try {
      const { name } = req.body;
   const image = req.file ? `/public/uploads/${req.file.filename}` : req.body.image;
      const category = await prisma.category.create({
        data: {
          name: name,
          image: image
        },
      });
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }

}