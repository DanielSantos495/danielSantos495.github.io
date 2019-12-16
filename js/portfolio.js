const menu = document.querySelector(".menu");
const contact = document.querySelector(".contenedorContac");

const burMenu = document.querySelector("#burMenu");
burMenu.addEventListener("click", showHide);

const linkPort = document.querySelector(".linkPort");
const linkTecno = document.querySelector(".linkTecno");

linkPort.addEventListener("click", showHide);
linkTecno.addEventListener("click", showHide);


function showHide()
{
    
    if(menu.classList.contains("menuDesplegable") && contact.classList.contains("menuDesplegable"))
    {
        menu.classList.remove("menuDesplegable");
        contact.classList.remove("menuDesplegable");
    }
    else
    {
        menu.classList.add("menuDesplegable");
        contact.classList.add("menuDesplegable");
    }
}

const contactEscri = document.querySelector(".contactEscri");
const escri = document.querySelector(".contenedorContac");
escri.addEventListener("click", showEscri);

function showEscri()
{
    if(contactEscri.classList.contains("contactEscri2"))
    {
        contactEscri.classList.remove("contactEscri2");
    }
    else
    {
        contactEscri.classList.add("contactEscri2");
    }
}



