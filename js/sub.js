
//책커버
$(function () {
  $('.turnBook').click(function () {
    $(this).toggleClass('rotate');
  });
});


//스와이프 플러그인
//책소개
const swiper = new Swiper('.book_card', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: '2',

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
$(function () {
  $('.book_card').hover(function () {
    $('.prev, .next').css('display', 'block');
  }, function () {
    $('.prev, .next').css('display', 'none');
  });
});

//함께 구매한 책
const swiper2 = new Swiper(".buy_book", {
  spaceBetween: 20,
  slidesPerView: 5,
  freemode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

//기분 좋은 발견
let swiper3 = new Swiper(".find_good", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



//가져 온 텍스트파일
//목차
$(function () {
  $.get('../sub_txt/목차.txt', function (data) {
    $('.contentsText').html(data);
  });
});
//추천사
$(function () {
  $.get('../sub_txt/추천사.txt', function (data) {
    $('.commandText').html(data);
  });
});
//책속으로
$(function () {
  $.get('../sub_txt/책속으로.txt', function (data) {
    $('.bookInText').html(data);
  });
});
//출판사 서평
$(function () {
  $.get('../sub_txt/출판사서평.txt', function (data) {
    $('.publicText').html(data);
  });
});

//상세페이지 네비바
let nav = $(".detailNavTab li");
let contents = $(".leftSide > div");

nav.click(function () {
  let target = $(this);
  let index = target.index();
  let section = contents.eq(index);
  let offset = section.offset().top - 100;
  $("html, body").animate({ scrollTop: offset }, 400);
});

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  for (i = 0; i < nav.length; i++) {
    if (wScroll >= contents.eq(i).offset().top - 110) {
      nav.find('a').removeClass("underline");
      nav.find('a').eq(i).addClass("underline");
    }else if(wScroll<1200){
      nav.find('a').removeClass("underline");
    }
  };
});

//작가정보
$(function(){
  $('.foldBtn1').click(function(){
    let long = $('.aTextbox').css('height' , '350px');
    let short = $('.aTextbox').css('height' , '50px');
    if(short){
      $('.aTextbox').animate({height : '350px'}, 500);
    $('.authorText .toText').text('접기');
    $('.authorText .arrowDown').css('backgroundImage','url(../img/morex.png)');
    }
    
  });
 
});

//리뷰탭
$(function () {
  $('.reviewNav li').click(function () {
    let idx = $(this).index();
    $('.reviewNav li a').removeClass('reviewfont');
    $(this).children('a').addClass('reviewfont');
    $('.totalWrap').hide();
    $('.totalWrap').eq(idx).show();
    return false;
  });
});


//상품금액
let priceSum = 16200;
$('.totalPrice').append('<span><b>' + priceSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</b>원 </span>');

$(function () {
  $('.fixup').click(function () {
    $(this).prev().val(parseInt($(this).prev().val()) + 1);
    let sum = parseInt($(this).prev().val() * priceSum);
    $('.totalPrice span').html('<span><b>' + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</b> 원 </span>');
  });

  $('.fixdown').click(function () {
    if ($(this).next().val() > 0) {
      $(this).next().val(parseInt($(this).next().val()) - 1);
      let sum = parseInt($(this).next().val() * priceSum);
      $('.totalPrice span').html('<span><b>' + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</b>원 </span>')
    }
  });
});