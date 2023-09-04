window.addEventListener("load", function () {
  var bannerRows = document.querySelectorAll(".banner-row");
  var rollingTimes = [16000, 14000, 12000];
  var animationIntervals = [];

  bannerRows.forEach(function (bannerRow, index) {
    var images = bannerRow.querySelectorAll("li img");
    var imageWidth = images[0].offsetWidth;
    var totalImages = images.length;
    var wrapperWidth = imageWidth * totalImages *3;
    var currentIndex = 0;

    bannerRow.style.width = wrapperWidth + "px";
    bannerRow.innerHTML += bannerRow.innerHTML; // 이미지 복제

    function startRolling() {
      var distance = 0;
      var step = imageWidth / (rollingTimes[index] / 100); // 속도를 빠르게 조절하기 위해 100으로 나눔
      var speed = 1 / (rollingTimes[index] / 100);

      function animate() {
        distance += step;
        bannerRow.style.transform = "translateX(-" + distance + "px)";

        if (distance >= wrapperWidth / 2) {
          distance = 0;
          bannerRow.style.transform = "translateX(0)";
        }

        animationIntervals[index] = requestAnimationFrame(animate);
      }

      animate();
    }

    // 시작 시간 조절
    if (index === 0) {
      setTimeout(startRolling, 0); // 첫 번째 줄은 바로 시작
    } else {
      setTimeout(startRolling, 500 * index); // 이전 줄이 시작한 후 0.5초 뒤에 시작
    }
  });

  // 페이지 이탈 시 애니메이션 정지
  window.addEventListener("beforeunload", function () {
    animationIntervals.forEach(function (interval) {
      cancelAnimationFrame(interval);
    });
  });
});
  
// 비디오 변경
function changeVideo(videoId) {
    var videoFrame = document.getElementById('videoFrame');
    var videoSrc = '';

    switch (videoId) {
        case 'GOLD':
            videoSrc = 'https://www.youtube.com/embed/ZXEzUwC5vGE';
            break;
        case 'NETFLIX':
            videoSrc = 'https://www.youtube.com/embed/AOn4CRsLLxw';
            break;
        case 'RED':
            videoSrc = 'https://www.youtube.com/embed/YAN45KAL5lg';
            break;
        case 'Z':
            videoSrc = 'https://www.youtube.com/embed/1gGt1Mg_zSo';
            break;
    }

    videoFrame.src = videoSrc;
}

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