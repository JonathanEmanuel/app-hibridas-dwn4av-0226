import { useState, useEffect } from 'react'
import { obtenerCarreras } from '../service/api.js'


function home(){
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

    return(
        <>
            <h1>Page home</h1>
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

export default home