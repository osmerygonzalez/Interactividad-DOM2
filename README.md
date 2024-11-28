Proyecto Interactividad con el DOM implementando Menú Hamburguesa, boton Modo Oscuro y boton de leer mas.
Menú Hamburguesa: Este código es sencillo y cumple con los requisitos básicos de un menú hamburguesa funcional para pantallas medianas y pequeñas (por debajo de 768px). documento HTML se agregó un Button de menú hamburguesa está contenido dentro de la barra de navegación, representado por un ícono de barras, denominamos la clase como “menu-hamburguesa” y para el i class="fa-solid fa-moon".
JavaScript hace que, al hacer clic en el menú hamburguesa, se muestre o se oculte el menú.
menuLinks: Selecciona el contenedor del menú .ul-links que contiene los enlaces.
Aplicamos classList.toggle que añade o elimina la clase active en el contenedor del menú para mostrar/ocultar los enlaces.
Tambien El evento click en el botón hamburguesa menuToggle activa una función.
Con menuLinks.classList.toggle("active"), el menú muestra/oculta los enlaces al agregar o quitar la clase active.

Botón de modo oscuro que permite al usuario alternar entre el modo claro y oscuro. El ícono de la luna representa el modo oscuro, y el ícono del sol representa el modo claro.
Documento HTML se agregó un botón para alternar entre modos se encuentra dentro de la barra de navegación y tiene un ícono que cambia cuando se cambia el modo.
Para este botón le dimos un id llamado "modo" y una clase "btn-modo" 
Los estilos para los modos claro y oscuro se definen utilizando clases CSS.
El JavaScript maneja la alternancia entre los dos modos y guarda la preferencia del usuario en localStorage. 
Iconos: Usamos iconos de Font Awesome para darle un toque visual atractivo con los mismos. 

Funcionalidad "Leer Más" en Galería Este proyecto añade interactividad a un elemento de la galería para mostrar u ocultar texto adicional con un botón "Leer más".
HTML Se agregó un texto adicional con la clase .hidden y un botón para alternar su visibilidad.
CSS Estilo para ocultar el texto y personalizar el botón.
JavaScript Interactividad para alternar la clase .hidden y cambiar el texto del botón.
Nombramos dos variables toggleButton  extraInfo, y de la siguiente manera agregamos un evento toggleButton.addEventListener, también verificamos y eliminamos clases con los siguientes metodos .contains y .remove. Asimismo Agregamos contenido con .textContent.

