import bcrypt from 'bcrypt';

// Importa el Modelo
import Users from "../models/Users.js";

const gestor = new Users();

const getUsers = (req, res) => {
    const data = gestor.getUsers();
    res.json( {message: 'success', data: data });
};
const getUserBy = (req, res) => {
    const { id } = req.params;
    const user = gestor.getUserById(id);
    if( !user){
        res.status(404).json({ message: 'Not Found', data: {}});
        return;
    }
    res.status(200).json( {message: 'success', data: user });
};
const postUser = async (req, res) => {
    const { body } = req;
    const { name, email, password} = body;

    if( !name || !email || !password){
        return res.status(403).send('Faltan Parametros Obligatorios');
    }

    console.log( email, name, password);
    // Hasheamos la contrasña y esparamos
    const passwordHash = await bcrypt.hash( password, 10);
    const id =  gestor.addUser({
        name,
        email,
        password: passwordHash
    })
    res.send(` Usuario Registrado con el ID ${id} `);
};
const deleteUser = (req, res) => {
    const { id } = req.params;
    console.log( {id});
    const status = gestor.deleteUserById(id);
    if( status == 'Not Found'){
        res.status(404).json({ message: 'Not Found', data: {}});
        return;
    }
    res.status(200).json( {message: 'success', data: {} });
};

export { getUsers, getUserBy, postUser, deleteUser};