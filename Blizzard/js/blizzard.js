$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.btn_goTop').show();
	} else{
		$('.btn_goTop').hide();
	}
});
$('.btn_goTop').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});
$('body').append("<div class='warning'>");
$('a').click(function(){  
  if (!$(this).hasClass('ready')) {
    $('.warning').fadeIn();
    $('.screen').fadeIn();
    setTimeout(function(){
        $('.warning').stop().fadeOut();
        $('.screen').stop().fadeOut();
    }, 1000);
  }
});