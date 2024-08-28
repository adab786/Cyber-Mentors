import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  Name: {
    type: String,
    // required: true,
  },

  Email: {
    type: String,
    // required: true,
  },

  Password: {
    type: String,
    // required: true,
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const User = mongoose.model("User", userschema);

export default User;
