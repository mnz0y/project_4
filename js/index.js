$(function () {
    //슬라이드
    let slideTxt = $('.slideText ul li');
    let slideBg = $('.slideImg ul li');
    let slideBar = $('.slideBar ul li');
    let idx = 0;
    function slide() {
        idx++;
        if (idx > slideTxt.length - 1) {
            idx = 0;
        }
        slideTxt.eq(idx).fadeIn('slow');
        slideBg.eq(idx).fadeIn('slow');
        slideTxt.eq(idx - 1).fadeOut('slow');
        slideBg.eq(idx - 1).fadeOut('slow');
        slideBar.removeClass('aUnderline');
        slideBar.eq(idx).addClass('aUnderline');
    }
    function slideBack() {
        idx--;
        if (idx == -9) {
            idx = -1;
        }
        slideTxt.eq(idx).fadeIn('slow');
        slideBg.eq(idx).fadeIn('slow');
        slideTxt.eq(idx + 1).fadeOut('slow');
        slideBg.eq(idx + 1).fadeOut('slow');
        slideBar.removeClass('aUnderline');
        slideBar.eq(idx).addClass('aUnderline');

    }
    setInterval(slide, 4000);

    $('.next').click(function () {
        slide();
    });
    $('.pre').click(function () {
        slideBack();
    });
});

$(function () {


    //오늘의 선택
    //네비

    let Lbook = $('.bookList2');
    let todayNav = $('#content2 .categoryList li');
    $(todayNav).click(function () {
        let idx = $(this).index();
        Lbook.css('display', 'none');
        Lbook.eq(idx).css('display', 'flex')
        todayNav.find('a').removeClass('titleFont');
        $(this).find('a').addClass('titleFont');
        return false;
    });

    // function todaySlideFunc (leftSlide, rightSlide, list) {
    //     //왼쪽 fadeIn/Out 슬라이드
    //     let today = $('#todayLeft1 .todayBook');
    //     let idx = 0;
    //     function todayPrev() {
    //         idx--;
    //         if (idx == -9) {
    //             idx = -1;
    //         }
    //         $(leftSlide).eq(idx).fadeIn('slow').css('display', 'flex');
    //         $(leftSlide).eq(idx + 1).fadeOut('slow').css('display', 'none');
    //     }
    //     function todayNext() {
    //         idx++;
    //         if (idx > today.length - 1) {
    //             idx = 0;
    //         }
    //         $(leftSlide).eq(idx).fadeIn('slow').css('display', 'flex');
    //         $(leftSlide).eq(idx - 1).fadeOut('slow').css('display', 'none');
    //     }
    //     //오른쪽 애니메이션 슬라이드    
    //     function todayPrev2() {
    //         $(rightSlide + '.todaySlideBook:last').prependTo(rightSlide + '.bookSlideWrap');
    //         $(rightSlide + '.bookSlideWrap').css({ marginLeft: -350 });
    //         $(rightSlide + '.bookSlideWrap').animate({ marginLeft: -175 }, 800);
    //     }
    //     function todayNext2() {
    //         $(rightSlide + '.bookSlideWrap').animate({ marginLeft: -370 }, 800, function () {
    //             $(rightSlide + '.todaySlideBook:first').appendTo(rightSlide + '.bookSlideWrap');
    //             $(rightSlide + '.bookSlideWrap').css({ marginLeft: -185 });
    //         });
    //     }
    //     //클릭 버튼  
    //     $(list + '.left').click(function () {
    //         todayPrev();
    //         todayPrev2();
    //     });
    //     $(list + '.right').click(function () {
    //         todayNext();
    //         todayNext2()
    //     });
    // };
    // todaySlideFunc('#todayLeft1 .todayBook', '#todayRight1', '.all');
    // todaySlideFunc('#todayLeft2 .todayBook', '#todayRight2', '.domestic');
    // todaySlideFunc('#todayLeft3 .todayBook', '#todayRight3', '.eBook');
    // todaySlideFunc('#todayLeft4 .todayBook', '#todayRight4', '.sam');
    // todaySlideFunc('#todayLeft5 .todayBook', '#todayRight5', '.hot');
    // todaySlideFunc('#todayLeft6 .todayBook', '#todayRight6', '.only');


    let today = $('#todayLeft1 .todayBook');
    let idx = 0;
    function todayPrev() {
        idx--;
        if (idx == -9) {
            idx = -1;
        }
        $('#todayLeft1 .todayBook').eq(idx).fadeIn('slow').css('display', 'flex');
        $('#todayLeft1 .todayBook').eq(idx + 1).fadeOut('slow').css('display', 'none');
    }


    function todayNext() {
        idx++;
        if (idx > today.length - 1) {
            idx = 0;
        }
        $('#todayLeft1 .todayBook').eq(idx).fadeIn('slow').css('display', 'flex');
        $('#todayLeft1 .todayBook').eq(idx - 1).fadeOut('slow').css('display', 'none');
    }


    function todayPrev2() {

        $('#todayRight1 .todaySlideBook:last').prependTo('#todayRight1 .bookSlideWrap');
        $('#todayRight1 .bookSlideWrap').css({ marginLeft: -350 });
        $('#todayRight1 .bookSlideWrap').animate({ marginLeft: -175 }, 800);
    }
    function todayNext2() {
        $('#todayRight1 .bookSlideWrap').animate({ marginLeft: -370 }, 800, function () {
            $('#todayRight1 .todaySlideBook:first').appendTo('#todayRight1 .bookSlideWrap');
            $('#todayRight1 .bookSlideWrap').css({ marginLeft: -185 });
        });
    }

    $('.all .left').click(function () {
        todayPrev();
        todayPrev2();
    });
    $('.all .right').click(function () {
        todayNext();
        todayNext2()
    });



});

//배너
// function random(){
//     const bannerImg = new Array();
//     //각 이미지 경로
//     bannerImg[1]="img/banner1.jpg"
//     bannerImg[2]="img/banner2.png"
//     bannerImg[3]="img/banner3.png"
//     bannerImg[4]="img/banner4.png"
//     bannerImg[5]="img/banner5.png"
//     bannerImg[6]="img/banner6.png"
//     bannerImg[7]="img/banner7.jpg"

//     let ary = Math.floor(Math.random()*bannerImg.length);
//     if(ary===0)ary =1;
//     document.getElementsByClassName('bannerList').css('background-image') =url(bannerImg[ary]);
//     random(); 
// }


$(function () {

    //비디오
    let videoList = $('.castBglist li');
    let castList = $('.castTxtlist li');
    let idx = 0;
    function video() {
        idx++;
        if (idx > videoList.length - 1) {
            idx = 0;
        }
        videoList.eq(idx).fadeIn('slow');
        castList.eq(idx).fadeIn('slow').css('display', 'flex');
        videoList.eq(idx - 1).fadeOut('slow');
        castList.eq(idx - 1).fadeOut('slow');
    }

    function videoBack() {
        idx--;
        if (idx == -5) {
            idx = -1;
        }
        videoList.eq(idx).fadeIn('slowly');
        castList.eq(idx).fadeIn('slowly').css('display', 'flex');
        videoList.eq(idx + 1).fadeOut('slowly');
        castList.eq(idx + 1).fadeOut('slowly').css('display', 'none');
    }
    $('.right4').click(function () {
        video();
    });
    $('.left4').click(function () {
        videoBack();
    });

});

//베스트셀러
$(function () {
    let Lbook = $('.bookList5');
    let bestNav = $('#content5 .categoryList li');
    $(bestNav).click(function () {
        let idx = $(this).index();
        Lbook.hide().eq(idx).show().css('display', 'flex');
        bestNav.find('a').removeClass('titleFont');
        $(this).find('a').addClass('titleFont');
        return false;
    });
});

//이벤트
$(function () {
    let Lbanner = $('.eventSlide ul');
    let eventNav = $('#content6 .eventList li');
    $(eventNav).click(function () {
        let idx = $(this).index();
        Lbanner.hide().eq(idx).show().css('display', 'flex');
        eventNav.find('a').removeClass('titleFont');
        $(this).find('a').addClass('titleFont');
        return false;
    });

    function eSlide1() {
        $('.eventList1').stop().animate({ marginLeft: '-1260px' }, 800, function () {
            $('.eventList1 li:first').appendTo('.eventList1');
            $('.eventList1').css({ marginLeft: 0 });
        });
    }
    function eSlide2() {
        $('.eventList2').stop().animate({ marginLeft: '-1260px' }, 800, function () {
            $('.eventList2 li:first').appendTo('.eventList2');
            $('.eventList2').css({ marginLeft: 0 });
        });
    }
    setInterval(eSlide1, 4000);
    setInterval(eSlide2, 4000);
});

//히트
$(function () {
    function hit() {
        $('.hit').stop().animate({ marginLeft: '-290px' }, 800, function () {
            $('.hit li:first').appendTo('.hit');
            $('.hit').css({ marginLeft: 0 });
        });
    }
    function hitBack() {
        $('.hit li:last').prependTo('.hit');
        $('.hit').css({ marginLeft: -290 });
        $('.hit').stop().animate({ marginLeft: 0 }, 800);
    }
    $('.right7').click(function () {
        hit();
    });
    $('.left7').click(function () {
        hitBack();
    });
});

//이 주의 책
$(function () {
    function week() {
        $('.weekSlide').stop().animate({ marginLeft: '-315px' }, 800, function () {
            $('.weekSlide li:first').appendTo('.weekSlide');
            $('.weekSlide').css({ marginLeft: 0 });
        });
    }
    function weekBack() {
        $('.weekSlide li:last').prependTo('.weekSlide');
        $('.weekSlide').css({ marginLeft: '-315px' });
        $('.weekSlide').stop().animate({ marginLeft: 0 }, 800);
    }
    $('#content9 .right').click(function () {
        week();
    });
    $('#content9 .left').click(function () {
        weekBack();
    });
});

