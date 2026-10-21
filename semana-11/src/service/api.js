const API_URL = import.meta.env.VITE_API_URL;

export async function obtenerCarreras(){
    const response = await fetch(`${API_URL}/api/career`);
    
    if( !response.ok){
        throw new Error("No se pudo obtener las carreras");
    }

    return response.json();
}




export async function iniciarSesion(){

}