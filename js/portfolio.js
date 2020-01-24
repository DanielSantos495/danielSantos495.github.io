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

const imgCarouUno = document.getElementById('imgCarouUno');
// const imgPort = document.getElementById('imgPort');

imgCarouUno.addEventListener('mouseover',  showImgPortfolio);
imgCarouUno.addEventListener('mouseout', hideImgPortfolio);

function showImgPortfolio()
{
    document.getElementById('imgPort').src = 'https://i.imgur.com/WY3yEhY.png';
}

function hideImgPortfolio()
{
    
}



