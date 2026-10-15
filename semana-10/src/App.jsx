import heroImg from './assets/hero.png'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Alert from './components/Alert';

import { useState } from 'react'

// Repaso
const persona = { nombre: 'Juan', apellido: 'Ruiz'};
const { nombre, apellido } = persona;
console.log(nombre, apellido);

const lista = ['Julieta', 21, true, function(){ alert('hola!') }];
const [ dato1, dato2, dato3, fn1] = lista;
console.log( dato1, dato2, dato3, fn1);
// fn1();

function App() {
  const [ logueado, setLogueado ] = useState(false);

  function saludar(){
    console.log('Hola, soy el componente Padre');
  }

  const name = 'Aplicación Educativa';

  const subjects = [
    { id: 1, name: 'Lógica de Programación'},
    { id: 2, name: 'Maquetado y Desarrollo Web'},
    { id: 3, name: 'Programación I'}
  ];

  function iniciar(){
    console.log( logueado );
    alert('Iniciando sesión');
    setLogueado( true );
    console.log( logueado );
    
  }

  function salir(){
    alert('Cerrando sesión');
    setLogueado( false );
  }
  return (
    <>
      <Header title={name} description='Sistema de gestión académica'> </Header>

      <div>
        <button onClick={ iniciar } type='button'>Iniciar Sesión</button>
        <button onClick={ salir } type='button'>Cerrar Sesión</button>
      </div>

        {
          logueado ?  
            <Dashboard subjects={subjects} fn={ saludar} /> 
            : 
          <main> <Alert msg='Acceso no permitido' /> </main>
        }

      <Footer />
    </>
  )
}

export default App
