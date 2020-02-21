document.onload = function () {
    console.log('hola')
}
window.addEventListener('DOMContentLoaded', empezarAnimation); 
    
        const piezaUno = document.getElementById('image-uno');
        const piezaDos = document.getElementById('image-dos');
        const piezaTres = document.getElementById('image-tres');
        const piezaCuatro = document.getElementById('image-cuatro');
        const piezaCinco = document.getElementById('image-cinco');
        const piezaSeis = document.getElementById('image-seis');
        const piezaSiete = document.getElementById('image-siete');
        const piezaOcho = document.getElementById('image-ocho');
        const piezaNueve = document.getElementById('image-nueve');
        const piezaDiez = document.getElementById('image-diez');
        const piezaOnce = document.getElementById('image-once');
        
    function empezarAnimation(event)
    {
        
        console.log(event);
        piezaUno.src='image/pieza-1.png';
        piezaDos.src='image/pieza-2.png';
        piezaTres.src='image/pieza-3.png';
        piezaCuatro.src='image/pieza-4.png';
        piezaCinco.src='image/pieza-5.png';
        piezaSeis.src='image/pieza-6.png';
        piezaSiete.src='image/pieza-7.png';
        piezaOcho.src='image/pieza-8.png';
        piezaNueve.src='image/pieza-9.png';
        piezaDiez.src='image/pieza-10.png';
        piezaOnce.src='image/pieza-11.png';
        var probando = event.srcElement.images['image-uno'];
        console.log(probando);
        
        const unSegYMedio = 1500;
        setTimeout(ejecutarEn, unSegYMedio);
        
        function ejecutarEn()
        {
           
            piezaUno.style.animationName = 'pieza-uno';
            piezaDos.style.animationName = 'pieza-dos';
            piezaTres.style.animationName = 'pieza-tres';
            piezaCuatro.style.animationName = 'pieza-cuatro';
            piezaCinco.style.animationName = 'pieza-cinco';
            piezaSeis.style.animationName = 'pieza-seis';
            piezaSiete.style.animationName = 'pieza-siete';
            piezaOcho.style.animationName = 'pieza-ocho';
            piezaNueve.style.animationName = 'pieza-nueve';
            piezaDiez.style.animationName = 'pieza-diez';
            piezaOnce.style.animationName = 'pieza-once';
        }   
        
        
    }
