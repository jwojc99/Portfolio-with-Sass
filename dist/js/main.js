const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn-burger");
const navigation = document.querySelector("nav");
const menuNav = document.querySelector(".menu-nav");
let showMenu = false;
const menuListItems = document.querySelectorAll(".menu-nav-item");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	console.log("click");
	showMenu = !showMenu;
	hamburger.classList.toggle("open");
	navigation.classList.toggle("open");
	menuNav.classList.toggle("open");
	menuListItems.forEach((item) => item.classList.toggle("open"));
}
