const mediaContents = document.querySelector(".slide_media").children;

let idxs = [3,1,2];
let mediaIdx = 0;

function changeMedia() {
    for(let i = 0; i < mediaContents.length; i++) {
        const url = `./media/store/item${idxs[i]}.jpg`;
        mediaContents[i].children[0].src = url;
        mediaContents[i].children[1].textContent = `item${idxs[i]}`;
    }

    idxs.push(idxs.shift());
}

setInterval(changeMedia, 1500);