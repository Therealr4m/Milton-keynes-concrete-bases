// =========================================
// Navigation
// =========================================

const menu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");

const openBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("menu-close");

function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

openBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeMenu();
    }
});

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});