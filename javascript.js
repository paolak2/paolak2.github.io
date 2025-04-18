function mostrarOcultarMenu() {
    // Accedemos al nav, que tiene id=’enlaces’
    const enlaces = document.getElementById("enlaces");
    
    // Añadimos o quitamos la clase 'responsive' para mostrar/ocultar los enlaces
    enlaces.classList.toggle("responsive");
    }