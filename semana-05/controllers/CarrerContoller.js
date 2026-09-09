import Career from "../models/Career.js";
import Subject from "../models/Subjects.js";
class CareerController {
    async getAll( req, res ) {
        try {
            const careers = await Career.find();

            res.json({
                message: 'success',
                data: careers
            })

        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener las carreras'
            })
        }
    }
    async getSubjectByCareer(req, res) {
        try {
            const sid = req.params.sid;
            const subjects = await Subject.find({
                career: sid
            });

            res.json({
                message: 'success',
                data: subjects
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener las materias'
            })
        }
    }
    async create(req, res) {
        try {
            const { name, duration } = req.body;
            const carrer = await Career.create({
                name, duration
            })

            res.status(201).json({
                message: 'success',
                data: carrer
            })

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
    async update(req, res) {}
    async delete(req, res) {}

}

export default CareerController