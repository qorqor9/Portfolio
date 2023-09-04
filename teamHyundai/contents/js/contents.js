// Gnb
$('.contents_header .logo_left2').click(function(){
    $('.contents_gnb').slideToggle();
    if($('.contents_header .logo_left2 .fa').hasClass("fa-caret-down")) {
        $('.contents_header .logo_left2 .fa').removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
        $('.contents_header .logo_left2 .fa').removeClass('fa-caret-up').addClass('fa-caret-down');
        }
});

var tab = $('.contents_gnb .menu').find('li');
var i;
function tab_menu(num){
    for(i=0;i<tab.length;i++){
        if(num==i){
            // a-1. active 클래스 적용
            tab.eq(i).addClass('active');
            // b-1. 해당 콘텐츠 보여주기
            $('.contents_gnb .item').eq(i).stop().show();
        }else {
            // a-2. active 클래스 제거
            tab.eq(i).removeClass('active');
            // b-2. 나머지 콘텐츠 가리기
            $('.contents_gnb .item').eq(i).hide();
        }
    }
}

// Snb
var snb = $('.item_snb ul').find('li');
var i;
function snb_menu(num){
    for(i=0;i<snb.length;i++){
        if(num==i){
            snb.eq(i).addClass('click');
            $('.vehicle').eq(i).stop().show();
        }else{
            snb.eq(i).removeClass('click');
            $('.vehicle').eq(i).hide();
        }
    }
}

// Gnb Slide
var snbIndexFirst = 1;
var snbIndexSecond = 1;

snbFirst(snbIndexFirst);
snbSecond(snbIndexSecond);

function snbfirstslide (num){
    snbFirst(snbIndexFirst+=num);
}
function snbsecondslide (num){
    snbSecond(snbIndexSecond+=num);
}
function snbFirst(num){

    if(num>2){
        snbIndexFirst=1;
    }
    if(num<1){
        snbIndexFirst=2;
    }
    for(var i=0;i<2;i++){
        $('.first .item_slide').eq(i).hide();
        $('.first .item_slide').eq(snbIndexFirst-1).show();
    }
}
function snbSecond(num){

    if(num>3){
        snbIndexSecond=1;
    }
    if(num<1){
        snbIndexSecond=3;
    }
    for(var i=0;i<3;i++){
        $('.second .item_slide').eq(i).hide();
        $('.second .item_slide').eq(snbIndexSecond-1).show();
    }
}


/* Main Slide */

var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(num){
    showSlide(slideIndex += num);
}
function currentSlides(num){
    showSlide(slideIndex = num);
}
function showSlide(num){

    var dot = $('.contents_circle .dot');

    if(num>2){
        slideIndex=1;
    }
    if(num<1){
        slideIndex=2;
    }

    /* 2. 수동 슬라이드 구현 */
    // 2-1. 모든 슬라이드 이미지 박스 가림
    for(var i=0; i<2; i++){
        $('.2wd .contents_slide').eq(i).hide();
        $('.4wd .contents_slide').eq(i).hide();

    }
    // 2-2. 로딩 시 첫번째 슬라이드 이미지 나오도록 코딩
    // 이벤트 발생시 다음, 이전 이미지 구현됨
    $('.2wd .contents_slide').eq(slideIndex-1).show();
    $('.4wd .contents_slide').eq(slideIndex-1).show();

    /* 3. Dot 컬러바꾸기 구현 */
    $('.contents_circle .dot').eq(slideIndex-1).css({backgroundColor: "#007fa8"});
    $('.contents_circle .dot').eq(slideIndex-2).css({backgroundColor: "#ccc"});
}

$('.contents_prev, .contents_next').click(function(e){
    e.preventDefault();
});

// 구동버튼
var btn = $('.contents_wd').find('button');
var i;
function wd(num){
    for(i=0;i<btn.length;i++){
        if(num==i){
            btn.eq(i).addClass('click');
            $('.slide_wrap').eq(i).show();
            document.getElementById('contents_change').innerHTML="(6)"
        }else {
            btn.eq(i).removeClass('click');
            $('.slide_wrap').eq(i).hide();
            document.getElementById('contents_change').innerHTML="(5)"
        }
    }
}


// TopBtn
$(document).ready(function(){
    /* scrollTo 플러그인 사용 */
    $('.contents_top').click(function(){
        // scrollTo(링크될 # || Y축픽셀값, 애니메이션 시간)
        $(window).scrollTo(this.hash || 0,500);
    });
    
    /* 스크롤 100px이상 되었을때 TOP 버튼 나오도록 코딩 */
    var sa = 20;
    $(window).scroll(function(){
        var num = $(window).scrollTop();
        if(num>sa){
            $('.contents_top').stop().animate({bottom:'30px', opacity:'1'},'fast');
        }else{
            $('.contents_top').stop().animate({bottom:'0', opacity:'0'}, 'fast');
        }
    });
});


// EndBtn
$('.contents_header .logo .logo_right button').click(function(){
   $('.end').show();
   $('.endBack').css({display:'block'});
});
$('.end .x').click(function(){
    $('.end').stop().hide();
    $('.endBack').css({display:'none'});
});
$('.end button').stop().click(function(){
    $('.end').stop().hide();
    $('.endBack').css({display:'none'});
});


// 비교버튼
$('.contents_model h2 a').click(function(){
    $(this).toggleClass('clicked');
    $('.contents_slide .box h5').toggleClass('active');
    $('.contents_compare').stop().slideToggle();
    // $('.alert').stop().fadeIn(500);
    // $('.endBack').stop().fadeIn(500);
    // setTimeout(function(){
    //     $('.alert').stop().fadeOut(500);
    //     $('.endBack').stop().fadeOut(500);
    // }, 1500);
});
$('.closeBtn').click(function(){
    $('.contents_model h2 a').toggleClass('clicked');
    $('.contents_slide .box h5').toggleClass('active');
    $('.contents_compare').stop().slideToggle();
});
$('.contents_slide .box h5').click(function(){
    $(this).toggleClass('clicked');
});

// 새로고침
$('.ionic5').click(function(){
    location.reload();
});

//페이지 준비중
const txt = "<div class='alert'>죄송합니다. 해당 페이지는 준비중 입니다.</div>";
$('body').append(txt);
// 페이지 준비중 알림 이벤트
$('a[href="#"]').click(function(e){
    e.preventDefault();
});
$('.contents_gnb .item button, .box .detail a, .box button, .contents_chatBot').click(function(){
    $('.alert').stop().fadeIn(500);
    $('.endBack').stop().fadeIn(500);
    setTimeout(function(){
        $('.alert').stop().fadeOut(500);
        $('.endBack').stop().fadeOut(500);
    }, 1500);
});
// $('.contents_model h2').click(function(){
//     if($('.contents_model h2 a').hasClass('clicked')){
//         $('.alert').fadeIn()
//         $('.endBack').fadeIn()
//         setTimeout(function(){
//             $('.alert').stop().fadeOut()
//             $('.endBack').stop().fadeOut()
//         },1500)
//     }
// });


$('.contents_slide .box h5').click(function(){
    if($(this).hasClass('clicked')){
        var boxTxt1=$(this).parent().find('h2').text();
        var boxTxt2=$(this).parent().find('h3').text();
        var boxTxt3=$(this).parent().find('.detail p').eq(0).text();
        $('.compare_box ul .emptyBox').eq(0).addClass('thisBox');
        $('.compare_box ul .emptyBox').eq(0).removeClass('emptyBox');
        $('.compare_box ul .thisBox').eq(-1).empty();
        $('.compare_box ul .thisBox').eq(-1).append("<h2>"+boxTxt1+"</h2>");
        $('.compare_box ul .thisBox').eq(-1).append("<h5>"+boxTxt3+"</h5>");
        $('.compare_box ul .thisBox').eq(-1).append("<h3>"+boxTxt2+"</h3>");
        $('.compare_box ul .thisBox').eq(-1).css({border:'2px solid #007fa8'});
    }else{
        $('.compare_box ul .thisBox').eq(0).empty();
        $('.compare_box ul .thisBox').eq(0).append("<h4>+</h4>");
        $('.compare_box ul .thisBox').eq(0).append("<p>비교할 모델을 추가해주세요.</p>");
        $('.compare_box ul .thisBox').eq(0).css({border:'none'});
        $('.compare_box ul .thisBox').eq(0).addClass('emptyBox');
        $('.compare_box ul .thisBox').eq(0).removeClass('thisBox');
    };
})