
let caixa = document.getElementById('caixa');

function getColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)+')';
}

function changeColor() {
    caixa.style.backgroundColor = getColor();
}

(function () {
    setInterval(changeColor, 10);
})();


let box = [];
box = document.getElementsByClassName('box-one');

caixa.style.display = 'flex';
caixa.style.flexWrap = 'wrap';

let boxOne = document.createElement('div');
boxOne.style.width = '5%';
boxOne.style.height = '10px';
boxOne.style.backgroundColor = 'white';

function changeColorBox() {
    let a = caixa;
    for (let i = 0; i < 10; i++) {
        boxOne.style.backgroundColor = getColor();
        caixa.appendChild(boxOne);
        a.appendChild(boxOne);
        a=boxOne;
    }
}

(function () {
    setInterval(changeColorBox, 50);
})();