import heroImg from './assets/hero.png'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Alert from './components/Alert';
function App() {

  function saludar(){
    console.log('Hola, soy el componente Padre');
  }

  const name = 'Aplicación Educativa';

  let logueado = true;
  const subjects = [
    { id: 1, name: 'Lógica de Programación'},
    { id: 2, name: 'Maquetado y Desarrollo Web'},
    { id: 3, name: 'Programación I'}
  ];
  return (
    <>
      <Header title={name} description='Sistema de gestión'> </Header>

        {
          logueado ?  <Dashboard subjects={subjects} fn={ saludar} /> :  <main> <Alert /> </main>
        }

      <Footer />
    </>
  )
}

export default App
