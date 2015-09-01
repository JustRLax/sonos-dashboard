$(document).ready(function() {
    //*************Custom Pager Slider    
    $('.slider').bxSlider({
        pagerCustom: 'ul.pager',
        controls: false,
        auto: true,
        pause: 15001,
        adaptiveHeight: true,
        slideSpeed: 420
    });
    $(".albums").owlCarousel({
        autoPlay: 5000,
        navigation: false,
        pagination : false,
        scrollPerPage: true,
        items: 2
    });
});