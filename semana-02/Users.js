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
        return user.id;
    }
    getUsers(){
        return this.users;
    }
    getUserById(id){
        const user = this.users.find( u => u.id === id);
        return user;
    }
    updateUser(id, user){
        const index = this.users.findIndex( u => u.id === id);
        if( index == -1){
            return 'Not Found';
        }

        if( user.name){
            this.users[index].name = user.name;
        }
        if( user.email){
            this.users[index].email = user.email;
        }

        if( user.password){
            this.users[index].password = user.password;
        }

        this.saveUsers()
    }
    deleteUserById(id){
        const index = this.users.findIndex( u => u.id === id);
        if( index == -1){
            return 'Not Found';
        }
        this.users.splice(index, 1);
        this.saveUsers();
        return 'ok';
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