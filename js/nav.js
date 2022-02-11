$(document).ready(function () {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        if (scroll > 1) {
            $(".wrap_header").attr("class", "wrap_header_show");
            $(".wrap_header_hide").attr("class", "wrap_header_show");
            
            $(".totop").css({
                "display":"block"
            });

        } else {
            $(".wrap_header_show").attr("class", "wrap_header_hide");
            $(".totop").css({
                "display":"none"
            });
        }
    });
});

const sNavBox = document.querySelector('.wrap_sNav');
const navTitle = document.querySelectorAll('.main_nav > div > li');
const sNav = document.querySelectorAll('.s_nav');
const headerBox = document.querySelector('.wrap_header');

navTitle.forEach(element => {
    element.addEventListener('pointerover', () => {
        sNavBox.className = 'wrap_sNav_show';
        sNav.forEach(element => {
            element.style.display = 'block';
        });
    });
});

sNavBox.addEventListener('mouseleave', () => {

    sNavBox.className = 'wrap_sNav_hide';

    sNav.forEach(element => {
        element.style.display = 'none';
    });
});