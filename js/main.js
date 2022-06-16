let navbar = $('.navbar');

$(window).scroll(function(){
    let otop = $('.section2').offset().Top-window.innerHeight;
    if($(window).scrollTop () > otop){
        navbar.addClass(".sticky");
            }else{
                navbar.removeClass(".sticky");
            }
});