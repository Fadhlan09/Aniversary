const musicButton = document.getElementById("musicButton");
const bgMusic = document.getElementById("bgMusic");

const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");
const closeMenu = document.getElementById("closeMenu");
const menuMusic = document.getElementById("menuMusic");


// =========================
// MUSIC
// =========================

function toggleMusic() {

    if (bgMusic.paused) {

        bgMusic.play();
        musicButton.textContent = "🔊";

    } else {

        bgMusic.pause();
        musicButton.textContent = "♫";

    }

}

musicButton.addEventListener("click", toggleMusic);

menuMusic.addEventListener("click", (e) => {

    e.preventDefault();

    toggleMusic();

    menuPanel.classList.remove("active");

});


// =========================
// HAMBURGER MENU
// =========================

menuButton.addEventListener("click", () => {

    menuPanel.classList.add("active");

});

closeMenu.addEventListener("click", () => {

    menuPanel.classList.remove("active");

});