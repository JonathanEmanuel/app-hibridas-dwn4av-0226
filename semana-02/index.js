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
    response.send(`Hola desde Express.js👋 Sos el cliente n ${count}`);
})

console.log(chalk.blue.bgRed.bold('Hello world!'));

app.listen( port, () => {
    console.log( chalk.green(`Servidor Web en el Puerto ${port}`) );
    // Detenemos el proceso con Ctrl + c
})