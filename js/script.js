/*========================================================*/

/*NAVBAR*/
const navMenu = document.querySelector('.menu-list')
const navIcon = document.querySelector('.menu-icon')
const section = document.querySelector('.hero-section')
const header = document.querySelector('.navbar')
const maxWidthPhone = window.matchMedia('(max-width:480px)')

window.addEventListener('load', () => {

    /*NAVBAR*/
    if (maxWidthPhone.matches) {
        navBar();
    }

})

function navBar() {
    window.addEventListener('click', e => {
        if (e.target === navIcon || e.target.parentElement === navIcon) {
            navMenu.classList.toggle('menu-list--active');
            navIcon.classList.toggle('change');

        }
        if (navMenu.classList.contains('menu-list--active') && e.target !== header && e.target !== navIcon && e.target.parentElement !== navIcon) {
           setTimeout( ()=> {
               navMenu.classList.remove('menu-list--active');
               navIcon.classList.remove('change');
           },200)
        }


    })
}











