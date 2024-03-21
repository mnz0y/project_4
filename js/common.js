
//픽스버튼
$(function(){
    $(window).scroll(function(){
        let ws = $(this).scrollTop();
        if(ws>100){
            $('.fix3').css('display','block');
        }else{
            $('.fix3').css('display','none');
        }
    });
});

