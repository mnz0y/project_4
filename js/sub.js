
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



//텍스트파일
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
  $('.authorText .foldShow').click(function(){
    $('.aTextbox').animate({height : '350px'}, 500);
    $(this).hide();
    $('.authorText .foldHide').show();
  });
  $('.authorText .foldHide').click(function(){
    $('.aTextbox').animate({height : '50px'}, 500);
    $(this).hide();
    $('.authorText .foldShow').show();
  });
});

//목차
$(function(){
  $('.contents .foldShow').click(function(){
    $('.contentsText pre').animate({height : '1250px'}, 800);
    $('.contents .foldShow').hide();
    $('.contents .foldHide').show();
  });
  $('.contents .foldHide').click(function(){
    $('.contentsText pre').animate({height : '200px'}, 500);
    $('.contents .foldHide').hide();
    $('.contents .foldShow').show();
  });
});

//텍스트 슬라이드 토글
function slideText (textbox,high){
  $(textbox + ' .foldShow').click(function(){
    $(textbox+'Text').animate({height : high }, 500);
    $(textbox +' .foldShow').hide();
    $(textbox +' .foldHide').show();
  });
  $(textbox + ' .foldHide').click(function(){
    $(textbox+'Text').animate({height : '200px' }, 500);
    $(textbox +' .foldHide').hide();
    $(textbox +' .foldShow').show();
  });
}

//추천사,책속으로,출판사서평
slideText('.command','960px');
slideText('.bookIn', '2040px');
slideText('.public', '1370px');

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
      if($(this).next().val() < 2){
        alert('1권 이상 구매 가능합니다.');
        $(this).next().val(2);
      }
      $(this).next().val(parseInt($(this).next().val()) - 1);
      let sum = parseInt($(this).next().val() * priceSum);
      $('.totalPrice span').html('<span><b>' + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</b>원 </span>')
    }
  });
});