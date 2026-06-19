import express from 'express';
import { createEnquiry } from '../controllers/enquiryController.js';
import { validateEnquiry } from '../middleware/validation.js';

const router = express.Router();

// POST /api/enquiry - Validate request body and save enquiry
router.post('/', validateEnquiry, createEnquiry);

export default router;
