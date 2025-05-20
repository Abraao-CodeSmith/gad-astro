function openFullscreen(img) {
    const overlay = document.getElementById("fullscreenOverlay");
    const fullImg = document.getElementById("fullscreenImg");
    fullImg.src = img.src;
    overlay.style.display = "flex";
}

function closeFullscreen() {
    document.getElementById("fullscreenOverlay").style.display = "none";
}