$(document).ready(function() {
    $("#storm").css("opacity", 0.5);
    $("#storm").hover(function() {
        $(this).animate({opacity: 1.0}, 500);
    }, function() {
        $(this).animate({opacity: 0.5}, 500);
    });
});