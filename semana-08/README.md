# Rutas
POST api/users/profileimage
    |--> Seleccionar la imagen
        |--> Multer recibe el archivo
        |--> Validamos tipo y tamaño
    |--> Guardamos el archivo ./uploads/profiles
    |--> Actualizamos el User (model) profileImage

GET api/users/me
    |--> Retorna la URL de la image ej: http://127.0.0.0:3000/uploads/foto1.jpg

# La funciones
- Subir foto de perfil
- Asociar la foto al usuario autenticado
- Guardar físicamente el archivo
- Guardamos en MongoDB solamente la ruta
- Accedemos al enpoint de la Imagen

1. Modificar el modelo. Agregamos la clave profileImage
2. Creamos el middleware de upload

``` json
 "data": {
        "_id": "6abee36c2f7ade17798841ca",
        "name": "DWN4BP",
        "subject": {
            "_id": "6aa0b70656cbd62c28d24a12",
            "name": "Internet de las Cosas",
            "semester": 4,
            "hours": 2,
            "active": true,
            "modalidad": "presencial",
            "career": "6aa0b45f6dd9b2b730133a61",
            "__v": 0
        },
        "teacher": {
            "profileImage": null,
            "_id": "6ab5a3362d6493600da6d8a5",
            "name": "Juan",
            "email": "JUANIto@dv.edu.ar",
            "password": "$2b$10$/gnO1lgalVzGv54c1I4BpuXPm43ZYeNXa2F7AQVUW9WVh7rL8b3zW",
            "role": "teacher",
            "__v": 0,
            "createdAt": "2026-10-01T22:56:04.157Z"
        },
        "modality": "presencial",
        "active": true,
        "__v": 0
    }
```