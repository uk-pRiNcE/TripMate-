// ===============================
// 🎥 BACKGROUND VIDEO SMOOTH LOOP
// ===============================

const video = document.getElementById("bgVideo");

if (video) {
    video.addEventListener("ended", function () {
        this.currentTime = 0;
        this.play();
    });
}


// ===============================
// 📱 HAMBURGER MENU FUNCTIONALITY
// ===============================

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


// ===============================
// ❌ AUTO CLOSE MENU ON CLICK
// ===============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ===============================
// 📱 CLOSE MENU IF SCREEN RESIZED
// ===============================

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
    }
});