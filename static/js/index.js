console.log(tabOffset)
var tabOffset;
var player;
$(document).ready(function(){
    $("#tabs").tabs({
        create: function(e) {
            $("#tabs").removeClass("hidden");
            if(!tabOffset) {
                tabOffset = $("#tabs .ui-widget-header").offset();
                console.log(tabOffset)
            }
        },
        activate:function(event,ui) {

            window.scrollTo(0,tabOffset["top"]);
            // var tabId = ui.newTab.find("a").attr("href");
            // // $(""+tabId+" .ui-tabs-active").removeClass(".ui-state-active");
            // // setTimeout(function() {
            // //      $(""+tabId+" .ui-tabs-active").addClass(".ui-state-active");
            // // }, 2000);


        }
    });

    $('.slider_fourth').slick({
        dots:true,
        arrows: false
    });

    $('.slider_fourth_mobile').slick({
        dots:true,
        arrows: false
    });

    $('.center_slider').slick({
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1,
        dots:true,
        arrows: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                  centerMode: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth: false,
                  variableHeight: true
              }
            }
        ]
    });

    $(".youtube_ico").click(function() {
        jQuery("html").addClass("overflow_hidden");
        jQuery(".modal").removeClass("hidden");
        if(!player) {
            player = new YT.Player('player', {
              videoId: 'M7lc1UVf-VE',
              playerVars: {rel: 0},
              events: {
                'onReady': function() {
                    player.playVideo();
                }
              }
            });
        }
        else {
            player.playVideo();
        }
    })

    // $(window).on(' load', function() {
    //      $('.hero-content').each(function() {
    //       if(!jQuery(this).hasClass('show')) {
    //      	if ($(this).isInViewport()) {
    //             $(this).addClass('show');
    //         }
    //      	}
    //      });
    // });

})

$(".block.first").on("click",".read_more",function(e) {
    e.preventDefault();
    $(this).closest('.content_mobile').find('.primary_text').toggleClass('more');
    if($(this).closest('.content_mobile').find('.primary_text').hasClass("more")) {
        $(this).text("See Less");
    }
    else {
        $(this).text("See More");
    }
})

$(window).scroll(function (event) {
    console.log("s")
	var scroll = $(window).scrollTop();
    if(tabOffset["top"] == 0) {
        tabOffset = $("#tabs .ui-widget-header").offset();
    }
	if(scroll >= tabOffset["top"]) {

        $("#tabs .nav_container").addClass("fixed");
        $(".block.first").css({
            "margin-top": 60
        })
	}
    else {

        $("#tabs .nav_container").removeClass("fixed");
        $(".block.first").css({
            "margin-top": ""
        })
    }

    $('.hero-content').each(function() {
     if(!jQuery(this).hasClass('show')) {
       if ($(this).isInViewport()) {
           $(this).addClass('show');
       }
       }
    });

});


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


$.fn.isInViewport = function() {
 var elementTop = $(this).offset().top;
 var elementBottom = elementTop + $(this).outerHeight();

 var viewportTop = $(window).scrollTop();
 var viewportBottom = viewportTop + $(window).height();

 return elementBottom > viewportTop && elementTop < viewportBottom;
};
