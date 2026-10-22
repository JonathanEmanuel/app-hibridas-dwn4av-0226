
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { obtenerCarreras, iniciarSesion, registrarUsuario } from './service/api.js'

function App() {
  const [ error, setError] = useState('');
  const [ carreras, setCarreras ] = useState( [] );
  // Estados para el formulario de registro
  const [ user, setUser] = useState({
        name: '', 
        email: '', 
        password: '',
        confirmPassword: ''
  });

  async function handleSubmitRegister(event){
    event.preventDefault();

    if( user.password !== user.confirmPassword){
      setError('Las contraseñas no coniciden');
      return;
    }
    console.log( user);

    try {
      const result = await registrarUsuario(user.name, user.email, user.password);
      
      setMensaje(`Usuario Registrado correctamnte`);

      setUser({ name: '', email: '', password: '', confirmPassword: ''});
    } catch (error) {
      setError(error.message);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser( { ...user, [name]: value});
  }

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

      <form onSubmit={ handleSubmitRegister }>
        <label htmlFor="name">Nombre</label>
        <input type="text" name='name'    value={ user.name} onChange={ handleChange } />

        <label htmlFor="email">Email</label>
        <input type="email" name='email'  value={user.email} onChange={ handleChange } />

        <label htmlFor="password">Contraseña</label>
        <input type="password" name='password' value={user.password} onChange={ handleChange }/>

        <label htmlFor="confirmPassword">Repetir Contraseña</label>
        <input type="password" name='confirmPassword' value={user.confirmPassword} onChange={ handleChange } />


        <button type='submit'> Registrarme</button>
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
