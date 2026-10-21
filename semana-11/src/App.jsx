
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { obtenerCarreras } from './service/api.js'

function App() {
  const [ error, setError] = useState('');
  const [ carreras, setCarreras ] = useState( [] );




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
      <h1> Fronend</h1>
      <h2>Fetch API</h2>
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
