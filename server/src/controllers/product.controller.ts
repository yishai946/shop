import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "שגיאה בטעינת המוצרים" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "המוצר לא נמצא" });
    }
  } catch (error) {
    res.status(500).json({ error: "שגיאה בטעינת המוצר" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await prisma.product.create({
      data: req.body,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: req.body,
    });

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "שגיאה בעדכון המוצר" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  try {
    await prisma.product.delete({
      where: { id: id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "שגיאה במחיקת המוצר" });
  }
};
