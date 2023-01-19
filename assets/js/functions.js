//Hamburger
$(function() {
    function opacityMenu() {
      var activeOpacity = $(".nav_list").hasClass("active");
      $(".nav_list").animate({left: activeOpacity ? "0%" : "100%"}, 400);
    }
    $(".hamburger").click(function(event) {
      event.stopPropagation();
      $(".hamburger").toggleClass("open");
      $(".nav_list").toggleClass("active");
      opacityMenu();
    });
  });

//Awsome Worck Nav
  $(function() {     
    $('.toggle_button').on('click',function(e) {
        e.preventDefault();
        $('.subnav').slideToggle();
    });
});


// Subscribe Input
$(document).ready(function(){
	$('.input_placeholder input').on('focus',function(){
		if(!$(this).parent('.input_placeholder').find('label').hasClass('hide')){
                        $(this).parent('.input_placeholder').find('label').addClass('hide');
                        }
	});
            $('.input_placeholder input').on('blur',function(){
		if($(this).val() == '' && $(this).parent('.input_placeholder').find('label').hasClass('hide')){
                        $(this).parent('.input_placeholder').find('label').removeClass('hide');
                    }
             });
});