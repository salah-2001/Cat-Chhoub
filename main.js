let menu=document.querySelector('#menu-bars'),
    navbar=document.querySelector('.navbar'),
    searchicon=document.querySelector('#search-icon'),
    searchform=document.querySelector('#search-form');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector('#search-icon').onclick=() =>{
    searchform.classList.toggle('active');
}



