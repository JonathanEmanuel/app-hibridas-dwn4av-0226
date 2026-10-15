import Alert from "./Alert";
import Card from "./Card";
import Cards from "./Cards";
import Cards2 from "./Cards2";
function Dashboard( { subjects, fn }){

    let lista = subjects.map( item =>  <li> { item.name.toUpperCase() } </li> );

    // fn();

    function mostrarAlert(){
        alert('Soy una alerta!');
        fn();
    }
    const data = [
        { id: 1, title: 'Alumnos', description: '124 Activos'},
        { id: 2, title: 'Materias', description: '15 Activas'},
        { id: 3, title: 'Inscripciones', description: '256 Activas'},
        { id: 4, title: 'Asistencias', description: '75%'}
    ]
    console.log( lista);
    return(
        <main>
            <h2> Dashboard</h2>
        <Card title="Panel Principal" description="Resumen general del sistama"/>
        
        <Cards >
           {
                data.map( item =>  
                        <Card 
                            key={item.id}
                            title={ item.title } 
                            description={ item.description} 
                        />)
            }
        </Cards>


            <hr />
            <Cards2 data={data} />

        {/* 
            <ul>
                 { subjects.map( item =>  <li key={item.id}> { item.name } </li> )} 

            </ul>
        */}

            <hr />
            <button onClick={  mostrarAlert } >Llamado al Padre App.jsx</button>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem nisi veniam, corrupti aspernatur expedita officiis molestias fugit dolores optio dicta voluptates, animi ipsam possimus eaque similique vel necessitatibus saepe quisquam.
            </p>
            <Alert msg="Alerta" type="danger" number={5} />
            <Alert msg="Notificación" number="2"/>
            <Alert msg="Sin acceso" number="3"/>

        </main>
    )
}

export default Dashboard;