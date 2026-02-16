import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aayushcoder2023_db_user:MongoDb123@cluster0.mavodru.mongodb.net/cardsDB?retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌", error);
    process.exit(1);
  }
};

export default connectDB;
