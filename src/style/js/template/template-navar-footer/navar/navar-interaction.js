const menuHamberIconOpen = document.querySelector(".menu");
const menuHamberIconClose = document.querySelector(".close");
const containerMenuMobile = document.querySelector(".container_menu-mobile");

menuHamberIconOpen.addEventListener("click", openMobileMenu);
menuHamberIconClose.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
  menuHamberIconOpen.classList.add("inactive");
  menuHamberIconClose.classList.remove("inactive");
  containerMenuMobile.classList.remove("inactive");
}

function closeMobileMenu() {
  menuHamberIconOpen.classList.remove("inactive");
  menuHamberIconClose.classList.add("inactive");
  containerMenuMobile.classList.add("inactive");
}
