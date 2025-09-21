import prisma from "../utils/prisma.js";

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


export const getCategoryById = async (req,res) => {
  try {
    const {id} = req.params
    const category = await prisma.category.findUnique({
      where: {id: Number(id)}
    })
    res.status(200).json({message: "Category Found", category})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


export const getProductByCategory = async (req,res) => {
  try {
    const category = await prisma.category.findFirst({
    where : {
        name: {
            contains: req.params.name,
            mode: 'insensitive'
        }
    },
    include: {
      products:true
    }
    })
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({
      message: "Product By Category",
      category
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  
  }
}