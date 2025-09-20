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
            price:parseFloat(price),
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
      let image;
      if (req.file) {
        image = `/public/uploads/${req.file.filename}`;
      }
      const product = await prisma.product.update({
        where: { id: Number(req.params.id) },
        data: {
          name: name,
          description: description,
          price: parseFloat(price),
          ...(image && { image: image }), // Only include image in data if it's updated
        },
      });
      res.status(200).json(product)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = Number(req.params.id);

    // Delete related orders first
    await prisma.order.deleteMany({
      where: { productId: productId },
    });

    // Then delete the product
    const product = await prisma.product.delete({
      where: { id: productId },
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
  console.log(files);
  
  const imageFile = files.map(file => file.filename);
  const pathImageFile = imageFile.map(filename => `/public/uploads/${filename}`)
  res.status(200).json({
    message: "File Sucsess Uploaded",
    image: pathImageFile
  })
}

export const getLatestProduct = async (req,res) => {
 try {
  const product = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc"
    },
    take: 4
  })
  res.status(200).json({
    message: "Latest Product",
    product
  })
 } catch (error) {
  res.status(405).json({
    message: error.message
  })
 
 } 
}