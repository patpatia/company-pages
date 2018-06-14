var closeModal = function() {
	jQuery("html").removeClass("overflow_hidden");
	jQuery(".modal").addClass("hidden");
};

jQuery(".modal_close").on("click", function() {
	closeModal();
    player.stopVideo();
});

// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();
  
//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();
  
//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

jQuery(document).ready(function() {
    if(jQuery(window).width() >= 768) {
        $(window).on('load', function() {
            jQuery('.icon-down_arrow').css("display","block");
            if(!jQuery('.icon-down_arrow').hasClass('animated bounce')) {
                $('.icon-down_arrow').addClass('animated bounce');                       	
            }
        });
    }
});

jQuery('.icon-down_arrow').hover(function(){
    if(!jQuery('.icon-down_arrow').hasClass('animated bounce')) {
        $('.icon-down_arrow').addClass('animated bounce');                       	
    }
    //jQuery('.icon-down_arrow').addClass('animated bounce');
}, function() {
    jQuery('.icon-down_arrow').removeClass('bounce');
    jQuery('.icon-down_arrow').addClass('bounce');
    setTimeout(function() {
        jQuery('.icon-down_arrow').removeClass('animated bounce');  
 }, 500);
});