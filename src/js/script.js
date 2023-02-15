const navMenu = document.querySelector('.navbar-list')
const navIcon = document.querySelector('.navbar-icon')

navIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    navIcon.classList.toggle('change')
})
function headerNavBar() {
    const navIcon = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}