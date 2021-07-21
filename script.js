/**
 * @author poisonshade
 * */

let box = document.getElementById('box');

function getColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}

function changeColor() {
    box.style.backgroundColor = getColor();
}

(function () {
    setInterval(changeColor, 10);
})();

function getBox() {
    let div = document.createElement('div');
    div.style.width = '2%';
    div.style.height = '2%';
    div.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 1)';
    div.style.backgroundColor = getColor();
    return div;
}

function randomizeBoxes() {
    for (let i = 0; i < 500; i++) {
        //currentPosition receives current X and Y
        let currentPosition = (Math.random() * 1080) + 'x' + (Math.random() * 1080);
        getBox().style.position = currentPosition;
    }
}