import bcrypt from 'bcrypt';

// Importa el Modelo
import Users from "../models/userModel.js";

class UserController {
    async getAll(req, res){
        try {
            const data = await Users.find().select('name email role');
            res.json( {message: 'success', data: data });
        } catch (error) {
            res.status(500).json({
                message: `Error del servidor, al obtener los usuarios`
            })
            console.error(error);
        }
    }

    async getById(req, res){
        try {
            const { uid } = req.params;
            const user = await Users.findById(uid).select('-password')
            if( !user){
                res.status(404).json({ message: 'Not Found', data: {}});
                return;
            }
            res.status(200).json( {message: 'success', data: user });

        } catch (error) {
            res.status(500).json({
                message: `Error del servidor, al obtener el usuario`
            })
            console.error(error);
        }
    }

    async create(req, res){
        try {
            const { body } = req;
            const { name, email, password, role} = body;

            if( !name || !email || !password){
                return res.status(403).send('Faltan Parametros Obligatorios');
            }
            // Verificamos que el usuario (Email) no este ya registrado
            const userExists = await Users.findOne({ email});

            if(userExists){
                return  res.status(409).json({
                    message: `El usuario ya está registrado`
                })
            }

            // Hasheamos la contraseña y esperamos
            const passwordHash = await bcrypt.hash( password, 10);
            const newUser = await Users.create({
                name,
                email,
                password: passwordHash,
                role: role || 'user'
            });


            const id = newUser._id;
            res.json({ message:  ` Usuario Registrado con el ID ${id} ` });
        } catch (error) {
            res.status(500).json({
                message: `Error del servidor, al crear el usuario`
            })
            console.error(error);
        }
    }

    async update(req, res){
        try {
            const { uid } = req.params;
            const { body } = req;
            const { name, email, password, role} = body;

            if( !name || !email || !password){
                return res.status(403).send('Faltan Parametros Obligatorios');
            }

            const data = {
                name,
                email
            }

            if( password){
                data.password  = await bcrypt.hash( password, 10);
            }

            if( role){
                data.role = role;
            }

            const user = await Users.findByIdAndUpdate(uid, data );
            user.save()
            res.status(200).json( {message: 'success', data: {} });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: `Error del servidor, al actualizar el usuario`
            })
        }
    }

    async delete(req, res){
        try {
            const { uid } = req.params;
            const status = await Users.findByIdAndDelete( uid);
            if( status == 'Not Found'){
                res.status(404).json({ message: 'Not Found', data: {}});
                return;
            }
            res.status(200).json( {message: 'success', data: {} });
        } catch (error) {
            res.status(500).json({
                message: `Error del servidor, al eliminar el usuario`
            })
            console.error(error);
        }
    }
}


export default UserController;