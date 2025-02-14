var servicesCards = document.getElementsByClassName("servicesCard");
var sCount = 0;
var uCount = 4;

var prevWid = screen.width;
var wid = screen.width;

var vhCon = document.getElementById("vhCon");
var carousel = document.getElementById("carousel");
var slideLength = carousel.offsetWidth;
var slideTranslate = 0;
var clickPos = 1;
var sliderPos = 0;

window.addEventListener('resize', function(event) {
  wid = screen.width;

  if (wid < prevWid && wid <= 490){
    OnResizeToMobile();
    prevWid = wid;
  }
  else if (wid > prevWid && wid > 490){
    OnResizeToDesktop();
    prevWid = wid;
  }

}, true);

setInterval(Slide, 4000);

vhCon.addEventListener("click", function () {
  if (clickPos == 1) {
    clickPos--;
    vhCon.style.transform = "translateX(-50vw)";
  } else {
    clickPos++;
    vhCon.style.transform = "translateX(50vw)";
  }
});


if (wid <= 490) {
  OnResizeToMobile();
}

function toggleService() {
  if (!allowClick) {
    return;
  } else {
    allowClick = false;
  }

  fadeOut(servicesCards[sCount]);
  if (sCount == 2) {
    sCount = 0;
  } else {
    sCount++;
  }

  fadeIn(servicesCards[sCount]);

  setTimeout(function () {
    allowClick = true;
  }, 700);
}

function fadeOut(elem) {
  elem.style.opacity = 0;
  setTimeout(function () {
    elem.style.display = "none";
  }, 500);
}

function fadeIn(elem) {
  elem.style.display = "flex";
  setTimeout(function () {
    elem.style.zIndex = parseInt(elem.style.zIndex) + 4;
    elem.style.opacity = 1;
  }, 100);
}

function Slide() {
  if (sliderPos == 0 || sliderPos == 1) {
    sliderPos++;
    slideTranslate -= slideLength / 3;
  } else {
    sliderPos = 0;
    slideTranslate = 0;
  }
  carousel.style.transform = "translateX(" + slideTranslate + "px)";
}


function OnResizeToMobile(){

  wid = screen.width;

  for (var i = 0; i < servicesCards.length; i++) {
    servicesCards[i].addEventListener("click", toggleService, false);
  }
  servicesCards[1].style.display = "none";
  servicesCards[2].style.display = "none";
  servicesCards[1].style.opacity = 0;
  servicesCards[2].style.opacity = 0;

  document.getElementById("btnQuote1").href = "tel:+1-905-564-9450";
}

function OnResizeToDesktop(){
  for (var i = 0; i < servicesCards.length; i++) {
    servicesCards[i].removeEventListener("click", toggleService);
    servicesCards[i].style.display = "flex";
    servicesCards[i].style.opacity = 1;
  }

  document.getElementById("btnQuote1").href = "tel:+1-905-564-9450";
}