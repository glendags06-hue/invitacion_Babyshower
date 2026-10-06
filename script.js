const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const acompanantes = document.getElementById("acompanantes").value;

    const datos = new URLSearchParams();

    datos.append("nombre", nombre);
    datos.append("correo", correo);
    datos.append("acompanantes", acompanantes);

    fetch("https://script.google.com/macros/s/AKfycbwPpEowqJcaKpelPXJYzKQF69XBy3dT2ZE6ZTGhTO-pZObRgicn6WpSxHLWjdIELVnV2Q/exec", {
        method: "POST",
        body: datos
    })
    .then(() => {
        mensaje.textContent =
            "¡Gracias por confirmar, " + nombre +
            "! Te esperamos en el Baby Shower de Mateo.";

        formulario.reset();

    })
    .catch(error => {

        console.error(error);

        mensaje.textContent =
            "Hubo un error al registrar tu asistencia.";

    });

});