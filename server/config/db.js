import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/kidrove-workshop';
    const conn = await mongoose.connect(dbUri);
    console.log(`[Success] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`[Warning] MongoDB connection failed: ${error.message}`);
    console.warn('Server will continue to run with local JSON fallback for database operations.');
    return false;
  }
};

export default connectDB;
