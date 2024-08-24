// import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import express from "express";
import getCourses from "./router/course.router.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/courses", getCourses);

const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });

// app.use((req, res) => {
//   res.send("Hello World");
// });

app.get("/users", async (req, res) => {
  try {
    const data = fetch("https://dummyjson.com/products/1");
    const users = await data.json();
    res.json(users);
  } catch (error) {
    console.log("Error:", error.message);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
