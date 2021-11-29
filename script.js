let colorOrder = [];
let clickedOrder = [];
let score = 0;
let level = 1;

// 0 - blue
// 1 - green
// 2 - red
// 3 - yellow

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

let generateOrder = () => {
    colorOrder.push(Math.floor(Math.random() * 4));
    //debugger;
    console.log(colorOrder);
    clickedOrder = [];
    
    for(let i = 0; i <= colorOrder.length; i++) {
        //debugger;
        selectColor(colorOrder[i]);
    }
};

let selectColor = (element) => {
    setTimeout(() => {
        pickcolor(element).classList.add('selected');
    });
    setTimeout(() => {
        pickcolor(element).classList.remove('selected');
    }, 1000);
}

let click = (element) => {
    clickedOrder[clickedOrder.length] = element;
    
    pickcolor(element).classList.add('selected');
    setTimeout(() => {
        pickcolor(element).classList.remove('selected');
    }, 1000);

    checkOrder();
}

let checkOrder = () => {
    for (i in colorOrder) {
        if (clickedOrder[i] != colorOrder[i]) {
            return alert('Cê perdeu!');
        }
    }
}

let pickcolor = (element) => {
    switch (element) {
        case 0:
            return blue;
        case 1:
            return green;
        case 2:
            return red;
        case 3:
            return yellow;
    }
}

let resetGame = () => {
    colorOrder = [];
    score = 0;
    level = 1;
}

let starGame = () => {
    generateOrder();
}

let nextLevel = () => {
    score++;
    generateOrder();
}