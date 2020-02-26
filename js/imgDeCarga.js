const viewport = document.getElementById('viewport');
viewport.addEventListener('animationend', eliminarEtiquetasHtml);

function eliminarEtiquetasHtml() {
     
    const unSegundos = 1000;
     setTimeout(eliminarElementoViewport, unSegundos);
     function eliminarElementoViewport () {
        const nodoPadre = viewport.parentNode;
        // console.log(nodoPadre);
        // debugger
        nodoPadre.removeChild(viewport);
     }
}
