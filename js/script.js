/* -------------------------------------------------------------------------- */
/*                                   banner                                   */
/* -------------------------------------------------------------------------- */

$(".fade-slider").jdSlider({
    slideShow: 5,
    isAuto: true,
    isLoop: true,
    interval: 6000,
    isCursor: true,


   

});


var alturaBanner = $(".fade-slider").height();
$(".bannerParallax").css({"height": alturaBanner+"px"})
 