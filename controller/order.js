import prisma from "../utils/prisma.js";

export const createOrder = async (req, res) => {
  try {
    const { productIds, userId } = req.body;

    if (!productIds || !userId) {
      return res.status(400).json({
        message: "productId and userId are required",
      });
    }

    const product = await prisma.product.findUnique({
      where: { id: Number(productIds) },
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const order = await prisma.order.create({
      data: {
        user: { connect: { id: Number(userId) } },
        product: { connect: { id: Number(productIds) } },
      },
      include: {
        user: true,
        product: true,
      },
    });

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getOrder = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const { userId } = req.query;

    const where = userId ? { userId: Number(userId) } : {};

    const [orders, totalOrders] = await prisma.$transaction([
      prisma.order.findMany({
        where,
        skip: skip,
        take: limit,
        include: {
          user: true,
          product: true,
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.order.count({ where }),
    ]);

    res.status(200).json({
      message: "List of Orders",
      product: orders, // Use 'product' to match the frontend expectation
      totalPages: Math.ceil(totalOrders / limit),
      currentPage: page,
      totalProducts: totalOrders,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getOrderById = async (req, res) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        user: { include: { profile: true } },
        product: true,
      },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const totalOrder = async (req,res) => {
  try {
    const data = await prisma.order.count()
    res.status(200).json({
      message: "Total Order",
      data
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
