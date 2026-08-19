import express from 'express';
import chalk from 'chalk';
import Users from "./Users.js";
const gestor = new Users();

const app = express();
const port = 3000;
let count = 0;
app.get('/', (request, response) => {
    count++;
    console.log(`Cliente conectado N: ${count}`);
    response.send(`<h1>Hola desde Express.js👋</h1> 
                    <p style='color: teal'>Sos el cliente número ${count} </p>
                    <ul>
                        <li><a href='/subjects'> Listado de materias </a> </li>
                        <li><a href='/register'> Registro </a> </li>
                        <li><a href='/contact'> Contactos </a> </li>
                    </ul>`);
})

app.get('/subjects', (request, response) => {
    console.log('GET sobre Materias');
    response.send('<h1>Listado de materias</h1>');
})

const register = (request, response) => {
    response.send('<h1>Página de registro de usuario</h1>');
}

app.get('/register', register);

app.get('/api/users', (request, response) => {
    const data = gestor.getUsers();
    response.json(data);
})

app.post('/api/users', (request, response) => {
    response.send('Usuario Registrado');
})

console.log(chalk.blue.bgRed.bold('Hello world!'));

app.listen( port, () => {
    console.log( chalk.green(`Servidor Web en el Puerto ${port}`) );
    // Detenemos el proceso con Ctrl + c
})