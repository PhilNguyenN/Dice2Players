
var random1 = Math.floor(Math.random()*5+1);
var random2 = Math.floor(Math.random()*5+1);

if (random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if (random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}


switch (random1) {
    case 1: document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");break;
    case 2: document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");break;
    case 3: document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");break;
    case 4: document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");break;
    case 5: document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");break;
    case 6: document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");break;
}


switch (random2) {
    case 1: document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");break;
    case 2: document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");break;
    case 3: document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");break;
    case 4: document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");break;
    case 5: document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");break;
    case 6: document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");break;
}