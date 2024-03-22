
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
