import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const artSchema = new Schema({
  title: { type: String },
  image: { type: String },
  comments: [{ type: mongoose.Schema.Types.ObjectId }],
  likes: [{ type: mongoose.Schema.Types.ObjectId }],
});

const Art = await mongoose.model(artSchema);
export default Art;
