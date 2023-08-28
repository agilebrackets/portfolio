AOS.init();

var elem = document.querySelector('.main-carousel1');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    autoplay: true,

});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel2', {
    // options
    prevNextButtons: false,
    pageDots: false,
    cellAlign: 'left',
    autoplay: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel3', {
    // options
    prevNextButtons: false,
    pageDots: false,
    cellAlign: 'left',
    autoplay: true,

});

function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }

}




