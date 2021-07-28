//사이드메뉴

$(document).ready(function(){
 
    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

});


//로그인팝업

$(document).ready(function(){

    $('#login').click(function(){
               
    var popupX = (document.body.offsetWidth / 2) - (350 / 2);
    //만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음

    var popupY= (window.screen.height / 2) - (350 / 2);
    //만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음

    window.open('login.html', '로그인', 'status=no, height=350, width=350,scrollbars=no left='+ popupX + ', top='+ popupY);
});
});


//사이드고정배너

$(document).ready(function()
        {
            $('#scroll3').click(function()
            {
                if($('#hidden-scroll').css('display') =='none')
                {
                    $('#hidden-scroll').css("display","block");
                }
                else
                {
                    $('#hidden-scroll').css("display","none");
                }
            });
        });
