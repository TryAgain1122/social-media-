import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB")
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default dbConnect;
