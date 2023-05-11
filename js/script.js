// navbar toggle

var navbar__nav = document.querySelector(".navbar__nav");
var toggleBtn = document.querySelector(".navbar__toggler");

toggleBtn.addEventListener("click", function(e){
    
    if(window.screen.availWidth <= 767) {
        navbar__nav.classList.toggle("collapse");
        toggleBtn.classList.toggle("collapse");
    }
});


toggleBtn.addEventListener("click", function(e){
    
    if(window.screen.availWidth >= 767) {
        alert("what?")
    }
});



// slider with owl carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// video playing in testimonial section

playBtn = document.querySelector(".btn-play");
video = document.querySelector("video");

playBtn.addEventListener("click", function(){
    video.play();
    playBtn.style.display = "none";
});

video.addEventListener("click", () => {
    video.pause();
    playBtn.style.display = "block";
});


// testmonial slider

let slider = document.querySelector(".slider");
let slides = slider.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval = setInterval(showNextSlide, 4000); // storing the interval for later use like reseting the interval
let prevBtn = document.querySelector(".btn.prev");
let nextBtn = document.querySelector(".btn.next");

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);


// function for previous slide
function showPrevSlide() {
    resetInterval();
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

// function for next slide and default slider


function showNextSlide() {
    resetInterval();
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function resetInterval() {
    clearInterval(slideInterval); // clear the previous interval
    slideInterval = setInterval(showNextSlide, 5000); // start a new interval
}
