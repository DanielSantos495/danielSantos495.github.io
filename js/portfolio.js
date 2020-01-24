const menu = document.getElementById('menu__nav');
const burguerMenu = document.getElementById("burguer-menu");

menu.addEventListener('click', showHideMenu);
burguerMenu.addEventListener('click', showHideMenu);

const escribeme = document.getElementById('escribeme');
const escribemeForm = document.getElementById('escribemeForm');

escribeme.addEventListener('click', showHideEscribeme);

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

function showHideEscribeme()
{
    if(escribemeForm.classList.contains('escribeme'))
    {
        escribemeForm.classList.remove('escribeme');
    }
    else
    {
        escribemeForm.classList.add('escribeme');
    }
}




