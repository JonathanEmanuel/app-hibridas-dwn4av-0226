const CareerManager = require('./CareerManager.js');





const manager = new CareerManager()
//manager.addSubject({id: 1, name: 'PWA', semester: 3, hours: 2});
//manager.addSubject({id: 2, name: 'Programación I', semester: 2, hours: 4});
manager.addSubject({id: 5, name: 'Programación II', semester: 3, hours: 4});



const materias = manager.getSubjects();
console.table(materias);

const materia = manager.getSubjecById(2);
console.log(materia);
