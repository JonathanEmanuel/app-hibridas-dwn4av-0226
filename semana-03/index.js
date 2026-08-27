import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import routerAPI from './routes/index.js';

dotenv.config();

const app = express();
app.use( express.urlencoded() );
app.use( express.json());
app.use(  express.static('public')  );

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

routerAPI(app);


console.log(chalk.blue.bgRed.bold('Hello world!'));


/* 
// Explicación

const lecturaJSON = ( ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(  () => {
             resolve('Lectura del JSON') 
        }, 3000 );
    } )
}
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