//wow plugin//
$(document).ready(function() {
    new WOW().init();

    //slick slider//
$('.slick').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
  });

  //body
  $('#brand_btn').click(function(){
    $('#brand').toggle("slow");
});
})