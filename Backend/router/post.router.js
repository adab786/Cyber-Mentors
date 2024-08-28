import express from "express";

const Postrouter = express.Router();

import { createPost, getPosts } from "../controller/posts.controller.js";

Postrouter.post("/", createPost);

Postrouter.get("/", getPosts);

export default Postrouter;
