const musicButton = document.getElementById("musicButton");
const bgMusic = document.getElementById("bgMusic");

musicButton.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicButton.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicButton.textContent = "♫";
    }
});