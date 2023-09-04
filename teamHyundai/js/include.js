$('header').load('./include/header.html', function () {
    // 로딩 시 GNB메뉴 가리기
    $('.gnb_contents nav').hide();
    // GNB 메뉴 스크립트
    $('.gnb li').mouseenter(function () {
        $('header').css({ background: '#fff' });
        $('.select_lang').hide();
        $('.select_login').hide();
        $('.gnb_all_contents').css({ display: 'block' });
        $('#curtain').css({display:'block'});
        $('.util_lang span').html('<i class="fa fa-caret-down" aria-hidden="true"></i>')
        $('.search').css({display:'none'});
        const idx = $(this).index();
        $('.gnb li').removeClass("on");
        $(this).addClass("on");
        $('.gnb_list').hide();
        $('.gnb_list').eq(idx).show();
        $('.gnb_contents nav').hide();
        if (idx == 0) {
            $('.gnb_contents nav').eq(idx).show();
            $('.sub_contents_car ul').hide();
            $('.sub_contents_car ul').eq(idx).show();
        } else {
            $('.gnb_contents nav').eq(idx).show();
        }
    });
    // 마우스 리브 시 GNB 메뉴 가리기
    $('header').mouseleave(function () {
        $('.gnb_all_contents').css({ display: 'none' });
        $('#curtain').css({display:'none'});
        $('.select_login').hide();
        $('.select_lang').hide();
        $('.util_lang span').html('<i class="fa fa-caret-down" aria-hidden="true"></i>');
        $('.search').css({display:'none'});
    });
    // GNB메뉴 X버튼 스크립트
    $('.gnb_close_button').click(function(){
        $('.gnb_all_contents').css({ display: 'none' });
        $('#curtain').css({display:'none'});
    });
    // GNB 차량 콘텐츠 스크립트
    $('.list_car li').mouseenter(function () {
        const carNum = $(this).index();
        $('.list_car li').removeClass("select_default");
        if(carNum<8){
            $(this).addClass("select_default");
        }
        $('.gnb_contents .sub_contents_car').show();
        $('.sub_contents_car ul').hide();
        $('.sub_contents_car ul').eq(carNum).show();
    });
    // 언어 메뉴 스크립트
    $('.select_lang').hide();
    $('.util_lang').mouseenter(function () {
        $('header').css({ background: '#fff' });
        $('.gnb_all_contents').css({ display: 'none' });
        $('#curtain').css({display:'none'});
        $('.select_login').hide();
        $('.util_lang span').html('<i class="fa fa-caret-up" aria-hidden="true"></i>');
        $('.select_lang').show();
        $('.search').css({display:'none'});
    });
    // 로그인 메뉴 스크립트
    $('.select_login').hide();
    $('.util_login').mouseenter(function () {
        $('header').css({ background: '#fff' });
        $('.gnb_all_contents').css({ display: 'none' });
        $('#curtain').css({display:'none'});
        $('.select_lang').hide();
        $('.util_lang span').html('<i class="fa fa-caret-down" aria-hidden="true"></i>');
        $('.select_login').show();
        $('.search').css({display:'none'});
    });
    // 스크롤 바 이동 시 스크립트
    $(window).on('scroll', function () {
        var scrT = $(this).scrollTop();
        if(scrT > 10){
            $('header').css({ background: '#fff' });
            $('header').css({ borderBottom: '1px solid #ddd' });
        }else{
            $('header').css({ background: 'none' });
            $('header').css({ borderBottom: 'none' });
        }
    });
    // 준비창 스크립트
    $('.gnb p,.search fieldset p,.genesistxt a,.caspertxt a,.sub_contents_service li,.sub_contents_digital li,.sub_contents_brand li,.gnb_event dt,.gnb_event dd,.sub_contents_car ul:nth-child(2),.sub_contents_car ul:nth-child(3),.sub_contents_car ul:nth-child(4),.sub_contents_car ul:nth-child(5),.sub_contents_car ul:nth-child(6),.sub_contents_car ul:nth-child(7),.sub_contents_car ul:nth-child(8),.sub_contents_car ul:nth-child(9),.sub_contents_buy ul:nth-child(1),.sub_contents_buy ul:nth-child(3),.sub_contents_buy ul:nth-child(4),.sub_contents_buy ul:nth-child(5),.sub_contents_buy ul:nth-child(6),.sub_contents_buy ul:nth-child(7),.sub_contents_car ul:nth-child(1) li:nth-child(1),.sub_contents_car ul:nth-child(1) li:nth-child(2) img,.sub_contents_car ul:nth-child(1) li:nth-child(2) span:nth-child(5),.sub_contents_car ul:nth-child(1) li:nth-child(3),.sub_contents_car ul:nth-child(1) li:nth-child(4),.sub_contents_car ul:nth-child(1) li:nth-child(5),.sub_contents_buy ul:nth-child(2) li:nth-child(2),.sub_contents_buy ul:nth-child(2) li:nth-child(3),.sub_contents_buy ul:nth-child(2) li:nth-child(4)').click(function(){
        $('.alert').fadeIn()
        setTimeout(function(){
            $('.alert').stop().fadeOut()
        },1000)
    });
    $('.util_myH,.util_lang,.select_login li:nth-child(2),.menubar').click(function(e){
        e.preventDefault();
        $('.alert').fadeIn()
        $('#curtain').fadeIn()
        setTimeout(function(){
            $('.alert').stop().fadeOut()
            $('#curtain').stop().fadeOut()
        },1000)
    });
    // 검색창 스크립트
    $('.util_search').click(function(){
        $('.search').css({display:'flex'});
        $('#curtain').fadeIn()
        $('header').css({ background: '#fff' });
        $('.gnb_all_contents').css({ display: 'none' });
        $('.select_login').hide();
        $('.util_lang span').html('<i class="fa fa-caret-up" aria-hidden="true"></i>')
        $('.select_lang').hide();
    });
    $('.search_close_button').click(function(){
        $('.search').css({display:'none'});
        $('#curtain').stop().fadeOut()
    });
});
$('.main_slider').load('./include/main_slider.html');
$(".mainModel").load("./include/main_model.html", function () {
    $(".ageTab li").click(function () {
        const subidx = $(this).index();
        $(".ageTab li").removeClass("on2");
        $(this).addClass("on2");
        $(".modelGallery").hide();
        $(".modelGallery").eq(subidx).stop().show();
    });
});
$(".electronicCar").load("./include/electronicCar.html", function () {
    $(".btn_more").click(msgReady);
    $(".network span").click(msgReady);
});
$(".myHyundai").load("./include/myHyundai.html", function () {
    $(".myHyundai_item p+p").click(msgReady);
    $(".myHyundaiApp p").eq(-1).click(msgReady);
});
$(".brand").load("./include/brand.html", function () {
    $(".brand_box").click(msgReady);
});
$('.sub_aside').load('./include/aside.html', function () {
    $(".sub_inner_text nav ul li").click(msgReady);
});
$('.hyundaiShop').load('./include/hyundaiShop.html', function () {
    $(".tip div").click(msgReady);
    $(".hyundaiShopBestTitle p").eq(-1).click(msgReady);
    $(".goods").click(msgReady);
});
$('.event').load('./include/event.html', function () {
    $(".slideContents").click(msgReady);
});
$('.hyundai_news').load('./include/news.html', function () {
    let btn = $(".hyundai_news_button p");
    var newsSlide = $(".hyundai_news_images_list");
    $(btn).click(function () {
        $(btn).removeClass("on3");
        $(this).addClass("on3");
        const newsSlidIdx = $(this).index();
        $(newsSlide).hide();
        $(newsSlide).eq(newsSlidIdx).stop().show();
    });
    $(".hyundai_news_images_list li").click(msgReady);
});
$('.footer').load('./include/footer.html', function () {
    $(".sub_footer_top li").click(msgReady);
    $(".sub_footer_right img").click(msgReady);
    $("select[name=id]").change(function (e) {
        e.preventDefault();
        $('.alert').fadeIn()
        $('#curtain').fadeIn()
        setTimeout(function () {
            $('.alert').stop().fadeOut()
            $('#curtain').stop().fadeOut()
        }, 1000)
    })
});



function msgReady(e) {
    e.preventDefault();
    $('.alert').fadeIn()
    $('#curtain').fadeIn()
    setTimeout(function () {
        $('.alert').stop().fadeOut()
        $('#curtain').stop().fadeOut()
    }, 1000)
}

