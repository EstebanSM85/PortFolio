/**
 * Este archivo JavaScript se encarga de la manipulación del DOM
 * y la interacción con el usuario en la página web.
 */


/**
 * Obtiene el elemento del DOM con el ID "tarjetasContainer".
 * Se usa para contener los proyectos en la interfaz de usuario.
 */
const proyectosContainer = document.getElementById("tarjetasContainer");
/**
 * Obtiene el primer elemento <aside> del DOM.
 * Se usa para manipular la barra lateral de la página.
 */
const aside = document.getElementsByTagName("aside")[0];


//Creación de  las tarjetas de proyectos

/**
 * Genera una cadena HTML con las tecnologías proporcionadas,
 * envolviendo cada una en un elemento <span> con la clase "tecnologia".
 *
 * @param {Array} tecnologias - Lista de tecnologías utilizadas en el proyecto.
 * @returns {string} - Código HTML con las tecnologías formateadas.
 */
const getTecnologias = (tecnologias) => {
    let res = "";
    //Recorre la lista de tecnologías y las envuelve en un elemento <span>.
    tecnologias.forEach(tecnologia => {
        res += `<span class= "tecnologia">${tecnologia}</span>`
    })
    return res;
};

/**
 * Recorre la lista de proyectos y genera un nuevo elemento HTML para cada uno.
 * Se crea un div con la clase "tarjeta proyecto" y se agrega al contenedor de proyectos.
 *
 * @param {Array} proyectos - Lista de objetos que representan proyectos.
 */
proyectos.forEach(proyecto => {
    //Crea un nuevo elemento <div> para representar el proyecto.
    const nuevoProyecto =  document.createElement("div");
    //Asigna las clases necesarias para el estilo del proyecto.
    nuevoProyecto.classList= "tarjeta proyecto";
    //Agrega el nuevo elemento al contenedor de proyectos.
    proyectosContainer.appendChild(nuevoProyecto);
    //Define el contenido HTML del nuevo proyecto, incluyendo imagen, título, descripción, tecnologías y enlace.
    nuevoProyecto.innerHTML = `
    <img src='img/proyectos/${proyecto.imagen}'>
    <div>
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <p>${getTecnologias(proyecto.tecnologias)}</p>
    </div>
    <a href="${proyecto.link}" target="_blank">Ver proyecto</a>`
});

/**
 * Agrega un evento de clic a todas las imágenes dentro de los elementos con la clase "proyecto".
 * Permite ampliar la imagen al hacer clic en ella y restaurar su tamaño si se vuelve a hacer clic.
 */
document.querySelectorAll(".proyecto img").forEach(img => {
    img.addEventListener("click", () => {
        /**
         * Si la imagen ya está ampliada, la restaura a su tamaño original.
         * De lo contrario, aplica un efecto de zoom aumentando su escala.
         */
        if (img.style.transform === "scale(1.5)") {
            img.style.transform = "scale(1)";
        } else {
            img.style.transform = "scale(1.5)";
        }
    });
});

//Creación de infoPersonal

/**
 * Crea un nuevo elemento <div> para representar la sección de presentación personal.
 * Se le asigna la clase "presentacion" y se inserta la imagen del usuario.
 */
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `
    <img src="img/${infoPersonal.imagen}">
`;

/**
 * Recorre la lista de información personal y la agrega a la presentación.
 * Cada elemento de "otros" se muestra dentro de un <div>, con su respectiva etiqueta y valor.
 */
infoPersonal.otros.forEach(dato => {
    nuevaPresentacion.innerHTML += `
    <div>
        <span>${dato[0]}:</span>
        <span>${dato[1]}</span>
    </div>
    `
});

/**
 * Agrega el elemento de presentación personal al <aside>,
 * integrándolo en la estructura de la página.
 */
aside.appendChild(nuevaPresentacion);

/**
 * Crea un nuevo elemento <div> para mostrar los idiomas que domina el usuario.
 * Se le asigna la clase "idioma" para su correcta visualización en la interfaz.
 */
const nuevoIdiomas = document.createElement("div");
nuevoIdiomas.classList = "idioma";
/**
 * Recorre la lista de idiomas del usuario y genera una estructura HTML para cada uno.
 * Cada idioma se muestra dentro de un <div>, con su nombre y nivel de dominio.
 */
infoPersonal.idiomas.forEach(dato => {
    nuevoIdiomas.innerHTML += `
    <div>
        <span>${dato[0]}:</span>
        <span>${dato[1]}</span>
    </div>
    `
});

/**
 * Agrega el elemento que contiene la información sobre los idiomas al <aside>,
 * integrándolo en la estructura de la página.
 */
aside.appendChild(nuevoIdiomas);

/**
 * Crea un nuevo elemento <div> para mostrar la formación en lenguajes de programación del usuario.
 * Se le asigna la clase "formacion" para su correcta visualización en la interfaz.
 */
const nuevaFormacion = document.createElement("div");
nuevaFormacion.classList = "formacion";
/**
 * Recorre la lista de formación del usuario y genera una estructura HTML para cada lenguaje.
 * Se muestra el nombre del lenguaje, el nivel de habilidad y una barra de progreso.
 */
infoPersonal.formacion.forEach(otro => {
    nuevaFormacion.innerHTML += `
    <div>
        <span>${otro[0]}</span>
        <span>${otro[1]}</span>
    </div>
    <progress max="10" value="${otro[1]}"></progress>
    `
});

/**
 * Agrega el elemento que contiene la formación en lenguajes de programación al <aside>,
 * integrándolo en la estructura de la página.
 */
aside.appendChild(nuevaFormacion);


/**
 * Obtiene el nombre del archivo de icono correspondiente a una red social dada.
 *
 * @param {string} redes - Nombre de la red social.
 * @returns {string} - Nombre del archivo de icono asociado a la red social.
 */
const getIconoRed = (redes) =>{
    switch (redes) {
        case "LinkedIn":
            return "linkedin.png";
        case "GitHub":
            return "github.png";
        case "Instagram":
            return "instagram.png";
        case "Facebook":
            return "facebook.png";
        default:
            return "default.png";
    }
};

/**
 * Crea un nuevo elemento <div> para mostrar los enlaces a las redes sociales del usuario.
 * Se le asigna la clase "redes" para su correcta visualización en la interfaz.
 */
const nuevasRedes = document.createElement("div");
nuevasRedes.classList = "redes";
/**
 * Recorre la lista de redes sociales del usuario y genera una estructura HTML para cada una.
 * Se muestra el icono correspondiente y se enlaza a la URL de la red social.
 */
infoPersonal.redes.forEach(otro => {
    nuevasRedes.innerHTML += `
        <a href="${otro[1]}" target="_blank">
            <img src="img/iconos/${getIconoRed(otro[0])}">
        </a>
    `
});

/**
 * Agrega el elemento que contiene los enlaces a las redes sociales al <aside>,
 * integrándolo en la estructura de la página.
 */
aside.appendChild(nuevasRedes);

/**
 * Ejecuta una función cuando el contenido del DOM ha sido completamente cargado.
 * Se encarga de validar un formulario antes de su envío, asegurando que todos los campos obligatorios sean completados.
 */
document.addEventListener("DOMContentLoaded", () => {
    /**
     * Selecciona el formulario del DOM y lo almacena en la variable "form".
     * Se usa para agregar un evento de validación al formulario.
     */
    const form = document.querySelector("form");
    
    /**
     * Agrega un evento de escucha al formulario para interceptar su envío.
     * Verifica que los campos "nombre", "email" y "mensaje" no estén vacíos antes de enviar el formulario.
     */
    form.addEventListener("submit", (event) => {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        /**
         * Si alguno de los campos está vacío, se muestra una alerta al usuario y se detiene el envío del formulario.
         */
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            event.preventDefault(); // Detiene el envío del formulario
            return;
        }
    });
});

/**
 * Agrega un evento de clic a todos los enlaces dentro de los elementos con la clase "proyecto" y "redes".
 * Muestra una alerta antes de redirigir al usuario a un enlace externo.
 */
document.querySelectorAll(".proyecto a, .redes a").forEach(link => {
    link.addEventListener("click", () => {
        alert("Vas a ser redirigido a un enlace externo.");
    });
});


//para mandar el form
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    const formData = new FormData(this);

    fetch("https://estebansm85.ct.ws/contacto.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Respuesta del servidor:", data);
        alert("Mensaje enviado correctamente!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error al enviar el mensaje.");
    });
});