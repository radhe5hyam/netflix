import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@netflix/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestMethod = req.method;
  switch (requestMethod) {
    case "POST":
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(400).json({ error: "Invalid email or password" });
        }
        const token = jwt.sign(
          {
            email: user.email,
            role: user.role,
          },
          process.env.SECRET_KEY,
          { expiresIn: "24h" }
        );
        res.status(200).json(token);
      }
      res.status(400).json({ error: "Invalid email or password" });
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
