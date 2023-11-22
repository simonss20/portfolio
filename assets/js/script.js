const datosHabilidades = [
    {
        nombre: "HTML",
        ruta: "assets/img/html-logo.png"
    },
    {
        nombre: "CSS",
        ruta: "assets/img/css-logo.png"
    },
    {
        nombre: "Javascript",
        ruta: "assets/img/javascript-logo.png"
    },
    {
        nombre: "Bootstrap",
        ruta: "assets/img/bootstrap-logo.png"
    },
    {
        nombre: "React",
        ruta: "assets/img/react-logo.png"
    },
    {
        nombre: "Java",
        ruta: "assets/img/java-logo.png"
    },
    {
        nombre: "MySQL",
        ruta: "assets/img/mysql-logo.png"
    },
    {
        nombre: "Git",
        ruta: "assets/img/git-logo.png"
    },
    {
        nombre: "Node.js",
        ruta: "assets/img/nodejs-logo.png"
    }
];

const zonaBotonesNav = document.querySelector(".botones__navbar");
const burger = document.querySelector(".navbar__boton");
const menu = document.querySelector(".navbar__nav ul");


const insertarHabilidades =  () => {
    const contenedorImagenes = document.querySelector(".habilidades__imagenes");
    for (lenguaje of datosHabilidades) {
        contenedorImagenes.innerHTML += ` <img src=${lenguaje.ruta}  alt=${lenguaje.nombre} class="logo" title=${lenguaje.nombre}>`
    }
}

const alternarNavbar = () => {
    menu.classList.toggle("oculto");
    zonaBotonesNav.classList.toggle("fondoGris"); 
    burger.classList.toggle("bordesBlancos");
}

const manejarPantalla = () => {
    if (window.innerWidth <= 1024) {
        menu.classList.add("oculto");
    } else {
        menu.classList.remove("oculto");
        zonaBotonesNav.classList.remove("fondoGris");
    }

}


window.onload = () => {
    manejarPantalla();
    insertarHabilidades();
}
window.onresize = manejarPantalla;
burger.onclick = alternarNavbar;