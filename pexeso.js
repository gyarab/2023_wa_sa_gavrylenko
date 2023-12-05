
let el = document.getElementById('stav-hry');
el.innerHTML = 'Nova hra';

let counter = 5;


function myfnc() {
    console.log("myFnc executed");
    el.innerHTML = counter;
    counter--;
    if (counter > 0) {
        setTimeout(myfnc, 1000);
    }
}

setTimeout(myfnc, 3000);

let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let card3 = document.getElementById('card-3');
let card4 = document.getElementById('card-4');
let card5 = document.getElementById('card-5');
let card6 = document.getElementById('card-6');
let card7 = document.getElementById('card-7');
let card8 = document.getElementById('card-8');

function clickCard1() {
    card1.innerHTML = '<img src="img/banan.png" alt="banan">';
}

function clickCard2() {
    card2.innerHTML = '<img src="img/banan.png" alt="banan">';
}

