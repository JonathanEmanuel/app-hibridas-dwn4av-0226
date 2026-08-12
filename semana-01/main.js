const nombre = 'Jonathan';
console.log(`Hola ${nombre}`);

const persona = {
    nombre: 'José',
    email: 'jose@dv.edu.ar',
    edad: 26,
    mostrarEdad(){  // this es este objeto
        console.log(`Mi edad es ${this.edad}`);
    }
    /*     
    mostrarEdad: function(){
        console.log(`Mi edad es 26`);
    } 
    */
}

persona.edad = 27;

console.log( persona.nombre);
console.table( persona);

persona.mostrarEdad();