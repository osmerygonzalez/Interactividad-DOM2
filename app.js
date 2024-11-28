//Menu hamburguesa

document.addEventListener("DOMContentLoaded", () => {
    const menuBurger = document.querySelector(".menu-hamburguesa"); // Botón hamburguesa
    const menuLinks = document.querySelector(".ul-links"); // Contenedor del menú

    // Alternar la clase 'active' al hacer clic en el botón
    menuBurger.addEventListener("click", () => {
        menuLinks.classList.toggle("active");
    });
});



//Boton dark
document.addEventListener("DOMContentLoaded", () => {
    const modoButton = document.getElementById("modo");
    const iconoModo = document.getElementById("icono-modo");
    const body = document.body;

// Verifica si ya hay una preferencia guardada en localStorage
if (localStorage.getItem("modo") === "oscuro") {
    body.classList.add("dark-mode");
    iconoModo.classList.remove("fa-moon");
    iconoModo.classList.add("fa-sun");
}

// Alternar entre modos
modoButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Cambiar el ícono
    if (body.classList.contains("dark-mode")) {
        iconoModo.classList.remove("fa-moon");
        iconoModo.classList.add("fa-sun");
        localStorage.setItem("modo", "oscuro"); // Guardar preferencia
    } else {
        iconoModo.classList.remove("fa-sun");
        iconoModo.classList.add("fa-moon");
        localStorage.removeItem("modo"); // Eliminar preferencia (vuelve al modo claro)
    }
    });
});




//texto leer mas
//Llamamos variable y la clase
const toggleButton = document.querySelector('.toggle-btn'); // Botón "Leer mas"
const leerMas = document.querySelector('.leerMas'); // Texto adicional oculto

// Agregamos el evento click al botón
toggleButton.addEventListener('click', () => {

// Alternar la visibilidad del texto adicional
if (leerMas.classList.contains('hidden')) {
    leerMas.classList.remove('hidden');
    toggleButton.textContent = 'Leer menos'; // Cambiamos el texto del botón
}else {
    leerMas.classList.add('hidden');
    toggleButton.textContent = 'Leer mas'; // Cambiamos el texto del botón
    }
});
