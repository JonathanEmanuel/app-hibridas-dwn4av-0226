const fs = require('fs');
const os = require('os');

console.log( 'Plataforma', os.platform());
console.log( `CPUs `, os.cpus().length);

const path = 'notas.txt';
console.log('Inicio del Script');
const texto = 'La nota fue modificada';


// Leemos el Archivo
fs.readFile(path, 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
    // Escribimos el archivo
    fs.writeFile(path, texto, (err )=> {
        if(err){
            console.error(err);
            return;
        }
    })
} );





console.log('Fin del Script');


// Leemos un JSON
const data = fs.readFileSync('data.json', 'utf-8');
const json = JSON.parse(data);
console.log( typeof( json), json );
/*  Recomendación
const data = fs.readFileSync(path, 'utf-8');

console.log(data);

fs.writeFileSync(path, texto);
*/

/* const mostrarData = ( err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
} */

