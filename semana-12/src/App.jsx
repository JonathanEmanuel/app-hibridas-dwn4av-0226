import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
 

  return (
    <>
      <h1> Frontend</h1>


      <nav>
        <Link to='/'> Inicio</Link> |
        <Link to='/login'> Iniciar Sesión</Link> |
        <Link to='/register'> Crear un cuenta</Link>
      </nav>

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
      </Routes>
    </>
  )
}

export default App
