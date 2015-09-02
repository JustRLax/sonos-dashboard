$(document).ready(function() {
    //*************Custom Pager Slider    
    $('.slider').bxSlider({
        pagerCustom: 'ul.pager',
        controls: false,
        auto: true,
        pause: 15010,
        adaptiveHeight: true,
        slideSpeed: 420
    });
    $(".albums").owlCarousel({
        autoPlay: 5000,
        navigation: false,
        pagination : false,
        scrollPerPage: true,
        items: 2,
    });
    $(".news").owlCarousel({
        autoPlay: 5000,
        navigation: false,
        pagination : false,
        singleItem: true,
        transitionStyle: 'goDown'
    });
    $(".shows").owlCarousel({
        autoPlay: 5000,
        navigation: false,
        pagination : false,
        singleItem: true,
        transitionStyle: 'goDown'
    });
    
    if ($('h1.artist span').width() >= 1530) {
        $('h1.artist span').clone().appendTo('h1.artist');
        $('h1.artist').addClass('marquee');
    }
    if ($('h1.track-info span').width() >= 1530) {
        $('h1.track-info span').clone().appendTo('h1.track-info');
        $('h1.track-info').addClass('marquee');
    }
});