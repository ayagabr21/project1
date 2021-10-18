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


})