/**
 * @author poisonshade
 * */

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