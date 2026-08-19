import fs from 'fs';
class Users {
    users = [];
    constructor(){
        this.users = [];
        this.path = './data/users.json';
        this.loadUsers();
    }
    addUser(user){
        if( !user.name || !user.email || !user.password){
            console.log( 'Faltan parametros obligatorios');
            return
        }
        const id = crypto.randomUUID();
        user.id = id;
        this.users.push( user );
        // Escribimos en el disco
        this.saveUsers();
        return user;
    }
    getUsers(){
        return this.users;
    }
    saveUsers(){
        const data = JSON.stringify(  this.users, null, 2 );
        fs.writeFileSync(this.path, data, 'utf-8');
    }
    loadUsers(){
        // Validamos que exista el JSON
        if( ! fs.existsSync( this.path) ){
            this.users = [];
            return;
        }
        const data = fs.readFileSync(this.path, 'utf-8');
        this.users = JSON.parse( data );
    }
}

export default Users;