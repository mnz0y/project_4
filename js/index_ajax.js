// 오늘의선택-전체
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=contents",
    data: {query: "21세기 북스", size:50},
    headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
  })
    .done(function( msg ) {
      console.log(msg);
      //오늘의 책 왼쪽
      const today =$('.Lbook0');

      for(let i =0; i<today.length; i++){
        $('.Lbook0').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
        $('.book0').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
        $('.book0').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
        
        let priceDot = msg.documents[i].sale_price;
        let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        $('.book0').eq(i).append('<span>10%</span>');
        $('.book0').eq(i).append('<span>'+dot+'원</span>');
        
        let str = msg.documents[i].contents;
        let str2 = str.substring(0,100);
        $('.book0').eq(i).append('<p>'+str2+'</p>');
      }

      //오늘의 책 오른쪽
      const todaySlide=$('.slidebook0');
      for(let i =0; i<todaySlide.length; i++){
        $('.slidebook0').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
        $('.slidebook0').eq(i).append('<p>'+msg.documents[i].title+'</p>');
      }
    });

    //국내도서
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=contents",
      data: {query: "소설", size:50},
      headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
    })
      .done(function( msg ) {
        console.log(msg);
        //오늘의 책 왼쪽
        const today =$('.Lbook1');
  
        for(let i =0; i<today.length; i++){
          $('.Lbook1').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
          $('.book1').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
          $('.book1').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
          
          let priceDot = msg.documents[i].sale_price;
          let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          $('.book1').eq(i).append('<span>10%</span>');
          $('.book1').eq(i).append('<span>'+dot+'원</span>');
          
          let str = msg.documents[i].contents;
          let str2 = str.substring(0,100);
          $('.book1').eq(i).append('<p>'+str2+'</p>');
        }
  
        //오늘의 책 오른쪽
        const todaySlide=$('.slidebook1');
        for(let i =0; i<todaySlide.length; i++){
          $('.slidebook1').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
          $('.slidebook1').eq(i).append('<p>'+msg.documents[i].title+'</p>');
        }
      });

      //eBook
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=contents",
        data: {query: "에세이", size:50},
        headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
      })
        .done(function( msg ) {
          console.log(msg);
          //오늘의 책 왼쪽
          const today =$('.Lbook2');
    
          for(let i =0; i<today.length; i++){
            $('.Lbook2').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
            $('.book2').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
            $('.book2').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
            
            let priceDot = msg.documents[i].sale_price;
            let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            $('.book2').eq(i).append('<span>10%</span>');
            $('.book2').eq(i).append('<span>'+dot+'원</span>');
            
            let str = msg.documents[i].contents;
            let str2 = str.substring(0,100);
            $('.book2').eq(i).append('<p>'+str2+'</p>');
          }
    
          //오늘의 책 오른쪽
          const todaySlide=$('.slidebook2');
          for(let i =0; i<todaySlide.length; i++){
            $('.slidebook2').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
            $('.slidebook2').eq(i).append('<p>'+msg.documents[i].title+'</p>');
          }
        });

        //sam
        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=publisher",
          data: {query: "민음사", size:50},
          headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
        })
          .done(function( msg ) {
            console.log(msg);
            //오늘의 책 왼쪽
            const today =$('.Lbook3');
      
            for(let i =0; i<today.length; i++){
              $('.Lbook3').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
              $('.book3').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
              $('.book3').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
              
              let priceDot = msg.documents[i].sale_price;
              let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              $('.book3').eq(i).append('<span>10%</span>');
              $('.book3').eq(i).append('<span>'+dot+'원</span>');
              
              let str = msg.documents[i].contents;
              let str2 = str.substring(0,100);
              $('.book3').eq(i).append('<p>'+str2+'</p>');
            }
      
            //오늘의 책 오른쪽
            const todaySlide=$('.slidebook3');
            for(let i =0; i<todaySlide.length; i++){
              $('.slidebook3').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
              $('.slidebook3').eq(i).append('<p>'+msg.documents[i].title+'</p>');
            }
          });

          //핫트랙스
          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=publisher",
            data: {query: "창비", size:50},
            headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
          })
            .done(function( msg ) {
              console.log(msg);
              //오늘의 책 왼쪽
              const today =$('.Lbook4');
        
              for(let i =0; i<today.length; i++){
                $('.Lbook4').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
                $('.book4').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
                $('.book4').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
                
                let priceDot = msg.documents[i].sale_price;
                let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                $('.book4').eq(i).append('<span>10%</span>');
                $('.book4').eq(i).append('<span>'+dot+'원</span>');
                
                let str = msg.documents[i].contents;
                let str2 = str.substring(0,100);
                $('.book4').eq(i).append('<p>'+str2+'</p>');
              }
        
              //오늘의 책 오른쪽
              const todaySlide=$('.slidebook4');
              for(let i =0; i<todaySlide.length; i++){
                $('.slidebook4').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
                $('.slidebook4').eq(i).append('<p>'+msg.documents[i].title+'</p>');
              }
            });

            //교보ONly
            $.ajax({
              method: "GET",
              url: "https://dapi.kakao.com/v3/search/book?target=contents",
              data: {query: "교보문고", size:50},
              headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
            })
              .done(function( msg ) {
                console.log(msg);
                //오늘의 책 왼쪽
                const today =$('.Lbook5');
          
                for(let i =0; i<today.length; i++){
                  $('.Lbook5').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
                  $('.book5').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
                  $('.book5').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
                  
                  let priceDot = msg.documents[i].sale_price;
                  let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  $('.book5').eq(i).append('<span>10%</span>');
                  $('.book5').eq(i).append('<span>'+dot+'원</span>');
                  
                  let str = msg.documents[i].contents;
                  let str2 = str.substring(0,100);
                  $('.book5').eq(i).append('<p>'+str2+'</p>');
                }
          
                //오늘의 책 오른쪽
                const todaySlide=$('.slidebook5');
                for(let i =0; i<todaySlide.length; i++){
                  $('.slidebook5').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
                  $('.slidebook5').eq(i).append('<p>'+msg.documents[i].title+'</p>');
                }
              });
           