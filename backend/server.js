import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import Enquiry from './models/Enquiry.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Enable CORS with support for all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Base route for API health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Workshop API is running' });
});

// POST /api/enquiry endpoint
app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validation checks
    const errors = {};

    if (!name || name.trim() === '') {
      errors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!email || email.trim() === '') {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Invalid email format';
      }
    }

    if (!phone || phone.trim() === '') {
      errors.phone = 'Phone number is required';
    } else {
      // Basic phone format check: only digits, spaces, hyphens, and parenthesis, between 7 and 15 digits
      const digitsOnly = phone.replace(/\D/g, '');
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        errors.phone = 'Phone number must be between 7 and 15 digits';
      }
    }

    // If there are validation errors, return 400 Bad Request
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Create a new enquiry record in MongoDB
    const newEnquiry = new Enquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim()
    });

    const savedEnquiry = await newEnquiry.save();

    console.log('[API] New enquiry saved to database:', savedEnquiry);

    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! We will contact you soon.',
      data: {
        id: savedEnquiry._id,
        name: savedEnquiry.name
      }
    });

  } catch (error) {
    console.error('[API] Error handling enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please try again later.'
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`[API] Server is running on port ${PORT}`);
});
