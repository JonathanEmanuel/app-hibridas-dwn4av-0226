import Commission from "../models/Commission.js";
import mongoose from 'mongoose';
/*
    GET /
    GET /:id
    POST /
*/
class CommissionController {
    async getAll(req, res){
        try {
            const commissions = await Commission.find()
                                            .populate('subject', 'name semester modalidad')
                                            .populate('teacher', 'name');
            res.json({
                message: 'success',
                data: commissions
            })

        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Error al obtener las comisiones'
            })
        }
    }

    async getById(req, res){
        try {
            const cid = req.params.cid;

            const commission = await Commission.findById(cid)
                                                .populate({
                                                    path: 'subject',
                                                    populate: {
                                                        path: 'career'
                                                    }
                                                })
                                                .populate('teacher', '-password');


            if( !commission){
                return res.status(404).json({
                    message: 'Comisión no encontrada',
                    data: {}
                })
            }
            res.json({
                message: 'success',
                data: commission
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Error al obtener la comision'
            })
        }
    }

    async create(req, res){
        try {
            // Validar los campos ingresado... Proximamente
            const { name, subject, teacher, modality, active }  = req.body;
            // 1° Campos obligatorios
            if( !name || !subject) {
                return res.status(400).json({
                    message: 'Los campos name y subject son oblogatorios'
                })
            }
            // 2° Validamos nombre
            if(  typeof name != 'string' || !name.trim() ){
                return res.status(400).json({
                    message: 'Los campos name debe ser un texto válido'
                })
            }
            // 3° validamos formato
            if( ! mongoose.isValidObjectId( subject) ){
                return res.status(400).json({
                    message: 'El identificador de materia no es válido'
                })
            }


            if( ! mongoose.isValidObjectId( teacher)  && teacher !== '' && teacher != null && teacher != undefined  ){
                return res.status(400).json({
                    message: 'El identificador del profesor no es válido'
                })
            }

            const modalidadesValidas = ['presencial', 'virtual'];

            if( modality !== undefined   && !modalidadesValidas.includes( modality)) {
                return res.status(400).json({
                    message: 'La modalidad debe ser presencial o virtual'
                })
            }

            if( active !== undefined  && typeof active != 'boolean'){
                return res.status(400).json({
                    message: 'El campo acive debe ser un boolean'
                })
            }


            const commission = await Commission.create({
                name: name.trim(),
                subject,
                teacher,
                modality,
                active
            });

            res.status(201).json({
                message: 'success',
                data: commission
            })


        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Error al crear la comision'
            })
        }
    }
}

export default CommissionController;