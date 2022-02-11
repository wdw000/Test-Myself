const footerNav = document.querySelector('.wrap_footer > nav');
const extendImg = document.querySelector('.extend_fheader > img');
const extendFooter = document.querySelector('.footer_extend_box');

let flagImg = false;

function rotation(item, degree) {
    item.animate([
        { transform: `rotate(${degree}deg)` }
    ], {
        duration: 300,
        fill: 'forwards'
    });
}

function extendBox(item, height) {
    item.animate(
       { height: `${height}px`}
    , {
        duration: 300,
        fill: 'forwards'
    });
}

extendImg.addEventListener('click', () => {
    if (!flagImg) {
        rotation(extendImg, 360);
        extendBox(extendFooter, 317);
        extendBox(footerNav, 317);
        footerNav.style.display = 'block';
        flagImg = true;
    } else {
        rotation(extendImg, 180);
        extendBox(extendFooter, 0);
        extendBox(footerNav, 0);
        flagImg = false;
    }
});