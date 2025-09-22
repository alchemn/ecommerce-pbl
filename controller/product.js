import prisma from "../utils/prisma.js";



export const getProduct = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;
        const search = req.query.search || '';

        const where = search ? {
            name: {
                contains: search,
                mode: 'insensitive', // Case-insensitive search
            },
        } : {};

        const [product, totalProducts] = await prisma.$transaction([
            prisma.product.findMany({
                where: where,
                skip: skip,
                take: limit,
                orderBy: {
                    createdAt: 'desc' // Sort by creation date, newest first
                }
            }),
            prisma.product.count({ where: where }),
        ]);

        res.status(200).json({
            message: "List Of Product",
            product,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page,
            totalProducts: totalProducts,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

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
    const { name, description, price, userId, categoryId } = req.body; // Tambah categoryId
    const image = req.file ? `/public/uploads/${req.file.filename}` : req.body.image;

    const productData = {
      name: name,
      description: description,
      price: parseFloat(price),
      image: image,
      user: {
        connect: {
          id: Number(userId),
        },
      },
    };

    // Jika categoryId ada, tambahkan ke data produk
    if (categoryId) {
      productData.category = {
        connect: {
          id: Number(categoryId),
        },
      };
    }

    const product = await prisma.product.create({
      data: productData,
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
    console.log("Attempting to delete product with ID:", productId);
    console.log("User making request:", req.user);

    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });
    
    console.log("Existing product:", existingProduct);

    if (!existingProduct) {
      console.log("Product not found");
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if user is authorized to delete this product
    console.log("User role:", req.user.role);
    console.log("Product user ID:", existingProduct.userId);
    console.log("Request user ID:", req.user.id);
    
    if (req.user.role !== "SELLER" && existingProduct.userId !== req.user.id) {
      console.log("Not authorized to delete this product");
      return res.status(403).json({ message: "Not authorized to delete this product" });
    }

    console.log("Deleting product directly (database should handle order relations)...");
    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });
    
    console.log("Deleted product:", deletedProduct);
    
    res.status(200).json({ 
      message: "Product deleted successfully", 
      product: deletedProduct 
    });
  } catch (error) {
    console.error("Delete product error:", error);
    console.error("Error stack:", error.stack);
    
    // Check if it's a Prisma-specific error
    if (error.code) {
      console.error("Prisma error code:", error.code);
      // Common Prisma error codes:
      // P2003: Foreign key constraint failed
      // P2025: Record to delete does not exist
      
      if (error.code === 'P2003') {
        return res.status(400).json({ 
          message: "Cannot delete product because it is associated with existing orders.",
          error: error.toString()
        });
      }
    }
    
    res.status(400).json({ 
      message: error.message || "Failed to delete product",
      error: error.toString()
    });
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
  res.status(500).json({
    message: error.message
  })
 
 } 
}


export const getCalculateProduct = async (req,res) => {
  try {
    const product = await prisma.product.findManyRandom(12,{
      select:{
        name:true,
        price:true,
        image:true
      }
    })
    res.status(200).json({
      message: "Calculate Product",
      product
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  
  }
}


export const totalProduct = async (req,res) => {
  try {
    const data = await prisma.product.count()
    res.status(200).json({
      message: "Total Product",
      data
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}