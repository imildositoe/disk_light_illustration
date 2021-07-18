/**
 * @author poisonshade
 * */

let box = document.getElementById('box');

function getColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)+')';
}

function changeColor() {
    box.style.backgroundColor = getColor();
}

(function () {
    setInterval(changeColor, 10);
})();