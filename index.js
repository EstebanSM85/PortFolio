const proyectosContainer = document.getElementById("tarjetasContainer");
const aside = document.getElementsByTagName("aside")[0];


const getTecnologias = (tecnologias) => {
    let res = "";
    tecnologias.forEach(tecnologia => {
        res += `<span class= "tecnologia">${tecnologia}</span>`
    })
    return res;
}
//creacion de tarjetas
proyectos.forEach(proyecto => {
    const nuevoProyecto =  document.createElement("div");
    nuevoProyecto.classList= "tarjeta proyecto";
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML = `
    <img src='img/proyectos/${proyecto.imagen}'>
    <div>
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <p>${getTecnologias(proyecto.tecnologias)}</p>
    </div>
    <a href="${proyecto.link}" target="_blank">Ver proyecto</a>`
})

document.querySelectorAll(".proyecto img").forEach(img => {
    img.addEventListener("click", () => {
        if (img.style.transform === "scale(1.5)") {
            img.style.transform = "scale(1)";
        } else {
            img.style.transform = "scale(1.5)";
        }
    });
});

//creacion de infoPersonal
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `
    <img src="img/${infoPersonal.imagen}">
`;
infoPersonal.otros.forEach(otro => {
    nuevaPresentacion.innerHTML += `
    <div>
        <span>${otro[0]}:</span>
        <span>${otro[1]}</span>
    </div>
    `
});


aside.appendChild(nuevaPresentacion);

//idiomas
const nuevoIdiomas = document.createElement("div");
nuevoIdiomas.classList = "idioma";
infoPersonal.idiomas.forEach(otro => {
    nuevoIdiomas.innerHTML += `
    <div>
        <span>${otro[0]}:</span>
        <span>${otro[1]}</span>
    </div>
    `
});

aside.appendChild(nuevoIdiomas);

//Lenguajes de programacion
const nuevaFormacion = document.createElement("div");
nuevaFormacion.classList = "formacion";
infoPersonal.formacion.forEach(otro => {
    nuevaFormacion.innerHTML += `
    <div>
        <span>${otro[0]}</span>
        <span>${otro[1]}</span>
    </div>
    <progress max="10" value="${otro[1]}"></progress>
    `
});

aside.appendChild(nuevaFormacion);


//Links
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
}

const nuevasRedes = document.createElement("div");
nuevasRedes.classList = "redes";
infoPersonal.redes.forEach(otro => {
    nuevasRedes.innerHTML += `
        <a href="${otro[1]}" target="_blank">
            <img src="img/iconos/${getIconoRed(otro[0])}">
        </a>
    `
})

aside.appendChild(nuevasRedes);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            event.preventDefault(); // Detiene el envío del formulario
            return;
        }
    });;
});

document.querySelectorAll(".proyecto a").forEach(link => {
    link.addEventListener("click", () => {
        alert("Vas a ser redirigido a un enlace externo.");
    });
});
