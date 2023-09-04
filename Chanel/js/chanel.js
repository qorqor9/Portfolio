// var tabList = document.querySelectorAll('.about_us_tab .list li');
// var contents = document.querySelectorAll('.about_us_tab .cont_area .cont');
// var etc = document.querySelector('.all_about');

document.addEventListener("DOMContentLoaded", function() {
  const tabs = Array.from(document.querySelectorAll(".btn"));
  const circles = Array.from(document.querySelectorAll(".circle"));
  const contents = Array.from(document.querySelectorAll(".cont"));
  const aboutBoxes = Array.from(document.querySelectorAll(".about_box .image_link"));
  const aboutBoxes2 = Array.from(document.querySelectorAll(".about_box2 .image_link"));
  const faqItems = Array.from(document.querySelectorAll(".faq"));  
  const screen = document.querySelector(".screen");

  const video = document.getElementById("chanel_video");
  const playButton = document.getElementById("chanel_btn");

  playButton.addEventListener("click", function() {
    if (video.paused) {
      video.play();
      playButton.innerHTML = '<i class="pause fa fa-pause-circle-o" aria-hidden="true"></i>';
    } else {
      video.pause();
      playButton.innerHTML = '<i class="play fa fa-play-circle-o" aria-hidden="true"></i>';
    }
  });



  faqItems.forEach((faq) => {
    const question = faq.querySelector(".question");
    const plusIcon = faq.querySelector(".plus");
    const minusIcon = faq.querySelector(".minus");
    const answer = faq.querySelector(".answer");

    question.addEventListener("click", function() {
      const isActive = faq.classList.contains("active");
      faqItems.forEach((item) => {
        item.classList.remove("active");
        const itemQuestion = item.querySelector(".question");
        const itemPlusIcon = itemQuestion.querySelector(".plus");
        const itemMinusIcon = itemQuestion.querySelector(".minus");
        const itemAnswer = item.querySelector(".answer");
        itemPlusIcon.style.display = "inline-block";
        itemMinusIcon.style.display = "none";
        $(itemAnswer).stop().slideUp(500);
      });

      if (!isActive) {
        faq.classList.add("active");
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline-block";
        $(answer).stop().slideDown(500);
      } else {
        plusIcon.style.display = "inline-block";
        minusIcon.style.display = "none";
        $(answer).stop().slideUp(500);
      }
    });
  const handleTabClick = (event) => {
    event.preventDefault();
    const clickedTab = event.target;
    const clickedIndex = tabs.indexOf(clickedTab);
    const clickedCircle = circles[clickedIndex];
    const clickedContent = contents[clickedIndex];
    const clickedImg1 = aboutBoxes[clickedIndex];
    const clickedImg2 = aboutBoxes2[clickedIndex];

    tabs.forEach((tab) => {
      tab.parentElement.classList.remove("active");
    });
    circles.forEach((circle) => {
      circle.style.display = "none";
    });
    contents.forEach((content) => {
      content.style.display = "none";
    });
    aboutBoxes.forEach((image_link) => {
      image_link.style.display = "none";
    });
    aboutBoxes2.forEach((image_link) => {
      image_link.style.display = "none";
    });

    clickedTab.parentElement.classList.add("active");
    clickedCircle.style.display = "block";
    clickedContent.style.display = "block";
    clickedImg1.style.display = "block";
    clickedImg2.style.display = "block";
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", handleTabClick);
  });

  // 초기 설정
  tabs[0].parentElement.classList.add("active");
  circles[0].style.display = "block";
  contents[0].style.display = "block";
  aboutBoxes.forEach((img) => {
    img.style.display = "none";
  });
  aboutBoxes2.forEach((img) => {
    img.style.display = "none";
  });
  aboutBoxes[0].style.display = "block";
  aboutBoxes2[0].style.display = "block";
  });
});


$('.gnb li').hover(function() {
    $('ul', this).stop().slideDown(200);
  }, function() {
    $('ul', this).stop().slideUp(200);
  }
);
  
$(window).scroll(function(){
	if ($(this).scrollTop() > 100){
		$('.btn_goTop').show();
	} else{
		$('.btn_goTop').hide();
	}
});
$('.btn_goTop').click(function(){
	$('html, body').animate({scrollTop:0},200);
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