import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in the environment variables.');
    }
    const conn = await mongoose.connect(mongoUri);
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database] Error connecting to MongoDB: ${error.message}`);
    console.warn(`[Database] WARNING: MongoDB connection failed. Enquiry submissions will fail until MongoDB is started.`);
    // Do not call process.exit(1) to keep the dev server running for static testing.
  }
};

export default connectDB;
