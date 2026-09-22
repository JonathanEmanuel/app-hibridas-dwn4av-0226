import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email:String,
    password: String
});

const modelUser = mongoose.model('users', userSchema);

export default modelUser;