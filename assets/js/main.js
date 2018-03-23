function windowResize() {
    screW = window.innerWidth;
    screH = window.innerHeight;
    screHH = (screH / 2);
    screHW = (screW / 2);
}
$(document).ready(function() {
    // pega o tamanho da janela ao carregar o documento
    windowResize();
    $(window).resize(function() {
        // pega tamanhos sempre que a tela for redimensionada
        windowResize();
    });



    // menu toggle

    $("#menu-toggle").click(function(e){
        e.preventDefault();
        $("#header").toggleClass('open');
    });

    
    // ajusta imagens as figures
    $("figure.fit").each(function(){
        var $img = $(this).children("img");
        if ($img) {
            $(this).css('background-image', 'url(\'' + $img.attr('src') + '\')');
            $img.hide();
        }
    });

     jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 50) {
            jQuery("header").addClass('top-fixed');
        } else {
         jQuery("header").removeClass('top-fixed');
     }

    });

    $('.jarallax').jarallax({
        speed: 0.2
    });

    $('a[href^="#"]').bind("click.smoothscroll", function(n) {
        n.preventDefault();
        var i = $(window).scrollTop(),
        r = this.hash,
        t = $(r);
        i < 100 ? $("html, body").animate({
            scrollTop: t.offset().top -120 
        }, 1e3) : $("html, body").animate({
            scrollTop: t.offset().top -120  
        }, 1e3)
    });
});