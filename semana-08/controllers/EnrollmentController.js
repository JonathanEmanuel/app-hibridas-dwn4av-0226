import Enrollment from "../models/Enrollment.js";
/*
    GET /
    GET /:id
    POST /
*/
class EnrollmentController {
    async getAll( req, res ){
         try {
            const enrollments = await Enrollment.find()
                                            .populate('commission', 'name  modalidad')
                                            .populate('student', 'name email');
            res.json({
                    message: 'success',
                    data: enrollments
            });
        
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Error al obtener las Inscripciones'
            })
        }
    }
    async getById( req, res ){
         try {
            const eid = req.params.eid;
            const enrollment = await Enrollment.findById(eid)
                                            .populate({
                                                path: 'commission',
                                                populate: {
                                                    path: 'subject'
                                                }
                                            })
                                            .populate('student', 'name email');
                    res.json({
                        message: 'success',
                        data: enrollment
                    })
        
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Error al obtener la Inscripción'
            })
        }
    }

    async create( req, res ){
         try {
            // Validar los campos ingresado... Proximamente
            const data = req.body;
            const enrollment = await Enrollment.create(data);
            
            res.status(201).json({
                                message: 'success',
                                data: enrollment
                            });
   
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Error al crear la Inscripción'
            })
        }
    }
}

export default EnrollmentController;