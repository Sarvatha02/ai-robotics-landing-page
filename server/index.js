import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import enquiryRoutes from './routes/enquiryRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors({
  origin: '*', // For production, specify client domains.
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// API Routes
app.use('/api/enquiry', enquiryRoutes);

// Root Endpoint (Health check)
app.get('/', (req, res) => {
  res.json({ message: 'AI & Robotics Summer Workshop API is running.' });
});

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'API Endpoint not found.' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Internal Error]:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[Success] Server is running on port ${PORT}`);
  console.log(`[Info] Local endpoint: http://localhost:${PORT}`);
});
