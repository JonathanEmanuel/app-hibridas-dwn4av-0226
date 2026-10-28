import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Login(){
    const [ error, setError] = useState('');

    // Estados para el formulario
    const [ mensaje, setMensaje ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ cargando, setCargando ] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();


    async function handleSubmitLogin(event){
        event.preventDefault();
        setCargando( true );
        setMensaje('');

        try {
            console.log({email, password})
            // Guardamos el token en un contexto
            await login(email, password);
           // navigate('/');
 
            
        } catch (error) {
            console.error({ error})
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