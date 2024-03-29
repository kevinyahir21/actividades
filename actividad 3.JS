const students = [

];

const schoolSubject = [

];

const ratings = [

];

const addStudent = (name) => {
    students.push(name);
    ratings.push([]);
}

const addSchoolSubject = (nameSubject) => {
    schoolSubject.push(nameSubject);
}


const addRatings = (name, subject, rating) => {
    let indexStudent = students.indexOf(name);
    let indexSubject = schoolSubject.indexOf(subject);

    ratings[indexStudent][indexSubject] = rating;
}

const editRating = (name, subject, rating) => {
    let indexStudent = students.indexOf(name);
    let indexSubject = schoolSubject.indexOf(subject);

    ratings[indexStudent][indexSubject] = rating;
}

const printStudents = () => {
    console.log("**Lista de Alumnos**");
    for (let i = 0; i <= students.length - 1; i++){
        console.log(`Nombre : ${students[i]}`);
    }
}

const printSchoolSubject = () => {
    console.log("**Lista de Materias**");
    for (let i = 0; i <= schoolSubject.length - 1; i++){
        console.log(`Materia : ${schoolSubject[i]}`);
    }
}

const printRatings = () => {

    for (let a = 0; a <= students.length - 1; a++){
        for (let b = 0; b <= schoolSubject.length - 1; b++){
            console.log(`Alumno: ${students[a]} Materia: ${schoolSubject[b]} Calificación: ${ratings[a][b]}`);
        }
    }   
}

const school = (actionInput, name, subject, rating) => {
    console.log("Elija una opción:");
    console.log("1.- Agregar Estudiantes")
    console.log("2.- Agregar Materias")
    console.log("3.- Agregar Calificaciones")

    switch(actionInput){
        case "1":
            addStudent(name);
            break;
        case "2":
            addSchoolSubject(subject);
            break;
        case "3":
            addRatings(name,subject,rating);
        case "4":
                editRating(name,subject,rating);
        default:
            console.log("Opción no válida, ingrese el número de la opción");
    }
}


school("1","Kevin","","");
console.log("=====================================================");
console.log("Se ha añadido un alumno");
console.log("=====================================================");

school("1","Alfredo","","");
console.log("=====================================================");
console.log("Se ha añadido un alumno");
console.log("=====================================================");

school("2","","Español","");
console.log("=====================================================");
console.log("Se ha añadido una materia");
console.log("=====================================================");

school("2","","Matemáticas","");
console.log("=====================================================");
console.log("Se ha añadido una materia");
console.log("=====================================================");

school("2","","Ciencias Naturales","");
console.log("=====================================================");
console.log("Se ha añadido una materia");
console.log("=====================================================");

school("2","","Educacion fisica","");
console.log("=====================================================");
console.log("Se ha añadido una materia");
console.log("=====================================================");

school("3","Kevin","Español","8.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");

school("3","Kevin","Matemáticas","9.5");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");

school("3","Kevin","Ciencias Naturales","8.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");

school("3","Kevin","Educacion Fisica","10");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");

school("3","Alfredo","Español","6.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");

school("3","Alfredo","Matemáticas","8.5");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");

school("3","Alfredo","Ciencias Naturales","9.5");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");

school("3","Alfredo","Educacion Fisica","8.0");
console.log("=====================================================");
console.log("Se ha añadido una calificación");
console.log("=====================================================");

console.log("=====================================================");
printStudents();
console.log("=====================================================");
printSchoolSubject();
console.log("=====================================================");
printRatings();
console.log("=====================================================");

school("4","Kevin","Español","10.0");
console.log("=====================================================");
console.log("Se ha modificado una calificación");
console.log("=====================================================");

school("4","Kevin","Matemáticas","10.0");
console.log("=====================================================");
console.log("Se ha modificado una calificación");
console.log("=====================================================");

school("4","Alfredo","Ciencias Naturales","10.0");
console.log("=====================================================");
console.log("Se ha modificado una calificación");
console.log("=====================================================");

school("4","Alfredo","Educacion Fisica","10.0");
console.log("=====================================================");
console.log("Se ha modificado una calificación");
console.log("=====================================================");
