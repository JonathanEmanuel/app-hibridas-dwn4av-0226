import mongoose from "mongoose";
const careerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio' ],
        trim: true,
        minlength: 3,
        maxlength: 128
    },
    duration: {
        type: Number,
        required: [true, 'La duración es obligatoria' ],
        min: 1,
        max: 3
    },
    active: {
        type: Boolean,
        default: true
    },
})

const Career = mongoose.model('career', careerSchema);
export default Career;