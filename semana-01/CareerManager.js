class CareerManager {
    subjects = [];
    /* { id: 1, name: 'PWA', semester: 1, hours: 2} */
    constructor(){
        this.subjects = [];
    }
    addSubject(subject){
        if( !subject.id || !subject.name || !subject.semester || !subject.hours){
            console.log( 'Faltan parametros obligatorios');
            return
        }
        this.subjects.push( subject );
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
}

const career = new CareerManager()
career.addSubject({id: 1, name: 'PWA', semester: 3, hours: 2});
career.addSubject({id: 2, name: 'Programación I', semester: 2, hours: 4});
career.addSubject({id: 2, name: 'Programación II', semesterwww: 3});



const materias = career.getSubjects();
console.table(materias);

const materia = career.getSubjecById(2);
console.log(materia);