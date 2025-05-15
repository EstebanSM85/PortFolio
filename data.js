
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
        imagen: "portfolioNuevo.png",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    
];

const infoPersonal = {
    imagen:"avatar.png",
    otros:[
        ["Nacionalidad", "Española"],
        [
            "Edad",
            new Date(new Date() - new Date("1985/07/10")).getFullYear() - 1970
        ]
    ],
    idiomas: [
        ["Español", "Nativo"],
        ["Inglés", "Intermedio"]
    ],
    formacion: [
        ["HTML", 7,],[ "CSS", 6],[ "JavaScript", 6],    
        ["Java", 8],["Sql", 7]
    ],
    redes:
        [
            ["LinkedIn", "https://www.linkedin.com/in/esteban-sanchez-martinez-125044244/"],
            ["GitHub", "https://github.com/EstebanSM85 " ],
            ["Instagram","https://www.instagram.com/sanchezmartinez.esteban/"],
            ["Facebook", "https://www.facebook.com/esteban.sanchezmartinez.7965"],
        ],
}