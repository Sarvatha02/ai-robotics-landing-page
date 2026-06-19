import fs from 'fs/promises';
import path from 'path';
import mongoose from 'mongoose';
import Enquiry from '../models/Enquiry.js';

export const createEnquiry = async (req, res) => {
  const { name, email, phone } = req.body;

  // Check if mongoose is connected
  const isMongoConnected = mongoose.connection.readyState === 1;

  if (isMongoConnected) {
    try {
      const newEnquiry = new Enquiry({ name, email, phone });
      await newEnquiry.save();
      return res.status(201).json({
        success: true,
        message: 'Registration submitted successfully',
        data: newEnquiry
      });
    } catch (error) {
      console.error('[Error] Failed to save to MongoDB. Falling back to local file storage.', error);
    }
  }

  // Fallback to saving locally
  try {
    const dataDir = path.resolve('data');
    // Ensure the data directory exists
    await fs.mkdir(dataDir, { recursive: true });
    
    const filePath = path.join(dataDir, 'enquiries.json');
    let enquiries = [];

    try {
      const data = await fs.readFile(filePath, 'utf8');
      enquiries = JSON.parse(data);
    } catch (err) {
      // File doesn't exist yet, which is expected for the first entry
    }

    const newEnquiry = {
      _id: new mongoose.Types.ObjectId().toString(),
      name,
      email,
      phone,
      createdAt: new Date().toISOString()
    };

    enquiries.push(newEnquiry);
    await fs.writeFile(filePath, JSON.stringify(enquiries, null, 2), 'utf8');

    console.log('[Success] Saved enquiry locally:', newEnquiry);
    
    return res.status(201).json({
      success: true,
      message: 'Registration submitted successfully',
      data: newEnquiry
    });
  } catch (err) {
    console.error('[Critical Error] Local fallback save failed:', err);
    return res.status(500).json({
      success: false,
      message: 'Server error. Unable to process enquiry.'
    });
  }
};
