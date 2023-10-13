import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@fly-high/db"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const requestMethod = req.method;
    switch (requestMethod) {
        case 'POST':
            const { email, password, role } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = await prisma.user.create({
                data: {
                    email,
                    password:hashedPassword,
                    role
                }
            })
            const token = jwt.sign({ 
                email:user.email,
                role:user.role
            }, process.env.SECRET_KEY, { expiresIn: '24h' });
            res.status(200).json(token)
            break;
    
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
            break;
    }
  }