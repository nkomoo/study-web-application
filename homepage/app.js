

function myFunction() {
    document.body.style.backgroundColor = "#00000";
    document.body.style.backgroundImage = "url('/gifs/typing-dark.gif')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
}



// Fullscreen
const x = document.documentElement;

function fullScreen() {
    if (x.requestFullscreen) {
        x.requestFullscreen();
    } else if (x.webkitRequestFullscreen) {
        x.webkitRequestFullscreen();
    } else if (x.msRequestFullscreen) {
        x.msRequestFullscreen();
    }
}