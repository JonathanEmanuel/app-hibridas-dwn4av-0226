const fs = require('fs');

class CareerManager {
    subjects = [];
    /* { id: 1, name: 'PWA', semester: 1, hours: 2} */
    constructor(){
        this.subjects = [];
        this.path = './data/subjects.json';
        // Al iniciar leemos lo que esta en el JSON local
        this.loadSubjects();
    }
    addSubject(subject){
        if( !subject.id || !subject.name || !subject.semester || !subject.hours){
            console.log( 'Faltan parametros obligatorios');
            return
        }
        this.subjects.push( subject );
        // Escribimos en el disco
        this.saveSubjects();

    }
    getSubjects(){
        return this.subjects;
    }
    getSubjecById(id){
        const subject = this.subjects.find( s => s.id === id );
        if( !subject){
            console.error('Not Found');
            return {};
        }
        return subject;
    }
    saveSubjects(){
        const data = JSON.stringify(  this.subjects, null, 2 );
        fs.writeFileSync(this.path, data, 'utf-8');
    }
    loadSubjects(){
        // Validamos que exista el JSON
        if( ! fs.existsSync( this.path) ){
            this.subjects = [];
            return;
        }
        const data = fs.readFileSync(this.path, 'utf-8');
        this.subjects = JSON.parse( data );
    }
}

module.exports = CareerManager;