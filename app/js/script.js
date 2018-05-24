$(document).ready(function(){
    addScrolled();
    console.log('123');
});

$(window).scroll(function(){
    addScrolled();
});

function addScrolled() {
    var navHight = $('#main-nav').outerHeight();
    var actualPos = $(window).scrollTop();
    if(actualPos > navHight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}