import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import bcrypt from 'bcrypt';
import Users from "./Users.js";

dotenv.config();

const gestor = new Users();

const app = express();
app.use( express.urlencoded() );
const port = process.env.PORT;
let count = 0;
app.get('/', (request, response) => {
    count++;
    console.log(`Cliente conectado N: ${count}`);
    response.send(`<h1>Hola desde Express.js👋</h1> 
                    <p style='color: teal'>Sos el cliente número ${count} </p>
                    <ul>
                        <li><a href='/subjects'> Listado de materias </a> </li>
                        <li><a href='api/users'> Listado de usuarios </a> </li>
                        <li><a href='/register'> Registro </a> </li>
                        <li><a href='/contact'> Contactos </a> </li>
                    </ul>`);
})

app.get('/subjects', (request, response) => {
    console.log('GET sobre Materias');
    response.send('<h1>Listado de materias</h1>');
})

const register = (request, response) => {
    response.send(`<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>REgistro</title>
                    </head>
                    <body>
                        <form action="/api/users" method="post"  enctype="application/x-www-form-urlencoded">
                            <label for="name">Nombre</label>
                            <input id="name" name="name" type="text">

                            <label for="email">Email</label>
                            <input id="email" name="email" type="email">

                            <label for="password">Contraseña</label>
                            <input id="password" name="password" type="password">

                            <button type="submit">Registrarme</button>
                        </form>
                    </body>
                    </html>`);
}

app.get('/register', register);

app.get('/api/users', (request, response) => {
    const data = gestor.getUsers();
    response.json(data);
})

app.get('/api/users/:id', (request, response) => {
    const { id } = request.params;
    console.log( {id});
    const user = gestor.getUserById(id);
    if( !user){
        response.status(404).json({ message: 'Not Found', data: {}});
        return;
    }
    response.status(200).json( {message: 'success', data: user });
})

app.delete('/api/users/:id', (request, response) => {
    const { id } = request.params;
    console.log( {id});
    const status = gestor.deleteUserById(id);
    if( status == 'Not Found'){
        response.status(404).json({ message: 'Not Found', data: {}});
        return;
    }
    response.status(200).json( {message: 'success', data: {} });
})


app.post('/api/users', async (request, response) => {
    const { body } = request;
    const { name, email, password} = body;

    if( !name || !email || !password){
        return response.status(403).send('Faltan Parametros Obligatorios');
    }

    console.log( email, name, password);
    // Hasheamos la contrasña y esparamos
    const passwordHash = await bcrypt.hash( password, 10);
    const id =  gestor.addUser({
        name,
        email,
        password: passwordHash
    })
    response.send(` Usuario Registrado con el ID ${id} `);
})

console.log(chalk.blue.bgRed.bold('Hello world!'));

const lecturaJSON = ( ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(  () => {
             resolve('Lectura del JSON') 
        }, 3000 );
    } )
}

/* 
// Explicación
console.log('Inicio');

const getUser = async () => {
    const data = await lecturaJSON();
    console.log({data})
}
getUser();
console.log('Fin')

 */

app.listen( port, () => {
    console.log( chalk.green(`Servidor Web en el Puerto ${port}`) );
    // Detenemos el proceso con Ctrl + c
})