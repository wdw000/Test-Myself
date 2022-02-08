const store1 = document.querySelector(".store1");
const store2 = document.querySelector(".store2");
const store3 = document.querySelector(".store3");

let store = 1;

function changeStore() {

    if(store > 3) {
        store = 1;
    }

    switch (store) {
        case 1:
            store1.hidden = false;
            store2.hidden = true;
            store3.hidden = true;
            break;

        case 2:
            store1.hidden = true;
            store2.hidden = false;
            store3.hidden = true;
            break;

        case 3:
            store1.hidden = true;
            store2.hidden = true;
            store3.hidden = false;
            break;
    }

    store++;
}

setInterval(changeStore, 1500);