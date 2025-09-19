import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



export const getProduct = async (req, res) => {
    try {
        const product = await prisma.product.findMany()
        res.status(200).json({message: "List Of Product", product})
    }catch (error) {
        res.status(400).json({ message: error.message})
    }
}

export const getProductById = async (req, res) => {
    try {
      const product = await prisma.product.findUnique({
        where:{id : Number(req.params.id)
        }
    })
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
      const { name,description,price,userId } = req.body;
      const image = req.file ? `/public/uploads/${req.file.filename}` : req.body.image;
      const product = await prisma.product.create({
        data:{
            name:name,
            description:description,
            price:price,
            image:image,
            user: {
              connect: {
                id: Number(userId)
              }
            }
        }
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const product = await prisma.product.update({
        where: { id: Number(req.params.id) },
        data: {
          name: name,
          description: description,
          price: price,
        },
      });
      res.status(200).json(product)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
      const product = await prisma.product.delete({
        where: { id: Number(req.params.id) },
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const fileUpload = async (req,res) => {
  const files = req.files
  if(!files || files.length === 0) {
    return res.status(404).json({
      message: "File Not Found"
    })
  }
  const imageFile = files.map(file => file.filename);
  const pathImageFile = imageFile.map(filename => `/public/uploads/${filename}`)
  res.status(200).json({
    message: "File Sucsess Uploaded",
    image: pathImageFile
  })
}
