// Add a function of math random to show different backgrounds relating to tech

function myFunction() {
    document.body.style.backgroundColor = "#00000";
    document.body.style.backgroundImage = "url('https://im4.ezgif.com/tmp/ezgif-4-2a5dfe2d2f.gif')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
}



// add a full screen 
const x = document.documentElement;

function fullScreen() {
    if (document.fullscreenEnabled) {
        x.requestFullscreen();
    }
}

// pop up so people can share web application

