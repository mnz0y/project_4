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
      const today =$('.todayBook');

      for(let i =0; i<today.length; i++){
        $('.todayBook').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
        $('.textbox').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
        $('.textbox').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
        
        let priceDot = msg.documents[i].sale_price;
        let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        $('.textbox').eq(i).append('<span>10%</span>');
        $('.textbox').eq(i).append('<span>'+dot+'원</span>');
        
        let str = msg.documents[i].contents;
        let str2 = str.substring(0,100);
        $('.textbox').eq(i).append('<p>'+str2+'</p>');
      }

      //오늘의 책 오른쪽
      const todaySlide=$('.todaySlideBook');
      for(let i =0; i<todaySlide.length; i++){
        $('.todaySlideBook').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
        $('.todaySlideBook').eq(i).append('<p>'+msg.documents[i].title+'</p>');
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
        const todaySlide=$('.todaySlideBook');
        for(let i =0; i<todaySlide.length; i++){
          $('.todaySlideBook').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
          $('.todaySlideBook').eq(i).append('<p>'+msg.documents[i].title+'</p>');
        }
      });

      //eBook
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=contents",
        data: {query: "21세기 북스", size:50},
        headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
      })
        .done(function( msg ) {
          console.log(msg);
          //오늘의 책 왼쪽
          const today =$('.todayBook');
    
          for(let i =0; i<today.length; i++){
            $('.todayBook').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
            $('.textbox').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
            $('.textbox').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
            
            let priceDot = msg.documents[i].sale_price;
            let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            $('.textbox'+i).eq(i).append('<span>10%</span>');
            $('.textbox'+i).eq(i).append('<span>'+dot+'원</span>');
            
            let str = msg.documents[i].contents;
            let str2 = str.substring(0,100);
            $('.textbox').eq(i).append('<p>'+str2+'</p>');
          }
    
          //오늘의 책 오른쪽
          const todaySlide=$('.todaySlideBook');
          for(let i =0; i<todaySlide.length; i++){
            $('.todaySlideBook').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
            $('.todaySlideBook').eq(i).append('<p>'+msg.documents[i].title+'</p>');
          }
        });

        //sam
        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=contents",
          data: {query: "21세기 북스", size:50},
          headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
        })
          .done(function( msg ) {
            console.log(msg);
            //오늘의 책 왼쪽
            const today =$('.todayBook');
      
            for(let i =0; i<today.length; i++){
              $('.todayBook').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
              $('.textbox').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
              $('.textbox').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
              
              let priceDot = msg.documents[i].sale_price;
              let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              $('.textbox'+i).eq(i).append('<span>10%</span>');
              $('.textbox'+i).eq(i).append('<span>'+dot+'원</span>');
              
              let str = msg.documents[i].contents;
              let str2 = str.substring(0,100);
              $('.textbox').eq(i).append('<p>'+str2+'</p>');
            }
      
            //오늘의 책 오른쪽
            const todaySlide=$('.todaySlideBook');
            for(let i =0; i<todaySlide.length; i++){
              $('.todaySlideBook').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
              $('.todaySlideBook').eq(i).append('<p>'+msg.documents[i].title+'</p>');
            }
          });

          //핫트랙스

          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=contents",
            data: {query: "21세기 북스", size:50},
            headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
          })
            .done(function( msg ) {
              console.log(msg);
              //오늘의 책 왼쪽
              const today =$('.todayBook');
        
              for(let i =0; i<today.length; i++){
                $('.todayBook').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
                $('.textbox').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
                $('.textbox').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
                
                let priceDot = msg.documents[i].sale_price;
                let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                $('.textbox'+i).eq(i).append('<span>10%</span>');
                $('.textbox'+i).eq(i).append('<span>'+dot+'원</span>');
                
                let str = msg.documents[i].contents;
                let str2 = str.substring(0,100);
                $('.textbox').eq(i).append('<p>'+str2+'</p>');
              }
        
              //오늘의 책 오른쪽
              const todaySlide=$('.todaySlideBook');
              for(let i =0; i<todaySlide.length; i++){
                $('.todaySlideBook').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
                $('.todaySlideBook').eq(i).append('<p>'+msg.documents[i].title+'</p>');
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
                const today =$('.todayBook');
          
                for(let i =0; i<today.length; i++){
                  $('.todayBook').eq(i).prepend('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
                  $('.textbox').eq(i).append('<h2>'+msg.documents[i].title+'</h2>');
                  $('.textbox').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
                  
                  let priceDot = msg.documents[i].sale_price;
                  let dot = priceDot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  $('.textbox'+i).eq(i).append('<span>10%</span>');
                  $('.textbox'+i).eq(i).append('<span>'+dot+'원</span>');
                  
                  let str = msg.documents[i].contents;
                  let str2 = str.substring(0,100);
                  $('.textbox').eq(i).append('<p>'+str2+'</p>');
                }
          
                //오늘의 책 오른쪽
                const todaySlide=$('.todaySlideBook');
                for(let i =0; i<todaySlide.length; i++){
                  $('.todaySlideBook').eq(i).append('<a href="#"><img src="'+msg.documents[i].thumbnail+'"/></a>');
                  $('.todaySlideBook').eq(i).append('<p>'+msg.documents[i].title+'</p>');
                }
              });