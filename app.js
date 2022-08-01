$(document).ready(function() {
    $('.blog-slider').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:2000,
        nav: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout:2000,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    window.addEventListener('scroll', (event) => {
        console.log(event.target.scrollingElement.scrollTop)
        if($(this).scrollTop() >= 30) {
            $(".header").removeClass("header-background-default");
            $(".header").addClass("header-background-color");
        }
        
        else {
            $(".header").removeClass("header-background-color");
            $(".header").addClass("header-background-default");
        }
    });
});

