$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=contents",
    data: {query: "교보문고", size:50},
    headers: {Authorization: "KakaoAK 8244a385855c795ceaadd4a47e53aa38"}
  })
    .done(function( msg ) {
      console.log(msg);
    });