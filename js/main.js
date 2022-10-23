const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const mail = document.getElementById("mail")
const cantidad = document.getElementById("cantidad")
const categoria = document.getElementById("inputGroupSelect01")
const btnBorrar = document.getElementById("borrar")
const btnResumen = document.getElementById("resumen")
const totalDisplay=document.getElementById("total");

function valorTickets(cantidad, categoria) {
    const valorBase = 200

    var valorUnTicket = 0
    
    if (categoria == "estudiante") {
        valorUnTicket = (valorBase - valorBase * 0.8)
    } else if (categoria == "trainee") {
        valorUnTicket = (valorBase - valorBase * 0.5)
    } else if (categoria == "junior") {
        valorUnTicket = (valorBase - valorBase * 0.15)
    } else {
        valorUnTicket = valorBase
    }

    return cantidad * valorUnTicket
}

function resumen () {
    var cantidadTickets = document.getElementById("cantidad").value
    var categoriaComprador =document.getElementById("inputGroupSelect01").value

    if (nombre.value == "" && apellido.value == "" && mail.value =="") {
        alert("Por favor complete los campos solicitados")
    } else if (nombre.value == "") {
        alert("Por favor, complete su nombre")
    } else if (apellido.value == "") {
        alert("Por favor, complete su apellido")
    } else if (mail.value == "") {
        alert("Por favor, complete su mail")
    } else {
        totalDisplay.innerHTML = valorTickets(cantidadTickets, categoriaComprador)
    }
}

function borrar () {
    nombre.value = "";
    apellido.value = "";
    mail.value = "";
    cantidad.value = "";
    categoria.value = "selected";
    totalDisplay.innerHTML = "";
}

btnResumen.addEventListener("click", resumen);
btnBorrar.addEventListener("click", borrar);