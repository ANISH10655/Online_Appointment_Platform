import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Mern",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(
        `Some error occurred while connecting to the database: ${err}`
      );
    });
};
