import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import getCourses from "./router/course.router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define async function to connect to MongoDB and start the server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGO_URI}/cybermentor`);
    console.log("Connected to MongoDB");

    // Define routes
    app.use("/courses", getCourses);

    app.get("/users", (req, res) => {
      try {
        const data = [
          {
            name: "John Doe",
            age: 25,
            email: "zdc@gmail.com",
          },
          {
            name: "Jane Doe",
            age: 24,
            email: "adx@gmail.com",
          },
        ];
        res.json(data);
      } catch (error) {
        console.log("Error:", error.message);
        res.status(500).send("Internal Server Error");
      }
    });

    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1); // Exit process with failure code
  }
};

// Start the server
startServer();
