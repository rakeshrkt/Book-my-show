function game(){
    var throw1 =Math.floor(Math.random()*6+1);
    var throw2 = Math.floor(Math.random()*6+1);


    if (throw1==1) document.getElementById("p1dice").src = "dice_1.png";
    if (throw1==2) document.getElementById("p1dice").src = "dice_2.png";
    if (throw1==3) document.getElementById("p1dice").src = "dice_3.png";
    if (throw1==4) document.getElementById("p1dice").src = "dice_4.png";
    if (throw1==5) document.getElementById("p1dice").src = "dice_5.jpg";
    if (throw1==6) document.getElementById("p1dice").src = "dice_6.png";


    if (throw2==1) document.getElementById("p2dice").src = "dice_1.png";
    if (throw2==2) document.getElementById("p2dice").src = "dice_2.png";
    if (throw2==3) document.getElementById("p2dice").src = "dice_3.png";
    if (throw2==4) document.getElementById("p2dice").src = "dice_4.png";
    if (throw2==5) document.getElementById("p2dice").src = "dice_5.jpg";
    if (throw2==6) document.getElementById("p2dice").src = "dice_6.png";


    if (throw1>throw2) document.querySelector("h1").innerText = "Player 1 Won!";
    else if (throw2>throw1) document.querySelector("h1").innerText = "Player 2 Won!";
    else document.querySelector("h1").innerText = "Match draw";
}

function reset(){
    var elem = document.getElementsByClassName("start");
    if (elem.value != "Click Here") elem.value = "Click Here";
}