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




