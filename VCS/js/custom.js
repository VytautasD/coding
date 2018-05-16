
//link href


$(".sub-menu a ").click(function(e){
    // e.preventDefault();
    console.log($(this).attr("href"));
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top-70}, 1000);
});

//link href




// typing text header start


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// typing text header end














// menu responsive start

$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});

// menu responsvive end


// owl carusel start


$(document).ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        autoplay : true,
        loop : true,
        margin : 10,
        autoplayTimeout : 2000,
        autoplayHoverPause : true,
        items : 4, //10 items above 1000px browser width
        // itemsDesktop : [1000,5], //5 items between 1000px and 901px
        // itemsDesktopSmall : [900,3], // betweem 900px and 601px
        // itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option

        responsiveClass : true,
        responsive:{
            0:{
                autoplayTimeout : 3000,
                items : 1,
                nav : false,
                dots: false
            },
            600:{
                items : 2,
                nav : false,
                dots: false
            },
            1000:{
                items:4,
                nav : false,
                dots: true
            }
        }
    });
});

// carusel end
