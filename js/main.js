
class Cliente {
    constructor(nombre, localidad, codigoPostal, envase, aroma) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
        this.envase = envase;
        this.aroma = aroma;
    }
}

let infoClientes = [];

const datosCliente = ()=>{
    let nombre = document.getElementById("nombre").value;
    let localidad = document.getElementById("localidad").value;
    let codigoPostal = document.getElementById("codigoPostal").value;
    let envase = document.getElementById("envase").value;
    let aroma = document.getElementById("aroma").value;

    let clienteNuevo = new Cliente (nombre, localidad, codigoPostal, envase, aroma);

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

let productos = []; 
let total = 0;

function agregar (producto, precio) {
    console.log (producto, precio);
    productos.push(producto);
    total = total + precio;
    document.getElementById("chekout").innerHTML = `Pagar $${total}` 
}

function pagar () {
    console.log(producto, precio)
    window.alert(producto.join(", \n"))
}

