let nombre = prompt("Ingrese su nombre") 
let apellido = prompt("Ingrese su apellido") 

function hola(){}
    hola (alert("Hola " + nombre + " " + apellido + ".") )
    alert("Ahora te vamos a pedir una por una tus calificaciones trimestrales")


let nota1= parseInt ( prompt ("1er. Ingrese su calificacion") )
let nota2= parseInt ( prompt ("2do. Ingrese su calificacion") )
let nota3= parseInt ( prompt ("3er. Ingrese su calificacion") )
let notaFinal = 0

function sumar ( nota1, nota2, nota3) {
    notaFinal = (nota1 + nota2 + nota3) / 3
} 

function final (){
    parseInt ( alert("Su nota final es: " + notaFinal) )
}

sumar(nota1, nota2, nota3)
final(notaFinal)

if(notaFinal >= 7){
    alert("Su calificacion anual esta: Aprobada")
} else {
    alert("Su calificacion anual esta: Desaprobada")
}


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






