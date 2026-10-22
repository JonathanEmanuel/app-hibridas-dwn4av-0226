import { useState, useEffect } from 'react'
import { iniciarSesion } from '../service/api.js'

function Login(){
    const [ error, setError] = useState('');

    // Estados para el formulario
    const [ mensaje, setMensaje ] = useState('Soy un mensaje');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ token, setToken ] = useState('');
    const [ cargando, setCargando ] = useState(false);

    async function handleSubmitLogin(event){
        event.preventDefault();
        setCargando( true);
        setMensaje('');

        try {
            const result = await iniciarSesion( email, password);
            setMensaje( result);
            // Guardamos el token en un estado o contexto
        } catch (error) {
            setMensaje( error.message);
            console.error( error.message);
        } finally {
            setCargando(false)
        }
    }

    return(
        <>
            <h1>Page Login</h1>
            
            <form onSubmit={ handleSubmitLogin}>
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
                <p>{ error}</p>


        </>
    )
}

export default Login