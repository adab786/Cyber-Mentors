import Post from "../models/posts.model.js";
import User from "../models/users.model.js";

export const createPost = async (req, res) => {
  try {
    // const post = await Post.create(req.body);

    // const Postid = post._id;

    // const data = post.user.push(Postid);

    // await post.save(data);
    // console.log("Post:", post);

    const { user, title, description, image } = req.body;
    const post = await Post.create({
      user, // Expecting an array of user IDs
      title,
      description,
      image,
    });

    post.user.push(User._id);

    await post.save(post.user);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
