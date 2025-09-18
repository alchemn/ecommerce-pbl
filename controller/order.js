import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrder = async (req, res) => {
  try {
    const { productIds, userId } = req.body;

    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
      return res.status(400).json({
        message: "productIds must be a non-empty array.",
      });
    }

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds.map((id) => Number(id)),
        },
        
      },
    });

    if (products.length !== productIds.length) {
      return res.status(404).json({
        message: "One or more products not found.",
      });
    }

    const order = await prisma.order.create({
      data: {
        user: {
          connect: {
            id: Number(userId),
          },
        },
        product: {
          connect: productIds.map((id) => ({ id: Number(id) })),
        },
      },
      include: {
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
    const order = await prisma.order.findMany({
      include: {
        user: true,
        product: true,
      },
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        user: {
          include: {
            profile: true,
          },
        },
        product: true,
      },
    });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};