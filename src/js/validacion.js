const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9\.\-\_^@]+@[a-zA-Z^@]+\.[a-zA-Z^@]+$/,
    mensaje: /^[A-Z a-z \.\,0-9\s]{1,500}$/
};

const validacionNombre = document.getElementById("error-nombre");
const validacionEmail = document.getElementById("error-email");
const validacionMensaje = document.getElementById("error-mensaje");

const textArea = document.querySelector("textarea");
const inputs = document.querySelectorAll("input");

const inputsArray = Array.from(inputs);
inputsArray.push(textArea);

console.log(inputsArray);

const formulario = document.querySelector("form");
console.log(formulario);

const datosValidaciones = {
    nombre: false,
    email: false,
    mensaje: false,
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (datosValidaciones.nombre == true && datosValidaciones.email == true && datosValidaciones.mensaje == true) {

        const serviceID = "service_g1prvj9";
        const templateID = "portafolio-contacto"

        emailjs.init("Dag52CMMKadeG2fzG");
        emailjs.sendForm(serviceID, templateID, formulario).then(
            function () {
                console.log("SUCCESS!");
            },
            function (error) {
                console.log("FAILED...", error);
            }
        );

        inputsArray["0"].value = "";
        inputsArray["1"].value = "";
        inputsArray["2"].value = "";
    } else {
        Swal.fire({
            title: "Por favor verifique la información.",
            text: "Es necesario completar todos los campos.",
            icon: "warning",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            color: "#f74894",
            confirmButtonColor:"#f74894",
          });
        console.log("Complete el formulario, por favor");
    }
})

inputsArray.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        console.log(e.target.name)
        switch (e.target.name) {
            case "nombre":

                if (expresiones.nombre.test(e.target.value)) {
                    datosValidaciones.nombre = true;
                    validacionNombre.style.display = "none";
                    e.target.style.backgroundColor = "rgb(215,240,209)";

                } else {
                    datosValidaciones.nombre = false;
                    validacionNombre.style.display = "block";
                    e.target.style.backgroundColor = "rgb(203,226,255)";

                }
                break;
            case "email":

                if (expresiones.email.test(e.target.value)) {
                    datosValidaciones.email = true;
                    validacionEmail.style.display = "none";
                    e.target.style.backgroundColor = "rgb(215,240,209)";

                } else {
                    datosValidaciones.email = false;
                    validacionEmail.style.display = "block";
                    e.target.style.backgroundColor = "rgb(203,226,255)";

                }
                break;

            case "mensaje":
                if (expresiones.mensaje.test(e.target.value)) {
                    datosValidaciones.mensaje = true;
                    validacionMensaje.style.display = "none";
                    e.target.style.backgroundColor = "rgb(215,240,209)";
                } else {
                    datosValidaciones.mensaje = false;
                    validacionMensaje.style.display = "block";
                    e.target.style.backgroundColor = "rgb(203,226,255)";
                }
                break;
        }
    })//evento keyup
})//función para validar

