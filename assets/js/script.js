/*VARIÁVEIS NAVBAR*/
const navOpenBtnb = document.querySelector("[data-menu-open]");
const navCloseBtnb = document.querySelector("[data-menu-close]");
const navBar = document.querySelector("[data-navbar]");
const overLay = document.querySelector("[data-overLay]");

const nav = [navOpenBtn, navCloseBtn, overLay];

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function () {
    navBar.classList.toggle("active");
  });
}
