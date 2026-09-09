(function($) {
    var $rocket = $("#rocket");
    var SHOW_OFFSET = 200;

    function toggleToTop() {
        $(window).scrollTop() > SHOW_OFFSET ? $rocket.addClass("show") : $rocket.removeClass("show");
    }

    $(window).on("scroll", toggleToTop);
    toggleToTop(); // set initial state

    $rocket.on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 400);
    });
})(jQuery);
