//함께 구매한 책
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "에세이", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='' && val.authors !='';
      });
      
    const buy = $('.buy_slide');
    for (let i = 0; i < buy.length; i++) {
      $('.buy_slide').eq(i).append('<a href="#"><img src="' + data[i+10].thumbnail + '"/></a>');
      $('.buy_slide').eq(i).append('<h5>' + data[i+10].title + '</h5>');
      $('.buy_slide').eq(i).append('<p>' + data[i+10].authors + '</p>');

      let priceDot = data[i+10].sale_price;
      let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      $('.buy_slide').eq(i).append('<b>' + dot + '원</b>');
    }
  });

//작가정보

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=authors",
  data: { query: "드로우앤드류", size: 30 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='' && val.authors !='';
      });
      $('.authorBook').eq(0).append('<a href="#"><img src="' + data[2].thumbnail + '"/></a>');
      $('.authorBook').eq(0).append('<h5>' + data[2].title + '</h5>');
      $('.authorBook').eq(1).append('<a href="#"><img src="' + data[0].thumbnail + '"/></a>');
      $('.authorBook').eq(1).append('<h5>' + data[0].title + '</h5>');
    });

//이 분야의 베스트

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "자기", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='' && val.authors !='';
      });
      let bestB = $('.bestBook');
      $('.bestBook').append('<div class="bestTxt"></div>');
     
      for (let i = 0; i < bestB.length; i++) {
        $('.bestBook').eq(i).prepend('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
        $('.bestTxt').eq(i).append('<span>'+(i+1)+'</span>');
        $('.bestTxt').eq(i).append('<h5>' + data[i].title + '</h5>');
        $('.bestTxt').eq(i).append('<p>' + data[i].authors + '</p>');
  
        let priceDot = data[i].sale_price;
        let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        $('.bestTxt').eq(i).append('<span>10%</span>');
        $('.bestTxt').eq(i).append('<span><b>' + dot + '</b>원</span>');
      }
     
    });    
 
//이 분야의 신간

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "습관", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='' && val.authors !='';
      });
      let newB = $('.newBook');
      $('.newBook').append('<div class="newTxt"></div>');
     
      for (let i = 0; i < newB.length; i++) {
        $('.newBook').eq(i).prepend('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
        $('.newTxt').eq(i).append('<h5>' + data[i].title + '</h5>');
        $('.newTxt').eq(i).append('<p>' + data[i].authors + '</p>');
  
        let priceDot = data[i].sale_price;
        let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        $('.newTxt').eq(i).append('<span>10%</span>');
        $('.newTxt').eq(i).append('<span><b>' + dot + '</b>원</span>');
      }
     
    });    
 
  