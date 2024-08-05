import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected successfully.");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;