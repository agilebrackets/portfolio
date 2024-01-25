AOS.init();



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
    pageDots: true,
    autoPlay: 2000,
pauseAutoPlayOnHover: false,
    cellAlign:'center',
});

function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }

}

