/* Full Page */
if (matchMedia('only screen and (min-width: 769px)').matches) {

    $(document).ready(function() {
        $('#fullpage').fullpage({
            scrollOverflow: true,
            css3: true,
            onLeave: function(index, nextIndex, direction) {
            //leaving 1st section
            if (index == 1) {
                $('.header').addClass('fixed');
            }
            //back to the 1st section
            if (nextIndex == 1) {
                $('.header').removeClass('fixed');
            }
        },

        afterResize: function() {
            windowsHeight = $(window).height();
        }
    });
    });

    $(document).on('click', '.moveUp', function() {
        $.fn.fullpage.moveSectionUp();
    });
    $(document).on('click', '.moveDown', function() {
        $.fn.fullpage.moveSectionDown();
    });
}


if (matchMedia('only screen and (max-width: 768px)').matches) {


    $(document).ready(function() {
        $('#fullpage').fullpage({
            css3: false,
            keyboardScrolling: false,
            autoScrolling:false,
            scrollOverflow:false,

            afterResize: function() {
                windowsHeight = $(window).height();
            }
        });
    });

    $(document).on('click', '.moveUp', function() {
        $.fn.fullpage.moveSectionUp();
    });
    $(document).on('click', '.moveDown', function() {
        $.fn.fullpage.moveSectionDown();
    });

}

$(".dropdown-menu").css({ maxHeight: $(window).height() - $(".dropdown-menu").height() + "px" });

// Google Maps
var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 59.325, lng: 18.070 }
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.327, lng: 18.067 },
        icon: 'images/map-pin.png'
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


var panorama;

function initialize() {
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'), {
            position: { lat: 51.502142, lng: -0.127475 },
            pov: { heading: 165, pitch: 0 },
            zoom: 0
        });
}





//Shop Products Fade Effect
$(".product").hover(function() {
    $(this).find("img").animate({
        opacity: 0
    }, 300);
}, function() {
    $(this).find("img").animate({
        opacity: 1
    }, 300);
});




//Add Hover effect to menus
jQuery('ul.nav li.dropdown').hover(function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
}, function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
});




// Youtube Video Background
jQuery(function($) {
    $('#background-video').YTPlayer({
        fitToBackground: true,
        videoId: 'KpDnQA812N0',
        pauseOnScroll: true,
        callback: function() {
            videoCallbackEvents();
        }
    });

    var videoCallbackEvents = function() {
        var player = $('#background-video').data('ytPlayer').player;
        player.addEventListener('onStateChange', function(event) {
            console.log("Player State Change", event);
            if (event.data === 0) {
                console.log('video ended');
            } else if (event.data === 2) {
                console.log('paused');
            }
        });
    }
});


jQuery(function($) {
    $('#background-video-2').YTPlayer({
        fitToBackground: true,
        videoId: 'xiT1LYP_yqo',
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 1,
            showinfo: 0,
            branding: 0,
            rel: 0,
            autohide: 0,
        },
        pauseOnScroll: true,
        callback: function() {
            videoCallbackEvents();
        }
    });
    var videoCallbackEvents = function() {
        var player = $('#background-video-2').data('ytPlayer').player;
        player.addEventListener('onStateChange', function(event) {
            console.log("Player State Change", event);
            if (event.data === 0) {
                console.log('video ended');
            } else if (event.data === 2) {
                console.log('paused');
            }
        });
    }
});


jQuery(function($) {
    $('#background-video-3').YTPlayer({
        fitToBackground: true,
        videoId: 'm27LeRTzESI',
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 1,
            showinfo: 0,
            branding: 0,
            rel: 0,
            autohide: 0,
        },
        pauseOnScroll: true,
        callback: function() {
            videoCallbackEvents();
        }
    });
    var videoCallbackEvents = function() {
        var player = $('#background-video-2').data('ytPlayer').player;

        player.addEventListener('onStateChange', function(event) {
            console.log("Player State Change", event);
            if (event.data === 0) {
                console.log('video ended');
            } else if (event.data === 2) {
                console.log('paused');
            }
        });
    }
});




// Parallax
if (document.getElementById("parallax") !== null) {
    var scene = document.getElementById('parallax');
    var parallax = new Parallax(scene);
}




// Custom Labels
$('.focus').label({
    'show': 'keyup'
});




// Countdown Timer
$('#getting-started').countdown('2016/04/01', function(event) {
    $(this).html(event.strftime('%-n days %H hours %M minutes %S seconds'));
});




// Counter
$(document).ready(function() {
    $('.timer').countTo();
});




// WOW Animation
var wow = new WOW({
    mobile: false,
    offset: -9999999,
    live: true,
    scrollContainer: 'section'
});
wow.init();

// Animations Preview Page
$(".animated").hover(function() {
    $(this).addClass("infinite");
}, function() {
    $(this).removeClass("infinite");
});


/* Products Carousel */
$(document).ready(function() {

    $("#carousel-products").owlCarousel({
        autoPlay: 7000,
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: true,
    });
});


/* Brands Carousel */
$(document).ready(function() {
    $("#brands").owlCarousel({
        autoPlay: 7000,
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });
});


/* Restaurant Carousel */
$(document).ready(function() {
    $("#hotel-food").owlCarousel({
        autoPlay: 4000,
        pagination: false,
        singleItem: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });
});


/* Restaurant Carousel */
$(document).ready(function() {
    $("#brands-2").owlCarousel({
        autoPlay: 2000,
        pagination: false,
        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });
});


/* Brands Carousel 3 */
$(document).ready(function() {
    $("#brands-3").owlCarousel({
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        navigationText: ["<span class=\"icon-entypo-left-open-mini\"></span>", "<span class=\"icon-entypo-right-open-mini\"></span>"],
        rewindNav: true,
        scrollPerPage: false,
    });
});


/* Brands Carousel 4 */
$(document).ready(function() {
    $("#brands-4").owlCarousel({
        pagination: true,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });
});


/* Images Carousel */
$(document).ready(function() {
    $("#carousel-1").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });
});

/* Images Carousel 2 */
$(document).ready(function() {
    $("#carousel-2").owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 3 seconds
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });
});


/* Images Carousel 3 */
$(document).ready(function() {
    $("#carousel-3").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        navigationText: ["<span class=\"icon-entypo-left-open-mini\"></span>", "<span class=\"icon-entypo-right-open-mini\"></span>"],
        rewindNav: true,
        scrollPerPage: false,
    });
});


/* Image Carousel 4 */
$(document).ready(function() {
    $("#carousel-4").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        items: 4,
        pagination: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 1],
        navigation: false,
        rewindNav: true,
        scrollPerPage: false,
    });
});



/* Twitter Carousel */
$(document).ready(function() {
    $("#carousel-twitter").owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 3 seconds
        items: 1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });
});


/* Travel Carousel */
$(document).ready(function() {
    $("#carousel-travel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        navigationText: ["<span class=\"icon-entypo-left-open-mini\"></span>", "<span class=\"icon-entypo-right-open-mini\"></span>"],
        rewindNav: true,
        scrollPerPage: false,
        transitionStyle: "fade"
    });
});


/* Albums Carousel */
$(document).ready(function() {
    $("#albums-carousel").owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 3 seconds
        items: 3,
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        navigationText: ["<span class=\"icon-entypo-left-open-mini\"></span>", "<span class=\"icon-entypo-right-open-mini\"></span>"],
        rewindNav: true,
        scrollPerPage: false,
    });
});


/* Fitness Carousel */
$(document).ready(function() {
    $("#carousel-fitness").owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 3 seconds
        pagination: false,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        navigationText: ["<span class=\"icon-entypo-left-open-mini\"></span>", "<span class=\"icon-entypo-right-open-mini\"></span>"],
        rewindNav: true,
        scrollPerPage: false,
    });
});


/* Instagram Carousel */
$(document).ready(function() {
    $("#instagram").owlCarousel({
        autoPlay: 7000, //Set AutoPlay to 3 seconds
        pagination: false,
        items: 8,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        autoHeight: true
    });
});

/* Products Carousel */
$(document).ready(function() {

    $("#reviews-carousel").owlCarousel({
        autoPlay: 7000,
        pagination: false,
        items: 1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: true,
    });
});



// Main Slider
var tpj = jQuery;
var revapi104;
tpj(document).ready(function() {
    if (tpj("#main-slider").revolution == undefined) {
        revslider_showDoubleJqueryError("#main-slider");
    } else {
        revapi104 = tpj("#main-slider").show().revolution({
            sliderType: "standard",
            jsFileLocation: "../revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 6000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 960,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "right",
                    v_align: "bottom",
                    h_offset: 80,
                    v_offset: 50,
                    space: 5,
                    tmp: ''
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [720, 768, 960, 720],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                disable_onmobile: "on"
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: 0,
            stopAtSlide: 0,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAlignForce: "on",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0px",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "on",
                disableFocusListener: false,
            }
        });
var newCall = new Object(),
cslide;
newCall.callback = function() {
    var proc = revapi104.revgetparallaxproc(),
    fade = 1 + proc,
    scale = 1 + (Math.abs(proc) / 10);

    punchgs.TweenLite.set(revapi104.find('.slotholder, .rs-background-video-layer'), {
        opacity: fade,
        scale: scale
    });
}
newCall.inmodule = "parallax";
newCall.atposition = "start";

revapi104.bind("revolution.slide.onloaded", function(e) {
    revapi104.revaddcallback(newCall);
});
}
});



// Main Slider 2
// Main Slider 3
var tpj = jQuery;
var revapi148;
tpj(document).ready(function() {
    if (tpj("#main-slider-2").revolution == undefined) {
        revslider_showDoubleJqueryError("#main-slider-2");
    } else {
        revapi148 = tpj("#main-slider-2").show().revolution({
            sliderType: "standard",
            jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            parallax: {
                type: "3D",
                origo: "slidercenter",
                speed: 1000,
                levels: [2, 4, 6, 8, 10, 12, 14, 16, 45, 50, 47, 48, 49, 50, 0, 50],
                type: "3D",
                ddd_shadow: "off",
                ddd_bgfreeze: "on",
                ddd_overflow: "hidden",
                ddd_layer_overflow: "visible",
                ddd_z_correction: 100,
            },
            spinner: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "on",
            fullScreenAlignForce: "on",
            fullScreenOffsetContainer: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
}
});






// Main Slider 3
var tpj = jQuery;
var revapi206;
tpj(document).ready(function() {
    if (tpj("#main-slider-3").revolution == undefined) {
        revslider_showDoubleJqueryError("#main-slider-3");
    } else {
        revapi206 = tpj("#main-slider-3").show().revolution({
            sliderType: "standard",
            jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "hotel-slider",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-title-wrap">   <span class="tp-arr-titleholder">{{title}}</span> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    style: "hotel-slider",
                    hide_onleave: true,
                    direction: "vertical",
                    h_align: "left",
                    v_align: "bottom",
                    h_offset: 20,
                    v_offset: 20,
                    space: 5
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            parallax: {
                type: "3D",
                origo: "slidercenter",
                speed: 1000,
                levels: [2, 4, 6, 8, 10, 12, 14, 16, 45, 50, 47, 48, 49, 50, 0, 50],
                type: "3D",
                ddd_shadow: "off",
                ddd_bgfreeze: "on",
                ddd_overflow: "hidden",
                ddd_layer_overflow: "visible",
                ddd_z_correction: 100,
            },
            spinner: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "on",
            fullScreenAlignForce: "on",
            fullScreenOffsetContainer: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
}
});




//Conference Slider
var tpj = jQuery;
var revapi280;
tpj(document).ready(function() {
    if (tpj("#conference-slider").revolution == undefined) {
        revslider_showDoubleJqueryError("#conference-slider");
    } else {
        revapi280 = tpj("#conference-slider").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revslider/public/assets/js/",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {},
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [610, 768, 660, 720],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "spinner2",
            autoHeight: "on",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "60",
            disableProgressBar: "on",
            hideThumbsOnMobile: "on",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
}
});




// Posts slider
var tpj = jQuery;
var revapi8;
tpj(document).ready(function() {
    if (tpj("#posts-slider").revolution == undefined) {
        revslider_showDoubleJqueryError("#posts-slider");
    } else {
        revapi8 = tpj("#posts-slider").show().revolution({
            sliderType: "standard",
            jsFileLocation: "../revolution/js/",
            sliderLayout: "auto",
            gridwidth: 1230,
            gridheight: 620,
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "uranus",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    style: "uranus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 20,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-inner"></span>'
                }
            },

            lazyType: "single",
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
}
});







// Travel Slider
var tpj = jQuery;
var revapi98;
tpj(document).ready(function() {
    if (tpj("#travel-slider").revolution == undefined) {
        revslider_showDoubleJqueryError("#travel-slider");
    } else {
        revapi98 = tpj("#travel-slider").show().revolution({
            sliderType: "standard",
            jsFileLocation: "../revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 6000,
            navigation: {},
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 500, 400, 300],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
}
});




/* Isotope */


$(window).load(function() {
    var $grid = $('.grid').imagesLoaded(function() {
        $('.grid').isotope({
            layoutMode: 'packery',
            itemSelector: '.grid-item',
            percentPosition: true,
            packery: {

                columnWidth: '.grid-sizer'
            }
        });


        $('a.filter').click(function(e) {
            e.preventDefault();
            var to_filter = $(this).attr('data-filter');
            if (to_filter == 'all') {
                $('.grid').isotope({
                    filter: '.grid-item'
                });
            } else {
                $('.grid').isotope({
                    filter: '.' + to_filter
                });
            }
        });
    });



    $('.isotope-filters').each(function(i, isotopefilters) {
        var $isotopefilters = $(isotopefilters);
        $isotopefilters.on('click', 'a', function() {
            $isotopefilters.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });


    // Isotope 2
    $('.grid-2').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }

    });


    // Isotope Post Col2
    $('.grid-post-col2').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }

    });






    // Isotope Post Col3
    $('.grid-post-col3').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }

    });


    // Isotope Post Col4
    $('.grid-post-col4').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }

    });


    $('a.filter').click(function(e) {
        e.preventDefault();
        var to_filter = $(this).attr('data-filter');
        if (to_filter == 'all') {
            $('.grid-2').isotope({
                filter: '.grid-item'
            });
        } else {
            $('.grid-2').isotope({
                filter: '.' + to_filter
            });
        }

    });

    $('.events-gallery').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }
    });

    $('.restaurant-gallery').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }
    });


    // Isotope Portfolio Col2
    $('.grid-portfolio-col2').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }
    });


    $('a.filter').click(function(e) {
        e.preventDefault();
        var to_filter = $(this).attr('data-filter');
        if (to_filter == 'all') {
            $('.grid-portfolio-col2').isotope({
                filter: '.grid-item'
            });
        } else {
            $('.grid-portfolio-col2').isotope({
                filter: '.' + to_filter
            });
        }
    });



    // Isotope Portfolio Col3
    $('.grid-portfolio-col3').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }
    });


    $('a.filter').click(function(e) {
        e.preventDefault();
        var to_filter = $(this).attr('data-filter');
        if (to_filter == 'all') {
            $('.grid-portfolio-col3').isotope({
                filter: '.grid-item'
            });
        } else {
            $('.grid-portfolio-col3').isotope({
                filter: '.' + to_filter
            });
        }
    });


    // Isotope Portfolio Col4
    $('.grid-portfolio-col4').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }
    });


    $('a.filter').click(function(e) {
        e.preventDefault();
        var to_filter = $(this).attr('data-filter');
        if (to_filter == 'all') {
            $('.grid-portfolio-col4').isotope({
                filter: '.grid-item'
            });
        } else {
            $('.grid-portfolio-col4').isotope({
                filter: '.' + to_filter
            });
        }
    });



    // Isotope Portfolio Col4
    $('.grid-portfolio-col4-no-margin').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,

    });


    $('a.filter').click(function(e) {
        e.preventDefault();
        var to_filter = $(this).attr('data-filter');
        if (to_filter == 'all') {
            $('.grid-portfolio-col4-no-margin').isotope({
                filter: '.grid-item'
            });
        } else {
            $('.grid-portfolio-col4-no-margin').isotope({
                filter: '.' + to_filter
            });
        }
    });



});




// Gradient Move
$(function() {


    // Gradient Move 1
    var originalBGplaypen = $(".gradientmove").css("background-color"),
    x, y, xy, bgWebKit, bgMoz,
    lightColor = "#54d6de",
    gradientSize = 1000;
    $('.gradientmove').mousemove(function(e) {
        x = e.pageX - this.offsetLeft;
        y = e.pageY - this.offsetTop;
        xy = x + " " + y;
        bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
        bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";
        $(this)
        .css({
            background: bgWebKit
        })
        .css({
            background: bgMoz
        });
    }).mouseleave(function() {
        $(this).css({
            background: originalBGplaypen
        });
    });


    // Gradient Move 2
    var gradientm = $(".gradientmove2").css("background-color"),
    x, y, xy, bgWebKit, bgMoz,
    lightColor2 = "#001f9a",
    gradientSize2 = 2000;
    $('.gradientmove2').mousemove(function(e) {
        x = e.pageX - this.offsetLeft;
        y = e.pageY - this.offsetTop;
        xy = x + " " + y;
        bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize2 + ", from(" + lightColor2 + "), to(rgba(255,255,255,0.0))), " + gradientm;
        bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor2 + " 0%, " + gradientm + " " + gradientSize + "px)";
        $(this)
        .css({
            background: bgWebKit
        })
        .css({
            background: bgMoz
        });
    }).mouseleave(function() {
        $(this).css({
            background: gradientm
        });
    });


    // Gradient Move 3
    var originalBGplaypen = $(".gradientmove3").css("background"),
    x, y, xy, bgWebKit, bgMoz,
    lightColor = "#ef3d56",
    gradientSize = 1000;
    $('.gradientmove3').mousemove(function(e) {
        x = e.pageX - this.offsetLeft;
        y = e.pageY - this.offsetTop;
        xy = x + " " + y;
        bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(transparent)), " + originalBGplaypen;
        bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";
        $(this)
        .css({
            background: bgWebKit
        })
        .css({
            background: bgMoz
        });
    }).mouseleave(function() {
        $(this).css({
            background: originalBGplaypen
        });
    });
});





//Minus and Plus - http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function() {
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
});
$(".input-number").keydown(function(e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        (e.keyCode == 65 && e.ctrlKey === true) ||
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        return;
}
if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    e.preventDefault();
}
});