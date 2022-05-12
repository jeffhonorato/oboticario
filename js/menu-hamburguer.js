const navMenu = document.querySelector(".nav__menu");
const iconePerfume = document.querySelector(".menu__mobile");

iconePerfume.addEventListener("click", () => {
    navMenu.classList.toggle("ativo")
});
