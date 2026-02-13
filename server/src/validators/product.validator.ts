import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  description: z.string().optional(),
  price: z.coerce.number().positive("Price must be positive"),
  image: z.url().optional().nullable(),
});

export type ProductDTO = z.infer<typeof ProductSchema>;
