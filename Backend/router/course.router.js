import express from "express";

import { getCourses, createCourse } from "../controller/course.controller.js";

const router = express.Router();

router.post("/", createCourse);
router.get("/", getCourses);

export default router;
