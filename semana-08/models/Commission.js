import mongoose from "mongoose";

const commissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject',
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    modality: {
        type: String,
        enum: ['presencial', 'virtual'],
        default: 'presencial'
    },
    active: {
        type: Boolean,
        default: true
    }
});

const Commission = mongoose.model('commission', commissionSchema);
export default Commission;