import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://Futureminds:FutureMinds-152026@cluster0.6zmsk3t.mongodb.net/?appName=Cluster0';
    const conn = await mongoose.connect(mongoUri);
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database] Error connecting to MongoDB: ${error.message}`);
    console.warn(`[Database] WARNING: MongoDB connection failed. Enquiry submissions will fail until MongoDB is started.`);
    // Do not call process.exit(1) to keep the dev server running for static testing.
  }
};

export default connectDB;
