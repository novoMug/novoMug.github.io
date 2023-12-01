var mobMenu = document.getElementById("overlay");
var toggler = 0;
var xIcon = document.getElementById("xIcon");
var hamburgerMenu = document.getElementById("hamburgerMenu");
var mobileLogo = document.getElementById("mobileLogo");
var allowClick = true;
var overLoad = document.getElementById("overLoad");

overLoad.style.opacity = 1;

xIcon.addEventListener("click", toggleMobMenu);
hamburgerMenu.addEventListener("click", toggleMobMenu);
mobileLogo.addEventListener("click", navigateHome);

function toggleMobMenu() {
  if (!allowClick) {
    return;
  } else {
    allowClick = false;
  }

  if (toggler == 0) {
    slideMobMenuIn();
    toggler++;
  } else {
    slideMobMenuOut();
    toggler = 0;
  }

  setTimeout(function () {
    allowClick = true;
  }, 700);
}

function slideMobMenuIn() {
  mobMenu.style.left = "0";
}

function slideMobMenuOut() {
  mobMenu.style.left = "100vw";
}

function navigateHome() {
  window.location.href = "index.html";
}

function fadeOutOverLoad() {
  overLoad.style.opacity = 0;
  setTimeout(function () {
    overLoad.remove();
  }, 1000);
}

setTimeout(fadeOutOverLoad, 1000);
