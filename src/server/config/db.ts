import mongoose from "mongoose";

const { NEXT_PUBLIC_MONGO_URI } = process.env;

const config = {
  isConnected: 0,
};

export default async function db() {
  console.log({ config });
  if (config.isConnected) {
    console.log("Connection was already made!");
    return;
  }
  try {
    const { connection } = await mongoose.connect(
      NEXT_PUBLIC_MONGO_URI as string
    );
    config.isConnected = connection.readyState;
    console.log("Database connected successfully!", connection.readyState);
  } catch (error) {
    console.log("Database connection failed!", error);
  }
}
