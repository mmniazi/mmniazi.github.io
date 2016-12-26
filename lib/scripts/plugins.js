$(document).ready(function() {
    // Avoid `console` errors in browsers that lack a console.
    (function() {
        var method;
        var noop = function () {};
        var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());

    // Place any jQuery/helper plugins in here.

    function slideMenu(){
        var toggleIcon = $("#menu-icon");
        var mainContent = $("#content");
        var clickOverlay = $("#overlay");
        var slideItems = $("#content, #overlay");
        var closeItems = $("#overlay, #close")
        var li = $("ul.off-nav li");

        toggleIcon.on("click", function(){
            slideItems.removeClass("slide-closed");
            slideItems.addClass("slide-open menu-open");
            clickOverlay.css("z-index","1");
            li.addClass("li-fade-in");

        });

        closeItems.on("click", function(){
            slideItems.removeClass("slide-open menu-open");
            slideItems.addClass("slide-closed");
            clickOverlay.css("z-index", "-1");
            li.removeClass("li-fade-in")
            document.getElementById('content').addEventListener('touchstart', function(event){});
        });
    }

    function transitionDelay(){
        var li = $("ul.off-nav li");

        li.each(function(index){
            $(this).css("transition-delay", index *.02+"s");
        });
        
    }

    transitionDelay();
    slideMenu();
});