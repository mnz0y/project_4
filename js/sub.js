
//책커버
$(function(){
    $('.turnBook').click(function(){
        $(this).toggleClass('rotate');
    });
});

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
  $(function(){
    $('.book_card').hover(function(){
        $('.prev, .next').css('display','block');
    }, function(){
        $('.prev, .next').css('display','none');
    });
  });

  //함께 구매한 책
 const swiper2 = new Swiper(".buy_book", {
    spaceBetween:20,
    slidesPerView:5,
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

  //작가정보
  $(function(){
    $('.foldBtn').click(function(){
      $('.aTextBox').addClass('toggle');
    });
  });

  //목차
  $(function(){
    $.get('../sub_txt/목차.txt',function(data){
      $('.contentsText').html(data);
    });
  });
  //추천사
  $(function(){
    $.get('../sub_txt/추천사.txt',function(data){
      $('.commandText').html(data);
    });
  });
  //책속으로
  $(function(){
    $.get('../sub_txt/책속으로.txt',function(data){
      $('.bookInText').html(data);
    });
  });
  //출판사 서평
  $(function(){
    $.get('../sub_txt/출판사서평.txt',function(data){
      $('.publicText').html(data);
    });
  });
