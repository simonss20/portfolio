const datosHabilidades = [
	{
		nombre: "HTML",
		ruta: "assets/img/html-logo.png",
	},
	{
		nombre: "CSS",
		ruta: "assets/img/css-logo.png",
	},
	{
		nombre: "Javascript",
		ruta: "assets/img/javascript-logo.png",
	},
	{
		nombre: "Bootstrap",
		ruta: "assets/img/bootstrap-logo.png",
	},
	{
		nombre: "React",
		ruta: "assets/img/react-logo.png",
	},
	{
		nombre: "Java",
		ruta: "assets/img/java-logo.png",
	},
	{
		nombre: "MySQL",
		ruta: "assets/img/mysql-logo.png",
	},
	{
		nombre: "Git",
		ruta: "assets/img/git-logo.png",
	},
	{
		nombre: "Node.js",
		ruta: "assets/img/nodejs-logo.png",
	},
];

const datosProyectos = [
	{
		nombre: "Encriptador de texto",
		rutaImagen: "assets/img/proyecto_encriptador.avif",
		descripcion:
			"Aplicacion que utiliza HTML, CSS Y Javascript para tomar un mensaje escrito por el usuario y encriptarlo en base a un codigo que reemplaza ciertos caracteres por otros.",
		linkProyecto: "https://simonss20.github.io/one_encriptador_texto/",
	},
];

const header = document.querySelector(".header");
const divFoto = document.querySelector(".presentacion__foto");



const navbarLinks = document.querySelector(".navbar__links");
const link = document.querySelectorAll(".navbar__links li");
const navbarToggler = document.querySelector(".navbar__toggler");


const manejarImgProyectos = () => {

	if (window.innerWidth > 1024) {
		
		const imagenProyecto = document.querySelector(".proyecto__imagen");
		const imgHeight = imagenProyecto.clientHeight;
		const imgWidth = imagenProyecto.clientWidth;
	
		imagenProyecto.addEventListener("mousemove", (e) => {
			const { layerX, layerY } = e;
			const yRotation = ((layerX - imgWidth / 2) / imgWidth) * 20;
			const xRotation = ((layerY - imgHeight / 2) / imgHeight) * 20;
	
			const trasnsformacionesImg = `
				perspective(500px)
				scale(1.2)
				rotateX(${xRotation}deg)
				rotateY(${yRotation}deg)
			`;
	
			imagenProyecto.style.transform = trasnsformacionesImg;
		});
	
		imagenProyecto.addEventListener("mouseout", () => {
			imagenProyecto.style.transform = `
				scale(1)
				rotateX(0)
				rotateY(0)
			`;
		});
	}

};

if (window.innerWidth <= 1024) {
	const alturaTotal = window.innerHeight;
    }

const manejarPantalla = (alturaTotal) => {
	
	
	let alturaFoto = divFoto.clientHeight;
        divFoto.style.bottom = `-${alturaFoto}px`;

	if (window.innerWidth <= 1024) {
		header.style.height = `${alturaTotal+ (alturaFoto/2)}px`;
		navbarLinks.classList.add("navbar__links--oculto");
		link.forEach((link) => {
			link.addEventListener("click", () =>
				navbarLinks.classList.add("navbar__links--oculto")
				);
			});
	} else {
			header.style.height = alturaTotal + "px";
			navbarLinks.classList.remove("navbar__links--oculto");
	}
};
	
	const insertarProyectos = () => {
		const contenedorProyectos = document.querySelector(
			".proyectos__contenedor"
			);
			for (proyecto of datosProyectos) {
				contenedorProyectos.innerHTML += `
				<div class="proyecto">
				<div class="proyecto__imagen" style="background-image: url(${proyecto.rutaImagen})"></div>
				<div class="proyecto__descripcion">
				<h3 class="proyecto__titulo">${proyecto.nombre}</h3>
				<p>${proyecto.descripcion}</p>
				<a class="proyecto__link"
				href="${proyecto.linkProyecto}"
				target="_blank"
				aria-label="Ver proyecto"
				>Ver proyecto<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				class="logo-flecha">
				<path
				d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg
            ></a>
            </div>
            </div>
            `;
		}
};

const insertarHabilidades = () => {
	const contenedorImagenes = document.querySelector(".habilidades__imagenes");
	for (lenguaje of datosHabilidades) {
		contenedorImagenes.innerHTML += ` <img src=${lenguaje.ruta}  alt=${lenguaje.nombre} class="habilidades__logo" title=${lenguaje.nombre} draggable="false">`;
	}
};

const alternarNavbar = () => {
	navbarLinks.classList.toggle("navbar__links--oculto");
	navbarToggler.classList.toggle("navbar__toggler--presionado");
};

window.onload = () => {
	insertarHabilidades();
	insertarProyectos();
	manejarImgProyectos();
	manejarPantalla();
};

window.onresize = manejarPantalla;
navbarToggler.onclick = alternarNavbar;
