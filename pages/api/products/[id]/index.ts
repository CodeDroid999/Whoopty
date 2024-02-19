import { prisma } from "@/prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Products } from "..";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products | null>
) {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const data = await prisma.product.findUnique({ where: { id } });

  res.status(200).json(data);
}
