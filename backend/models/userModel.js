import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  arts: [],
});

userSchema.methods.matchPassword = async function (password) {
  // console.log(this.password);
  return await bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;