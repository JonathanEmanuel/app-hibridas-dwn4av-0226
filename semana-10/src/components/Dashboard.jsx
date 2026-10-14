import Alert from "./Alert";

function Dashboard( { subjects, fn }){

    let lista = subjects.map( item =>  <li> { item.name.toUpperCase() } </li> );

    // fn();

    function mostrarAlert(){
        alert('Soy una alerta!');
        fn();
    }

    console.log( lista);
    return(
        <main>
            <h2> Dashboard</h2>

            <ul>
                 { subjects.map( item =>  <li key={item.id}> { item.name } </li> )} 

            </ul>
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