var subslideIndex = 1;
function subminusSlides(subnum) {
    subshowSlide(subslideIndex += subnum);

}
function subplusSlides(subnum) {
    subshowSlide(subslideIndex += subnum);
}
function subcurrentSlides(subnum) {
    subshowSlide(subslideIndex = subnum);
}
function subshowSlide(subnum) {
    var i;
    var subslide = $(".myHyundaiSlider .slide");
    if (subslideIndex > subslide.length) {
        subslideIndex = 1;
    }
    if (subnum < 1) {
        subslideIndex = subslide.length;
    }
    for (i = 0; i < subslide.length; i++) {
        $(".myHyundaiSlider .slide").eq(i).hide();
    }
    $(".myHyundaiSlider .slide").eq(subslideIndex - 1).show();
    $(".subdot").css({ backgroundColor: "#ccc" });
    $(".subdot").eq(subslideIndex - 1).css({ backgroundColor: "#007FA8" });
}

var thirdslideIndex = 1;
function thirdminusSlides(thirdnum) {
    thirdshowSlide(thirdslideIndex += thirdnum);

}
function thirdplusSlides(thirdnum) {
    thirdshowSlide(thirdslideIndex += thirdnum);
}
function thirdcurrentSlides(thirdnum) {
    thirdshowSlide(thirdslideIndex = thirdnum);

}
function thirdshowSlide(thirdnum) {
    var thirdslide = $(".slideTap");
    if (thirdslideIndex > thirdslide.length) {
        thirdslideIndex = 1;

    }
    if (thirdnum < 1) {
        thirdslideIndex = thirdslide.length;

    }
    var i;
    for (i = 0; i < thirdslide.length; i++) {
        $(".slideTap").eq(i).hide();
    }
    $(".slideTap").eq(thirdslideIndex - 1).show();
    $(".slideTap").eq(thirdslideIndex - 1).css({ display: "flex" });
    $(".thirddot").css({ backgroundColor: "#ccc" });
    $(".thirddot").eq(thirdslideIndex - 1).css({ backgroundColor: "#007FA8" });
}

window.onscroll = function () {
    progressBar()
};
function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
}