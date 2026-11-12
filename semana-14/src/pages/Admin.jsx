import { useState, useEffect } from "react"
import { fetchPrivado, obtenerCarreras } from "../service/api"
function Admin(){

    const [ commissions, setCommissions] = useState([]);
    const endPoint = '/api/commissions'
    useEffect(  () => {
        async function getComsiones() {
            try {
                const res = await fetchPrivado(endPoint)
                console.log(res);
                setCommissions( res.data);
                console.log(commissions)
            } catch (error) {
                console.error(error)
            }
        }

        getComsiones()
    }, [] )
    return (
        <section>
            <h1>Panel del Adminstrador</h1>
            <p> En está sección desarrollaremos el Panel del Administrador</p>

            <h2>Comisiones</h2>
            <div className="container">
            {
                commissions.map( commission=> (
                    <div className="card" key={ commission._id}>
                        <h4>{ commission.subject.name }</h4>´
                        <p>
                            <strong>Docente:</strong>{ commission.teacher.name }
                        </p>
                        <h3>{ commission.name }</h3>
                        <em>{ commission.subject.modalidad}</em>

                    </div>
                ))
            }
            </div>

        </section>
    )
}

export default Admin