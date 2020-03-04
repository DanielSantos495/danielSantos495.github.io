

const VIEWPORT = document.getElementById('viewport');
VIEWPORT.addEventListener('animationend', eliminarEtiquetasHtml);
   
   function eliminarEtiquetasHtml() {
     
      const UN_SEGUNDOS = 1000;
      setTimeout(eliminarElementoViewport, UN_SEGUNDOS);
     function eliminarElementoViewport () {
        const NODO_PADRE = VIEWPORT.parentNode;
        // console.log(nodoPadre);
        // debugger
        NODO_PADRE.removeChild(VIEWPORT);
     }









   







