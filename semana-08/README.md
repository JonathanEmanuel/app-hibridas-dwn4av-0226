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
