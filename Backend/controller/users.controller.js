import User from "../models/users.model.js";
import Post from "../models/posts.model.js";

const createuser = async (req, res) => {
  try {
    const NewUser = await User.create(req.body);

    return res.status(201).json({
      NewUser,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// export default createuser;

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      users,
      message: "Users fetched successfully",
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    // console.log("User:", user);
    return res.status(200).json({
      user,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const Postbyuser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userName);
    const Post = await Post.create(req.body);

    Post.user.push(user._id);

    res.status(201).json(Post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createuser, getUsers, DeleteUser, Postbyuser };
