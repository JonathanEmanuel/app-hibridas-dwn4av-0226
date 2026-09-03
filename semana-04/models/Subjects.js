import mongoose from 'mongoose';
const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        minlength: 3,
        maxlength: 64
    },
    semester: {
        type: Number,
        required: [true, 'El semestre es obligatorio']
    },
    hours: {
        type: Number,
        required: [true, 'Las horas son obligatorias'],
        min: 1,
        max: 100
    },
    active: {
        type: Boolean,
        default: true
    },
    modalidad: {
        type: String,
        enum: ['presencial', 'virtual'],
        default: 'presencial'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Subject = mongoose.model('subject', subjectSchema);
export default Subject

/*
    - Tipo de Dato
    - Campos obligatorios
    - Valores mínimos y máximos
    - valores permitos
    - Valores por defecto
    - Reglas de validación

*/