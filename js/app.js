const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");
const navItems = document.querySelectorAll(".nav-links a");
const video = document.querySelector('.about-video');

async function forcePlay() {
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    try {
        await video.play();
    } catch (e) {
        console.log("Autoplay blocked:", e);
    }
}


window.addEventListener('load', forcePlay);
video.addEventListener('loadeddata', forcePlay);

function openMenu() {
    navLinks.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
}

function toggleMenu() {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
}

menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
});

overlay.addEventListener("click", () => {
    closeMenu();
});

navItems.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

document.addEventListener("click", (e) => {
    const clickedInsideMenu = navLinks.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
    }
});