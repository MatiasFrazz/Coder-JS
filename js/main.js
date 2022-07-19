let bienvenida = document.createElement("h1")
bienvenida.setAttribute("class", "headerIndex")
bienvenida.innerText = ("Bienvenidos a nuestra clase")
document.getElementById("hIndex").appendChild(bienvenida)

class Alumno {
    constructor(nombre, apellido, materia, notaFinal) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.materia = materia;
        this.nota = notaFinal;
    }
}

let listaAlumnos = [];

const infoAlumnos = ()=>{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let materia = document.getElementById("materia").value;
    let nota = parseInt(document.getElementById("notaFinal").value);

    let agregarAlumno = new Alumno (nombre, apellido, materia, notaFinal);
    listaAlumnos.push(agregarAlumno);
    return agregarAlumno;
}






