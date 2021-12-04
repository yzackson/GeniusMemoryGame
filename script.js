let score = 0;
let level = 1;
let userOrder = [];
let systemOrder = [];

//colors
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');

function startGame() {
    confirm('Bem vindo ao melhor jogo de memória!\n\nVamos começar?');
    genSystemOrder();
}

function genSystemOrder() {
    systemOrder[systemOrder.length] = Math.floor(Math.random() * 4);
    userOrder = [];
    console.log(systemOrder);
    console.log(systemOrder[systemOrder.length-1]);
    let element = colors(systemOrder[systemOrder.length-1]);
    blinkColor(element);
}

function blinkColor(color) {
    color.classList.add('selected');
    setTimeout(() => {
        color.classList.remove('selected');
    }, 500);
}

function blinkColorClick(color) {
    color.classList.add('selected');
    setTimeout(() => {
        color.classList.remove('selected');
    }, 50);
}

function click(element) {
    userOrder[userOrder.length] = element;
    let color = colors(element);
    //blinkColorClick(color);

    if (userOrder.length == systemOrder.length){
        checkOrder();
    }
}

function checkOrder(user, system) {
    for (let i in systemOrder) {
        if (userOrder[i] != systemOrder[i]) {
            gameOver();
            return 0;
        }
        score++;
    }
    nextLevel();
}

let colors = (element) => {
    switch (element) {
        case 0:
            return blue;
        case 1:
            return green;
        case 2:
            return red;
        case 3:
            return orange;
    }
}

let nextLevel = () => {
    //score++;
    level++;
    alert(`Parabéns! Você passou o nível ${level}`);
    genSystemOrder();
    document.querySelector('.pointsCount').innerHTML = `${score}`;
}

let gameOver = () => {
    alert(`Não foi desta vez... \n\nVocê chegou até o nível ${level} e sua pontuação foi de ${score}`);
    justReset();
    startGame();
}

let reset = () => {
    score = 0;
    level = 1;
    userOrder = [];
    systemOrder = [];

    startGame();
}

let justReset = () => {
    score = 0;
    level = 1;
    userOrder = [];
    systemOrder = [];
}

let incrementLevel = () => { level++ }
let incrementScore = () => { score++ }

blue.onclick = () => { click(0) }
green.onclick = () => { click(1) }
red.onclick = () => { click(2) }
orange.onclick = () => { click(3) }

startGame();