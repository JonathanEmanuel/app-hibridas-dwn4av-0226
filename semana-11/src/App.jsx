
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { obtenerCarreras, iniciarSesion } from './service/api.js'

function App() {
  const [ error, setError] = useState('');
  const [ carreras, setCarreras ] = useState( [] );

  // Estados para el formulario
  const [ mensaje, setMensaje ] = useState('Soy un mensaje');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ token, setToken ] = useState('');
  const [ cargando, setCargando ] = useState(false);

  async function handleSubmit(event){
    event.preventDefault();
    console.log({ email, password});
    setCargando( true);
    setMensaje('');

    try {
      const result = await iniciarSesion( email, password);

      console.log( result);

      setMensaje( result);

    } catch (error) {
      setMensaje( error.message);
      console.error( error.message);
    } finally {
      setCargando(false)
    }


  }


  useEffect( () => {
    async function getCarreras(){
      try {
        const result = await obtenerCarreras();
        setCarreras( result.data);
      } catch (error) {
        console.log(error);
        setError('No pudimos obtener las carreras :(')
      } finally {

      }

    }
    getCarreras();

  }, [])

  return (
    <>
      <h1> Frontend</h1>
      <h2>Fetch API del tipo GET & POST</h2>

      <h4>Formulario de Login</h4>  

      <form onSubmit={ handleSubmit}>
        <label htmlFor='email'> Email</label>
        <input 
            type="email" 
            id='email' 
            value={email}
            onChange={ ( event) => setEmail( event.target.value) }
            required
          />

        <label htmlFor="">Password</label>
        <input 
            type="password" 
            id='password'
            value={password}
            onChange={ ( event) => setPassword( event.target.value) }
            required
        />

        <button disabled={ cargando }
                type='submit'>{ cargando ? 'Ingresando...': 'Ingresar' }</button>

      </form>

      <p> { mensaje }</p>

      <h4>Lista de carreras</h4>

      <p>{ error}</p>
      <ul>
          {
            carreras.map(  carrera => 
                          <li key={ carrera._id}> { carrera.name } </li>
                          )
          }
      </ul>
    </>
  )
}

export default App
