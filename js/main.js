let nombre = prompt("Ingrese su nombre y apellido") 

function hola(){}
    hola (alert("Hola " + nombre + ".") )
    alert("Ahora te vamos a pedir una por una tus calificaciones trimestrales")


let nota1= parseInt ( prompt ("1er. Ingrese su calificacion") )
let nota2= parseInt ( prompt ("2do. Ingrese su calificacion") )
let nota3= parseInt ( prompt ("3er. Ingrese su calificacion") )
let notaFinal = 0

function sumar ( nota1, nota2, nota3) {
    notaFinal = nota1 + nota2 + nota3
} 



function final (){
    parseInt ( alert("Su nota final es: " + notaFinal) )
}

sumar(nota1, nota2, nota3)
final(notaFinal)

if(notaFinal <= 20){
    alert("Su calificacion anual esta: Desaprobada")
} else {
    alert("Su calificacion anual esta: Aprobada")
}

