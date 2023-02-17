

/*========================================================*/

/*NAVBAR*/
const navMenu = document.querySelector('.navbar-list')
const navIcon = document.querySelector('.navbar-icon')
const navIconLine = document.querySelector('.navbar-icon__line')
const navLink = document.querySelector('.navbar-list__link')
const navListItem = document.querySelector('.navbar-list__item')
const maxWidthPhone = window.matchMedia('(max-width:480px)')
/*const maxWidthTablet = window.matchMedia('(max-width:992px)')*/
const logo = document.querySelector('.header-logo')

window.addEventListener('load', () => {
    /*========================================================*/

    /*NAVBAR*/
    if (maxWidthPhone.matches) {
        navBar();
    } else {
        widenLogo()
    }
    /*========================================================*/

    /*LOGO*/
  /*  if(!(maxWidthPhone.matches)){
        widenLogo();
    }*/

})
function navBar () {
    window.addEventListener('click', e => {
        console.log(e.target)
            if (e.target === navIcon || e.target === navIconLine) {
                navMenu.classList.toggle('active');
                navIcon.classList.toggle('change');
                /*if (navMenu.classList.contains('active') && e.target !== navLink || e.target !== navListItem) {
                    navMenu.classList.remove('active');
                    navIcon.classList.remove('change');
                }*/
            }
            if (e.target === navLink || e.target === navListItem) {
                navMenu.classList.remove('active');
                navIcon.classList.remove('change');
            }
    })
}

function widenLogo () {
    logo.insertAdjacentHTML("beforeend", '<p class="header-logo__text">Forkio</p>')
}









