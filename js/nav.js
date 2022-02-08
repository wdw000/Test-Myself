$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $(".wrap_header").css({
                "background-color": "#fff",
                "border": "none"
            });
        } else {
            $(".wrap_header").css({
                "background-color": "rgba(0,0,0,0)",
                "border-bottom": "solid gray 1px"
            });
        }
    });
});