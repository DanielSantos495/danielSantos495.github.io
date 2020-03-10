//Empieza el menu

const menu = document.getElementById('menu__nav');
const burguerMenu = document.getElementById("burguer-menu");

menu.addEventListener('click', showHideMenu);
burguerMenu.addEventListener('click', showHideMenu);


function showHideMenu()
{
    if(menu.classList.contains('menu'))
    {
        menu.classList.remove('menu');
    }
    else
    {
        menu.classList.add('menu');
    }
    
}

//Finaliza el menu

//Empieza el Carousel

const imgCarouUno = document.getElementById('imgCarouUno');
const imgCarouDos = document.getElementById('imgCarouDos');




imgCarouUno.addEventListener('mouseover',  showImgPortfolioUno);
imgCarouDos.addEventListener('mouseover',  showImgPortfolioDos);




function showImgPortfolioUno()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/TdZLUeX.png';
    imgPort.style.width = '400px';  
}

function showImgPortfolioDos()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/ePsgTV2.png';
    imgPort.style.width = '200px';    
}






const carouselContainer = document.getElementById('carouselContainer');
carouselContainer.addEventListener('mouseout', showPhotoPrincipal);

function showPhotoPrincipal()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/wWPS9aU.png';
    imgPort.style.width = '100%';
}



