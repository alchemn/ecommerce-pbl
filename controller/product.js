import prisma from "../utils/prisma.js";



export const getProduct = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
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

    const deletedProduct = await prisma.$transaction(async (tx) => {
      // Delete related orders first
      await tx.order.deleteMany({
        where: { productId: productId },
      });

      // Then delete the product
      const product = await tx.product.delete({
        where: { id: productId },
      });

      return product;
    });

    res.status(200).json(deletedProduct);
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