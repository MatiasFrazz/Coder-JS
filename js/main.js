
class Cliente {
    constructor(nombre, localidad, codigoPostal) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
    }
}

let infoClientes = [];

const datosCliente = ()=>{
    let nombre = document.getElementById("nombre").value;
    let localidad = document.getElementById("localidad").value;
    let codigoPostal = document.getElementById("codigoPostal").value;

    let clienteNuevo = new Cliente (nombre, localidad, codigoPostal);

    if (localStorage.getItem("clientes") == null) {
        infoClientes.push(clienteNuevo);
        localStorage.setItem("clientes", JSON.stringify(infoClientes));
    } else{
        
        const clienteRegistrado = JSON.parse(localStorage.getItem("clientes"));
        clienteRegistrado.push(clienteNuevo);
        localStorage.setItem("clientes", JSON.stringify(clienteRegistrado));
        return clienteNuevo;  

    }
}

let formulario = document.getElementById("formCliente")
formulario.addEventListener("submit", formularioCompleto)

function formularioCompleto(e){
    e.preventDefault();
    console.log(datosCliente())
}


