//  MENU
$(document).ready(function(){
  $(".menu-open").click(function(){
      $("nav ul").slideToggle("500");
  });
  $(window).resize(function(){
    if($(window).width() > 768){
      $("nav ul").removeAttr("style");
    }
  });
});
// VALIDATE FORM
$(function() {
	$("#order").validate({
		rules: {
			form_name: {
        required: true,
        rangelength: [5, 12]
			},
			form_tel: {
				required: true,
				minlength: 12,
				digits: true
			}
		}
	});
});
// SMOOTH SCROLLING
$(document).ready(function(){
  $("#nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
// SLIDER
$('.single-item').slick();

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.fade-2').slick({
	dots: true
});