// Main content slide
const scrollBox = document.querySelector(".scroll_box");
const scrollParas = scrollBox.children;
const title = document.querySelector(".scroll_title");
const subTitle = document.querySelector(".scroll_subtitle");
const bgImg = document.querySelector(".wrap_bg");
const scrollCount = document.querySelector(".scroll_count");
const pauseBtn = document.querySelector(".scroll_pause_btn");


const titleParas = [];
const subTitleParas = [
    'UP TO 70% OFF',
    '온라인 오프라인 통합',
    '최대 95만원 쇼핑 혜택 받아가세요',
    '현대백화점면세점',
    '매번 달라지는 특별한 혜택',
    '대한항공 SKYPASS 회원 대상',
    '당신의 소중한 순간을 함께',
    '최대 30% 선불카드 혜택',
    '놓칠수 없는 쇼핑 아이템',
    '쇼핑이 더 즐거워지는'
];

const subTitleHeight = [
    '0px',
    '-58px',
    '-116px',
    '-174px',
    '-232px',
    '-232px',
    '-232px',
    '-232px',
    '-232px',
    '-232px'
];

let count = 0;

for (let i = 0; i < scrollParas.length; i++) {
    titleParas.push(scrollParas[i].innerHTML);
}

function changeContent() {
    if(count > titleParas.length - 1) {
        count = 0;
    }

    const url = `./media/slide_banner/item${count + 1}.jpg`;

    for (const scrollPara of scrollParas) {
        scrollPara.style.color = '#444';
    }

    scrollBox.style.transform = `translateY(${subTitleHeight[count]})`;

    scrollParas[count].style.color = '#000';
    bgImg.style.backgroundImage = `url('${url}')`;
    scrollCount.textContent = `${count + 1} /10`;
    title.textContent = titleParas[count];
    subTitle.textContent = subTitleParas[count++];
}

changeContent();
let changeInterval = setInterval(changeContent, 3000);

pauseBtn.addEventListener('click', () => {
    if(pauseBtn.textContent === 'pause') {
        clearInterval(changeInterval);
        pauseBtn.textContent = 'start';
    } else if (pauseBtn.textContent === 'start') {
        pauseBtn.textContent = 'pause';
        changeInterval = setInterval(changeContent, 3000);
    }
});