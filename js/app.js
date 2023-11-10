// Obtener los elementos por id
const $ = (id) => document.getElementById(id);

// Seleccionar el botón Copiar
const btnCopiarTexto = $("copiarTexto");

// Agregar evento click al botón copiar
btnCopiarTexto.addEventListener("click", function(){
    obtenerDatos();
    copiarPortapapeles();
})


function obtenerDatos(){
    let nombre = $("nombre").value;
    let apellido = $("apellido").value;
    let rut = "\nRUT: " + $("rut").value;
    let serie = "\nSerie: " + $("serie").value;
    let nac = "\nFecha Nac: " + $("nacimiento").value;
    let venc = "\nFecha Venc:" + $("vencimiento").value;
    let email = "\n" + $("email").value;
    let direccion ="\n" + $("direccion").value;
    let contacto = "\nContacto: " + $("contacto").value;

    let resultado = [nombre, apellido, rut, serie, nac, venc, email, direccion, contacto].join(" ");

    $("resultado").value = resultado;
}

async function copiarPortapapeles() {
    // Obtener el contenido del textarea
    var contenidoResultado = $("resultado").value;

    try {
        await navigator.clipboard.writeText(contenidoResultado);
        console.log('Texto copiado al portapapeles')
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err)
      }

    // Mostrar un mensaje o realizar otras acciones si es necesario
    //alert("Contenido copiado al portapapeles: \n" + contenidoResultado);
}