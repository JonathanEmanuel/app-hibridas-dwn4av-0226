import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({

    commission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'commission',
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true

    },
    enrollmentData: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'cancelled'],
        default: 'active'
    }
});

const Enrollment = mongoose.model('enrollment', enrollmentSchema);
export default Enrollment;