//burger
 
let header_burger = document.querySelector(".header-burger");

header_burger.onclick = function () {
  this.classList.toggle("active");
  this.parentNode.querySelector(".header-top-wrap").classList.toggle("active"); 
};



//slider 

let animTime = 400;
let slides = document.querySelectorAll(".slide");

for (let i = 1; i < slides.length; i++) {
  slides[i].style.left = "-" + i + "00%";
}


let currentSlide = 0;

function left(elem1, elem2) {
  let slideWidth = elem1.parentNode.offsetWidth;
  let start = Date.now(); 
  elem2.style.transform = "translateX(" + slideWidth + "px)";
  let timer = setInterval(function() {
  
  let timePassed = Date.now() - start;
    
  if (timePassed >= animTime) {
    clearInterval(timer);
    elem1.style.transform = "translateX(-100%)";
    elem2.style.transform = "translateX(0)";
    return;
  }
   elem1.style.transform = "translateX(" + (0 - (slideWidth / animTime * timePassed))  + "px)";
   elem2.style.transform = "translateX(" + (slideWidth - (slideWidth / animTime * timePassed))  + "px)";
  

}, 10);
}

function right(elem2, elem1) {
  let slideWidth = elem1.parentNode.offsetWidth;
  let start = Date.now(); 
  elem2.style.transform = "translateX(" + -slideWidth + "px)";
  let timer = setInterval(function() {
  
  let timePassed = Date.now() - start;
    
  if (timePassed >= animTime) {
    clearInterval(timer);
    elem1.style.transform = "translateX(100%)";
    elem2.style.transform = "translateX(0)";
    return;
  }
   elem1.style.transform = "translateX(" +  slideWidth / animTime * timePassed  + "px)";
   elem2.style.transform = "translateX(" + (-slideWidth + (slideWidth / animTime * timePassed))  + "px)";

}, 10);
}

let sliderTop = document.querySelectorAll(".slide-name");

let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");

rightBtn.onclick = function () {
  if (currentSlide === slides.length -1) {
    left(slides[currentSlide], slides[0])
    sliderTop[currentSlide].classList.remove("active");
    currentSlide = 0;
    sliderTop[currentSlide].classList.add("active");
    return;
  }
  sliderTop[currentSlide].classList.remove("active");
  left(slides[currentSlide] , slides[++currentSlide]);
  sliderTop[currentSlide].classList.add("active");

};

leftBtn.onclick = function () {
  if (currentSlide === 0) {
    right(slides[slides.length -1], slides[currentSlide])
    sliderTop[currentSlide].classList.remove("active");
    currentSlide = slides.length -1;
    sliderTop[currentSlide].classList.add("active");
    return;
  }
  sliderTop[currentSlide].classList.remove("active");
  right(slides[currentSlide-1] , slides[currentSlide] );
  currentSlide--;
  sliderTop[currentSlide].classList.add("active");
};


//reviews

let reviewButtons = document.querySelectorAll(".reviews-item-btn");

for (let i = 0; i < reviewButtons.length; i++) {
	reviewButtons[i].onclick = function () {

    if (this.textContent === "Читать полностью"){
      this.textContent = "Скрыть";
    } else {
      this.textContent = "Читать полностью";
    }

		let content = this.previousElementSibling.children;
    content[0].classList.toggle("hide");
    content[1].classList.toggle("hide");

	};
}
