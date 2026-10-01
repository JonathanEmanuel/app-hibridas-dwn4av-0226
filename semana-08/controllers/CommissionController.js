import Commission from "../models/Commission.js";
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
            const data = req.body;
            const commission = await Commission.create(data);

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