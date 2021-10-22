$(document).ready(function()

{
    
    // make the first item appear by defult 
    $(".accordian:first").css("display","block");

    // make the other items appear on click
    $("h6").click (function(){
        $(".header span").removeClass("fa-minus").addClass("fa-plus")
        $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
        $(this).next().slideToggle(500)

        // make - change to +   
    })


    // scroll top btn
    // make the btn fade in when it reach 1000 and disappear before that
    // consol.log(1000)
    $(window).scroll(function(){
        if($(this).scrollTop()>1000){
            $(".top").fadeIn(150);
            
        }
        else{
            $(".top").fadeOut(150);
        }
    })
    // make the scrolling up slower
    // $(".top").click(function(){

    //     $(".body").animate({scrollTop:0},150)
        
    // })

})