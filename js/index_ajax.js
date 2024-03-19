// 오늘의선택-전체
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "21세기 북스", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    //오늘의 책 왼쪽
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });
    const today = $('.Lbook0');

    for (let i = 0; i < today.length; i++) {
      $('.Lbook0').eq(i).prepend('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.book0').eq(i).append('<h2>' + data[i].title + '</h2>');
      $('.book0').eq(i).append('<p>' + data[i].authors + '</p>');

      let priceDot = data[i].sale_price;
      let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      $('.book0').eq(i).append('<span>10%</span>');
      $('.book0').eq(i).append('<span>' + dot + '원</span>');

      let str = data[i].contents;
      let str2 = str.substring(0, 100);
      $('.book0').eq(i).append('<p>' + str2 + '</p>');
    }

    //오늘의 책 오른쪽
    const todaySlide = $('.slidebook0');
    for (let i = 0; i < todaySlide.length; i++) {
      $('.slidebook0').eq(i).append('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.slidebook0').eq(i).append('<p>' + data[i].title + '</p>');
    }
  });

//국내도서
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "소설", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    //오늘의 책 왼쪽
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });
    const today = $('.Lbook1');

    for (let i = 0; i < today.length; i++) {
      $('.Lbook1').eq(i).prepend('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.book1').eq(i).append('<h2>' + data[i].title + '</h2>');
      $('.book1').eq(i).append('<p>' + data[i].authors + '</p>');

      let priceDot = data[i].sale_price;
      let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      $('.book1').eq(i).append('<span>10%</span>');
      $('.book1').eq(i).append('<span>' + dot + '원</span>');

      let str = data[i].contents;
      let str2 = str.substring(0, 100);
      $('.book1').eq(i).append('<p>' + str2 + '</p>');
    }

    //오늘의 책 오른쪽
    const todaySlide = $('.slidebook1');
    for (let i = 0; i < todaySlide.length; i++) {
      $('.slidebook1').eq(i).append('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.slidebook1').eq(i).append('<p>' + data[i].title + '</p>');
    }
  });

//eBook
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "에세이", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
   
    //오늘의 책 왼쪽
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });
      console.log(data);
    const today = $('.Lbook2');

    for (let i = 0; i < today.length; i++) {
      $('.Lbook2').eq(i).prepend('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.book2').eq(i).append('<h2>' + data[i].title + '</h2>');
      $('.book2').eq(i).append('<p>' + data[i].authors + '</p>');

      let priceDot = data[i].sale_price;
      let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      $('.book2').eq(i).append('<span>10%</span>');
      $('.book2').eq(i).append('<span>' + dot + '원</span>');

      let str = data[i].contents;
      let str2 = str.substring(0, 100);
      $('.book2').eq(i).append('<p>' + str2 + '</p>');
    }

    //오늘의 책 오른쪽
    const todaySlide = $('.slidebook2');
    for (let i = 0; i < todaySlide.length; i++) {
      $('.slidebook2').eq(i).append('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.slidebook2').eq(i).append('<p>' + data[i].title + '</p>');
    }
  });

//sam
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=publisher",
  data: { query: "민음사", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    
    //오늘의 책 왼쪽
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });
    const today = $('.Lbook3');

    for (let i = 0; i < today.length; i++) {
      $('.Lbook3').eq(i).prepend('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.book3').eq(i).append('<h2>' + data[i].title + '</h2>');
      $('.book3').eq(i).append('<p>' + data[i].authors + '</p>');

      let priceDot = data[i].sale_price;
      let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      $('.book3').eq(i).append('<span>10%</span>');
      $('.book3').eq(i).append('<span>' + dot + '원</span>');

      let str = data[i].contents;
      let str2 = str.substring(0, 100);
      $('.book3').eq(i).append('<p>' + str2 + '</p>');
    }

    //오늘의 책 오른쪽
    const todaySlide = $('.slidebook3');
    for (let i = 0; i < todaySlide.length; i++) {
      $('.slidebook3').eq(i).append('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.slidebook3').eq(i).append('<p>' + data[i].title + '</p>');
    }
  });

//핫트랙스
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=publisher",
  data: { query: "창비", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    //오늘의 책 왼쪽
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });
    const today = $('.Lbook4');

    for (let i = 0; i < today.length; i++) {
      $('.Lbook4').eq(i).prepend('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.book4').eq(i).append('<h2>' + data[i].title + '</h2>');
      $('.book4').eq(i).append('<p>' + data[i].authors + '</p>');

      let priceDot = data[i].sale_price;
      let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      $('.book4').eq(i).append('<span>10%</span>');
      $('.book4').eq(i).append('<span>' + dot + '원</span>');

      let str = data[i].contents;
      let str2 = str.substring(0, 100);
      $('.book4').eq(i).append('<p>' + str2 + '</p>');
    }

    //오늘의 책 오른쪽
    const todaySlide = $('.slidebook4');
    for (let i = 0; i < todaySlide.length; i++) {
      $('.slidebook4').eq(i).append('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.slidebook4').eq(i).append('<p>' + data[i].title + '</p>');
    }
  });

//교보ONly
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=contents",
  data: { query: "교보문고", size: 50 },
  headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
})
  .done(function (msg) {
    //오늘의 책 왼쪽
    const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });
    const today = $('.Lbook5');

    for (let i = 0; i < today.length; i++) {
      $('.Lbook5').eq(i).prepend('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.book5').eq(i).append('<h2>' + data[i].title + '</h2>');
      $('.book5').eq(i).append('<p>' + data[i].authors + '</p>');

      let priceDot = data[i].sale_price;
      let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      $('.book5').eq(i).append('<span>10%</span>');
      $('.book5').eq(i).append('<span>' + dot + '원</span>');

      let str = data[i].contents;
      let str2 = str.substring(0, 100);
      $('.book5').eq(i).append('<p>' + str2 + '</p>');
    }

    //오늘의 책 오른쪽
    const todaySlide = $('.slidebook5');
    for (let i = 0; i < todaySlide.length; i++) {
      $('.slidebook5').eq(i).append('<a href="#"><img src="' + data[i].thumbnail + '"/></a>');
      $('.slidebook5').eq(i).append('<p>' + data[i].title + '</p>');
    }
  });


//컨텐츠4-비디오
let video;
video =["이반 일리치의 죽음", "한국축구, 바꿔야산다!", "홍보의 신", "요즘 어른을 위한 최소한의 문해력"]
for(let i =0; i<video.length;i++){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: video[i], size: 15 },
    headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
  })
    .done(function (msg) {
      const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });

      $('.bookbox4').eq(i).append('<img src = "'+data[0].thumbnail+'"/>');
      $('.bookbox4').eq(i).append('<span>'+data[0].title+'</span>');
      
    });
}

//컨텐츠5-베스트셀러
let best;
best =["너랑", "위대한", "인생", "나에게","여행","우리"];
for(let i =0; i<best.length;i++){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=contents",
    data: { query: best[i], size: 20 },
    headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
  })
    .done(function (msg) {
      const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });
      
      for(let j=0;j<10;j++){

        $('.bestBook'+i).eq(j).append('<img src="'+data[j].thumbnail+'"/>');
        $('.bestBook'+i).eq(j).append('<p>' + data[j].title+'</p>');
        $('.bestBook'+i).eq(j).append('<p>' + data[j].authors +' · '+data[j].publisher+'</p>');
      }
    });
}

//컨텐츠7-picks
let picks;
picks =["wonka", "데일 카네기 인간관계론", "퍼스널 MBA", "빨간내복야코 맞춤법"]
for(let i =0; i<picks.length;i++){
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: picks[i], size: 15 },
    headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
  })
    .done(function (msg) {
      const origin = msg.documents;
      let data = origin.filter((val) => {
        return val.thumbnail !== "" && val.title !='';
      });
       $('.pickList').eq(i).append('<img src="'+data[0].thumbnail+'"/>');
       $('.pickList').eq(i).append('<p>'+data[0].title+'</p>');
       $('.pickList').eq(i).append('<span>'+data[0].authors+'</span>');     
    });
}


// 컨텐츠8-히트
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=contents",
    data: { query: '문학동네', size: 15 },
    headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
  })
    .done(function (msg) {
      const origin = msg.documents;
      let data = origin.filter((val) => {
      return val.thumbnail !== "" && val.title !='';
      });
      const hit =$('.hit li');       
      for(let i =0;i<hit.length; i++){
        hit.eq(i).css({'background-image':'url("'+data[i].thumbnail+'")'});
      let priceDot = data[i].sale_price;
      let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        hit.eq(i).append('<p>' + data[i].title +'<br>'+dot+'원</p>');
      }
    });

    // 컨텐츠9-이 주의 책
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=contents",
    data: { query: '웅진', size: 50 },
    headers: { Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38" }
  })
    .done(function (msg) {
      const origin = msg.documents;
      let data = origin.filter((val) => {
      return val.thumbnail !== "" && val.title !='';
      });
      const week =$('.weekSlide li');       
      for(let i =0;i<week.length; i++){
        week.eq(i).append('<a href="#"><img src="'+data[i].thumbnail+'"/></a>');
        week.eq(i).append('<p>' + data[i].title+'</p>');
        week.eq(i).append('<span>' + data[i].authors +' · '+data[i].publisher+'</span>');
      }
    });

  