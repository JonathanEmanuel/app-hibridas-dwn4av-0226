import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "teacher"],
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const modelUser = mongoose.model('users', userSchema);

export default modelUser;