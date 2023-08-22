const card1 = document.getElementById('card1');
// const card2 = document.getElementById('card2');
const logo = document.getElementById('logo');
const nav = document.getElementById('nav');

function setCardWidth () {
    card1.setAttribute("style", "width:"+logo.offsetWidth+"px");
    // card2.setAttribute("style", "width:"+nav.offsetWidth+"px");
    console.log(card1.offsetWidth);
}

setCardWidth();