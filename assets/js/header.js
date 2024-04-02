/*=============== Mostrar Menu ===============*/
const navMenu = document.getElementById('nav-menu'),
    icon = document.getElementById('icon');

/* El menu se muestra */
function abrircerrarmenu() {
    navMenu.classList.toggle('abrirmenu');
    if (icon.classList.contains('ri-menu-line')) {
        // Cambiar la clase a 'ri-close-line'
        icon.classList.replace('ri-menu-line', 'ri-close-line');
    } else {
        // Si la clase actual no es 'ri-menu-line', restaurarla
        icon.classList.replace('ri-close-line', 'ri-menu-line');
    }
}
//if(navToggle){
//    navToggle.addEventListener('click', () =>{
//        navMenu.classList.add('show-menu')
//    })
//}
//
///* Menu oculto */
//if(navClose){
//    navClose.addEventListener('click', () =>{
//        navMenu.classList.remove('show-menu')
//    })
//}


/*=============== Quitar el menu en modo responsive CELULAR ===============*/

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))