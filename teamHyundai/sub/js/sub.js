
// SECTION GNB에 효과 주기
// DOM객체 탭메뉴 변수에 할당
var tab = $('.sub_tab').find('li');

$(".sub_gnb ul li").on('click', function () {

});


// Event Listener
function tab_menu(num) {

    for (i = 0; i < tab.length; i++) {
        if (num == i) {
            // a-1. active 클래스 적용
            tab.eq(i).addClass('sub_effect');
            $(".sub_flex_box").eq(i).stop().show();
        } else {
            // a-2. active 클래스 제거
            tab.eq(i).removeClass('sub_effect');
            $(".sub_flex_box").eq(i).stop().hide();
        };
    };
};




//비교버튼
var flag = true;
$('.sub_button').click(function () {
    $(this).toggleClass('clicked');
    $('.contents_compare').stop().slideToggle();
    if (flag) {
        $('.sub_button i').css('color', '#007fa8');
        flag = false;
    }
    else if (flag != true) {
        $('.sub_button i').css('color', '#a1a1a1');
        flag = true;
    }
});


$('.closeBtn').click(function () {
    $('.contents_compare').stop().slideToggle();
    if (flag == false) {
        $('.sub_button i').css('color', '#a1a1a1');
        flag = true;
    }
    else {
        $('.sub_button i').css('color', '#a1a1a1');
    }
});

// $('.ready').click(function(e){
//     e.preventDefault();
//     if($('.sub_button').hasClass('clicked')){
//         alert('작업중');
//     }else{
//         $('.alert').fadeIn()
//         $('#curtain').fadeIn()
//         setTimeout(function () {
//             $('.alert').stop().fadeOut()
//             $('#curtain').stop().fadeOut()
//         }, 1000)
//     }
// })