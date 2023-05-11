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