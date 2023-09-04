var tabList = document.querySelectorAll('.about_us_tab .list li');
var contents = document.querySelectorAll('.about_us_tab .cont_area .cont');
var etc = document.querySelector('.all_about');
var dot = document.querySelector('.circle');
var bgc = document.querySelector('.is_on');

for (var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();

    var activeCont = this.getAttribute('href');
    var isActive = this.parentNode.classList.contains('is_on');
    this.parentNode.classList.remove('is_on');
    
      for(var j = 0; j < tabList.length; j++){      
        tabList[j].classList.remove('is_on');
        contents[j].style.display = 'none';
      }    

      if (!isActive) {
        this.parentNode.classList.add('is_on');        
        document.querySelector(activeCont).style.display = 'block';
        document.querySelector('.all_about').style.display = 'block'  
        document.querySelector('.circle').style.display = 'block';
        for (var k = 0; k < tabList.length; k++) {
          tabList[k].querySelector('.btn').style.color = 'white';
        }
        this.style.color = '#ffcc33';
      } else {
        document.querySelector('.all_about').style.display = 'none'
        document.querySelector('.circle').style.display = 'none';   
        this.style.color = 'white';
      }
      
      var dotLeft = this.parentNode.offsetLeft - (dot.offsetWidth / 0.07);
      dot.style.left = `${dotLeft}px`;
  });
} 
var video = $("#chanel_video");
var btn = $("#chanel_btn");
btn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else {
        video.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    };
});


// 탭관련 스크립트
$('.tab_btn li').click(function(){
  // 각각의 탭 index값 리턴 메서드
  const idx = $(this).index();
  console.log(idx);
  // 탭 영역에 각각 on클래스 적용
  $('.tab_btn li').removeClass('on');
  $(this).addClass('on');

  // 해당탭 내용만 보이도록 코딩
  $('.qna_contents .faq_list').hide();
  $('.qna_contents .faq_list').eq(idx).stop().show();
});

// 해당 질문과 답 | 화살표 방향 스크립트
$('.qna_contents .faq_list .question').click(function(){
  // 빈 hasClass()
  if($(this).hasClass('active')) { //클래스명 active가 있으면 실행
      $(this).removeClass('active');
      // 화살표 방향 바꾸기
      $(this).children('dd').removeClass('plus');
      $(this).children('dd').addClass('minus');
      // 해당 내용 가리기
      $(this).siblings('.answer').stop().slideUp(500);
  }else { // 클래스명 active가 없으면 실행
      $(this).addClass('active');
      // 화살표 방향 바꾸기
      $(this).children('dd').removeClass('minus');
      $(this).children('dd').addClass('plus');
      // 해당 내용 보여주기
      $(this).siblings('.answer').stop().slideDown(500);
  }
});
$('nav li').hover(
  function() {
    $('ul', this).stop().slideDown(200);
  },
  function() {
    $('ul', this).stop().slideUp(200);
  }
);