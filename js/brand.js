const newBrand = document.querySelector(".brand_new");
const bestBrand = document.querySelector(".brand_best");

let imgIdx = [5,6,1,2,3,4];
let chageBox;

newBrand.style.textDecoration = "underline red";
newBrand.style.color = "red";

function displayImg() {
    for(let i = 0; i < 5; i++) {
        chageContent(i);
    }
    suffleIndex();
}

function suffleIndex() {
    imgIdx.push(imgIdx.shift());
}

function chageContent(item) {
    const className = `.item${item}`;
    const itemBox = document.querySelector(className).children;
    let urlImg, paraImg;

    if(newBrand.style.color === "red") {
        urlImg = `./media/brand/new_item${imgIdx[item]}.jpg`;
        paraImg = `new item${imgIdx[item]}`;
    } else if(bestBrand.style.color === "red") {
        urlImg = `./media/brand/best_item${imgIdx[item]}.jpg`;
        paraImg = `best item${imgIdx[item]}`;
    }

    itemBox[0].src = urlImg;
    itemBox[1].textContent = paraImg;
}

bestBrand.addEventListener('click', () => {
    bestBrand.style.textDecoration = "underline red";
    bestBrand.style.color = "red";
    newBrand.style.textDecoration = "none";
    newBrand.style.color = "black";
});

newBrand.addEventListener('click', () => {
    bestBrand.style.textDecoration = "none";
    bestBrand.style.color = "black";
    newBrand.style.textDecoration = "underline red";
    newBrand.style.color = "red";
})

chageBox = setInterval(displayImg, 2000);