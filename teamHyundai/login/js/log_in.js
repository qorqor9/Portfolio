// 로그인 경고창 스크립트
$('button').click(function(){
    if($('#log_in_id').val().length===0){
        $('.problem_alert').eq(0).fadeIn();
        $('#curtain').fadeIn();
    }else if($('#log_in_pw').val().length===0){
        $('.problem_alert').eq(1).fadeIn();
        $('#curtain').fadeIn();
    }else{
        $('.alert').fadeIn()
        $('#curtain').fadeIn()
        setTimeout(function(){
            $('.alert').stop().fadeOut()
            $('#curtain').stop().fadeOut()
        },1000)
    }
});
$('.problem_alert p').click(function(){
    $('.problem_alert').fadeOut();
    $('#curtain').fadeOut();
});
