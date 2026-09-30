import Career from "../models/Career.js";
import Subject from "../models/Subjects.js";
class CareerController {
    async getAll( req, res ) {
        try {
            const careers = await Career.find()
                                        .select('name duration');

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
    async getById( req, res ) {
        try {
            const cid = req.params.cid;

            const career = await Career.findById(cid);

            if( !career){
                return res.status(404).json({
                    message: 'Carrera no encontrada',
                    data: {}
                })
            }
            res.json({
                message: 'success',
                data: career
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error al obtener las carreras'
            })
        }
    }
    async getSubjectByCareer(req, res) {
        try {
            const cid = req.params.cid;
            const semester = req.query.semester;
            const filter = {  career: cid };

            if( semester) {
                filter.semester = semester;
            }
            console.log( filter);

            const subjects = await Subject
                                        .find(filter)
                                        .sort( { semester: 1} )   // 1 -> Ascendente && -1 -> Descendete
                                        .populate('career');

            res.json({
                message: 'success',
                data: subjects
            })
        } catch (error) {
            console.error(error);
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
    async update(req, res) {
        try {
            const id = req.params.cid;
            const { name, duration} = req.body;

            if( !name || !duration ){
                return res.status(403).send('Faltan Parametros Obligatorios');
            }           

            const career = await Career.findByIdAndUpdate(
                id,
                { name, duration},
                {new: true, runValidators: true}    
            )

            if( !career){
                return res.status(404).json({
                    message: 'Carrera no encontrada'
                })
            }

            res.json({
                message:'success',
                data: career
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error al actualiar la carrera'
            })
        }

    }
    async delete(req, res) {
        try {
            const id = req.params.cid;
            /* 
                A) No vamos a permitir eliminar carreras que tengan asociadas materias
                B) Luego de eliminar la carrera, eliminar todas la materias asociadas
                c) Desasociar las materias
            */
           // Implementamos al Opcion [ A ]
            const subjects = await Subject.find({ career: id});
            // console.log( { subjects});
            if( subjects.length > 0){
                 return res.status(400).json({
                    message: 'No es posible elimnar una Carrera con materias'
                })
            }

          
            const exists = await Career.findByIdAndDelete(id);

            if( !exists){
                return res.status(404).json({
                    message: 'Carrera no encontrada'
                })
            }

            res.json({
                message:'success'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error al eliminar la carrera'
            })
        }
    }

}

export default CareerController