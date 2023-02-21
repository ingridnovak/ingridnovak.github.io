

/*========================================================*/

/*NAVBAR*/
const navMenu = document.querySelector('.menu-list')
const navIcon = document.querySelector('.menu-icon')
const navIconLine = document.querySelectorAll('.menu-icon__line')
const navLink = document.querySelector('.menu-list__link')
const navListItem = document.querySelector('.menu-list__item')
const navListText = document.querySelector('.menu-list__link-text')
const maxWidthPhone = window.matchMedia('(max-width:480px)')
/*const maxWidthTablet = window.matchMedia('(max-width:992px)')*/


window.addEventListener('load', () => {

    /*NAVBAR*/
    if (maxWidthPhone.matches) {
        navBar();
    }

})
function navBar () {
    window.addEventListener('click', e => {
        console.log(e.target)
            if (e.target === navIcon || e.target.parentElement === navIcon ) {
                navMenu.classList.toggle('menu-list--active');
                navIcon.classList.toggle('change');
                /*if (navMenu.classList.contains('active') && e.target !== navLink || e.target !== navListItem) {
                    navMenu.classList.remove('active');
                    navIcon.classList.remove('change');
                }*/
            }
            if ( e.target === navListText && e.target.parent !==navListItem) {
                navMenu.classList.remove('menu-list--active');
                navIcon.classList.remove('change');
            }

    })
}











