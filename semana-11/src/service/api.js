const API_URL = import.meta.env.VITE_API_URL;

export async function obtenerCarreras(){
    const response = await fetch(`${API_URL}/api/career`);
    
    if( !response.ok){
        throw new Error("No se pudo obtener las carreras");
    }

    return response.json();
}

export async function iniciarSesion(email, password){
    const response = await fetch( `${API_URL}/api/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password})
                }
            );
    const data = await response.json()

    if( !response.ok){
        throw new Error("No se pudo iniciar Sesión");
    }

    return data;
}

export async function registrarUsuario(name, email, password){
    const response = await fetch(`${API_URL}/api/auth/register`,  {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password})
                });
    const data = await response.json()

    if( !response.ok){
        throw new Error("No se pudo realizar el registro");

    }
    return data;
}