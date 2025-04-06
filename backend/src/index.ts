import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { PrismaClient } from '@prisma/client'
import authRoutes from './routes/auth'
import dashboardRoutes from './routes/dashboard'
import honeyLotRoutes from './routes/honeyLot'

// Load environment variables
dotenv.config()

const app = express()
const prisma = new PrismaClient()
const port = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/dashboard', dashboardRoutes)
app.use('/api/honey-lots', honeyLotRoutes)

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
}) 