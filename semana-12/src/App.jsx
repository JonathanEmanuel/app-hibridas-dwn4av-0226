import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'

import Nav from './components/Nav'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'

function App() {
  

  
  return (
    <>
      <h1> Frontend</h1>

      <Nav />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />

        <Route element={ <ProtectedRoute />}>
          <Route path='/perfil' element={ <Perfil />} />
          
        </Route>
        <Route path='*' element={ <NotFound />} />

      </Routes>
    </>
  )
}

export default App
