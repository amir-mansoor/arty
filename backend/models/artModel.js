import mongoose from "mongoose";
const { Schema } = mongoose;

const artSchema = new Schema({
  title: { type: String },
  image: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId },
  comments: [
    {
      msg: {
        type: String,
      },

      id: {
        type: mongoose.Schema.Types.ObjectId,
      },

      name: { type: String },
    },
  ],
  likes: [{ type: mongoose.Schema.Types.ObjectId }],
});

const Art = mongoose.model("Art", artSchema);
export default Art;
