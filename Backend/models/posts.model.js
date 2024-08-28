import mongoose from "mongoose";

const Postschema = new mongoose.Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  title: {
    type: String,
  },

  description: {
    type: String,
  },

  image: {
    type: String,
  },
});

const Post = mongoose.model("Post", Postschema);

export default Post;
