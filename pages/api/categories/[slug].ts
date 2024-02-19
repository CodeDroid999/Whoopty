import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.product.findMany({
    where: { category: { equals: req.query.slug as string } },
  });

  res.status(200).json(data);
}
