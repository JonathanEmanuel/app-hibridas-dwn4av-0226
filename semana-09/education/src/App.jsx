import reactLogo from './assets/react.svg'

import './App.css'

function normalizar(text){
  const norm = text.trim().toLowerCase();
  return norm;
}

function App() {
  const nombre = 'Jonathan  ';
  const edad = 39;
  let loguedo =  true;
  const titulo = <h1>Plataforma Educativas</h1>;
  const description = <p> Sistema de Gestón Educativa</p>
  const msg = <div> Acceso no permitido </div>;
  const logo = {
    url: reactLogo,
    width: 128,
    description: 'logo de Ract',
    title: 'Logo React'
  }
                    // if             else
  // let mensaje = loguedo ? 'Bienvenido' : 'Acceso no permitido';
  /*
    if( loguedo){
      mensaje= 'Bienvenido';
    } else {
      mensaje = 'Acceso no permitido'
    }
  */
  return (
    <>

      <hr />
        { loguedo ?
                    <> { titulo  } {description }</>  
                  :  
                    <div className='alert-error'> Acceso no permitido </div>
        } 
      <hr />

      <p className='text-green' dataNombre="" > El usuario logueado <br /> es { normalizar(nombre) }  </p>
      <hr />

      {
        loguedo ? (

                <img  
                  src={logo.url} 
                  width={logo.width} 
                  alt={logo.description} 
                  title={logo.title}
                /> 
         ) : ( <> </>)
      }


    </>

  ) 
  
}

function suma(n1, n2){

  const r =  n1 + n2;
  const mensaje = `El resultado es ${r}`
  return  { r, mensaje }
}

export default App
