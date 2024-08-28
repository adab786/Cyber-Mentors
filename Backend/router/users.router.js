import express from "express";
import {
  createuser,
  getUsers,
  DeleteUser,
  Postbyuser,
} from "../controller/users.controller.js";

const Userrouter = express.Router();

// import users from '../controller/users.controller.js';

Userrouter.post("/", createuser);
Userrouter.get("/", getUsers);
Userrouter.delete("/:id", DeleteUser); // Delete user by id
Userrouter.post("/:userName/create/post", Postbyuser); // Create post by user)

export default Userrouter;
