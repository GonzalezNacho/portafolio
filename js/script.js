let botonNav = document.getElementById('icono-nav');
const menuResponsive = () => {
    const nav = document.getElementById("nav");
    nav.className==="" ? nav.className = "responsive" : nav.className = "";
}

botonNav.addEventListener('click', menuResponsive);