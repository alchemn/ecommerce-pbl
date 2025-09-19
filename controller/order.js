import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrder = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    if (!productId || !userId) {
      return res.status(400).json({
        message: "productId and userId are required",
      });
    }

    const product = await prisma.product.findUnique({
      where: { id: Number(productId) },
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const order = await prisma.order.create({
      data: {
        user: { connect: { id: Number(userId) } },
        product: { connect: { id: Number(productId) } },
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
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        product: true,
      },
      orderBy: { createdAt: "desc" }, 
    });
    res.status(200).json(orders);
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
