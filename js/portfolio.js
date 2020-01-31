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
const imgCarouTres = document.getElementById('imgCarouTres');
const imgCarouCuatro = document.getElementById('imgCarouCuatro');


imgCarouUno.addEventListener('mouseover',  showImgPortfolioUno);
imgCarouDos.addEventListener('mouseover',  showImgPortfolioDos);
imgCarouTres.addEventListener('mouseover',  showImgPortfolioTres);
imgCarouCuatro.addEventListener('mouseover',  showImgPortfolioCuatro);


function showImgPortfolioUno()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/WY3yEhY.png';
}

function showImgPortfolioDos()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/cIrrPKp.png';
}

function showImgPortfolioTres()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/w9Cfw9E.png';
}

function showImgPortfolioCuatro()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/LvrAfYj.png';
}

const carouselContainer = document.getElementById('carouselContainer');
carouselContainer.addEventListener('mouseout', showPhotoPrincipal);

function showPhotoPrincipal()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/K945W7z.jpg';
}


