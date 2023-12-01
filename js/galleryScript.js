var descText = document.getElementById("descText");
var imgCtrlLeft = document.getElementById("imgLeft");
var imgCtrlRight = document.getElementById("imgRight");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var imgPair1 = document.getElementById("imgPair1");
var imgPair2 = document.getElementById("imgPair2");
var imgPair3 = document.getElementById("imgPair3");
var imgPair4 = document.getElementById("imgPair4");
var imgPair5 = document.getElementById("imgPair5");
var galleryImg1 = document.getElementById("galleryImg1");
var galleryImg2 = document.getElementById("galleryImg2");
var galleryImg3 = document.getElementById("galleryImg3");
var galleryImg4 = document.getElementById("galleryImg4");
var galleryImg5 = document.getElementById("galleryImg5");

let wid = screen.width;

if (wid <= 490) {
  descText.remove();
}

var imgArr = [img1, img2, img3, img4, img5];
var imgPairs = [imgPair1, imgPair2, imgPair3, imgPair4, imgPair5];
var galleryImgs = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
];

var ready = false;
var rdCount = 0;
var position = 0;
var mobPosition = 4;

for (var i = 0; i < imgArr.length; i++) {
  let imgPair = imgPairs[i];
  let opacity = 1;

  if (wid <= 490) {
    galleryImgs[i].style.transform = "translateX(0px) scale(1)";
    galleryImgs[i].style.opacity = 1;
    if (i != mobPosition) {
      galleryImgs[i].style.display = "none";
    }
  } else {
    if (i == 0 || i == 4) {
      opacity = 0.2;
    } else if (i == 1 || i == 3) {
      opacity = 0.5;
    } else {
      opacity = 1;
      // updateCaptionText(imgArr[i].id);
    }
  }

  imgArr[i].addEventListener(
    "load",
    function () {
      removeImgOverlay(imgPair);
      fadeInImg(this, opacity);
    },
    false
  );
}

if (wid <= 490) {
  imgCtrlLeft.addEventListener("click", shiftLeftMobile);
  imgCtrlRight.addEventListener("click", shiftRightMobile);
} else {
  imgCtrlLeft.addEventListener("click", shiftLeft);
  imgCtrlRight.addEventListener("click", shiftRight);
}

function removeImgOverlay(imgPair) {
  imgPair.style.opacity = 0;
}

function fadeInImg(img, opacity) {
  img.style.opacity = opacity;
  increaseRdCount();
}

function updateCaptionText(string) {
  descText.innerHTML = string;
}

function increaseRdCount() {
  rdCount++;
  if (rdCount == 5) {
    ready = true;
    displayGalleryControls();
  }
}

function displayGalleryControls() {
  imgCtrlLeft.style.display = "block";
  imgCtrlRight.style.display = "block";
  descText.style.display = "block";
  setTimeout(function () {
    descText.style.opacity = 1;
    if (wid <= 490) {
      imgCtrlLeft.style.opacity = 0.3;
    } else {
      imgCtrlLeft.style.opacity = 1;
    }
    imgCtrlRight.style.opacity = 1;
  }, 300);
}

function shiftLeft() {
  if (!ready) {
    return;
  } else {
    if (position != 2) {
      for (var i = 4; i >= 0; i--) {
        if (position == -2 && i <= 1) {
          continue;
        } else if (position == -1 && i == 0) {
          continue;
        }
        setOpacityByElem(galleryImgs[i], imgArr[i], false);
        setTransByElem(galleryImgs[i], false);
      }
      position++;
    }
  }
}

function shiftRight() {
  if (!ready) {
    return;
  } else {
    if (position != -2) {
      for (var i = 0; i < 5; i++) {
        if (position == 2 && i >= 3) {
          continue;
        } else if (position == 1 && i == 4) {
          continue;
        }
        setOpacityByElem(galleryImgs[i], imgArr[i], true);
        setTransByElem(galleryImgs[i], true);
      }
      position--;
    }
  }
}

function setOpacityByElem(elem, img, left) {
  if (left) {
    switch (elem.style.transform) {
      case "translateX(-450px) scale(0.55)":
        break;
      case "translateX(-250px) scale(0.78)":
        img.style.opacity = 0.2;
        break;
      case "translateX(0px) scale(1)":
        img.style.opacity = 0.5;
        break;
      case "translateX(250px) scale(0.78)":
        img.style.opacity = 1;
        break;
      case "translateX(450px) scale(0.55)":
        img.style.opacity = 0.5;
        break;
    }
  } else {
    switch (elem.style.transform) {
      case "translateX(-450px) scale(0.55)":
        img.style.opacity = 0.5;
        break;
      case "translateX(-250px) scale(0.78)":
        img.style.opacity = 1;
        break;
      case "translateX(0px) scale(1)":
        img.style.opacity = 0.5;
        break;
      case "translateX(250px) scale(0.78)":
        img.style.opacity = 0.2;
        break;
      case "translateX(450px) scale(0.55)":
        break;
    }
  }
}

function setTransByElem(elem, left) {
  if (left) {
    switch (elem.style.transform) {
      case "translateX(-450px) scale(0.55)":
        break;
      case "translateX(-250px) scale(0.78)":
        elem.style.transform = "translateX(-450px) scale(0.55)";
        elem.style.zIndex = 10;
        break;
      case "translateX(0px) scale(1)":
        elem.style.transform = "translateX(-250px) scale(0.78)";
        elem.style.zIndex = 15;
        break;
      case "translateX(250px) scale(0.78)":
        elem.style.transform = "translateX(0) scale(1)";
        elem.style.zIndex = 20;
        break;
      case "translateX(450px) scale(0.55)":
        elem.style.transform = "translateX(250px) scale(0.78)";
        elem.style.zIndex = 15;
        break;
    }
  } else {
    switch (elem.style.transform) {
      case "translateX(-450px) scale(0.55)":
        elem.style.transform = "translateX(-250px) scale(0.78)";
        elem.style.zIndex = 15;
        break;
      case "translateX(-250px) scale(0.78)":
        elem.style.transform = "translateX(0px) scale(1)";
        elem.style.zIndex = 20;
        break;
      case "translateX(0px) scale(1)":
        elem.style.transform = "translateX(250px) scale(0.78)";
        elem.style.zIndex = 15;
        break;
      case "translateX(250px) scale(0.78)":
        elem.style.transform = "translateX(450px) scale(0.55)";
        elem.style.zIndex = 10;
        break;
      case "translateX(450px) scale(0.55)":
        break;
    }
  }
}

function shiftLeftMobile() {
  if (mobPosition == 0) {
    imgCtrlRight.style.opacity = 1;
  }

  if (mobPosition < 4) {
    galleryImgs[mobPosition].style.display = "none";
    mobPosition++;
    galleryImgs[mobPosition].style.display = "flex";
  }

  if (mobPosition == 4) {
    imgCtrlLeft.style.opacity = 0.3;
  }
}

function shiftRightMobile() {
  if (mobPosition == 4) {
    imgCtrlLeft.style.opacity = 1;
  }

  if (mobPosition > 0) {
    galleryImgs[mobPosition].style.display = "none";
    mobPosition--;
    galleryImgs[mobPosition].style.display = "flex";
  }

  if (mobPosition == 0) {
    imgCtrlRight.style.opacity = 0.3;
  }
}
