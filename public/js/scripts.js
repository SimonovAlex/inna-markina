/*!
    * Start Bootstrap - Agency v6.0.1 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */
   (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    function toggleDiplomBlock(){
        const block = $(".dip-block");
        if(block.css('display') == "none"){
            block.css('display', 'flex');
            $('#diplom-line').removeClass('line-down').addClass('line-up');
            $('#diplom-line').css('animation', 'arrow-up 1s infinite alternate');
        }else{
            block.css('display', 'none');
            $('#diplom-line').removeClass('line-up').addClass('line-down');
            $('#diplom-line').css('animation', 'arrow-down 1s infinite alternate');
        }
    }

    function toggleArticleBlock(){
        const block = $(".articles");
        if(block.css('display') == "none"){
            block.css('display', 'flex');
            $('#article-line').removeClass('line-down').addClass('line-up');
            $('#article-line').css('animation', 'arrow-up 1s infinite alternate');
        }else{
            block.css('display', 'none');
            $('#article-line').removeClass('line-up').addClass('line-down');
            $('#article-line').css('animation', 'arrow-down 1s infinite alternate');
        }
    }

    $("#dip-header").click(function(){
        toggleDiplomBlock();
    });
    
    $("#diplom-line").click(function(){
        toggleDiplomBlock();
    });

    $("#blog-header").click(function(){
        toggleArticleBlock();
    });

    $("#article-line").click(function(){
        toggleArticleBlock();
    });
})(jQuery); // End of use strict
