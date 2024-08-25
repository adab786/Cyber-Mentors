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

const PORT = process.env.PORT || 5000;

mongoose
  .connect(`${process.env.MONGO_URI}/cybermentor`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
app.use("/courses", getCourses);

app.get("/course", (req, res) => {
  const data =
    await[
      ({
        _id: "66cb08f5e4ce4526c5771dbc",
        title: "Introduction to Graphic Design",
        Image: "https://example.com/graphic-design.jpg",
        instructor: "Merlina Port",
        description:
          "Learn the basics of graphic design including tools, techniques, and industry best practices. Perfect for beginners looking to get started in design.",
        schedule: "Weekdays, 10:00 AM - 12:00 PM",
        price: 104.7,
      },
      {
        _id: "66cb097ee4ce4526c5778239",
        title: "Advanced Python Programming",
        Image: "https://example.com/python-programming.jpg",
        instructor: "Darbie Faltskog",
        description:
          "An advanced course on Python programming covering topics such as data analysis, machine learning, and web development. Ideal for those looking to deepen their Python knowledge.",
        schedule: "Weekends, 2:00 PM - 5:00 PM",
        price: 64.27,
      })
    ];

  res.json(data);
});
// app.get("/users", (req, res) => {
//   // console.log("Received request at /users");
//   try {
//     const data = [
//       {
//         name: "John Doe",
//         age: 25,
//         email: "zdc@gmail.com",
//       },
//       {
//         name: "Jane Doe",
//         age: 24,
//         email: "adx@gmail.com",
//       },
//     ];
//     res.json(data);
//     // res.send("data");
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
