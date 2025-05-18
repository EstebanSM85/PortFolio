/**
 * Este archivo JavaScript guarda la información de proyectos y 
 * la información personal para usarla en el archivo index.js
 **/

/**
 * Lista de proyectos desarrollados por el usuario, con información sobre su título,
 * descripción, enlace, imagen y tecnologías utilizadas.
 */
const proyectos = [
    { 
        titulo: "Programa de gestión de pedidos",
        descripcion: "Una aplicación de escritorio que permite gestionar pedidos de manera sencilla y eficiente, permite guardar clientes, articulos y los pedidos, aplicando descuentos, quitando articulos del stock si estos caducan.",
        link: "https://github.com/EstebanSM85/Pratica_final_prog",
        imagen: "pedidos.png",
        tecnologias: ["JAVA"]
    },
    {
        titulo: "Calculadora",
        descripcion: "Un calculadora básica pero completamente funcional, con un diseño sencillo y fácil de usar.",
        link: "https://github.com/EstebanSM85/calculadora",
        imagen: "calculadora.png",
        tecnologias: [ "HTML", "CSS", "JavaScript"]
    },
    { 
        titulo: "Portafolio",
        descripcion: "Un portfolio sencillo, facil de ampliar, con un diseño claro y responsive,",
        link:"https://github.com/EstebanSM85/PortFolio",
        imagen: "portfolioNuevo.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    }
];

/**
 * Información personal del usuario, incluyendo imagen, nacionalidad, edad, idiomas,
 * formación y redes sociales.
 */
const infoPersonal = {
    imagen:"avatar.png",

    //Datos adicionales del usuario, como nacionalidad y edad calculada dinámicamente.   
    otros:[
        ["Nacionalidad", "Española"],
        [ "Edad", new Date(new Date() - new Date("1985/07/10")).getFullYear() - 1970]
    ],

    //Lista de idiomas que domina el usuario y su nivel de conocimiento.
    idiomas: [
        ["Español", "Nativo"],
        ["Inglés", "Intermedio"]
    ],

    //Formación en diferentes lenguajes de programación y su nivel de habilidad.
    formacion: [
        ["HTML", 7,],[ "CSS", 6],[ "JavaScript", 6],
        ["PHP", 5],["Java", 8],["Sql", 6]
    ],

    //Enlaces a redes sociales con el nombre de la plataforma y la URL.
    redes:
        [
            ["LinkedIn", "https://www.linkedin.com/in/esteban-sanchez-martinez-125044244/"],
            ["GitHub", "https://github.com/EstebanSM85 " ],
            ["Instagram","https://www.instagram.com/sanchezmartinez.esteban/"],
            ["Facebook", "https://www.facebook.com/esteban.sanchezmartinez.7965"],
        ],
}